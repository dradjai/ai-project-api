import { db } from "./dbConnect.js";

const coll = db.collection('items');


export const getItems = async (req, res) => {
  const itemColl = await coll.find().toArray();
  
  res.status(201).send(itemColl);
}

export const addItem = async (req, res) => {
  const item = req.body;
  await coll.insertOne(item);
  res.status(201).send({message: "item added"})
}