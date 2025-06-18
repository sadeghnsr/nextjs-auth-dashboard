"use client"

import { forwardRef, type InputHTMLAttributes } from "react"
import styles from "./Input.module.scss"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  isValid?: boolean
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ label, error, isValid, className, ...props }, ref) => {
  return (
    <div className={styles.inputWrapper}>
      {label && (
        <label className={styles.label} htmlFor={props.id}>
          {label}
        </label>
      )}
      <input
        ref={ref}
        className={`${styles.input} ${error ? styles.error : ""} ${isValid ? styles.valid : ""} ${className || ""}`}
        {...props}
      />
      {error && <span className={styles.errorMessage}>{error}</span>}
    </div>
  )
})

Input.displayName = "Input"

export default Input
