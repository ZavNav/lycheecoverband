import React, { Component } from 'react';
import GirlCard from "./GirlCard";

import Meline from './images/Girls/Meline.jpeg';
import Yulia from './images/Girls/Yulya.jpeg';
import Alina from './images/Girls/Alina.jpeg';
import Natasha from './images/Girls/Natasha.jpeg';

class About extends Component {
    render () {
        return (
            <div>
                <GirlCard nameAndRole={'Мелине Аветисян | Бас-гитара'} photo={Meline} describe={
                    'Басистка нашей группы Мелине выросла в семье музыкантов, поэтому с самого детства была окружена творческой атмосферой. \n' +
                    '\n' +
                    'Её музыкальный путь был тернистый…\n' +
                    '7 лет принудительных занятий на фортепиано напрочь отбили у неё желание заниматься музыкой. \n' +
                    '\n' +
                    'Однако, в возрасте 12 лет Мелине, вдохновленная творчеством группы Metallica, решает дать музыке ещё один шанс. На этот раз она выбирает гитару и тем самым переворачивает свою жизнь с ног на голову. \n' +
                    'Желание забыть дорогу в музыкальную школу как страшный сон превращается в поступление в музыкальное училище им. Римского-Корсакова. \n' +
                    '\n' +
                    'Долгие творческие поиски приводят её к бас-гитаре и открывают совершенно новые возможности для реализации. Сейчас Мелине учится в СПБГИК на эстрадно-джазовом факультете, продолжает совершенствовать свои навыки в оркестре и в нашей девчачьей команде. \nКто знает, что её ждёт дальше😉'
                }/>
                <hr/>
                <GirlCard nameAndRole={'Юля Зенцова | Ударные'} photo={Yulia} describe={'Пришла в дом молодежи в надежде научиться играть на гитаре, вот только мест не оказалось. Зато шел набор в барабанное шоу. Поначалу идея показалась смешной, но стоило только попробовать и магия ритма зацепила молодую девчонку безвозвратно.\n' +
                    '\n' +
                    'Вот уже 10 лет артистка и педагог шоу барабанщиц Феерия. Гастроли, чемпионаты, Олимпиада…\n' +
                    'Всегда любила свою работу, энергию зрителей и жар софитов, но мысль об участии в группе не прекращала посещать Юлю.\n' +
                    '\n' +
                    'И вот, наконец, драйв ударной установки, заводные Lychee и шанс подобраться к мечте ещё на шаг…'}/>
                <hr/>
                <GirlCard nameAndRole={'Алина Ушакова | Соло-гитара'} photo={Alina} describe={'Уже в детстве Алина была погружена в мир музыки, училась в музыкальной школе по классу фортепиано, пела в вокально-инструментальном ансамбле при школе и играла ритм-партии на акустической гитаре. \n' +
                    '\n' +
                    'В 16 лет организовала рок-группу, где играла и пела каверы, а также песни собственного сочинения.\n' +
                    '\n' +
                    'Всегда думала, что музыка будет лишь её хобби и ничего серьезного не получится. Но не тут-то было!\n' +
                    'Сейчас Алина практикуется в оркестре, делает аранжировки на популярные песни в абсолютно разных стилях, а также является соло гитаристкой в нашем коллективе.\n' +
                    'Музыка с ней изо дня в день и это прекрасно!'}/>
                <hr/>
                <GirlCard nameAndRole={'Наталья Охочинская | Вокал'} photo={Natasha} describe={'Родилась в музыкальной семье и начала петь с самого раннего детства.\n' +
                    'Первый выход на большую сцену состоялся когда Наташе было всего три года. Уже тогда всем было понятно, что девочка пойдёт по стопам своего отца (певца и радио ведущего - Юрия Охочинского). \n' +
                    '\n' +
                    'Наташа закончила музыкальную школу по классу фортепиано, писала песни и грезила о карьере певицы.\n' +
                    '\n' +
                    'В возрасте 15-ти лет поступила в театральную студию, где открыла для себя новую страсть - театр.\n' +
                    'Затем шло поступление в театральный институт и полтора года учебы.\n' +
                    'И в один прекрасный момент Наташа решает оставить карьеру актрисы ради музыки. Поступает в СПБГИК на факультет музыкального искусства эстрады по специальности эстрадно-джазовое пение.\n' +
                    'Дальше пошли записи авторских песен и творческие поиски…\n' +
                    '\n' +
                    'Но мысль о музыкальном бэнде не давала покоя, уж очень хотелось собрать классную команду и много выступать!\n' +
                    'И вот, мечта сбылась!\n' +
                    'LYCHEE - дело, в которое вложена душа, огромное желание творить и дарить людям радость посредством музыки.\n' +
                    '\n' +
                    'Так что вперёд и с песней! 🙌🏽'}/>
            </div>
        );
    }
}

export default About;