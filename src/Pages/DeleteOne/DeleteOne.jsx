import * as S from './styled';
import { Title } from '../../Components/Title/styled';
import { Api } from '../../Api/Api';
import { useHistory } from 'react-router';
import Loading from '../../Components/Loading/Loading';
import { useState } from 'react';

export default function DeleteOne(props) {
<<<<<<< HEAD

=======
>>>>>>> c4a3491c369ed8c521366576d45a3de17f27eb8d
  const item = props.location.state;

  const history = useHistory();
  const [loading, setLoading] = useState(false);

  const goToHome = () => {
    history.push('/');
<<<<<<< HEAD
  }

  const goToItem = () => {
    history.push(`/view/${item._id}`, item);
  }

  const clickHandler = async event => {
    setLoading(true);
    event.preventDefault();
    
    await Api.buildApiDeleteRequest(Api.deleteUrl(item._id))
    .catch(e => {
      console.error('Error ao tratar deletar o item: ', e)
    })

    goToHome();
  }
=======
  };

  const goToItem = () => {
    history.push(`/view/${item._id}`, item);
  };

  const clickHandler = async (event) => {
    setLoading(true);
    event.preventDefault();

    await Api.buildApiDeleteRequest(Api.deleteUrl(item._id)).catch((e) => {
      console.error('Error ao tratar deletar o item: ', e);
    });

    goToHome();
  };
>>>>>>> c4a3491c369ed8c521366576d45a3de17f27eb8d

  return (
    <>
      {loading === true ? (
        <Loading />
      ) : (
        <>
          <Title>Deletar</Title>

          <S.Text>
            Você tem certeza que quer deletar o personagem{' '}
            <span>{item.name}</span>?
          </S.Text>

          <S.ButtonArea>
            <S.ButtonCancel onClick={goToItem}>Cancelar</S.ButtonCancel>
            <S.ButtonDelete onClick={clickHandler}>Deletar</S.ButtonDelete>
          </S.ButtonArea>
        </>
      )}
    </>
  );
}
