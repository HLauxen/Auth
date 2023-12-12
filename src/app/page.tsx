import { redirect } from 'next/navigation';
import styles from './page.module.css'
import { auth } from '@clerk/nextjs'

export default function Home() {
  const {userId} = auth();
  console.log(userId);
  if (userId) {
    redirect('/dashboard')
  }
  return (
    <main className={styles.mainstyle}>
      <div className={styles.content}>
        <h1 className={styles.tittle}>Next Auth</h1>
      </div>
    </main>
  )
}
