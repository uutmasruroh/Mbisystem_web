import { MongoClient, ObjectId } from 'mongodb';

const client = new MongoClient(process.env.MONGODB_URI);

export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') return res.status(200).end();

    try {
        await client.connect();
        const db = client.db('mbi_database');
        const collection = db.collection('produksi');

        if (req.method === 'GET') {
            const data = await collection.find({}).sort({ date: -1 }).toArray();
            return res.status(200).json(data);
        }
        if (req.method === 'POST') {
            const result = await collection.insertOne({ ...req.body, createdAt: new Date() });
            return res.status(201).json(result);
        }
        if (req.method === 'PUT') {
            const { id, ...updateData } = req.body;
            await collection.updateOne({ _id: new ObjectId(id) }, { $set: updateData });
            return res.status(200).json({ message: "Updated" });
        }
        if (req.method === 'DELETE') {
            await collection.deleteOne({ _id: new ObjectId(req.query.id) });
            return res.status(200).json({ message: "Deleted" });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}