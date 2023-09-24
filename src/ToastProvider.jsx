import { createContext, useState } from "react";
import { createPortal } from "react-dom";

export const ToastContext = createContext(null);

const DEFAULT_OPTIONS = {
  autoDismiss: true,
  autoDismissTimeout: 5000,
  position: "Top right",
};

export function ToastProvider({ children }) {
  const [toast, setToasts] = useState([]);

  function addToast(
    text,
    { id = crypto.randomUUID(), ...userDefinedOptions } = {}
  ) {
    const options = { ...DEFAULT_OPTIONS, ...userDefinedOptions };
    setToasts((currentToasts) => {
      return [...currentToasts, { text, options, id }];
    });
  }

  function removeToast(id) {
    setToasts((currentToasts) => {
      return currentToasts.filter((toast) => toast.id !== id);
    });
  }

  const toastsByPosition = toasts.reduce((grouped, toast) => {
    const { position } = toast.option;
    if (grouped[position] == null) {
      grouped[position] = [];
    }
    grouped[position].push(toast);

    return grouped;
  }, {});

  return (
    <ToastContext.Provider value={{ toast, addToast, removeToast }}>
      {children}
      {createPortal(
        object.enteries(toastsByPosition).map(([position, toasts]) => (
          <div key={position} className={`toast-container ${position}`}>
            <div className="toast">{toasts.length}</div>
          </div>
        )),
        document.getElementById("toast-container")
      )}
    </ToastContext.Provider>
  );
}

function Toast({ text }) {}
