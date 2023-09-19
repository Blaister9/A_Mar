import { MongoClient } from 'mongodb';

// URI de conexión a MongoDB Atlas
const uri = process.env.MONGODB_URI;

const saveReservation = async (req, res) => {
  if (req.method === 'POST') {
    const { name, date, time, guests } = req.body;

    const client = new MongoClient(uri);

    try {
      await client.connect();
      const db = client.db('test');  // Usando la base de datos 'test'
      await db.collection('restaurant').insertOne({ name, date, time, guests });  // Insertando en la colección 'restaurant'
      res.status(200).json({ success: true });
    } catch (error) {
      console.error("Error inserting reservation:", error);
      res.status(500).json({ error: 'Error saving reservation', details: error });
    } finally {
      client.close();
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};

export default saveReservation;
