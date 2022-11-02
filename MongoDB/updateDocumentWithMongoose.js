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

//Update documents with mongoose
const updateDocuments = async(id)=>{
    try {
        // const updateData = await StudentSchema.updateOne({_id:id},{$set:{name:'abcd', mob:1231231230}})
        const updateData = await StudentSchema.findByIdAndUpdate({_id:id},{$set:{name:'ABCD', mob:1011111}},{new:true})
        console.log(updateData);
    } catch (error) {
        console.log(error);
    }
}
updateDocuments('633c13da467bea9941ac7c4e')