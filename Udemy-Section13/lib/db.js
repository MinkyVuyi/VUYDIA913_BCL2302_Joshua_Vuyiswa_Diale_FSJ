import { MongoClient } from 'mongodb';

export async function connectToDatabase() {
   const client = await MongoClient.connect('mongodb+srv://vuyiswadiale:Mkqbs15AV4sKClou@cluster0.tpfksdf.mongodb.net/auth-demo?retryWrites=true&w=majority');
   
   return client;
}