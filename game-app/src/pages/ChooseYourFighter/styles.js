import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
 transform:translateY(80px);
`;

export const ImgBackground = styled.img`
  position: absolute;
  z-index: -1;
  transform: translateY(50px);
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30%;
  
    article:first-child{
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-between;
    }
    article:last-child{
        margin-top: 30px;
    }
`;

