import styled from "styled-components";

export const CampContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  width: 100%;
  height: 100%;
  background-color: rgb(22, 22, 30);
  flex-direction: column;
  color: white;
`;

export const HeadingContainter = styled.div`
  padding: 20px;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
`;

export const Title = styled.h1`
  display: flex;
  margin-top: 50px;
  padding: 20px;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
`;

export const DescContainer = styled.div`
  display: flex;
  margin-top: 50px;
  flex-direction: row;
  padding: 20px;
  margin-bottom: 20px;
  justify-content: center;
  align-items: center;
`;

export const Desc = styled.p`
  width: 70%;
  justify-content: center;
  align-items: center;
  justify-content: center;
  align-items: center;
`;

export const DescImg = styled.img`
  display: flex;
  padding: 20px;
`;

export const AnimatedIcon = styled.div`
  display: flex;
  padding: 20px;
  align-items: left;
  margin-top: 10px;
  margin-left: -180px;
  height: 500px;
  margin-right: 80px;
`;

export const ImageGalleryContainer = styled.div`
  width: 75%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 20px;
`;

export const ImageContainer = styled.div`
  width: auto;
  height: auto;
  font-size: 1.5rem;
  color: rgb(255, 255, 255);
  align-items: center;
  justify-content: center;
  margin: 5px; /* Add margin for spacing between images */
  img {
    width:100%;
    height: 100%;
    object-fit: cover; /* Maintain aspect ratio */
    border-radius: 5px; /* Optional: Add border-radius for rounded corners */
  }
`;

