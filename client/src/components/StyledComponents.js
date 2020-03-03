import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  background: lightgray;
  padding: 2vh;
`;

export const NavLink = styled(Link)`
  color: white;
  font-size: 1em;
  padding: 2vw;
  text-decoration: none;
`;

export const Form = styled.form`
  display: flex:
  flex-direction: column;
  padding-top: 5vh;
  align-items: flex-start;
  
`;

export const Section = styled.div`
  margin-top: 3vh;
  padding: 2vh;
  font-size: 1em;
`;

export const Button = styled.button`
  padding: 1.5vh 3vh;
  font-size: 1em;
  width: 45vw;
  border: 0.5px solid lightgray;
  border-radius: 5px;
  background-color: #5cb1ab;
  color: white;
  margin-top: 3vh;
`;

export const DeleteButton = styled.button`
  padding: 1.5vh 3vh;
  font-size: 1em;
  width: 45vw;
  border: 0.5px solid lightgray;
  border-radius: 5px;
  background-color: red;
  color: white;
  margin-top: 3vh;
`;

export const Input = styled.input`
  padding: 1.5vh;
  width: 50%;
  border: 0.5px solid lightgray;
  border-radius: 5px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 1em;
`;

export const Card = styled.div`
  text-align: center;
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
  padding: 10vw;
  background-color: rgb(242, 249, 250);
  height: 80vh;
  width: 100vw;
  overflow-y: auto;
  border-radius: 45px;
  box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.9);
  border: solid transparent;
  border-width: 70px 15px 40px 15px;
  border-image-source: url(https://www.kasastore.com/files/kasastore_ltd_Files/Foto/740911_2.JPG);
  border-image-slice: 120;
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

export const Title = styled.h1`
  font-size: 5vh;
  font-family: "Lobster";
  padding: 2vh;
  color: darkgray;
`;

export const Cleanlist = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  font-size: 1.2em;
`;

export const Select = styled.select`
  width: 50%;
  border: 0.5px solid lightgray;
  border-radius: 5px;
  font-size: 1em;
  margin: 1vw;
  outline: 0;
  padding: 1.8vh;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
`;

export const SmallFridge = styled.div`
  background-image: url("https://www.kasastore.com/files/kasastore_ltd_Files/Foto/740911_2.JPG");
  height: 40vh;
  width: 50vw;
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;
  margin: 2vh 0vh;
`;
export const NavTitle = styled.span`
  font-family: "Lobster";
  font-size: 3vh;
`;
