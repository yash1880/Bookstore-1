const mongoose = require('mongoose');

module.exports = async () => {
    try {
        const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/bookstore';
        
        await mongoose.connect(mongoURI, {
            serverSelectionTimeoutMS: 10000
        });
        
        console.log('✅ MongoDB Connected Successfully');
    } catch (err) {
        console.error('❌ MongoDB Connection Failed:', err.message);
        console.error('Ensure MongoDB is running and the URI is correct.');
        process.exit(1);
    }
};

// Handle disconnection
mongoose.connection.on('disconnected', () => {
    console.warn('⚠️ MongoDB Disconnected');
});

mongoose.connection.on('error', (err) => {
    console.error('❌ MongoDB Error:', err.message);
});