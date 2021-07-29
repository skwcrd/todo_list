import mysql from 'mysql';

export const connection = () => {
    const conn = mysql.createConnection({
        host: 'localhost',
        database: 'todo_list'
    });

    conn.connect((err) => {
        if (err) throw err;
        console.log("Connect success!");
    });
}