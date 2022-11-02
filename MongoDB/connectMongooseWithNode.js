//using mongoose npm
const mongoose = require('mongoose');

//connect with DB
mongoose.connect('mongodb://localhost:27017/clg')
.then(()=>{
    console.log('Connection successfull with DB');
})
.catch((err)=>{
    console.log(err);
});


// Schema And Model
// Schema => Structure defined for document
// like: name: String, mob: Number, mobNoActive: true

// create Schema without required/mandatory
// const studentSchema = mongoose.Schema({ //new mongoose.Schema new keyword not mandatory
//     name:String,
//     mob: Number,
//     roll:Number,
//     fees:true,
//     date:{
//         type:Date,
//         default:Date.now
//     }
// })

// create Schema with required/mandatory
const studentSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    mob: {
        type:Number,
        required:true
    },
    roll:{
        type:Number,
        required:true
    },
    fees:{
        type:Boolean,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})

// Model => wrap full Schema is a model
// By using Model we can CRUD operation

//collection name alaways use singular
// ex: student not students, model create with pural ex: student to students

//create model
const StudentSchema = mongoose.model('student', studentSchema); 

// How to insert document
// const createStudent = StudentSchema({
//     name: "pratap",
//     mob: 1010101010,
//     roll: 1,
//     fees: true
// })
// createStudent.save();

// or best way insert document

// create method
// add try catch for error handaling
// async await use for Promise return
const createStudents = async()=>{
    try {
        const createStudent = StudentSchema({
            name: "hello",
            mob: 10000000001,
            roll: 10,
            fees: true
        })
        const studentData = await createStudent.save();
        console.log(studentData) //print insert data
    } catch (error) {
        console.log(error)
    }
    
}
createStudents();


