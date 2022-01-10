import styled from "@emotion/styled";

export const Div = styled.div`
  margin: 0 auto;
`;

export const ContainerFeatures = styled.div`
  max-width: 1145px;
  text-align: center;
  padding-top: 90px;
  padding-bottom: 60px;
  .item {
    display: flex;
  }
  .content {
    display: flex;
    justify-content: center;
    padding-bottom: 60px;
  }
  /*Ipad ngang(1024 x 768)*/
  @media screen and (max-width: 1024px) {
    .item {
      display: flex;
      flex-direction: column;
    }
    .content {
      max-width: 75%;
      margin: 0 auto;
    }
  }
  /*Ipad dọc(768 x 1024)*/
  @media screen and (max-width: 768px) {
  }
`;

export const FeatureContent = styled.div`
  .item {
 
  }
  /*Ipad ngang(1024 x 768)*/
  @media screen and (max-width: 1024px) {
  }
  /*Ipad dọc(768 x 1024)*/
  @media screen and (max-width: 768px) {
  }
`;

export const CoreFeature = styled.div`
  max-width: 700px;
  h5 {
    font-weight: 600;
    color: #3b04db;
    font-size: 18px;
    line-height: 28px;
  }
  h2 {
    font-weight: 800;
    margin-bottom: 20px;
    font-size: 36px;
    line-height: 46px;
  }

  p {
    font-size: 16px;
    line-height: 26px;
    color: #444;
  }
  /*Ipad ngang(1024 x 768)*/
  @media screen and (max-width: 1024px) {
    .item {
      display: flex;
      flex-direction: column;
    }
  }
  /*Ipad dọc(768 x 1024)*/
  @media screen and (max-width: 768px) {
  }
`;


