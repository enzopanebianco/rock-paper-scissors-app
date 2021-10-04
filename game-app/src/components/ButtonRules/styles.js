import styled from 'styled-components';

export const Container = styled.button`
  background: transparent;
  border: 2px solid hsl(217, 16%, 45%);
  outline: none;
  color: #f3f3f3;
  padding: 5px 25px;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 1px;
  border-radius: 8px;
  cursor: pointer;
  position: absolute;
  bottom: 30px;
  right: 30px;
`;
export const BlackBg = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  left: 0;
  top:0;
  z-index: 1000;
  background: rgba(0,0,0,0.5);
`;
export const Modal = styled.div`
  display: flex;
  padding: 10px;
  background: #f3f3f3;
  border-radius: 5px;
  position: absolute;
  z-index: 1001;
  right: 50%;
  bottom: 50%;
  flex-direction: column;
  transform: translateY(50%) translateX(50%);
  div{
    display: flex;
    margin-top: 10px;
    margin-bottom: 20px;
    padding: 0px 10px;
    justify-content: space-between;
    align-items: center;
    strong{
      color: hsl(229, 25%, 31%);
      font-size: 25px;
    }
    p{
      cursor: pointer;
      color: hsl(217, 16%, 45%);
      font-size: 30px;
      
    }
  }
  img{
    padding: 8px;
  }
`;
