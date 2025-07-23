import { useEffect } from "react";

/**
 * Popup component for notifications
 * @param {Object} props
 * @param {"success"|"error"} props.type
 * @param {string} props.message
 * @param {() => void} props.onClose
 */
const Popup = ({ type, message, onClose }) => {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(onClose, 4000);
    return () => clearTimeout(timer);
  }, [message, onClose]);

  if (!message) return null;

  return (
    <div
      className={`fixed top-6 left-1/2 z-50 -translate-x-1/2 px-6 py-4 rounded shadow-lg flex items-center gap-3 transition-all duration-300
        ${
          type === "success"
            ? "bg-green-600 text-white"
            : "bg-red-600 text-white"
        }
      `}
      role="alert"
      aria-live="assertive"
      tabIndex={0}
    >
      <span className="font-semibold">
        {type === "success" ? "Success!" : "Error!"}
      </span>
      <span className="ml-2">{message}</span>
      <button
        onClick={onClose}
        aria-label="Close notification"
        className="ml-4 text-white/80 hover:text-white focus:outline-none"
        tabIndex={0}
      >
        &times;
      </button>
    </div>
  );
};

export default Popup;
