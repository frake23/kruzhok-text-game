import React from 'react';
import { QuestionData } from '../types';
import Button from './Button';

interface AnswerConfirmationProps {
    confirm: QuestionData["variants"][0]["confirm"],
    onConfirm: () => void,
    onReject: () => void,
    confirmed: boolean,
    submitHref: string
}

const AnswerConfirmation: React.FC<AnswerConfirmationProps> = ({confirm, onConfirm, onReject, confirmed, submitHref}) => {
    return (
        <div className="flex flex-col text-center">
            <div className="text-base font-bold mb-2">
                {confirmed ? confirm.confirmedTitle : confirm.title}
            </div>
            <div className="text-sm mb-4">
                {confirm.text}
            </div>
            {
                !confirmed &&
                <div className="flex">
                    <span className="flex-1 flex flex-col mr-2">
                        <Button type="secondary" text="Ещё подумаю" onClick={onReject} className="flex-1"/>
                    </span>
                    <a href={submitHref} className="flex-1 flex flex-col ml-2">
                       <Button type="primary" text="Да" onClick={onConfirm} className="flex-1"/> 
                    </a>
                </div>
            }
        </div>
    )
}

export default AnswerConfirmation;
