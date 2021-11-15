import React from 'react';

interface ButtonProps {
    text: string,
    type: 'primary' | 'secondary' | 'disabled',
    onClick?: () => void,
    className?: string
}

const Button: React.FC<ButtonProps> = ({text, type, onClick, className}) => {
    let buttonStyle;

    if (type === 'primary') buttonStyle = 'bg-blue text-white-secondary'
    else if (type === 'secondary') buttonStyle = 'bg-transparent border-2 border-white-secondary text-white-secondary'
    else buttonStyle = 'text-gray-200 bg-gray-300'

    return (
        <button
            className={`p-3 transition-all text-base font-bold rounded-sm flex justify-center items-center ${buttonStyle} ${className ? className : ''}`}
            disabled={type === 'disabled'}
            onClick={onClick}
        >
            {text}
        </button>
    )
}

export default Button;
