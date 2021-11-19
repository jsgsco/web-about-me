import { Title, SubTitle, Text, Highlight, Icons, Dir } from './style/Addons';
import { Container } from './style/Container';
import { AiFillFacebook, AiFillInstagram, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { Helmet } from 'react-helmet';


export default function App() {
  return (
    <Container fluid>
      <Helmet>
        <title>Jhon Saavedra</title>
        <meta name="author" content="Jhon Steven Saavedra" />
        <meta name="copyright" content="Jhon Steven Saavedra" />
        <meta name="keywords" content="Jhon Saavedra, Jhon Steven Giron Saavedra, Frontend Developer, Frontend" />
        <meta name="description" content="Information about Jhon Steven Saavedra"/>
      </Helmet>
      <Container>
          <Title>Hello!</Title>
          <SubTitle mt>My name is Jhon Steven Saavedra.</SubTitle>
          <Text mt>
            I am a software developer, currently working at Woombat Consulting Group, most of my open source will be on <Highlight href="https://github.com/jsgsco" target="_blank">GitHub</Highlight>.
          </Text>
          <Text mt>
            I can speak advanced Portuguese and in my day to day I use English a lot.
          </Text>
          <Text mt>
            Besides programming, playing the piano is one of my great strengths too and in my free time I usually watch movies or read.
          </Text>
          <Icons>
            <Dir href="https://www.facebook.com/jhondev2/" target="_blank"><AiFillFacebook /></Dir>
            <Dir href="https://www.instagram.com/jsgsco/" target="_blank"><AiFillInstagram /></Dir>
            <Dir href="https://github.com/jsgsco/" target="_blank"><AiFillGithub /></Dir>
            <Dir href="https://www.linkedin.com/in/jsgsco/" target="_blank"><AiFillLinkedin /></Dir>
          </Icons>
      </Container>
    </Container>
  );
}
