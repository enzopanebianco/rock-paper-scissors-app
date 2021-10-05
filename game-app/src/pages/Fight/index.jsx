import React, { Fragment, useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ButtonToFight from '../../components/ButtonToFight';
import options from '../../data/choose';
import * as S from './styles';
import { calcFight } from '../../store/actions';
import { useHistory } from 'react-router';

function Fight() {
    const [opponentChoose, setOpponentChoose] = useState();
    const { choose, result } = useSelector(state => state);

    const dispatch = useDispatch();
    const history = useHistory();

    const getRandomArbitrary = useCallback(() => {
        let randomId;
        if (!opponentChoose) {
            randomId = Math.floor(Math.random() * 5 + 1);
            setOpponentChoose(options.find(option => option.id === randomId));
        }
        dispatch(calcFight(choose.title, opponentChoose?.title));
    }, [choose.title, dispatch, opponentChoose]);

    useEffect(() => {
        getRandomArbitrary();
    }, [getRandomArbitrary]);

    return (
        <Fragment>
            <S.Container>
                <S.ItemChoose victory={result === 'Win' ? true : false}>
                    <span />
                    <S.Title>YOU PICKED</S.Title>
                    <ButtonToFight color={choose?.value} img={choose?.img} />
                </S.ItemChoose>
                {result &&
                    <S.Result>
                        {
                            result === 'Draw' ?
                                <h2>Draw</h2>
                                :
                                <h2>YOU {result}</h2>
                        }
                        <button onClick={() => history.push('/')} >PLAY AGAIN</button>
                    </S.Result>
                }

                <S.ItemChoose victory={result === 'Lose' ? true : false}>
                    
                    <span />
                    <S.Title>THE HOUSE PICKED</S.Title>
                    {opponentChoose ?
                        <ButtonToFight color={opponentChoose?.value} img={opponentChoose?.img} />
                        : <S.WaitingOpponent />
                    }
                </S.ItemChoose>
            </S.Container>
        </Fragment>
    );
}

export default Fight;