import styled from "@emotion/styled";

export const Article = styled.div`
  border-top: solid 1px ${props => props.theme.palette.border};
  margin-top: ${props => props.theme.size.elementMargin};
  padding-top: ${props => props.theme.size.elementMargin};

  .image {
    display: block;
    margin: 0 0 ${props => props.theme.size.elementMargin} 0;

    img {
      display: block;
      width: 100%;
    }
  }

  &:first-child {
    border-top: 0;
    margin-top: 0;
    padding-top: 0;
  }
`;
