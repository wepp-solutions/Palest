import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 100px auto;
  height: 100%;
`;
export const Header = styled.div`
    position: relative;
    width: 100%;
    height: 400px;
`
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    margin-top: 30px;
    width: 90%;

    p:nth-child(1) {
        font-size: clamp(1.5rem, 5vw, 2rem);
        font-weight: 800;
        color: #444;
    }
    p:nth-child(2) {
        font-size: clamp(1.2rem, 5vw, 1.4rem);
        font-weight: 300;
        color: #444;
    }
    p:nth-child(3) {
        font-size: clamp(1rem, 5vw, 1.2rem);
        font-weight: 300;
        width: min(600px, 100%);
        color: #444;
    }
`