import React, {useState} from 'react';
import CaseCard from "./CaseCard";
import Button from "./Button";
import { cases } from '../cases';
import { useNavigate } from 'react-router-dom';

export default function CaseSelect() {
    const navigate = useNavigate();
    const [selected, setSelected] = useState<number | null>(null);
    const caseCardOnClick = (i: number) => () => setSelected(i);

    const isSelected = selected !== null;

    const onButtonClick = () => {
        navigate('/test#', {state: {caseIndex: selected}})
    }

    return (
        <div className="flex flex-col">
            <div className="flex overflow-y-scroll hide-scroll mb-8">
                <div className="w-2 flex-shrink-0"/>
                {cases.map((cs, index) =>
                    <CaseCard
                        key={cs.name}
                        text={cs.name}
                        colorClass={cs.colorClass}
                        selected={index === selected}
                        onClick={caseCardOnClick(index)}
                    />
                )}
                <div className="w-2 flex-shrink-0"/>
            </div>
            <div className="mx-4 flex flex-col">
                <Button text="Вперед!" type={isSelected ? 'primary' : 'disabled'} className="mb-6" onClick={onButtonClick}/>
                <div className="text-center text-sm text-gray-100 mx-16">
                    {
                        isSelected ? `Вы выбрали: ${cases[selected].name}` : 'Вы пока не выбрали кейс'
                    }
                </div>
            </div>
        </div>
    )
}
