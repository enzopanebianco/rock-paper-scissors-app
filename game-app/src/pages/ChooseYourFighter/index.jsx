import React, { Fragment } from 'react';
import ButtonToFight from '../../components/ButtonToFight';
import bgTriangule from '../../assets/img/bg-pentagon.svg';
import * as S from './styles';
import  color from '../../data/choose';

function ChooseYourFighter() {  

    return (
        <Fragment>
            <S.Container>
                <S.ImgBackground src={bgTriangule} alt="img de fundo" />
                <S.Content>
                    <article>
                        <ButtonToFight choose='scissors' color={color[1].value} img={color[1].img} />
                    </article>
                    <article>
                    <ButtonToFight choose='spock' color={color[4].value} img={color[4].img} />
                    <ButtonToFight choose='paper' color={color[0].value} img={color[0].img} />
                    </article>
                    <article>
                        <ButtonToFight choose='lizard' color={color[3].value} img={color[3].img} />
                        <ButtonToFight choose='rock' color={color[2].value} img={color[2].img} />
                    </article>
                </S.Content>
            </S.Container>
        </Fragment>
    );
}

export default ChooseYourFighter;