import styled from "@emotion/styled";

export const Div = styled.div`
padding-top: 100px;
padding-bottom: 100px;
`;

export const ContainerSubHome = styled.div`
width: 100%;
margin: auto;
max-width: 64%;
`;

export const SubHomeContent = styled.div`
display: flex;
`;

export const CaptionContentSubHome = styled.div`
// max-width:50%
padding-right: 50px;
.fa-check{
  color: #2ecc71 
}
ul{
  padding-left: 0px;
}
li{
  list-style-type: none;
  display: block;
  padding: 6px 0;
  font-weight: 600;
  font-size: 16px;
  line-height: 26px;
  color: #130f40;
}
h5{
  color: #3b04db;
    font-weight: 600;
    font-size: 18px;
    line-height: 28px;
}
h2{
  font-size: 36px;
    line-height: 46px;
}
p{
  font-size: 16px;
  line-height: 26px;
  color: #444;
  margin-top: 0;
    margin-bottom: 1rem;
    display: flex;  
    flex-wrap: wrap;
}
i{
  margin-right: 10px

}
button{
    color: #fff;
    padding: 16px 30px;
    border: none;
    border-radius: 4px;
    font-weight: 600;
    font-size: 16px;
    margin: 45px 0 0;
    background-color: #3b04db
}
`;

export const CaptionImageSubHome = styled.div`

img{
max-width:590px;
border-radius:10px
}
`;

export const HeroButtonSubHome = styled.div`

`;