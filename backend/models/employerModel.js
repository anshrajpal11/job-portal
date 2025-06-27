import mongoose from "mongoose";

const employerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  logo: { type: String, required: true },

  jobs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Job" }],
  role: { type: String, default: "employer" },
});

const employerModel = new mongoose.model("Employer", employerSchema);

export default employerModel;
