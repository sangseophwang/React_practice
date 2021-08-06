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
  padding: 0px 10px;
`;

const List = styled.ul`
  display: flex;
  &:hover {
    background-color: blue;
  }
`;

const Item = styled.li``;

const SLink = styled(Link)``;

const exportHeader = () => (
  <Header>
    <List>
      <Item>
        <SLink href="/">Movies</SLink>
      </Item>
      <Item>
        <SLink href="/tv">TV</SLink>
      </Item>
      <Item>
        <SLink href="/search">Search</SLink>
      </Item>
    </List>
  </Header>
);

export default exportHeader;
