import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  position: fixed;
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #5cb1ab;
  padding: 1vh;
`;
export const NavLink = styled(Link)`
  color: white;
  font-size: 1em;
  padding: 1vw;
  text-decoration: none;
`;
export const NavTitle = styled.span`
  font-family: "Lobster";
  padding: 0.5vw;
  font-size: 2em;
`;
export const UnderNavbarDiv = styled.div`
  margin-top: 15vh;
`;

export const Form = styled.form`
  display: flex:
  flex-direction: column;
  padding: 5vh 0;
  align-items: flex-start;
`;

export const Section = styled.div`
  margin-top: 3vh;
  font-size: 1em;
`;

export const Button = styled.button`
  padding: 1vw;
  font-size: 1em;
  width: 30vw;
  border: 0.5px solid lightgray;
  border-radius: 5px;
  background-color: #5cb1ab;
  color: white;
  margin-top: 3vh;
  @media (min-width: 321px) {
    width: 25vw;
  }
  @media (min-width: 426px) {
    width: 15vw;
  }
  @media (min-width: 1025px) {
    width: 10vw;
  }
`;

export const ContainerTitleAndFilter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0vw;
`;
export const SortButton = styled.div`
  width: 30px;
  height: 30px;
  background-image: url(/sort-icon.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
export const FilterLink = styled(Link)`
  width: 30px;
  height: 30px;
  margin: 2vh;
`;
export const SpacerDiv = styled.div`
  width: 30px;
  height: 30px;
  margin: 2vh;
`;

export const Title = styled.h1`
  font-size: 5vh;
  font-family: "Lobster";
  padding: 2vh;
  color: darkgray;
`;

export const DeleteButton = styled.button`
  padding: 1vw;
  font-size: 1em;
  width: 30vw;
  border: 0.5px solid lightgray;
  border-radius: 5px;
  background-color: red;
  color: white;
  margin-top: 3vh;
  @media (min-width: 321px) {
    width: 25vw;
  }
  @media (min-width: 426px) {
    width: 15vw;
  }
  @media (min-width: 1025px) {
    width: 10vw;
  }
`;

export const RemoveButton = styled(DeleteButton)`
  margin-top: 0vh;
  width: 25vw;
  padding: 1vw;
  font-size: 0.8em;
  @media (min-width: 321px) {
    width: 20vw;
  }
  @media (min-width: 376px) {
    width: 20vw;
  }
  @media (min-width: 426px) {
    width: 13vw;
    padding: 0.8vw;
  }
  @media (min-width: 769px) {
    width: 10vw;
    padding: 0.5vw;
  }
  @media (min-width: 1025px) {
    width: 8vw;
  }
`;

export const Input = styled.input`
  padding: 1.5vh;
  width: 52%;
  border: 0.5px solid lightgray;
  border-radius: 5px;
  @media (min-width: 426px) {
    width: 40%;
  }
  @media (min-width: 769px) {
    width: 35%;
    padding: 2vh;
  }
  @media (min-width: 1025px) {
    width: 30%;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 1em;
`;

export const Card = styled.div`
  text-align: center;
`;

export const UserCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70vw;
  margin: 0 auto;
  padding: 2vh;
  @media (min-width: 376px) {
    width: 65vw;
  }
  @media (min-width: 426px) {
    width: 50vw;
  }
  @media (min-width: 769px) {
    width: 40vw;
  }
  @media (min-width: 1025px) {
    width: 30vw;
  }
`;

export const Innerbox = styled.div`
  border-bottom: 3px double grey;
  border-bottom-style: double;
  width: 35vw;
  height: 12vh;
`;

export const ContainerScroll = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-content: flex-start;
  background-color: rgb(242, 249, 250);
  height: 80vh;
  width: 100vw;
  overflow-y: auto;
  border-radius: 45px;
  box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.9);
  border: solid transparent;
  border-width: 70px 15px 40px 15px;
  border-image-source: url(/FridgyFridge.png);
  border-image-slice: 120;
  padding: 10vw;
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0vw;
`;
export const HomeImg = styled.img`
  height: 40vh;
`;

export const LogoImg = styled.img`
  width: 70px;
`;
export const AddImg = styled.img`
  padding-top: 3vh;
  width: 40px;
`;

export const Cleanlist = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  font-size: 1.2em;
`;

export const Select = styled.select`
  width: 52%;
  border: 0.5px solid lightgray;
  border-radius: 5px;
  font-size: 1em;
  margin: 1vw;
  outline: 0;
  padding: 1.8vh;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  @media (min-width: 426px) {
    width: 40%;
  }
  @media (min-width: 769px) {
    width: 35%;
    padding: 2.3vh;
  }
  @media (min-width: 1025px) {
    width: 30%;
  }
`;

export const SmallFridge = styled.div`
  background-image: url("/FridgyFridge.png");
  background-repeat: no-repeat;
  background-size: 35vw;
  margin: 2vh 2vw;
  padding-top: 3vh;
  height: 45vh;
  width: 35vw;
  @media (min-width: 321px) {
    height: 50vh;
    margin: 2vh 3vw;
  }
  @media (min-width: 376px) {
    height: 55vh;
  }
  @media (min-width: 426px) {
    background-size: 15vw;
    height: 45vh;
    width: 15vw;
  }
  @media (min-width: 769px) {
    background-size: 12vw;
    height: 50vh;
    width: 12vw;
  }
  @media (min-width: 1025px) {
    height: 52vh;
  }
`;

//https://www.kasastore.com/files/kasastore_ltd_Files/Foto/740911_2.JPG
