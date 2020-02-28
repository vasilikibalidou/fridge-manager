import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  background: gray;
  padding: 2vh;
`;

export const NavLink = styled(Link)`
  color: white;
  font-size: 1.2em;
  padding: 1vw;
  text-decoration: none;
`;

export const Form = styled.form`
  display: flex:
  flex-direction: column;
  padding-top: 5vh;
  
`;

export const Section = styled.div`
  padding: 2vh;
  font-size: 1.2em;
`;

export const Button = styled.button`
  border: 0.5px solid black;
  padding: 2vh;
  font-size: 1em;
`;

export const Input = styled.input`
  padding: 1vh;
  width: 80%;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 1.2em;
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
