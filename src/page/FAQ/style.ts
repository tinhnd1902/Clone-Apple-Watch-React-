import styled from "@emotion/styled";

export const WrapFAQ = styled.div`
  /*Ipad ngang(1024 x 768)*/
  @media screen and (max-width: 1600x) {
    // margin-bottom: 40px;
  }
  /*Ipad dọc(768 x 1024)*/
  @media screen and (max-width: 768px) {
  }
`;

export const ContainerFAQ = styled.div`
  max-width: 60%;
  margin: 0 auto;
  /*Ipad ngang(1024 x 768)*/
  @media screen and (max-width: 1024px) {
  }
  /*Ipad dọc(768 x 1024)*/
  @media screen and (max-width: 768px) {
  }
`;

export const UpFAQ = styled.div`
  text-align: center;
  max-width: 75%;
  margin: 0 auto;
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
    margin-top: 0;
    margin-bottom: 1rem;
  }
  @media screen and (max-width: 1600px) {
    max-width: 75%;
  }
  /*Ipad ngang(1024 x 768)*/
  @media screen and (max-width: 1024px) {
  }
  /*Ipad dọc(768 x 1024)*/
  @media screen and (max-width: 768px) {
  }
`;

export const DownFAQ = styled.div`
  display: flex;
  max-width: 100%;
  justify-content: center;
  @media screen and (max-width: 1600px) {
    flex-direction: column;
  }
  /*Ipad ngang(1024 x 768)*/
  @media screen and (max-width: 1024px) {
  }
  /*Ipad dọc(768 x 1024)*/
  @media screen and (max-width: 768px) {
  }
`;

export const LeftDownFAQ = styled.div`
  max-width: 60%;
  padding: 0 50px 0;
  .single {
    display: flex;
    flex-direction: column;
    a {
      display: block;
      padding: 20px 45px;
      border-bottom: 1px solid #e6f0fa;
      font-weight: 700;
      font-size: 20px;
      line-height: 30px;
      text-decoration: none;
      color: black;
    }
    a:hover {
      color: red;
    }
    .subh5 {
      display: none;
      width: 100%;
      font-size: 16px;
      line-height: 26px;
      font-weight: 600;
      color: #444;
      flex: 1 1 auto;
      padding: 1.25rem;
    }
  }
  /*Ipad ngang(1024 x 768)*/
  @media screen and (max-width: 1600px) {
    max-width: 100%;
    padding: 0 50px 0;
  }
  /*Ipad dọc(768 x 1024)*/
  @media screen and (max-width: 768px) {
  }
`;

export const RightDownFAQ = styled.div`
  max-width: 50%;

  .img_FAQ {
    img {
      max-width: 100%;
      height: auto;
    }
  }

  @media screen and (max-width: 1600px) {
    max-width: 100%;
    padding: 0 50px 80px;
  }
  /*Ipad ngang(1024 x 768)*/
  @media screen and (max-width: 1024px) {
  }
  /*Ipad dọc(768 x 1024)*/
  @media screen and (max-width: 768px) {
  }
`;
