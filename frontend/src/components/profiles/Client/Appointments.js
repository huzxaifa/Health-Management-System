import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import DoctorList from './DoctorList';
import ClientBookAppointment from './ClientBookAppointment';

const Appointments = ({ userId }) => {
  const navigate = useNavigate();
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [doctorAvailableDates, setDoctorAvailableDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/doctors_list');
        setDoctors(response.data);
      } catch (error) {
        console.error('Error fetching doctors:', error);
      }
    };
    fetchDoctors();
  }, []);

  const fetchAvailableDates = async (doctorId) => {
    try {
      console.log('Fetching available dates for Doctor:', doctorId);
      const response = await axios.get(`http://localhost:3000/doctor/${doctorId}/available_dates`);
      console.log('Available dates:', response.data);
      setDoctorAvailableDates(response.data);
    } catch (error) {
      console.error('Error fetching available dates:', error);
    }
  };
  
  useEffect(() => {
    console.log('Doctor available dates:', doctorAvailableDates);
    console.log('Client ID:', userId);
  }, [doctorAvailableDates]);
  

  const handleBookAppointment = (doctor) => {
    console.log('Book appointment for doctor:', doctor);
    console.log('Doctor ID:', doctor.user._id);
    setSelectedDoctor(doctor);
    if (doctor && doctor.user._id) {
      fetchAvailableDates(doctor.user._id);
      console.log('Available dates in book:', doctorAvailableDates);
    }
  };
  

  const handleCancelAppointment = () => {
    setSelectedDoctor(null);
    setSelectedDate(null);
  };
  // Function to check availability of time slots for a specific date and doctor
  const checkAvailability = async (doctorId, date) => {
    try {
      const response = await axios.get('http://localhost:3000/api/check_availability', {
        params: { doctorId, date }
      });
      return response.data.availableSlots;
    } catch (error) {
      console.error('Error checking availability:', error);
      return [];
    }
  };
  const handleBookAppointmentForDoctor = async (clientInfo) => {
    try {
      console.log(`Book appointment for Doctor: ${selectedDoctor.name} Id: ${selectedDoctor.user._id}, Date: ${selectedDate}, Client: ${clientInfo.name}`);
      
      // Check availability of time slots
      const availableSlots = await checkAvailability(selectedDoctor.user._id, selectedDate);
      
      // Find an available time slot to book the appointment
      if (availableSlots.length > 0) {
        const timeSlotId = availableSlots[0]._id; // Assuming you want to book the first available slot
  
        // Make API call to book appointment
        console.log('request parameters to book appointment:', selectedDoctor.user._id, clientInfo.client_id, selectedDate, timeSlotId)
        const response = await axios.post('http://localhost:3000/api/book_appointment', {
          doctorId: selectedDoctor.user._id,
          patientId: clientInfo.client_id, // Assuming clientInfo contains patient ID
          date: selectedDate,
          timeSlotId
        });
  
        console.log('Appointment booked successfully:', response.data);
  
        // Clear the selected doctor
        setSelectedDoctor(null);
      } else {
        console.log('No available time slots for booking.');
      }
    } catch (error) {
      console.error('Error booking appointment:', error);
      // Handle error
    }
  };

  return (
    <section className="appointments">
      <h2>Appointments</h2>
      {selectedDoctor && (
        <ClientBookAppointment
          doctor={selectedDoctor}
          availableDates={doctorAvailableDates}
          userId={userId}
          onBookAppointment={handleBookAppointmentForDoctor}
          onCancel={handleCancelAppointment}
          onDateSelect={setSelectedDate} // Pass a function to set selectedDate
        />
      )}
      <DoctorList doctors={doctors} handleBookAppointment={handleBookAppointment} />
    </section>
  );
};

export default Appointments;
