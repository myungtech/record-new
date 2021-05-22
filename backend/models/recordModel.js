const mongoose = require('mongoose');

const schema = new mongoose.Schema(
    {
        title: String,
        message: String,
        creator: String,
        tags: [String],
        selectedFile: String,
        createdAt: {
            type: Date,
            default: new Date()
        },
        star: {
            type: Boolean,
            default: false
        }
    }
)

const RecordModel = mongoose.model('RecordModel', schema);

module.exports = RecordModel;