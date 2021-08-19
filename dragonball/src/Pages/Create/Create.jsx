import * as S from './styled';
import { Title } from '../../Components/Title/styled';

export default function Create() {
  return (
    <>
      <Title>Criar um novo personagem</Title>
      <S.Form>
        <S.Label htmlFor="name">Nome</S.Label>
        <S.Input id="name" type="text"></S.Input>

        <S.Label htmlFor="url">URL da Imagem</S.Label>
        <S.Input id="url" type="text"></S.Input>

        <S.Label htmlFor="raca">Raça</S.Label>
        <S.Select id="raca">
        <option value="" hidden>-</option>
          <option value="Androide">Androide</option>
          <option value="Animal">Animal</option>
          <option value="Dragão">Dragão</option>
          <option value="Humano">Humano</option>
          <option value="Shin-Jin">Shin-Jin</option>
          <option value="Majin">Majin</option>
          <option value="Namekuseijin">Namekuseijin</option>
          <option value="Ogro">Ogro</option>
          <option value="Changeller">Changeller</option>
          <option value="Namekuseijin">Namekuseijin</option>
          <option value="Saiyajin">Saiyajin</option>
          <option value="Tsufurujin">Tsufurujin</option>
        </S.Select>

        <S.Label htmlFor="saga">Saga</S.Label>
        <S.Select id="saga">
        <option value="" hidden>-</option>
          <option value="Pilaf">Pilaf</option>
          <option value="21º Torneio">21º Torneio</option>
          <option value="Red Ribbon">Red Ribbon</option>
          <option value="General Blue">General Blue</option>
          <option value="Comandante Red">Comandante Red</option>
          <option value="Vovó Uranai">Vovó Uranai</option>
          <option value="Tenshinhan">Tenshinhan</option>
          <option value="Piccolo Daimaoh">Piccolo Daimaoh</option>
          <option value="Piccolo Jr.">Piccolo Jr.</option>
          <option value="Saiyajins">Saiyajins</option>
          <option value="Freeza">Freeza</option>
          <option value="Garlic Jr">Garlic Jr</option>
          <option value="Cell">Cell</option>
          <option value="Torneio do Outro Mundo">Torneio do Outro Mundo</option>
          <option value="Majin Boo">Majin Boo</option>
        </S.Select>

        <S.Label htmlFor="poder">Poder de Luta</S.Label>
        <S.Input id="poder" type="number" min="0"></S.Input>
        

        <S.Button>Cadastrar</S.Button>
      </S.Form>
    </>
  )
}