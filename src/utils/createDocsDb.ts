import { db } from "@/lib/firebase"

export const createDocsDb = async (id: string) => {

    const userAlreadyExists = (await db.collection("users").doc(id).get()).exists

    if (!userAlreadyExists) {
        console.log("Usuário não existe")
        await db.collection("transations").doc(id).set({})

        await db.collection("wallet").doc(id).set({
            wallet: "",
            debt: ""
        })
        await db.collection("settings").doc(id).set({})
    }
}