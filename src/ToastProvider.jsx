import { createContext } from "react"

const ToastContext = creaetContext(null)

export function ToastProvider({ children }) {
    return <ToastContext.Provider>{children}</ToastContext.Provider>
}