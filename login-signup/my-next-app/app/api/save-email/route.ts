import { NextResponse } from 'next/server';
import mysql from 'mysql2/promise';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { email } = body;

        const db = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root', 
            database: 'my_next_app' 
        });

        const query = 'INSERT INTO users (email) VALUES (?)';
        const [result] = await db.execute(query, [email]);

        await db.end();

        return NextResponse.json({ message: "Saved successfully!", success: true });

    } catch (error: unknown) {
        console.error("Database Error:", error);
        const errorMessage = error instanceof Error ? error.message : String(error);
        return NextResponse.json({ message: "Error saving email", error: errorMessage }, { status: 500 });
    }
}