import React, { Fragment, useState } from 'react';
import * as S from './styles';
import rulesImg from '../../assets/img/image-rules-bonus.svg';
function ButtonRules() {
    const [modal, setModal] = useState(false);

    return (
        <Fragment>
            {
                modal &&
                <S.BlackBg>
                    <S.Modal>
                        <div>
                            <strong>RULES</strong>
                            <p onClick={() => setModal(false)}>x</p>
                        </div>
                        <img src={rulesImg} alt='regras do jogo' />
                    </S.Modal>
                </S.BlackBg>

            }
            <S.Container onClick={() => setModal(true)}>
                RULES
            </S.Container>
        </Fragment>
    );
}

export default ButtonRules;