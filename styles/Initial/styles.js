import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 200px auto;
`;
export const InfoHeader = styled.div`
  margin-bottom: 100px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  p:nth-child(1) {
    font-size: clamp(1rem, 5vw, 1.2rem);
  }
  p:nth-child(2) {
    font-size: clamp(1.5rem, 5vw, 1.7rem);
    width: min(800px, 90%);
  }
`;
export const ImageBox = styled.div`
  position: relative;
  width: 100%;
  height: 600px;
`;
export const Card = styled.div`
  width: 90%;
`;
export const Infos = styled.div`
  display: flex;
  padding: 40px 0;
  align-items: center;
  justify-content: space-between;

  button {
    padding: 10px 20px;
    background: #222;
    color: #eee;
    border: none;
    outline: none;
    font-size: clamp(1rem, 5vw, 1.3rem);
    font-weight: 300;
  }

  @media (max-width: 760px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
`;
export const Texts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  p:nth-child(1) {
    font-size: clamp(1.5rem, 5vw, 2rem);
    font-weight: 500;
  }
  p:nth-child(2) {
    font-size: clamp(1rem, 5vw, 1.3rem);
    font-weight: 300;
    width: min(500px, 100%);
  }
`;
