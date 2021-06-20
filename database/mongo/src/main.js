const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://localhost:27017/todo_list?readPreference=primary&retryWrites=true&w=majority&ssl=false";

async function main() {
    const client = new MongoClient(uri);

    try {
        await client.connect();
        await listDatabases(client);
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

async function listDatabases(client) {
    databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");

    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
}

main().catch(console.error);