import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar.jsx';
import './Main.scss';
import { Container } from '../../Components/Container/styled';
import ReadAll from '../ReadAll/ReadAll';
import Create from '../Create/Create';
import DeleteAll from '../DeleteAll/DeleteAll';
import About from '../About/About';

export default function Main() {
    return(
        <>
            <BrowserRouter>
            <Navbar />
                <Container>
                    <Switch>
                        <Route path="/" exact={true} component={ReadAll}></Route>
                        <Route path="/create" component={Create}></Route>
                        <Route path="/deleteall" component={DeleteAll}></Route>
                        <Route path="/about" component={About}></Route>
                    </Switch>
                </Container>
                
            </BrowserRouter>
        </>
    )
} 