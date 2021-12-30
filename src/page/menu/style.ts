import styled from "@emotion/styled";

export const ContainerMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  margin: auto;
`;

export const Logo = styled.div`
  img {
    display: inline-block;
    line-height: 40px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const Nav = styled.div`
  justify-content: end;
  li {
    display: inline-block;
    width: 120px;
    height: 40px;
    line-height: 40px;
    padding-right: 10px;
    list-style-type: none;

    &:first-child a {
      color: red;
    }
  }

  a {
    text-decoration: none;
    color: black;
  }
  & a:hover {
    color: red;
  }
`;
