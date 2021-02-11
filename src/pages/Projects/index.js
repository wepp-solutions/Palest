import Image from "next/image";
import {
  Card,
  Container,
  ImageBox,
  WrapperContent,
  Texts,
} from "../../../styles/Projects/styles";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

export default function Projects() {
  return (
    <>
      <NavBar />
      <Container>
        <WrapperContent>
          <Card>
            <ImageBox>
              <Image
                src="https://images.pexels.com/photos/3935351/pexels-photo-3935351.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </ImageBox>
            <Texts>
              <p>Nome do projetos</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi, nemo!
              </p>
            </Texts>
          </Card>
          <Card>
            <ImageBox>
              <Image
                src="https://images.pexels.com/photos/5998023/pexels-photo-5998023.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </ImageBox>
            <Texts>
              <p>Nome do projetos</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi, nemo!
              </p>
            </Texts>
          </Card>
          <Card>
            <ImageBox>
              <Image
                src="https://images.pexels.com/photos/5998040/pexels-photo-5998040.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </ImageBox>
            <Texts>
              <p>Nome do projetos</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi, nemo!
              </p>
            </Texts>
          </Card>
        </WrapperContent>
        <WrapperContent>
          <Card>
            <ImageBox>
              <Image
                src="https://images.pexels.com/photos/3935351/pexels-photo-3935351.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </ImageBox>
            <Texts>
              <p>Nome do projetos</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi, nemo!
              </p>
            </Texts>
          </Card>
          <Card>
            <ImageBox>
              <Image
                src="https://images.pexels.com/photos/5998023/pexels-photo-5998023.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </ImageBox>
            <Texts>
              <p>Nome do projetos</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi, nemo!
              </p>
            </Texts>
          </Card>
          <Card>
            <ImageBox>
              <Image
                src="https://images.pexels.com/photos/5998040/pexels-photo-5998040.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </ImageBox>
            <Texts>
              <p>Nome do projetos</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi, nemo!
              </p>
            </Texts>
          </Card>
        </WrapperContent>
      </Container>
      <Footer />
    </>
  );
}
