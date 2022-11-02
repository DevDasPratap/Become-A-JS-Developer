const mongoose = require('mongoose');

//connect with DB
mongoose.connect('mongodb://localhost:27017/clg')
.then(()=>{
    console.log('Connection successfull with DB');
})
.catch((err)=>{
    console.log(err);
});

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

//create model
const StudentSchema = mongoose.model('student', studentSchema); 


//multiple documents insert
const createStudents = async()=>{
    try {
        const createStudent_1 = StudentSchema({
            name: "stdudent 1",
            mob: 91,
            roll: 16,
            fees: true
        })
        const createStudent_2 = StudentSchema({
            name: "student 2",
            mob: 81,
            roll: 8,
            fees: true
        })
        const createStudent_3 = StudentSchema({
            name: "student 3",
            mob: 71,
            roll: 9,
            fees: true
        })
        const createStudent_4 = StudentSchema({
            name: "student 4",
            mob: 41,
            roll: 9,
            fees: true
        })
        const createStudent_5 = StudentSchema({
            name: "student 5",
            mob: 51,
            roll: 10,
            fees: true
        })
        
        const studentData = await StudentSchema.insertMany([createStudent_1, createStudent_2, createStudent_3, createStudent_4, createStudent_5]);
        console.log(studentData) //print insert data
    } catch (error) {
        console.log(error)
    }
    
}
createStudents();