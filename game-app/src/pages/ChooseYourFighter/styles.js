import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
 transform:translateY(40px);
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
        
    }
    article:nth-child(2){
      display: flex;
      transform: translateY(-30px);
      gap: 200px;
    }
    article:last-child{
        display: flex;
        gap: 50px;
    }
`;

