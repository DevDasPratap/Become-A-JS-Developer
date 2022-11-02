const mongoose = require('mongoose');
const validation = require('validator');
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
        required: true, //validation
        lowercase: true, //validation
        trim: true, //validation
        minlength: [3, 'Minimum Name length is 3'], //validation
        maxlength: [10, 'Maximum Name length is 10'] //validation
    },
    email: {
        type: String,
        required: true,
        validate(value){
            if (!validation.isEmail(value)) {
                throw Error('Enter correct email id');
            }
        }
    },
    mob: {
        type: Number,
        required: true,
        validator:function(value){
            return value.toString().length == 10;
        },
        message: 'Please enter valid mobile number'
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


//multiple documents insert
const createStudents = async () => {
    try {
        const createStudent_1 = StudentSchema({
            name: "Stdudent 1",
            email: 'pd@das.co',
            mob: 9100000000,
            roll: 16,
            fees: true
        })
        const createStudent_2 = StudentSchema({
            name: "STUDENT 2",
            email: 'pd@das.com',
            mob: 8100000000,
            roll: 8,
            fees: true
        })
        const createStudent_3 = StudentSchema({
            name: "std 3",
            email: 'pd@das.com',
            mob: 7100000000,
            roll: 9,
            fees: true
        })

        const studentData = await StudentSchema.insertMany([createStudent_1, createStudent_2, createStudent_3]);
        console.log(studentData) //print insert data
    } catch (error) {
        console.log(error)
    }

}
createStudents();