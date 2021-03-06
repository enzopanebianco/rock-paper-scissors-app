import styled from 'styled-components';

export const Container = styled.div`
  border: 2px hsl(217, 16%, 45%) solid;
  display: flex;
  justify-content: space-between;
  border-radius:10px;
  padding: 8px;
  margin: 0 auto;
  width: 45%;
  height: 150px;
  transform: translateY(20px);
  align-items: center;
`;
export const Title = styled.div`
    display: flex;
    margin-left: 10px;
    position: relative;
    flex-direction: column;
    justify-content: center;
    strong{
        color:#f3f3f3;
        font-size: 25px;
        text-shadow: 1px 0px 1px #222;
        
    }
    strong:nth-child(1){
        transform: translateY(10px);
    }
   
    strong:nth-child(3){
        transform: translateY(-10px);
    }
    strong:nth-child(4){
        transform: translateY(-20px);
    }
    strong:nth-child(5){
        transform: translateY(-30px);
    }
`;
export const Score = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px 30px;
    background: 10px;
    border-radius:10px;
    align-items: center;
    background: #f3f3f3;
    margin-right: 10px;
    p{
        color: hsl(229, 64%, 46%);
        font-weight: 600;
        letter-spacing: 2px;
        font-size: 15px;
    }
    strong{
        font-size: 50px;
        color: hsl(217, 16%, 45%);
        padding: 0px 10px;
    }
`;