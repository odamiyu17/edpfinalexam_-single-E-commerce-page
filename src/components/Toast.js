import { useEffect } from 'react';
import './Toast.css';

export default function Toast({ message, onDone }) {
  useEffect(() => {
    const t = setTimeout(onDone, 2400);
    return () => clearTimeout(t);
  }, [onDone]);

  return <div className="toast">{message}</div>;
}
