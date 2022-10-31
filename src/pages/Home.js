import React from 'react';
import styled from 'styled-components';
import bg from '../assets/page-not-found.jpg';

const Home = () => {
  return (
    <Wrapper>
      <div className='img-container'>
        <img src={bg} alt='' />
      </div>
    </Wrapper>
  );
};

export default Home;

export const Wrapper = styled.div`
  .img-container {
    margin: 12rem auto 3rem auto;
    min-height: 500px;
    width: 50%;
    img {
      border-radius: 30px;
      width: 100%;
    }
    @media screen and (max-width: 1024px) {
      width: 100%;
    }
  }
`;
