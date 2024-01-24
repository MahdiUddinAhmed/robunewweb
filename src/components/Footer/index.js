import React from 'react';
import {
    AiOutlineMail as Email,
    AiFillFacebook as Facebook,
    AiFillPhone as Phone,
    AiFillHome as Room
} from "react-icons/ai";
import {
    Center,
    ContactItem,
    Desc,
    FooterContainer,
    Left,
    List,
    ListItem,
    Logo,
    Right,
    SocialContainer,
    SocialIcon,
    Title
} from './FooterElements';

const Footer = () => {
return (
    <FooterContainer id="footer">
        <Left>
            <Logo>ROBU</Logo>
            <Desc>  Achieve Your Imagination Through Your Robot” is the vision of ROBOTICS CLUB Of BRAC University [ROBU]
            </Desc>
            <SocialContainer>
                <SocialIcon color = '3B5999'>
                    <Facebook/>
                </SocialIcon>
                <SocialIcon  color ="E60023">
                    <Email/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links!</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>BRACU Website</ListItem>
                <ListItem>Terms and Condition</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem>
                <Room/> 66, Dhaka 1212
            </ContactItem>
            <ContactItem>
                <Phone/>  +8801973054376
            </ContactItem>
            <ContactItem>
                <Email/>  club.robu@g.bracu.ac.bd
            </ContactItem>
        </Right>
    </FooterContainer>
)
}

export default Footer
