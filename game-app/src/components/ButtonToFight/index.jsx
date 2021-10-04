import React, { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { addChoose } from '../../store/actions';
import * as S from './styles';

function ButtonToFight({ color, img, choose }) {
    const history = useHistory();
    const dispatch = useDispatch();

    const handleChooseAndNavigate = (choose) => {
        dispatch(addChoose(choose));
        history.push('fight');
    };

    return (
        <Fragment>
            <S.Container color={color} >
                <S.Button onClick={() => handleChooseAndNavigate(choose)}>
                    <img src={img} alt='img para escolher' />
                </S.Button>
            </S.Container>
        </Fragment>
    );
}

export default ButtonToFight;