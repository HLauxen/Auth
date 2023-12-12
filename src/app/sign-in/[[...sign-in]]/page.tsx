import { SignIn } from "@clerk/nextjs";
import styles from './sigin.module.css'

export default function Page() {
    return (
    <div className={styles.container}>
        <SignIn/>
    </div>
    )
}