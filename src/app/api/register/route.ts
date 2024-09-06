import { db } from "@/lib/firebase";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(req: NextRequest) {

    const credentials = await req.json();

    const res = (await db.collection("users").doc(credentials.email).get()).exists
    
    if (res) {
        return NextResponse.json({ message: "O email informado já está em uso" }, { status: 409 });
    }

    const hashPassword = await bcrypt.hash(credentials.password, 5)

    await db.collection("users").doc(credentials.email).set({
        email: credentials.email,
        password: hashPassword,
        name: credentials.name
    })

    await db.collection("transations").doc(credentials.email).set({})
    await db.collection("wallet").doc(credentials.email).set({})
    await db.collection("settings").doc(credentials.email).set({})

    return NextResponse.json({ message: "Usuário registrado com sucesso. Você já pode fazer o login" });
}