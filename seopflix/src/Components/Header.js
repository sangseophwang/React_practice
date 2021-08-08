import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  background-color: rgba(20, 20, 20, 0.7);
  z-index: 10;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  width: 80px;
  height: 50px;
  text-align:center;
  border-bottom: 5px solid ${props.current ? "red" : 'transparent'};
`;

const SLink = styled(Link)`

height: 50px;
display: flex;
align-items: center;
justify-content: center;

`;

const exportHeader = () => (
  <Header>
    <List>
      <Item current={true}>
        <SLink href="/">Movies</SLink>
      </Item>
      <Item current={true}>
        <SLink href="/tv">TV</SLink>
      </Item>
      <Item current={true}>
        <SLink href="/search">Search</SLink>
      </Item>
    </List>
  </Header>
);

export default exportHeader;
