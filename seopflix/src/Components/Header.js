import React from "react";
import { Link, withRouter } from "react-router-dom";
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
  border-bottom: 5px solid ${props => (props.current ? "#3498db" : 'transparent')};
  transition: border-bottom .5s ease-in-out
`;

const SLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;


const exportHeader = ({ location: { pathname } }) => (
  <Header>
    <List>
      <Item current={ pathname === '/' }>
        <SLink href="/">Movies</SLink>
      </Item>
      <Item current={ pathname === '/tv' }>
        <SLink href="/tv">TV</SLink>
      </Item>
      <Item current={ pathname === '/search' }>
        <SLink href="/search">Search</SLink>
      </Item>
    </List>
  </Header>
);

// withRouter는 다른 컴포넌트를 감싸는 컴포넌트이다.
// 그리고 Router에 어떠한 정보를 전달한다.
// export하는 건 다른 컴포넌트가 안에 있는 withRouter이다.
export default withRouter(exportHeader);
