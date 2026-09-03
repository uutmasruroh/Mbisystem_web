import { MongoClient, ObjectId } from 'mongodb';

let cachedClient = global._mongoClient;
let cachedDb = global._mongoDb;

async function connectToDatabase() {
    if (cachedDb) {
        return cachedDb;
    }

    if (!cachedClient) {
        cachedClient = new MongoClient(process.env.MONGODB_URI);
        global._mongoClient = cachedClient;
    }

    await cachedClient.connect();

    cachedDb = cachedClient.db('mbi_database');
    global._mongoDb = cachedDb;

    return cachedDb;
}

export default async function handler(req, res) {

    // CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Methods',
        'GET,POST,PUT,DELETE,OPTIONS'
    );
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Content-Type'
    );

    // Preflight
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    try {

        const db = await connectToDatabase();
        const collection = db.collection('produksi');

        // ==========================================
        // GET - AMBIL SEMUA DATA PRODUKSI
        // ==========================================
        if (req.method === 'GET') {

            const data = await collection
                .find({})
                .sort({
                    date: -1,
                    createdAt: -1
                })
                .toArray();

            // Ubah ObjectId menjadi string
            const result = data.map(item => ({
                ...item,
                _id: item._id.toString()
            }));

            return res.status(200).json(result);
        }

        // ==========================================
        // POST - TAMBAH DATA PRODUKSI
        // ==========================================
        if (req.method === 'POST') {

            const data = {
                ...req.body,
                createdAt: new Date()
            };

            // Jangan simpan _id dari frontend
            delete data._id;
            delete data.id;

            const result = await collection.insertOne(data);

            return res.status(201).json({
                message: 'Data produksi berhasil disimpan',
                insertedId: result.insertedId.toString()
            });
        }

        // ==========================================
        // PUT - UPDATE DATA PRODUKSI
        // ==========================================
        if (req.method === 'PUT') {

            const { id, ...updateData } = req.body;

            if (!id) {
                return res.status(400).json({
                    message: 'ID data produksi tidak ditemukan'
                });
            }

            if (!ObjectId.isValid(id)) {
                return res.status(400).json({
                    message: 'ID data produksi tidak valid'
                });
            }

            // Jangan ubah _id
            delete updateData._id;

            const result = await collection.updateOne(
                {
                    _id: new ObjectId(id)
                },
                {
                    $set: updateData
                }
            );

            if (result.matchedCount === 0) {
                return res.status(404).json({
                    message: 'Data produksi tidak ditemukan'
                });
            }

            return res.status(200).json({
                message: 'Data produksi berhasil diperbarui'
            });
        }

        // ==========================================
        // DELETE - HAPUS DATA PRODUKSI
        // ==========================================
        if (req.method === 'DELETE') {

            const id = req.query.id;

            if (!id) {
                return res.status(400).json({
                    message: 'ID data produksi tidak ditemukan'
                });
            }

            if (!ObjectId.isValid(id)) {
                return res.status(400).json({
                    message: 'ID data produksi tidak valid'
                });
            }

            const result = await collection.deleteOne({
                _id: new ObjectId(id)
            });

            if (result.deletedCount === 0) {
                return res.status(404).json({
                    message: 'Data produksi tidak ditemukan'
                });
            }

            return res.status(200).json({
                message: 'Data produksi berhasil dihapus'
            });
        }

        // ==========================================
        // METHOD TIDAK DIDUKUNG
        // ==========================================
        return res.status(405).json({
            message: 'Method tidak didukung'
        });

    } catch (error) {

        console.error('API PRODUKSI ERROR:', error);

        return res.status(500).json({
            message: 'Terjadi kesalahan server',
            error: error.message
        });
    }
}