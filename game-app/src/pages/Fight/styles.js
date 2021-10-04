import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    gap: 8vw;
    margin-top: 15vh;
`;
export const ItemChoose = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5vh;
    
    margin-top: 5vh;
    span{
        display: block;
        position: absolute;
        filter: opacity(0.4);
        background:${p=>p.victory?'darkslateblue':'red'};
        width: 350px;
        height: 350px;
        z-index: -1;
        transform: translateY(-50px);
        border-radius: 175px;
        box-shadow: inset 0px -10px 0 rgba(0,0,0,0.1);
    }

`;
export const Title = styled.strong`
    font-size: 20px;
    letter-spacing: 2px;
    color:#f3f3f3;
   
`;
export const WaitingOpponent = styled.div`
    height: 120px;
    width: 120px;
    border-radius: 60px;
    background:rgba(20, 21, 57, 0.3);
`;
export const Result = styled.div`
    display: flex;
    flex-direction: column;
    align-self: center;
    h2{
        text-transform: uppercase;
        font-size: 50px;
        color:#f3f3f3;
        text-shadow: 1px 0px 1px #222;
        margin-bottom: 10px;
    }
    button{
        background:#f3f3f3;
        border: none;
        cursor: pointer;
        padding: 10px;
        border-radius: 5px;
        color: hsl(349, 71%, 52%);
        letter-spacing: 1px;
    }
`;