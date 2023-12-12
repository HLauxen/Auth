import { getXataClient } from "@/xata"
import FolderForm from "./FolderForm";
import { revalidatePath } from "next/cache";
import { z } from 'zod';
import { auth } from "@clerk/nextjs/server";
import { redirect } from 'next/navigation';
import styles from './dashboard.module.css'


const schema = z.object({
    name: z.string().min(5)
});



export default async function Dashboard(){
    const {userId} = auth();
    const xataClient = getXataClient();

    if(!userId) {
        redirect('/');
    }
    const folders = await xataClient.db.folders.filter({
        userId
    }).getMany();

    async function createFolder(formData: FormData) {
        'use server';
        const parsedForm = schema.parse({
            name: formData.get("name")
        }) 
        
        if(!userId) {
            return;
        }
        const newRecord = {...parsedForm, userId}

        const xataClient = getXataClient();
        await xataClient.db.folders.create(newRecord)
        revalidatePath('/');
    }

    return (
        <div className={styles.container}>
            <h1>Dashboard PORRA</h1>
            <FolderForm handleCreateFolder={createFolder}/>
            {folders.map(folder => <p key={folder.id}>{folder.name}</p>)}
        </div>
    )
}