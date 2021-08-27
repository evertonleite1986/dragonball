import * as S from './styled';
import { Title } from '../../Components/Title/styled';
import { useHistory } from 'react-router-dom';

export default function Error() {
<<<<<<< HEAD
  return <h2>Aqui vamos criar uma rota de 404</h2>;
=======
  const history = useHistory();
  const goToHome = () => {
    history.push('/');
  };

  return (
    <S.Page>
      <S.Img src="https://giphy.com/embed/EoBpmHNvXJxOU" />
      <Title>Página não encontrada!</Title>
      <S.Button onClick={goToHome}>Me tire daqui!</S.Button>
    </S.Page>
  );
>>>>>>> c4a3491c369ed8c521366576d45a3de17f27eb8d
}
