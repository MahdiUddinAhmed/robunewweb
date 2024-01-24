import Lottie from 'lottie-react';
import React from 'react';
import robot from './Prototype.json';

import {
    AnimatedIcon,
    CampContainer,
    Desc,
    DescContainer,
    HeadingContainter,
    ImageContainer,
    ImageGalleryContainer,
    Title,
} from './prototypestyle';

const images = [
    { original: 'https://i.ibb.co/7nnXbg7/image1.jpg' },
    { original: 'https://i.ibb.co/HqFczM3/image2.jpg' },
    { original: 'https://i.ibb.co/Zg0Gy8m/image3.jpg' },
    { original: 'https://i.ibb.co/k4v4tGs/image4.jpg' },
    { original: 'https://i.ibb.co/sg9mNFv/image5.jpg' },
    { original: 'https://i.ibb.co/93QKxHq/image6.jpg' },
    { original: 'https://i.ibb.co/HKzVFsJ/image7.jpg' },
    { original: 'https://i.ibb.co/X7x29jJ/image8.jpg' },
    { original: 'https://i.ibb.co/hmnwKB6/image9.jpg' },
    { original: 'https://i.ibb.co/X3Mt360/image10.jpg' },
    { original: 'https://i.ibb.co/G3Z1Cqs/image11.jpg' },
    { original: 'https://i.ibb.co/r48QXQG/image12.jpg' },
    { original: 'https://i.ibb.co/wdjQCkW/image13.jpg' },
    { original: 'https://i.ibb.co/Y0Y79b7/image14.jpg' },
    { original: 'https://i.ibb.co/1zn3QGs/image15.jpg' },
    { original: 'https://i.ibb.co/2ZJdvHb/image16.jpg' },
    { original: 'https://i.ibb.co/bL50sDn/image17.jpg' },
    { original: 'https://i.ibb.co/Js9QNmt/image18.jpg' },
    { original: 'https://i.ibb.co/WVbq7qV/image19.jpg' },
];

const Proto = () => {
    
  return (
    <CampContainer>
      <HeadingContainter>
        <AnimatedIcon>
          <Lottie animationData={robot} loop={true} />
        </AnimatedIcon>
        <Title> Prototype </Title>
      </HeadingContainter>
      <DescContainer>
        <Desc>
          <p>
            Robotics club organizes Prototype every semester which serves as
            orientation for our freshers. It is an event organized to get the
            new recruits introduced to our club, its activities, and achievements
            <br />
            <br />
          </p>

          <p>
            At the same time, it is an event where the creative side of our club
            shines the brightest. Our departments and members work tirelessly
            to create Robotics embedded with art and theme to show people the
            fun side of robotics as well as it creates opportunities for our
            members to show their various skills outside robotics, a community
            event that brings the club together to create something grandeur.
          </p>
        </Desc>
      </DescContainer>
      <ImageGalleryContainer>
          {images.map((image, index) => (
            <ImageContainer key={index}>
              <img src={image.original} alt={`Image ${index + 1}`} />
            </ImageContainer>
          ))}
        </ImageGalleryContainer>
    </CampContainer>
  );
};

export default Proto;
