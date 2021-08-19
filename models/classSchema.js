const mongoose  = require('mongoose')
const reqString = {type:String, required:true}

const classSchema = new mongoose.Schema({
    name: reqString,
    description: reqString,
    classId: reqString,
    teacher: reqString,
    students: {
        type: Array,
        required: true
    }
})

module.exports = mongoose.model('Class', classSchema)