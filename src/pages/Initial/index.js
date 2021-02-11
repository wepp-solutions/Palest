import Image from "next/image";
import {
  Container,
  ImageBox,
  Card,
  InfoHeader,
  Texts,
  Infos
} from "../../../styles/Initial/styles";
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'

export default function Initial() {
  return (
    <Container>
        <NavBar />
      <InfoHeader>
        <p>Nossa Missão</p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem quos
          ipsam, blanditiis sit dolores distinctio porro?
        </p>
      </InfoHeader>

      <Card>
        <ImageBox>
          <Image
            src="https://images.pexels.com/photos/2082087/pexels-photo-2082087.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </ImageBox>

        <Infos>
          <Texts>
            <p>Nome do projeto</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, ea!</p>
          </Texts>
          <button>Ver Projeto</button>
        </Infos>
      </Card>
      <Card>
        <ImageBox>
          <Image
            src="https://images.pexels.com/photos/4050318/pexels-photo-4050318.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </ImageBox>

        <Infos>
          <Texts>
            <p>Nome do projeto</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, ea!</p>
          </Texts>
          <button>Ver Projeto</button>
        </Infos>
      </Card>
      <Card>
        <ImageBox>
          <Image
            src="https://images.pexels.com/photos/3935311/pexels-photo-3935311.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </ImageBox>

        <Infos>
          <Texts>
            <p>Nome do projeto</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, ea!</p>
          </Texts>
          <button>Ver Projeto</button>
        </Infos>
      </Card>
      <Footer />
    </Container>
  );
}
