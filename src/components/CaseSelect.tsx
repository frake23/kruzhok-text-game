import React, {useState} from 'react';
import CaseCard from "./CaseCard";
import Button from "./Button";

export default function CaseSelect() {
    const [selected, setSelected] = useState<number | null>(null);
    const caseCardOnClick = (i: number) => () => setSelected(i);

    const isSelected = selected !== null;

    return (
        <div className="flex flex-col">
            <div className="flex overflow-y-scroll hide-scroll mb-8">
                <div className="w-2 flex-shrink-0"/>
                {cases.map((cs, index) =>
                    <CaseCard
                        text={cs.name}
                        colorClass={cs.colorClass}
                        selected={index === selected}
                        onClick={caseCardOnClick(index)}
                    />
                )}
                <div className="w-2 flex-shrink-0"/>
            </div>
            <div className="mx-4 flex flex-col">
                <Button text="Вперед!" type={isSelected ? 'primary' : 'disabled'} className="mb-6"/>
                <div className="text-center text-sm text-gray-100 mx-16">
                    {
                        isSelected ? `Вы выбрали: ${cases[selected].name}` : 'Вы пока не выбрали кейс'
                    }
                </div>
            </div>

        </div>

    )
}

const cases = [
    {
        name: 'Здоровье человека',
        colorClass: 'bg-red'
    },
    {
        name: 'Источники энергоснобжения города',
        colorClass: 'bg-blue'
    },
    {
        name: 'Среда доступных возможностей',
        colorClass: 'bg-violet'
    }
]
