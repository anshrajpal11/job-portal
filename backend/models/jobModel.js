import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  salary: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true,
    enum: ["fulltime", "parttime", "intern"] // optional: enforce category values
  },
  type: {
    type: String,
    required: true,
    enum: ["remote", "wfo", "semiwfh"] // optional
  },
  employer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Employer",
    required: true
  },
  applicants: [
    {
      employee: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Employee",
        required: true
      },
      status: {
        type: String,
        enum: ["pending", "approved", "rejected"],
        default: "pending"
      },
      appliedOn: {
        type: Date,
        default: Date.now
      }
    }
  ]
}, {
  timestamps: true // Adds createdAt and updatedAt automatically
});

const jobModel = mongoose.model("Job", jobSchema);
export default jobModel;
