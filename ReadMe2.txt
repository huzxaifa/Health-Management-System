Open 2 terminals

	1. cd client
		a.npm init -y
		b.npm install

		c.npm install react-router-dom axios @mui/material @emotion/react @emotion/styled @mui/icons-material @mui/styles @mui/system recharts framer-motion moment react-big-calendar bootstrap

		d.npm start

	2. cd server

		npm install express
		npm install mongoose
		npm install dotenv
		npm install bcrypt
		npm install cors
		npm install openai

		go to server folder-> db.js and modify this

		const conn = await mongoose.connect(
            	'mongodb+srv://ali:ali110@cluster0.ravart8.mongodb.net/testdb?retryWrites=true&w=majority&appName=Cluster0');
        	console.log(`MongoDB Connected: ${conn.connection.host}`);

		to

		Open MongoDB Compass and copy the connection string and paste 'mongodb://localhost:27017/'

		const conn = await mongoose.connect(
            	'mongodb://localhost:27017/');
        	console.log(`MongoDB Connected: ${conn.connection.host}`);


