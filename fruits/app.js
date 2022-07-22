
const mongoose = require("mongoose");

const uri = "mongodb+srv://crbac3217:twelve12@cluster0.b5nm0xb.mongodb.net/?retryWrites=true&w=majority";

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(uri);
}

const fruitSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String
})

const Fruit = mongoose.model("fruit", fruitSchema);

const fruit = new Fruit({
  name:"Apple",
  rating: 5,
  review: "an apple a day"
})

fruit.save();

const personSchema = new mongoose.Schema({
  name:String,
  age:Number
})

const Person = mongoose.model("person", personSchema);

const person = new Person({
  name: "John",
  age: 12
})

person.save();