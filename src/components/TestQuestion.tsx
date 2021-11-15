import React, { useState } from 'react';
import { QuestionData } from '../types';
import AnswerConfirmation from './AnswerConfirmation';
import Button from './Button';
import VariantRadio from './VariantRadio';

interface TestQuestionProps {
    question: QuestionData,
    questionsCount: number,
    onSubmit: (answerIndex: number) => void,
    darkened: boolean
}

const TestQuestion: React.FC<TestQuestionProps> = ({question, questionsCount, onSubmit, darkened}) => {
    const [selected, setSelect] = useState<null | number>(null);
    const [confirmed, setConfirmed] = useState<boolean | 'inProgress'>(false);

    const onButtonClick = () => setConfirmed('inProgress');
    const onConfirm = () => {
        setConfirmed(true);
        onSubmit(selected!);
    };
    
    const onReject = () => setConfirmed(false)

    const isSelected = selected !== null;

    return (
        <div className="flex flex-col mb-8 relative" id={question.number.toString()}>
            {!darkened && <Darkened/>}
            <div className="mb-4 text-lg text-center">
                {question.number}/{questionsCount}
            </div>
            <h2 className="text-base text-center font-bold mb-6">
                {question.question}
            </h2>
            <div className="flex flex-col mb-2">
                {question.variants.map((v, i) => 
                    <VariantRadio selected={i === selected} variant={v} onClick={() => setSelect(i)} key={v.title} disabled={!!confirmed}/>    
                )}
            </div>
            {
                !confirmed
                    ?
                <Button 
                    text={isSelected ? 'Дальше' : 'Подтвердить'}
                    type={isSelected ? 'primary' : 'disabled'} 
                    onClick={onButtonClick}
                />
                    :
                <AnswerConfirmation 
                    confirm={question.variants[selected!].confirm}
                    onConfirm={onConfirm}
                    onReject={onReject}
                    confirmed={confirmed === true}
                    submitHref={question.number === questionsCount ? '#end' : `#${question.number + 1}`}
                />
            } 
        </div>
    )
}

function Darkened() {
    return (
        <div className="absolute left-0 top-0 bg-black bg-opacity-80 h-full w-full">
        </div>
    )
}

export default TestQuestion;


