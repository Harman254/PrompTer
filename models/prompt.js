import mongoose, { Schema, model, models} from 'mongoose'

const PromptSchema = new Schema({
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference the model name 'User', not the collection name 'User'
  },
  prompt: {
    type: String,
    required: [true, 'Prompt is required.'], // Updated error message
  },
  tag: {
    type: String,
    required: [true, 'Tag is required.'],
  },
});

const Prompt = models.prompt || model('prompt', PromptSchema)


export default Prompt;