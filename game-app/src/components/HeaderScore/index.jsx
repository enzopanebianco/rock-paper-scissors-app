import React from 'react';
import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import * as S from './styles';
// import { Container } from './styles';

function HeaderScore() {
    const score = useSelector(state => state.score);
    return (
        <Fragment>
            <S.Container>
                <S.Title>
                    <strong>ROCK</strong>
                    <strong>PAPER</strong>
                    <strong>SCISSORS</strong>
                    <strong>LIZARD</strong>
                    <strong>SPOCK</strong>
                </S.Title>
                <S.Score>
                    <p>SCORE</p>
                    <strong>{score}</strong>
                </S.Score>
            </S.Container>
        </Fragment>
    );
}

export default HeaderScore;