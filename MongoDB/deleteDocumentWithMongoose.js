const mongoose = require('mongoose');

//connect with DB
mongoose.connect('mongodb://localhost:27017/clg')
    .then(() => {
        console.log('Connection successfull with DB');
    })
    .catch((err) => {
        console.log(err);
    });

// create Schema with required/mandatory
const studentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    mob: {
        type: Number,
        required: true
    },
    roll: {
        type: Number,
        required: true
    },
    fees: {
        type: Boolean,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

//create model
const StudentSchema = mongoose.model('student', studentSchema);

// Delete document with mongoose
// const deleteDocuments =async (id)=>{
//     try {
//         const updateData = await StudentSchema.deleteOne({_id:id})
//         console.log(updateData);
//     } catch (error) {
//         console.log(error.message);
//     }
// }
// deleteDocuments('633c15b1ccc94f220dbe4fc5')

//Delete many document with mongoose
// const deleteDocuments =async (roll)=>{
//     try {
//         const updateData = await StudentSchema.deleteMany({roll})
//         console.log(updateData);
//     } catch (error) {
//         console.log(error.message);
//     }
// }
// deleteDocuments(8)


//Delete document by id with mongoose
const deleteDocuments =async (id)=>{
    try {
        const updateData = await StudentSchema.findByIdAndDelete({_id:id})
        console.log(updateData);
    } catch (error) {
        console.log(error.message);
    }
}
deleteDocuments('633d93de34e3e65b1852a1f4')