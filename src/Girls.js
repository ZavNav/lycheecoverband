import React, { Component } from 'react';
import girls from "./images/girlsLogo.jpeg";

import Meline from './images/Girls/Meline.jpeg';
import Yulia from './images/Girls/Yulya.jpeg';
import Alina from './images/Girls/Alina.jpeg';
import Natasha from './images/Girls/Natasha.jpeg';

class Girls extends Component {
    render () {
        return (
            <div className={'girls'}>
                <div className={'mainTitle'}>
                    <h1>Кавер-группа</h1>
                    <h1>LYCHEE</h1>
                    <h1>Санкт-Петербург</h1>
                </div>
                <img className={'girlsImg'} src={girls} alt="#"/>
                <div className={'simpleAbout'}>
                    <h3>Мы - кавер группа LYCHEE</h3>
                    Главной особенностью коллектива является то, что в него входят только девушки,
                    которые несут в мир красоту и качественную музыку.
                    <br/>
                    <br/>
                    В репертуаре группы вы услышите знакомые зарубежные и русские хиты в
                    абсолютно разных музыкальных жанрах от рока до зажигательного фанка.
                    <br/>
                    <br/>
                    Кавер бэнд LYCHEE станет прекрасным украшением любого мероприятия и подарит незабываемые эмоции
                    <div className={'simpleAbout-girls'}>
                        <div className={'girl'}>
                            Вокал | Наталья Охочинская
                            <img src={Natasha} alt="#"/>
                        </div>
                        <div className={'girl'}>
                            Ударные | Юлия Зенцова
                            <img src={Yulia} alt="#"/>
                        </div>
                        <div className={'girl'}>
                            Бас-гитара | Мелине Аветисян
                            <img src={Meline} alt="#"/>
                        </div>
                        <div className={'girl'}>
                            Соло-гитара | Алина Ушакова
                            <img src={Alina} alt="#"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Girls;