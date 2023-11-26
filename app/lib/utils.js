const mongoose = require('mongoose');

// Replace 'your_database_url' with the actual connection string for your MongoDB database.
const dbUrl = process.env.MONGO;

const connectToDatabase = async () => {
    try {
        // Connect to the MongoDB database
        await mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });

        // Get the default connection
        const db = mongoose.connection;

        // Event listeners for connection events
        db.on('connected', () => {
            console.log('Mongoose connected to ' + dbUrl);
        });

        db.on('error', (err) => {
            console.log('Mongoose connection error: ' + err);
        });

        db.on('disconnected', () => {
            console.log('Mongoose disconnected');
        });

        // Close the Mongoose connection when the Node process is terminated
        process.on('SIGINT', () => {
            db.close(() => {
                console.log('Mongoose disconnected through app termination');
                process.exit(0);
            });
        });
    } catch (error) {
        console.error('Error connecting to the database:', error);
    }
};

// Call the asynchronous function to connect to the database
connectToDatabase();
