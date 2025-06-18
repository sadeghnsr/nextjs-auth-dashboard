"use client"

import type { ButtonHTMLAttributes, ReactNode } from "react"
import styles from "./Button.module.scss"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger"
  size?: "small" | "medium" | "large"
  isLoading?: boolean
  children: ReactNode
}

export default function Button({
  variant = "primary",
  size = "medium",
  isLoading = false,
  children,
  className,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${styles[size]} ${isLoading ? styles.loading : ""} ${className || ""}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <div className={styles.spinner}>
          <div className={styles.spinnerCircle}></div>
        </div>
      ) : (
        children
      )}
    </button>
  )
}
