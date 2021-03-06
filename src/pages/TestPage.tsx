import PageLayout from '../components/PageLayout';
import {useLocation, useNavigate} from 'react-router-dom';
import { cases } from '../cases';
import TestQuestion from '../components/TestQuestion';
import { useEffect, useState } from 'react';
import { QuestionData } from '../types';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

export default function TestPage() {
    const navigate = useNavigate();
    let caseIndex = useLocation()?.state?.caseIndex as number;
    const [cs, setCase] = useState<typeof cases[0] | null>(null);
    const [data, setData] = useState<QuestionData[] | null>(null);
    const [answers, setAnswers] = useState<number[]>([]);

    useEffect(() => {
        let csIndex = caseIndex;
        if (caseIndex === null) {
            const lcIndex = localStorage.getItem('caseIndex')
            if (lcIndex !== null)
                csIndex = parseInt(lcIndex)
            else {
                navigate('/');
                return;
            }
        } else localStorage.setItem('caseIndex', caseIndex.toString());
        setCase(cases[csIndex]);
        setData(mockData);
    }, []);

    useEffect(() => {
        localStorage.setItem('answers', JSON.stringify(answers));
    }, [answers]);

    const onAnswerSubmit = (a: number) => setAnswers(ans => [...ans, a]);

    return (
        cs && data &&
        <PageLayout>
            <div className={`${cs.colorClass}`}>
                <h1 className="py-4 px-7 text-xl font-semibold leading-6">
                    {cs.name}
                </h1>
                <div className="rounded-t-2xl bg-black p-4 mb-8">
                    {data.map((q, i) => 
                        <TestQuestion 
                            question={q} 
                            questionsCount={data.length} 
                            onSubmit={onAnswerSubmit}
                            key={`${q.number}/${q.question}`}
                            darkened={i === answers.length || answers.length === data.length}
                        />
                    )}
                    {
                        answers.length === data.length &&
                        <Link to="/" className="flex flex-col" id="end">
                            <Button text="Посмотреть результаты" type="primary"/>
                        </Link>
                    }
                </div>
                
            </div>
        </PageLayout>
    )
}

const mockData = [
    {
        number: 1,
        question: 'Как проект будет учитывать влияние стресса на здоровье?',
        variants: [
            {
                title: 'Реакция на ухудшение здоровья',
                description: `Влияние стресса будет сразу же компенсироваться: 
                как только возникнет какой-то симптом, человек начинает плохо себя чувствовать, 
                сразу будет предложена контрмера. Это поможет своевременно отслеживать негативное влияние на здоровье.`,
                confirm: {
                    title: 'Вы уверерны, что хотите полностью исключить стресс?',
                    text: 'Тогда в вашей жизни изменится то-то и то-то а исчезнет то-то и то-то а потом вы вообще станене счастливым',
                    confirmedTitle: 'Вы решили исключить стресс'
                }
            },
            {
                title: 'Исключение фонового стресса',
                description: `Фоновый стресс будет исключен, но сильные эмоциональные переживания и интеллектуальная нагрузка останется.
                 Так человек избавится от ненужного стресса.`,
                confirm: {
                    title: 'Вы уверерны, что хотите полностью исключить стресс?',
                    text: 'Тогда в вашей жизни изменится то-то и то-то а исчезнет то-то и то-то а потом вы вообще станене счастливым',
                    confirmedTitle: 'Вы решили исключить стресс'
                }
            },
            {
                title: 'Полное исключение стресса',
                description: `Будут определяться источники стресса, и они будут исключаться из жизни. Человеку не нужно делать то, 
                что приносит ему дискомфорт и негатив.`,
                confirm: {
                    title: 'Вы уверерны, что хотите полностью исключить стресс?',
                    text: 'Тогда в вашей жизни изменится то-то и то-то а исчезнет то-то и то-то а потом вы вообще станене счастливым',
                    confirmedTitle: 'Вы решили исключить стресс'
                }
            }
        ]
    },
    {
        number: 2,
        question: ' Как проект будет помогать человеку вводить новые привычки и закреплять новый образ жизни?',
        variants: [
            {
                title: 'Реакция на ухудшение здоровья',
                description: `Влияние стресса будет сразу же компенсироваться: 
                как только возникнет какой-то симптом, человек начинает плохо себя чувствовать, 
                сразу будет предложена контрмера. Это поможет своевременно отслеживать негативное влияние на здоровье.`,
                confirm: {
                    title: 'Вы уверерны, что хотите полностью исключить стресс?',
                    text: 'Тогда в вашей жизни изменится то-то и то-то а исчезнет то-то и то-то а потом вы вообще станене счастливым',
                    confirmedTitle: 'Вы решили исключить стресс'
                }
            },
            {
                title: 'Исключение фонового стресса',
                description: `Фоновый стресс будет исключен, но сильные эмоциональные переживания и интеллектуальная нагрузка останется.
                 Так человек избавится от ненужного стресса.`,
                confirm: {
                    title: 'Вы уверерны, что хотите полностью исключить стресс?',
                    text: 'Тогда в вашей жизни изменится то-то и то-то а исчезнет то-то и то-то а потом вы вообще станене счастливым',
                    confirmedTitle: 'Вы решили исключить стресс'
                }
            },
            {
                title: 'Полное исключение стресса',
                description: `Будут определяться источники стресса, и они будут исключаться из жизни. Человеку не нужно делать то, 
                что приносит ему дискомфорт и негатив.`,
                confirm: {
                    title: 'Вы уверерны, что хотите полностью исключить стресс?',
                    text: 'Тогда в вашей жизни изменится то-то и то-то а исчезнет то-то и то-то а потом вы вообще станене счастливым',
                    confirmedTitle: 'Вы решили исключить стресс'
                }
            }
        ]
    },
    {
        number: 3,
        question: 'Как проект будет учитывать влияние стресса на здоровье?',
        variants: [
            {
                title: 'Реакция на ухудшение здоровья',
                description: `Влияние стресса будет сразу же компенсироваться: 
                как только возникнет какой-то симптом, человек начинает плохо себя чувствовать, 
                сразу будет предложена контрмера. Это поможет своевременно отслеживать негативное влияние на здоровье.`,
                confirm: {
                    title: 'Вы уверерны, что хотите полностью исключить стресс?',
                    text: 'Тогда в вашей жизни изменится то-то и то-то а исчезнет то-то и то-то а потом вы вообще станене счастливым',
                    confirmedTitle: 'Вы решили исключить стресс'
                }
            },
            {
                title: 'Исключение фонового стресса',
                description: `Фоновый стресс будет исключен, но сильные эмоциональные переживания и интеллектуальная нагрузка останется.
                 Так человек избавится от ненужного стресса.`,
                confirm: {
                    title: 'Вы уверерны, что хотите полностью исключить стресс?',
                    text: 'Тогда в вашей жизни изменится то-то и то-то а исчезнет то-то и то-то а потом вы вообще станене счастливым',
                    confirmedTitle: 'Вы решили исключить стресс'
                }
            },
            {
                title: 'Полное исключение стресса',
                description: `Будут определяться источники стресса, и они будут исключаться из жизни. Человеку не нужно делать то, 
                что приносит ему дискомфорт и негатив.`,
                confirm: {
                    title: 'Вы уверерны, что хотите полностью исключить стресс?',
                    text: 'Тогда в вашей жизни изменится то-то и то-то а исчезнет то-то и то-то а потом вы вообще станене счастливым',
                    confirmedTitle: 'Вы решили исключить стресс'
                }
            }
        ]
    },
]
