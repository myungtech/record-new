import styled from 'styled-components';


export const HomeContainer = styled.div`
width: 100%;
display: block;
box-sizing: border-box;
margin-left: auto;
margin-right: auto;
padding: 30px;

@media screen and(max-width: 1280px){
max-width: 1280px;
}

@media screen and (max-width: 600px){
    padding-left: 24px;
    padding-right: 24px;
}
`;

export const HomeGridContainer = styled.div`
    width: calc(100% + 24px);
    justify-content: space-between;
    width: 100%;
    box-sizing: border-box;
    display:grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: 16px;

@media screen and (max-width: 768px){
    grid-template-columns: 1fr;
}

`;
