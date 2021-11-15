import React from 'react';

interface CaseCardProps {
    text: string,
    colorClass: string,
    selected: boolean,
    onClick: () => void
}

const CaseCard: React.FC<CaseCardProps> = ({text, colorClass, selected, onClick}) => {
    return (
        <div
            className={`
                w-64 h-64 p-3
                ${colorClass}${selected ? ' border-2 border-white' : ''}
                flex items-end  flex-shrink-0
                font-semibold text-1.5xl
                mx-2 cursor-pointer
            `}
            onClick={onClick}
        >
            {text}
        </div>
    )
}

export default CaseCard
