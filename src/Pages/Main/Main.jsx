import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import './Main.scss';
<<<<<<< HEAD
import { Background } from '../../Components/Background/styled';
=======
>>>>>>> c4a3491c369ed8c521366576d45a3de17f27eb8d
import { Container } from '../../Components/Container/styled';
import ReadAll from '../ReadAll/ReadAll';
import Create from '../Create/Create';
import DeleteAll from '../DeleteAll/DeleteAll';
import About from '../About/About';
import ReadOne from '../ReadOne/ReadOne';
import DeleteOne from '../DeleteOne/DeleteOne';
import UpdateOne from '../UpdateOne/UpdateOne';
import Error from '../Error/Error';
<<<<<<< HEAD

export default function Main() {
  
=======
import { ThemeButton } from '../../Components/ThemeButton/styled';
import { GlobalStyles } from '../../Components/GlobalStyles/styled';
import { lightTheme, darkTheme } from '../../Components/Theme/styled';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

export default function Main() {
  const [theme, setTheme] = useState('light');

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

>>>>>>> c4a3491c369ed8c521366576d45a3de17f27eb8d
  return (
  <Background>
      <BrowserRouter>
        <Navbar />
        <Container>
          <Switch>
            <Route path="/" exact component={ReadAll}></Route>
            <Route path="/create" component={Create}></Route>
            <Route path="/deleteall" component={DeleteAll}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/view/:id" component={ReadOne}></Route>
            <Route path="/delete/:id" component={DeleteOne}></Route>
            <Route path="/update/:id" component={UpdateOne}></Route>
            <Route component={Error}></Route>
          </Switch>
<<<<<<< HEAD
=======

          <ThemeButton
            className="im im-light-bulb"
            onClick={themeToggler}
          ></ThemeButton>
>>>>>>> c4a3491c369ed8c521366576d45a3de17f27eb8d
        </Container>
      </BrowserRouter>
  </Background>
  );
}
