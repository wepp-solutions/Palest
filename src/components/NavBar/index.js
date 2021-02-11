import { useState } from "react";
import Link from 'next/link'
import { Container, NavBarLinks, IconMenu, SideBar } from "./styles";

export default function NavBar({ elementRef }) {
  const [isActiveSideBar, setActiveSideBar] = useState(false);

  return (
    <>
      <Container elementRef={elementRef}>
        <Link href="/">Palest</Link>
        <IconMenu onClick={isActiveSideBar ? () => setActiveSideBar(false) : () => setActiveSideBar(true)} />
        <NavBarLinks>
          <Link href="Projects">Projetos</Link>
          <Link href="About">Quem somos</Link>
          <button>Contate-nos</button>
        </NavBarLinks>
      </Container>

      <SideBar active={isActiveSideBar}>
        <Link href="/">Palest</Link>
          <Link href="Projects">Trabalhos</Link>
          <Link href="About">Quem somos</Link>
          <button>Contate-nos</button>
      </SideBar>
    </>
  );
}
