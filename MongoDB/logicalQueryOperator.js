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

//Read data with mongoose
const readDocuments = async () => {
    try {
        // const readData = await StudentSchema.find() //all data
        // const readData = await StudentSchema.find({fees:false}) //filter data
        // const readData = await StudentSchema.find({fees:false}).select({name:1, _id:0}).limit(1) // more filter data
        const readData = await StudentSchema
            // Logiacl query operator
            // .find({$and:[{fees: false},{name:"pratap"}]})
            // .find({$or:[{fees: false},{name:"pd"}]})
            // .find({$nor:[{fees: false},{name:"pratap"}]})
            .find({ roll: { $not: { $gt: 7 } } }) // NOT operator
            .select({ name: 1, _id: 0 })
        console.log(readData);
    } catch (error) {
        console.log(error);
    }
}
readDocuments();