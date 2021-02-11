import styled, { css } from "styled-components";
import { VscMenu } from "react-icons/vsc";

export const Container = styled.div`
  position: fixed;
  z-index: 2;
  top: 0;
  padding: 10px 20px;
  width: 100%;

  color: #222;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-around;
  transition: 0.5s ease-in-out;
  transform: translateY(0);

  > a {
    font-size: clamp(1.6rem, 5vw, 2.3rem);
    text-transform: uppercase;
    color: #222;
    text-decoration: none;
  }
`;
export const IconMenu = styled(VscMenu)`
  font-size: clamp(1.6rem, 5vw, 2rem);
  cursor: pointer;

  @media (min-width: 760px) {
    display: none;
  }
`;
export const NavBarLinks = styled.div`
  display: none;

  @media (min-width: 760px) {
    display: flex;
    align-items: center;
    gap: 10px;

    > a {
      text-decoration: none;
      font-size: 20px;
      color: #222;
      letter-spacing: 1px;

      :hover {
        text-decoration: underline;
      }
    }

    > button {
      padding: 10px 20px;
      border: none;
      background: #000;
      color: #eee;
      letter-spacing: 2px;
      font-size: 18px;
      margin-left: 20px;
    }
  }
`;
export const SideBar = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  height: 100%;
  width: 100%;
  background: #fff;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  align-items: center;

  visibility: hidden;
  transition: 0.5s ease-in-out;
  transform: translateY(-100%);

  ${(props) =>
    props.active === true &&
    css`
      visibility: visible;
      transition: 0.5s ease-in-out;
      transform: translateY(0);
    `}

    > a:nth-child(1) {
      font-size: 50px;
      text-decoration: none;
      color: #000;
      padding-bottom: 4px;
      border-bottom: 2px solid #000;
      margin-bottom: 20px;

      :hover {
        text-decoration: none;
      }
    }
    > a {
      font-size: 30px;
      text-decoration: none;
      color: #000;

      :hover {
        text-decoration: underline;
      }
    }

    > button {
      padding: 10px 20px;
      border: 2px solid #000;
      background: transparent;
      color: #000;
      letter-spacing: 2px;
      font-size: 18px;
      margin-top: 20px;

      :hover {
        background: #fff;
        color: #000;
        cursor: pointer;
      }
    }

    @media (min-width: 760px) {
      display: none;
    }
`;
