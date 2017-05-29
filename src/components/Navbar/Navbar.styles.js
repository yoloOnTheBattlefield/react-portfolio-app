import styled from 'styled-components';

const height = '60px';
const color = 'white';
const backgroundColor = '#211F1F';

//add transition in the render    mothafukkaaa


export const Nav = styled.nav`
  width: 100vw;
  display: flex;
  position: fixed;
  margin: 0;
  z-index: 100;
  background: ${backgroundColor};
  transform: ${props => props.show ? 'translatey(0) ' : `translatey(-${height})`};
  transition: 0.5s cubic-bezier(0.05, 1, 0.54, 1);
  ul{
    margin: 0 auto;
    display: flex;
    list-style: none;
    width: 80%;
    height: ${height};
    justify-content: space-around;
    li{
      display: flex;
      color: ${color};
      box-sizing: border-box;
      border-bottom: 3px solid rgba(255,255,255,0.0);
      transition: 0.2s;
      &:hover{
       border-bottom: 3px solid $color;
       cursor: pointer;
      }
      a{
        font-family: 'Raleway', sans-serif;
        font-size: 16px;
        margin: auto;
        color: ${color};
        line-height: 60px;
        align-items: center;
        &:hover{
          color: ${color};
        }
      }
    }
  }
`;

export const Logo = styled.li`
  width: 40%;
  border: 0;
  display: flex;
  a{
    margin-left: 20px;
    font-family: 'Dancing Script', cursive;
    font-size: 30px;
    color: ${color};
  }
  &:hover{
    border: 0;
  }
`;
