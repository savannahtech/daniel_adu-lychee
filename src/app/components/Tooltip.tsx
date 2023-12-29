import React, { useState } from 'react';
import { IToolTip } from '@/app/utils/interfaces';

const Tooltip = ({ text }: IToolTip) => {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
        <div>
            <div className="cursor-pointer" title={text} onClick={() => setIsOpen(!isOpen)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="7.5" stroke="black"/>
                    <path d="M8 4V7.55556" stroke="#191C26" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 11.1133H8.00889" stroke="#191C26" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
        </div>
        {isOpen && (
        <div className="origin-top-right absolute left-5 -mt-5 w-60 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1 px-4 font-light text-xs">
                {text}
            </div>
        </div>
        )}
    </div>
  );
};

export default Tooltip;
