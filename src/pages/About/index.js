import Image from "next/image";
import { Container, Content, Header } from "../../../styles/About/styles";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";

export default function About() {
  return (
    <>
      <NavBar />
      <Container>
        <Header>
          <Image
            src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </Header>

        <Content>
          <p>Quem somos</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit reiciendis harum, numquam optio assumenda sit eos
            animi. Dolores doloribus excepturi alias dolorem aliquid minus ipsam
            laudantium nihil optio! Suscipit, eius.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Voluptatibus aspernatur fugiat velit necessitatibus tempora dolor,
            dolorem distinctio!
          </p>
        </Content>
      </Container>
      <Footer />
    </>
  );
}
