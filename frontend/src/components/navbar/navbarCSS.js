import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';


export const Nav = styled.nav`
background-color:#3f51b5;
height: 80px;
display:flex;
justify-content: center;
align-items:center;
font-size:1rem;
position:sticky;
top:0;
z-index:10;

@media screen and(max-width: 960px){
    transition: 0.8s all ease;
}
`;

export const NavbarContainer = styled.div`
display: flex;
justify-content: space-between;
height: 80px;
width: 100%;
z-index: 1;
padding: 0 60px;
`;

export const NavbarLogo = styled(LinkR)`
color: #fff;
justify-sef: flex-start;
cursor: pointer;
font-size: 1.5rem;
display: flex;
align-items: center;
margin-left: 24px;
font-weight: bold;
text-decoration: none;

`;

export const MobileIcon = styled.div`
display:none;

@media screen and (max-width:760px){
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%,60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
}

`

export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;
margin-right: -22px;

@media screen and (max-width:768px){
    display: none;
}

`;

export const NavItem = styled.li`
display: flex;
align-items: center;
height: 80px;
`;


export const NavBtn = styled.nav`
display:flex;
align-items:center;

@media screen and (max-width:768px){
    display:none;
}

`;

export const NavBtnLink = styled(LinkR)`
border-radius:50px;
background:#01bf71;
white-space:nowrap;
padding:10px 22px;
color:#010606;
font-size:16px;
outline:none;
border:none;
cursor:pointer;
transition:all 0.2s ease-in-out;
text-decoration:none;

&:hover{
    transition:all 0.2s ease-in-out;
    background:#fff;
    color:#010606; 
}

`;