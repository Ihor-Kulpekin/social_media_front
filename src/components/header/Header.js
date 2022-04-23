import React from 'react';
import styled from "styled-components";

const HeaderWrapper = styled.header`
  background-color: rgba(128, 128, 128, 0.37);
  height: 80px;
  color: white;
  font-weight: bold;
  font-size: 30px;
  margin-bottom: 70px;

  .container {
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
  }
  
  .logout {
    &:hover{
      color: gray;
    }
  }
`

const Header = ({logoutFunc, user}) => {
    return (
        <HeaderWrapper>
            <div className="container">
                <div>
                    Todos
                </div>
                {user.email}
                <div className="logout" onClick={logoutFunc}>
                    Logout
                </div>
            </div>
        </HeaderWrapper>
    );
};

export default Header;
