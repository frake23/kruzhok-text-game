import React from 'react';
import Header from "../components/Header";
import PageLayout from "../components/PageLayout";
import CaseSelect from "../components/CaseSelect";
import useScrollToTop from '../hooks/useScrollToTop';

export default function HomePage() {
    useScrollToTop();
    
    return (
        <PageLayout>
            <Header/>
            <div className="container py-8 mb-4">
                <div className="px-4">
                    <h1 className="text-2xl font-bold text-center mb-8">Игра-квест от кружкового движения</h1>
                    <div className="text-base leading-5 mb-12">
                        Мы в практиках будущего каждый день занимаемся решением проблем.
                        <br/><br/>
                        Пройдите наш тест и попробуйте решить одну из таких проблем! Тут надо сказать что-то еще, потому что
                        игра настолько крутая, что нужно говорить очень много и по делу! Так что давайте представим, что тут
                        я написал, ок?
                        <br/><br/>
                        (тесты можно проходить несколько раз)
                    </div>
                    <h1 className="text-2xl font-semibold leading-7 mb-6">Выберите один из актуальных кейсов</h1>
                </div>
                <CaseSelect/>
            </div>
        </PageLayout>
    )
}
