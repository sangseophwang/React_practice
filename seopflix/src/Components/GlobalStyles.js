// 이 곳은 전체 페이지에 적용할 공통 SC를 담아두는 곳이다. 

import { createGlobalStyle } from "styled-components";

// styled-reset은 SC를 이용해서 cssㄹ르 초기화시킨다. 0의 상태로 시작하도록 만든다.
import reset from 'styled-reset'

const globalStyles = createGlobalStyle`

    ${reset};
    a{
        text-decoration: none;
        color: inherit;
    }
    *{
        box-sizing: border-box;
    }
    body{
        font-family:--apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 12px;
        background-color:rgba(20, 20, 20, 1);
        color: white;
        padding-top: 50px;
    }

`

export default globalStyles;