import { useContext } from "react";
import { ToastContext } from "./ToastProvider";

export function useToast() {
    const value = useContext(ToastContext)

if (value == null) {
    throw new error ('useToast has to be within <ToastPerovider>')
}
    return value 
}