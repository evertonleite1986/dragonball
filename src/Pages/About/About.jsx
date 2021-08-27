import { Title } from '../../Components/Title/styled';
import { Paragraph } from '../../Components/Paragraph/styled';
import * as S from './styled';
import everton from './everton.jpg';

export default function About() {
  return (
<<<<<<< HEAD
    <div>
    <Title>Sobre</Title>
      <Paragraph>
        Me chamo Everton Vieira Leite, sou estudante de Desenvolvimento Front-End, na BlueEdTech. 
      </Paragraph>
      
      <Paragraph>
        Projeto realizado com ReactJs. usando CRUD. Neste projeto aprendi como utilizar o famoso CRUD(Create, Read, Update, Delete), onde torna-se possivel com a utilização de uma API, inserir dados, ler os dados, modificá-los e deletá-los.
      </Paragraph>

        <S.Img src={everton}></S.Img>
      

      <Paragraph>
        Seguem abaixo os links para contato:
=======
    <>
      <Title>Sobre</Title>
      <Paragraph>
        Esse é o primeiro projeto do quarto módulo de especialidade em Front-end
        da Blue EdTech. A ideia é integrar um Frontend desenvolvido com React.js
        com um Backend existente. O objetivo principal é incrementar as
        habilidades de desenvolvimento e também conhecer as operações de um CRUD
        (Create, read, update e delete).
      </Paragraph>

      <Paragraph>
        Meu nome é Isabella sou desenvolvedora Fullstack e professora na Blue
        EdTech no módulo de Frontend.
      </Paragraph>

      <S.ImgCard>
        <S.Img src={isa}></S.Img>
      </S.ImgCard>

      <Paragraph>
        Se tiver dúvidas ou quiser entrar em contato, é só me seguir nas redes e
        trocar uma ideia, se eu puder ajudar estou a disposição:
>>>>>>> c4a3491c369ed8c521366576d45a3de17f27eb8d
      </Paragraph>

      <S.SocialBlock>
        <a
<<<<<<< HEAD
          href="https://github.com/evertonleite1986"
=======
          href="https://github.com/isabellanunes"
>>>>>>> c4a3491c369ed8c521366576d45a3de17f27eb8d
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="im im-github"></i>
        </a>
<<<<<<< HEAD
        
        <a
          href="https://linkedin.com/in/everton-vieira-leite-94a957160"
=======
        <a
          href="https://open.spotify.com/user/n1dqwfofokv86pd8lgh6jcro0?si=a2da442b4f9f42de"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="im im-spotify"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/isabellanunes/"
>>>>>>> c4a3491c369ed8c521366576d45a3de17f27eb8d
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="im im-linkedin"></i>
        </a>
<<<<<<< HEAD
        
        <a
          href="mailto:everton_leite25@hotmail.com"
=======
        <a
          href="https://isabellanunes.me"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="im im-globe"></i>
        </a>
        <a
          href="https://www.instagram.com/isadfrn/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="im im-instagram"></i>
        </a>
        <a
          href="mailto:isabelladefreitasnunes@gmail.com"
>>>>>>> c4a3491c369ed8c521366576d45a3de17f27eb8d
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="im im-mail"></i>
        </a>
      </S.SocialBlock>
<<<<<<< HEAD
    </div>
=======
    </>
>>>>>>> c4a3491c369ed8c521366576d45a3de17f27eb8d
  );
}
