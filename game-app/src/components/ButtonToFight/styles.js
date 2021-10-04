import styled from "styled-components";

export const Container = styled.div`
    background: ${p=>`radial-gradient(circle at bottom,${p.color})`};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 75px;
    height: 150px;
    width: 150px;
    box-shadow: inset 0px -8px 0 rgba(0,0,0,0.15),0 5px 0 rgba(0,0,0,0.15);
`;
export const Button = styled.button`
    background: #fdfdfd;
    border: 0px;
    height: 115px;
    width: 115px;
    border-radius: 57.5px;
    cursor: pointer;
    box-shadow: inset 0px 5px 0 rgba(0,0,0,0.15);
`;