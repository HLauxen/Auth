'use client'
import { UserButton, useUser } from '@clerk/nextjs';
import styles from './navbar.module.css'
import Link from "next/link"

export default function Navbar() {
    const {user, isLoaded} = useUser();
    return (
        <header>
            <nav className={styles.navstyle}>
                <div className={styles.divleft}>
                    <Link className={styles.linkstyle}  href="/">Netx.js Authentication</Link>
                </div>
                {
                    isLoaded && user && (
                    <div className={styles.divright}>
                        <Link  className={styles.linkstyle} href="/dashboard">Dashboard</Link>
                        <UserButton afterSignOutUrl='/'/>
                    </div>
                    )
                }
                
            </nav>
        </header>
    )
}