import styled from "@emotion/styled";

export const Div = styled.div`
  // padding-top: 100px;
  // padding-bottom: 100px;
`;

export const ContainerSubHome = styled.div`
  width: 100%;
  margin: auto;
  max-width: 64%;
  /*Ipad ngang(1024 x 768)*/
  @media screen and (max-width: 1024px) {
  }
  /*Ipad dọc(768 x 1024)*/
  @media screen and (max-width: 768px) {
  }
`;

export const SubHomeContent = styled.div`
  display: flex;
  // flex-direction: row-reverse;

  /*Ipad ngang(1024 x 768)*/
  @media screen and (max-width: 1024px) {
    // flex-direction: column;  
    flex-direction: column-reverse;

  }
  /*Ipad dọc(768 x 1024)*/
  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

export const CaptionContentSubHome = styled.div`
  // max-width:50%
  padding-left: 50px;
  padding-bottom: 100px;
  .fa-check {
    color: #2ecc71;
  }
  h5 {
    color: #3b04db;
    font-weight: 600;
    font-size: 18px;
    line-height: 28px;
    padding-top: 100px;
  }
  h2 {
    font-size: 36px;
    line-height: 46px;
  }
  p {
    font-size: 16px;
    line-height: 26px;
    color: #444;
    margin-top: 0;
    margin-bottom: 1rem;
    display: flex;
    flex-wrap: wrap;
  }
  i {
    margin-right: 10px;
  }
  button {
    color: #fff;
    padding: 16px 30px;
    border: none;
    border-radius: 4px;
    font-weight: 600;
    font-size: 16px;
    margin: 45px 0 0;
    background-color: #3b04db;
  }
  /*Ipad ngang(1024 x 768)*/
  @media screen and (max-width: 1024px) {
    padding-left: 0px;
    // flex-direction: column;
  }
  /*Ipad dọc(768 x 1024)*/
  @media screen and (max-width: 768px) {
    padding-left: 0px;

  }
`;

export const CaptionImageSubHome = styled.div`
  positon: relative;
  img {
    max-width: 590px;
    border-radius: 10px;
  }
  /*Ipad ngang(1024 x 768)*/
  @media screen and (max-width: 1024px) {
  }
  /*Ipad dọc(768 x 1024)*/
  @media screen and (max-width: 768px) {
  }
`;

export const HeroButtonSubHome = styled.div``;
