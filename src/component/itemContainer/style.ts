import styled from "@emotion/styled";

export const ItemFeature = styled.div`
  border: 1px solid #e6f0fa;
  padding: 35px 22px 20px;
  background-color: #fff;
  border-radius: 10px;
  margin: 0 15px 30px;
  /*Ipad ngang(1024 x 768)*/
  @media screen and (max-width: 1024px) {
  }
  /*Ipad dọc(768 x 1024)*/
  @media screen and (max-width: 768px) {
  }
`;

export const ItemContainer = styled.div`
  max-width: 33%;
  h4 {
    font-weight: 700;
    margin: 0 0 12px;
    font-size: 22px;
    line-height: 32px;
  }
  i {
    font-size: 50px;
    color: #3b04db;
    margin: 0 0 15px;
  }
  @media screen and (max-width: 1550px) {
    max-width: 50%;
    margin: 0 auto;
  }
  /*Ipad ngang(1024 x 768)*/
  @media screen and (max-width: 1024px) {
    max-width: 80%;
    margin: 0 auto;
  }
  /*Ipad dọc(768 x 1024)*/
  @media screen and (max-width: 768px) {
  }
`;
