"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/contexts/AuthContext"
import Input from "@/components/Input/Input"
import Button from "@/components/Button/Button"
import styles from "./auth.module.scss"

export default function AuthPage() {
  const [phoneNumber, setPhoneNumber] = useState("")
  const [phoneError, setPhoneError] = useState("")
  const [isPhoneValid, setIsPhoneValid] = useState(false)
  const { login, isLoading, user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (user) {
      router.push("/dashboard")
    }
  }, [user, router])

  const validatePhoneNumber = (phone: string) => {
    const iranPhoneRegex = /^(\+98|0)?9\d{9}$/
    return iranPhoneRegex.test(phone.replace(/\s/g, ""))
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setPhoneNumber(value)

    if (value.length === 0) {
      setPhoneError("")
      setIsPhoneValid(false)
      return
    }

    if (validatePhoneNumber(value)) {
      setPhoneError("")
      setIsPhoneValid(true)
    } else {
      setPhoneError("Please enter a valid phone number")
      setIsPhoneValid(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!phoneNumber) {
      setPhoneError("Phone number is required")
      return
    }

    if (!isPhoneValid) {
      setPhoneError("Please enter a valid phone number")
      return
    }

    await login()
  }

  return (
    <div className={styles.container}>
      <div className={styles.authCard}>
        <div className={styles.header}>
          <h1 className={styles.title}>Sign In</h1>
          <p className={styles.subtitle}>Please enter your information</p>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <Input
            id="phone"
            type="tel"
            label="Phone Number"
            placeholder="09123456789"
            value={phoneNumber}
            onChange={handlePhoneChange}
            error={phoneError}
            isValid={isPhoneValid}
            dir="ltr"
          />

          <Button
            type="submit"
            size="large"
            isLoading={isLoading}
            disabled={!isPhoneValid || isLoading}
            className={styles.submitButton}
          >
            {isLoading ? "Signing in..." : "Sign In"}
          </Button>
        </form>

        <div className={styles.footer}>
          <p className={styles.note}>By clicking Sign In, random user data will be fetched</p>
        </div>
      </div>
    </div>
  )
}
