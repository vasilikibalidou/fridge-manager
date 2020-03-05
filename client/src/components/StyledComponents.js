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

export const Span = styled.span`
  font-size: 1.2em;
  font-family: "Lobster";
  font-weight: lighter;
  color: darkgray;
`;

export const CheckboxLabel = styled.label`
  margin: 0 2vw;
`;
export const Label = styled.label`
  width: 70vw;
  @media (min-width: 769px) {
    width: 50vw;
  }
`;

export const H2 = styled.h2`
padding: 3vw
  width: 70vw;
  text-align: center;
`;
export const Form = styled.form`
  display: flex:
  flex-direction: column;
  padding: 5vh 0 2vh 0;
  align-items: flex-start;
  @media (min-width: 426px) {
    
  }
  @media (min-width: 769px) {
    
  }
  @media (min-width: 1025px) {
    
  }
`;

export const Input = styled.input`
  padding: 1.5vh;
  width: 50vw;
  border-radius: 5px;
  @media (min-width: 426px) {
    width: 35vw;
  }
  @media (min-width: 769px) {
    width: 30vw;
  }
  @media (min-width: 1025px) {
    width: 25vw;
  }
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
    width: 35vw;
  }
  @media (min-width: 769px) {
    width: 30vw;
    padding: 2.3vh;
  }
  @media (min-width: 1025px) {
    width: 25vw;
  }
`;

export const Section = styled.div`
  margin-top: 3vh;
  font-size: 1em;
`;

export const Button = styled.button`
  padding: 1vw;
  font-size: 0.9em;
  width: 30vw;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  background-color: #5cb1ab;
  color: white;
  margin-top: 3vh;
  @media (min-width: 321px) {
    width: 25vw;
  }
  @media (min-width: 426px) {
    width: 15vw;
  }
  @media (min-width: 769px) {
    width: 12vw;
    font-size: 0.7em;
  }
  @media (min-width: 1025px) {
    width: 10vw;
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0vw;
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
  margin: 3vh;

  display: flex;
  justify-content: center;
  align-items: center;
  color: #414042;

  @media (min-width: 321px) {
    width: 100px;
  }
`;
export const FilterSpan = styled.span`
  display: none;
  @media (min-width: 321px) {
    display: block;
  }
`;
export const SpacerDiv = styled.div`
  width: 30px;
  height: 30px;
  margin: 3vh;

  @media (min-width: 321px) {
    width: 100px;
  }
`;

export const MainTitle = styled.h1`
  font-size: 2em;
  font-family: "Lobster";
  padding: 2vh;
  color: #414042;
`;
export const Title = styled.h1`
  font-size: 5vh;
  font-family: "Lobster";
  padding: 2vh;
  color: #414042;
`;

export const DeleteButton = styled.button`
  padding: 1vw;
  font-size: 0.9em;
  width: 30vw;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  background-color: #f05050;
  color: white;
  margin: 3vh 0;
  @media (min-width: 321px) {
    width: 25vw;
  }
  @media (min-width: 426px) {
    width: 15vw;
  }
  @media (min-width: 769px) {
    width: 12vw;
    font-size: 0.7em;
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

export const Textarea = styled.textarea`
  padding: 1.5vh;
  width: 60vw;
  height: 20vh;
  border: 0.5px solid lightgray;
  border-radius: 5px;
  @media (min-width: 426px) {
    width: 50vw;
  }
  @media (min-width: 769px) {
    width: 40vw;
  }
  @media (min-width: 1025px) {
    width: 35vw;
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
  justify-content: space-around;
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

export const UserName = styled.div`
  flex: 1;
`;
export const UserDeleteButton = styled.div`
  flex: 1;
`;

export const Innerbox = styled.div`
  border-bottom: 3px double grey;
  border-bottom-style: double;
  width: 35vw;
  @media (min-width: 376px) {
    width: 30vw;
  }
  @media (min-width: 426px) {
    width: 15vw;
  }
  @media (min-width: 769px) {
    width: 10vw;
  }
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

export const ContainerFridgedetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(/FridgyFridge.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0 auto;
  width: 90vw;
  height: 70vh;
  border-radius: 45px;
  @media (min-width: 321px) {
    width: 80vw;
  }
  @media (min-width: 376px) {
    width: 70vw;
  }
  @media (min-width: 426px) {
    width: 35vw;
  }
  @media (min-width: 769px) {
    width: 28vw;
  }
  @media (min-width: 1025px) {
    width: 25vw;
  }
`;
export const ContainerFridgeInside = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-around;
  background-color: rgb(242, 249, 250);
  overflow-y: auto;
  padding: 10px;
  width: 95%;
  height: 95%;
  border-radius: 45px;
  border: solid transparent;
  box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.9);
  border-width: 0px;
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
  margin: 0vw auto;
  padding: 0vw;
  font-size: 1em;
  text-align: center;
  width: 75vw;
`;
export const Li = styled.li`
  list-style-type: none;
  margin: 0vw auto;
  padding: 0vw;
  font-size: 1em;
  text-align: center;
  width: 50vw;
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

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80vw;
  margin: 0 auto;
  padding-bottom: 5vh;
  @media (min-width: 376px) {
    width: 72vw;
  }
  @media (min-width: 426px) {
    width: 58vw;
  }
  @media (min-width: 769px) {
    width: 38vw;
  }
  @media (min-width: 1025px) {
    width: 32vw;
  }
`;
export const GroupButton = styled(Button)`
  width: 25vw;
  height: 11vh;
  @media (min-width: 376px) {
    width: 22vw;
    height: 10vh;
  }
  @media (min-width: 426px) {
    width: 18vw;
    height: 10vh;
  }
  @media (min-width: 769px) {
    width: 12vw;
    height: 8vh;
  }
  @media (min-width: 1025px) {
    width: 10vw;
  }
`;

export const GroupDeleteButton = styled(DeleteButton)`
  width: 25vw;
  height: 11vh;
  @media (min-width: 376px) {
    width: 22vw;
    height: 10vh;
  }
  @media (min-width: 426px) {
    width: 18vw;
    height: 10vh;
  }
  @media (min-width: 769px) {
    width: 12vw;
    height: 8vh;
  }
  @media (min-width: 1025px) {
    width: 10vw;
  }
`;

export const Center = styled.div`
  margin: 0 auto;
`;

export const StyledFooter = styled.footer`
  font-size: 0.8em;
  background: #e6e6e6;
  height: 8vh;
  padding-top: 2vh;
  position: relative;
  left: 0;
  bottom: 0;
`;
