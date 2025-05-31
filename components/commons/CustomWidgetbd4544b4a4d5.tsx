/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import React, { useState } from 'react';

interface OnClickProps {
  id?: string;
  style?: React.CSSProperties;
  className?: string;
  onClickHome?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  onClickAbout?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  onClickServices?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  onClickContact?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  onSubmitForm?: React.MouseEventHandler<HTMLFormElement> | undefined;
  onChangeInput?: (value: string) => void;
  onFocusInput?: () => void;
  onBlurInput?: () => void;
}

const SubmitComponent: React.FC<OnClickProps> = ({
  id,
  style,
  className,
  onSubmitForm,
}) => {
  const [loading, setLoading] = useState(false);
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      if (onSubmitForm) {
        onSubmitForm(e as unknown as React.MouseEvent<HTMLFormElement>);
      }
    }, 1500);
  };

  return (
    <form 
      onSubmit={handleSubmit}
      id={id}
      style={style}
      className={`w-full max-w-md mx-auto ${className || ''}`}
    >
      <div className='mb-4'>
        <label htmlFor='email' className='block text-sm font-medium text-gray-700 mb-1'>
          Email Address
        </label>
        <input
          type='email'
          id='email'
          placeholder='you@example.com'
          required
          className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
        />
      </div>
      
      <div className='mb-4'>
        <label htmlFor='message' className='block text-sm font-medium text-gray-700 mb-1'>
          Your Message
        </label>
        <textarea
          id='message'
          rows={4}
          placeholder='What would you like to tell us?'
          required
          className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
        />
      </div>
      
      <button
        type='submit'
        disabled={loading}
        className='w-full flex items-center justify-center bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-white font-medium py-2 px-4 rounded-md transition-colors'
      >
        {loading ? (
          <>
            <svg className='animate-spin -ml-1 mr-2 h-4 w-4 text-white' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'>
              <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4'></circle>
              <path className='opacity-75' fill='currentColor' d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'></path>
            </svg>
            Submitting...
          </>
        ) : (
          <>
            Submit
            <svg className='ml-2 h-4 w-4' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M14 5l7 7m0 0l-7 7m7-7H3' />
            </svg>
          </>
        )}
      </button>
    </form>
  );
};

export default SubmitComponent;