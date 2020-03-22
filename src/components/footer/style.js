import styled from "@emotion/styled";

export const Wrapper = styled.footer`
  .copyright {
    color: ${props => props.theme.palette.fgLight};
    font-size: 0.9em;

    a {
      color: inherit;
    }
  }
`;
