const mongoose = require('mongoose');

const userTaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    description: {
        type: String,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    important: {
        type: Boolean,
        default: false
    }


}, { timestamps: true });


userTaskSchema.pre('save', function (next) {
    if (this.password !== this.confirmPassword) {
        return next(new Error('Passwords do not match'));
    }
    next();
});


const Task = mongoose.model('task', userTaskSchema);

module.exports = Task;