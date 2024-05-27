'use client'
import React, { createContext, useContext, useState } from 'react';
const icons  = {
  success: <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  error: <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  warning: <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>,
  info: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
};
interface IToastContext {
  showToast: (message: string,type:'success'|'error'|'warning'|'info') => void;
  hideToast: () => void;
}

const ToastContext = createContext<IToastContext | undefined>(undefined);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children })  => {
  const [message, setMessage] = useState<string | null>(null);
  const [type, setType] = useState<'success'|'error'|'warning'|'info'>('success');
  const showToast = (message: string,type:'success'|'error'|'warning'|'info') => {
    setMessage(message);
    setType(type);
    setTimeout(() => {
      setMessage(null);
    }, 3000);
  };

  const hideToast = () => {
    setMessage(null);
  };

  return (
    <ToastContext.Provider value={{ showToast, hideToast }}>
      {children}
      {message && 
      <div className='toast toast-center'>
        <div className={`alert alert-${type} z-30`}>
          {icons[type]}
          <span>{message}</span>
          <div className='hidden'>
            <span className='alert-success'></span>
            <span className='alert-error'></span>
            <span className='alert-warning'></span>
            <span className='alert-info'></span>
          </div>
        </div>
      </div>
      }
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};