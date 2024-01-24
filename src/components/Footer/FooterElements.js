import styled from 'styled-components';

export const FooterContainer = styled.div `
    padding: 20px;
    padding-left: 10vh;
    display: flex;
    align-items: center;
    justify-content: center;
    display: flex;
    height: 250px;
    background-color: #010010;
    @media screen and (max-width: 960px){
        display: flex;
        align-content: center;
        justify-content: center;
        height: auto;
    }

`;
export const Left = styled.div `
    flex: 1;
    padding: 20px;
    
`;
export const Center = styled.div `
    flex: 1;
    padding: 20px;
`;
export const Title = styled.h3`
    margin-bottom: 30px;
    color: white;
`;

export const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

export const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
    color: white;
`;
export const Right = styled.div `
    flex: 1;
    padding: 20px;
`;
export const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    color: white;
`;

export const Payment = styled.img`
    width: 50%;
`;
export const Logo = styled.h1`
    color: white;
`;

export const Desc = styled.p `
    margin: 20px opx;
    color: white;
`;
export const SocialContainer = styled.div`
    display: flex;
`;
export const SocialIcon = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 45%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;
