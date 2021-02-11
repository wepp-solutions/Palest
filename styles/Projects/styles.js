import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 100px auto;
  width: 90%;
`;
export const WrapperContent = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 100%;
  margin-top: 50px;

  @media (max-width: 850px) {
    flex-direction: column;
    gap: 30px;
  }
`;
export const ImageBox = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
`;
export const Card = styled.div`
  width: 100%;
`;
export const Texts = styled.div`
  margin-top: 10px;

  p:nth-child(1) {
    font-size: clamp(1.2rem, 5vw, 1.4rem);
    font-weight: 700;
  }
  p:nth-child(2) {
    font-size: clamp(0.5rem, 5vw, 1.2rem);
    font-weight: 400;
  }
`;
