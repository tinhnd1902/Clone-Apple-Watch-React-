import styled from "@emotion/styled";
import banner from "../../assets/images/banner-1.png";

export const ContainerHome = styled.div`
  // background-image: url("${banner}");
  width: 100%;
  margin: auto;
  max-width: 64%;
  padding-top: 200px;
  /*Ipad ngang(1024 x 768)*/
  @media screen and (max-width: 1024px) {
    padding-top: 150px;
  }
  /*Ipad dọc(768 x 1024)*/
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const HomeContent = styled.div`
  display: flex;
  h1 {
    font-size: 58px;
    line-height: 68px;
    color: #fff;
    margin-bottom: 25px;
  }
  p {
    font-size: 16px;
    color: #fff;
  }
  /*Ipad ngang(1024 x 768)*/
  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  /*Ipad dọc(768 x 1024)*/
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const CaptionImage = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  margin-right: 68px;
  margin-bottom: 68px;
  /*Ipad ngang(1024 x 768)*/
  @media screen and (max-width: 1024px) {
    display: flex;
    justify-content: center;
    margin-right: 0px;
    padding-left: 0px;
    padding-right: 0px;
    img {
      width: 55%;
    }
  }
  /*Ipad dọc(768 x 1024)*/
  @media screen and (max-width: 768px) {
    img {
      width: 45%;
    }
  }
`;

export const CaptionContent = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  h1 {
    font-weight: 800;
    margin: 0 0 25px;
  }
  /*Ipad ngang(1024 x 768)*/
  @media screen and (max-width: 1024px) {
    text-align: center;
  
    h1{
      font-size: 40px;
    }
  }
  /*Ipad dọc(768 x 1024)*/
  @media screen and (max-width: 768px) {
    text-align: center;
  
    h1{
      font-size: 40px;
    }
  }
`;

export const HeroButton = styled.div`
  margin-top: 50px;
  button {
    color: #fff;
    overflow: hidden;
    background-color: Transparent;
    background-repeat: no-repeat;
    border: 1px solid #fff;
    border-radius: 30px;
    padding: 14px 40px;
    margin: 0 10px 0 0;
    font-weight: 600;
    cursor: pointer;
    // outline:none
    font-size: 14px;
  }
  & button:hover {
    background-color: #fff;
    color: blue;
  }
  /*Ipad ngang(1024 x 768)*/
  @media screen and (max-width: 1024px) {
width:100%;
  }
  /*Ipad dọc(768 x 1024)*/
  @media screen and (max-width: 768px) {
  }
`;
