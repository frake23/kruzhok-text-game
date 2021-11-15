import React from 'react';
import { QuestionData } from "../types"

interface VariantRadioProps {
    variant: QuestionData["variants"][0],
    selected: boolean,
    onClick: () => void,
    disabled: boolean
}
const VariantRadio: React.FC<VariantRadioProps> = ({variant, selected, onClick, disabled}) => {
    return (
        <div className="flex mb-5 cursor-pointer" onClick={disabled ? undefined : onClick}>
            <div className="w-4 h-4 rounded-full border-2 border-white-secondary mr-3 flex-shrink-0 flex items-center justify-center">
                {selected && <div className="w-2 h-2 bg-white-secondary rounded-full"/>}
            </div>
            <div className="flex flex-col">
                <h3 className="text-base font-semibold mb-1 leading-5">
                    {variant.title}
                </h3>
                <span className="text-xs font-light">
                    {variant.description}
                </span>
            </div>
        </div>
    )
}

export default VariantRadio
