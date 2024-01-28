const mongoose = require("mongoose");
const Joi = require("joi");
const studentSchema = mongoose.Schema({
  name: {
    type: String,
    minlength: 3,
    maxlength: 50,
    required: true,
  },

  isEnrolled: {
    type: Boolean,
    default: false,
    required: true,
  },
  phoneNo: {
    type: Number,
    required: true,
    required: true,
  },
});

const Student = mongoose.model("Student", studentSchema);

function validateStudent(student) {
  const schema = {
    name: Joi.string().min(3).max(20).required(),
    isEnrolled: Joi.boolean(),
    phoneNo: Joi.string().min(10).required(),
  };
  return Joi.validate(student, schema);
}

exports.Student = Student;
exports.validate = validateStudent;
