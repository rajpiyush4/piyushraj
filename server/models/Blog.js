import { Schema, model } from 'mongoose';

const BlogSchema = new Schema({
  id: String,
  title: String,
  body: String,
  time: String
});

export default model('Blog', BlogSchema);
