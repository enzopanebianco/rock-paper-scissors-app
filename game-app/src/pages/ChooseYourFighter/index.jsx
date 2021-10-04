import React, { Fragment } from 'react';
import ButtonToFight from '../../components/ButtonToFight';
import bgTriangule from '../../assets/img/bg-triangle.svg';
import * as S from './styles';
import  color from '../../colors/choose';

function ChooseYourFighter() {  
    return (
        <Fragment>
            <S.Container>
                <S.ImgBackground src={bgTriangule} alt="img de fundo" />
                <S.Content>
                    <article>
                        <ButtonToFight choose='paper' color={color[0].value} img={color[0].img} />
                        <ButtonToFight choose='scissors' color={color[1].value} img={color[1].img} />
                    </article>
                    <article>
                        <ButtonToFight choose='rock' color={color[2].value} img={color[2].img} />
                    </article>
                </S.Content>
            </S.Container>
        </Fragment>
    );
}

export default ChooseYourFighter;