import styled from "@emotion/styled";

export const WrapOurProduct = styled.div`
  display: flex;
  justify-content: center;
  /*Ipad ngang(1024 x 768)*/
  @media screen and (max-width: 1024px) {
  }
  /*Ipad dọc(768 x 1024)*/
  @media screen and (max-width: 768px) {
  }
`;

export const ContainerOurProduct = styled.div`
  max-width: 1200px;
  /*Ipad ngang(1024 x 768)*/
  @media screen and (max-width: 1024px) {
  }
  /*Ipad dọc(768 x 1024)*/
  @media screen and (max-width: 768px) {
  }
`;

export const UpOurProduct = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  .upContent {
    max-width: 80%;
  }
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
    .upContent {
      max-width: 70%;
    }
  }
  /*Ipad dọc(768 x 1024)*/
  @media screen and (max-width: 768px) {
  }
`;

export const DownOurProduct = styled.div`
  padding-bottom: 40px;
  .singleContent {
    display: flex;
    justify-content: center;
    position: relative;
    // max-width: 33%;
    margin-bottom: 160px;
    img {
      // margin: 0 15px;
      max-width: 90%;
    }
  }
  .downContent {
    display: flex;
    padding-top: 30px;
    flex-wrap: wrap;
  }
  .subContent {
    text-align: center;
    position: absolute;
    left: 0;
    right: 0;
    width: 60%;
    margin: 0 auto;
    background-color: #fff;
    box-shadow: 0 0 30px rgb(0 0 0 / 10%);
    bottom: -100px;
    padding: 0px 20px 30px;
    h4 {
      font-weight: 700;
      color: #3b04db;
      font-size: 22px;
      line-height: 20px;
    }
    h5 {
      color: #ff4e56;
      font-size: 18px;
      line-height: 0px;
    }
    a {
      color: #2c3e50;
      display: inline-block;
      font-weight: 700;
      text-decoration: underline;
      margin: 10px 0 0;
      line-height: 20px;
    }
  }
  /*Ipad ngang(1024 x 768)*/
  @media screen and (max-width: 1024px) {
    .downContent {
      padding-top: 0px;
      padding-bottom: 40px;
      margin: 0 auto;
      flex-direction: column;
      left: 0;
      right: 0;
      width: 60%;
      .subContent {
        right: 90px;
        width: 88%;
      }
    }
    .singleContent {
      margin: 80px auto;
      max-width: 75%;
    }
  }
  /*Ipad dọc(768 x 1024)*/
  @media screen and (max-width: 1248px) {
    .singleContent {
      max-width: 50%;
    }
  }
`;
