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
`;

export const FeatureContent = styled.div`
  // background-color:red
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
`;

export const ItemContainer = styled.div`
  // padding: 0px 10px 10px 0px;
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
`;

export const ItemFeature = styled.div`
  border: 1px solid #e6f0fa;
  padding: 35px 22px 20px;
  background-color: #fff;
  border-radius: 10px;
  margin: 0 15px 30px;
`;
