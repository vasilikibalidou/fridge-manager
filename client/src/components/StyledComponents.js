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
`;

export const Section = styled.div`
  padding: 2vh;
  font-size: 1em;
`;

export const Button = styled.button`
  padding: 1.5vh 3vh;
  font-size: 1em;
  border: 0.5px solid lightgray;
  border-radius: 5px;
  background-color: #5cb1ab;
  color: white;
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
  border: 1px solid black;
  padding: 2vh;
  width: 30vw;
  height: 15vh;
  margin-bottom: 5vh;
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 2vw;
`;

export const HomeImg = styled.img`
  height: 40vh;
`;

export const LogoImg = styled.img`
  width: 70px;
`;
