import React from 'react';

export default function Footer() {
    return (
        <div className="flex flex-col py-8 text-xs text-white-secondary font-bold items-center">
            <a className="mb-8" href="https://kruzhok.pro/">Команда</a>
            <a className="mb-8" href="https://kruzhok.pro/">© 2020 <span className="text-blue">Кружковое движение</span></a>
            <a className="mb-8" href="#">Перейти в начало страницы ↑</a>
        </div>
    )
}
