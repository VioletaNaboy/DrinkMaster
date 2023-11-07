// import styled from '@emotion/styled';
import styled from 'styled-components';

export const ContainerDrink = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* background-color: #0a0a11; */
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  padding-top: 80px;
  padding-bottom: 80px;

  @media (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
    padding-top: 60px;
    padding-bottom: 140px;
  }
  @media (min-width: 1440px) {
    padding-left: 100px;
    padding-right: 100px;
    padding-top: 160px;
    max-width: 1440px;
  }
`;

export const Title = styled.h1`
  color: #ffffff;
  text-shadow:
    0 0 5px #00baff,
    0 0 10px #00baff,
    0 0 20px #00baff,
    0 0 40px #00baff,
    0 0 80px #00baff;
`;

// export const Glass = styled.p`
//   color: #ffffff;
//   // text-shadow:
//   //   0 0 5px #00baff,
//   //   0 0 10px #00baff,
//   //   0 0 20px #00baff,
//   //   0 0 40px #00baff,
//   //   0 0 80px #00baff;
// `;

// export const Description = styled.div`
//   color: #ffffff;
// `;

// export const Button = styled.button`
//   color: #000000;
//   border-radius: 42px;
//   padding: 14px 40px;
// `;
