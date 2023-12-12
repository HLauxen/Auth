'use client'

import { useRef } from 'react'
import styles from './folderform.module.css'

export default function FolderForm({handleCreateFolder}: {handleCreateFolder:(formData: FormData) => void}) {
    const ref = useRef<HTMLFormElement>(null);

    return (
        <form 
            action={(formData) => {
                handleCreateFolder(formData)
                ref.current?.reset();
            }}
            ref={ref}
        >
            <div >
                <label htmlFor="">To-do</label>
                <input type="text" name="name" id="name" placeholder="my folder"/>
                <button type="submit">submit</button>
            </div>
        </form>
    )
}