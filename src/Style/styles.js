import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

// Layout
export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  min-width: 800px;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 1rem;
  border-radius: 6px;
  background-color: white;
`;

export const TodoList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;

`;

export const WillBeDone = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

// Components
export const Form = styled.form`
  display: flex;
  justify-content: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
  
`;

export const TodoInput = styled.input`
  height: 40px;
  width: 240px;
  padding: 0 12px;
  background-color: rgba(241, 243, 247);
  border-radius: 10px;
  border: none;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 6px rgba(100, 58, 199);
  }
  // place holder
  &:placeholder{
      
    }
`;

export const HeaderSection = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
  margin-bottom:1rem;
  color: rgba(30, 30, 30);
  border-bottom: 1px solid rgba(0, 0, 0, 0.15); ;
`;
export const FooterSection = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(30, 30, 30);
  margin-top: 4rem;
`;

export const Navigation = styled.nav`
  ul {
    display: flex;
    list-style: none;
  }
`;

export const Error = styled.div`
  text-align: center;
`;

export const Button = styled.button`
  font-weight: bold;
  background-color: transparent;
  padding:0 10px;
  font-size: 17px;
  color: ${({ bgColor }) => bgColor};
  border: none;
  cursor: pointer;
`;

export const TodoItem = styled.div`
  height: 40px;
  line-height: 40px;
  width: 100%;
  margin: 0 16px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
`;

export const Card = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-content: space-between;
  height: 150px;
  width: 300px;
  padding: 10px;
  margin: 1em auto;
  border-radius: 10px;
  border: 1px solid rgba(111, 73, 211);
`;


export const Title = styled.div`
  text-align: left;
  font-size: 24px;
  padding: 0 1rem;
  font-weight: 600;
  color: ${({ fontColor }) => fontColor};
`;
export const Detail = styled.div`

`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  padding: 1rem;
  color: rgba(30, 30, 30);
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
