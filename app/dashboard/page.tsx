"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/contexts/AuthContext"
import Button from "@/components/Button/Button"
import styles from "./dashboard.module.scss"

export default function DashboardPage() {
  const { user, logout } = useAuth()
  const router = useRouter()
  const [showWelcome, setShowWelcome] = useState(true)

  useEffect(() => {

    if (!user) {
      router.push("/auth")
    }
  }, [user, router])

  useEffect(() => {

    if (showWelcome) {
      const timer = setTimeout(() => {
        setShowWelcome(false)
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [showWelcome])

  if (!user) {
    return (
      <div className={styles.loading}>
        <div className={styles.spinner}></div>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      {/* Welcome Message Overlay */}
      {showWelcome && (
        <div className={styles.welcomeOverlay}>
          <div className={styles.welcomeMessage}>
            <h1 className={styles.welcomeText}>Welcome!</h1>
            <p className={styles.welcomeSubtext}>You have successfully signed in</p>
          </div>
        </div>
      )}

      <div className={styles.dashboard}>
        <div className={styles.header}>
          <div className={styles.welcomeSection}>
            <img src={user.picture.large || "/placeholder.svg"} alt="Profile" className={styles.avatar} />
            <div className={styles.userInfo}>
              <h1 className={styles.welcomeTitle}>
                Welcome, {user.name.first} {user.name.last}!
              </h1>
              <p className={styles.welcomeSubtitle}>Welcome to your dashboard</p>
            </div>
          </div>

          <Button variant="danger" onClick={logout} className={styles.logoutButton}>
            Logout
          </Button>
        </div>

        <div className={styles.content}>
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>User Information</h2>
            <div className={styles.userDetails}>
              <div className={styles.detail}>
                <span className={styles.label}>Name:</span>
                <span className={styles.value}>
                  {user.name.first} {user.name.last}
                </span>
              </div>
              <div className={styles.detail}>
                <span className={styles.label}>Email:</span>
                <span className={styles.value} dir="ltr">
                  {user.email}
                </span>
              </div>
              <div className={styles.detail}>
                <span className={styles.label}>Phone:</span>
                <span className={styles.value} dir="ltr">
                  {user.phone}
                </span>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <h2 className={styles.cardTitle}>Welcome to the Dashboard</h2>
            <p className={styles.cardDescription}>
              You have successfully signed in to the system. This simple dashboard is designed to display user
              information.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
