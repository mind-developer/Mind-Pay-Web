import React from 'react';
import styled from 'styled-components';
import MindBear from "../../../assets/images/mindbear.png";

const Container = styled.div`
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    text-align: center;

    
    h1{
        font-size: 42px;
        font-family: 'poppins';
    }

    img{
        width: 250px;
    }
`;

function Dashboard() {
  return <Container>
    <h1>MindPay</h1>
    <img src={MindBear}/>
  </Container>;
}

export default Dashboard;