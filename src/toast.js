// Toast.js
import React, { useEffect } from 'react';
import './toast.css';

const Toast = ({ message, onClose }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      onClose(); // Close the toast after a delay (e.g., 3000ms)
    }, 2000);

    return () => clearTimeout(timeout);
  }, [onClose]);

  return <div className="toast">{message}</div>;
};

export default Toast;
