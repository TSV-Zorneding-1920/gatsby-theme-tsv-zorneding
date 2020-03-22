import styled from "@emotion/styled";
import theme from "../../theme";
import { css } from "@emotion/core";

const bp = {
  xxsmall: [null, 360],
  xsmall: [361, 480],
  small: [481, 736],
  medium: [737, 980],
  large: [981, 1280],
  xlarge: [1281, 1680],
  xlargeToMax: [1681, null]
};

const mq = n => {
  const bpArray = Object.keys(bp).map(key => [key, bp[key]]);

  const [result] = bpArray.reduce((acc, [name, size]) => {
    if (n === name) return [...acc, `@media (max-width: ${size[1]}px)`];
    return acc;
  }, []);

  return result;
};

const headingStack = css`
  font-family: ${theme.font.familyHeading};
  color: ${theme.palette.fgBold};
  font-weight: ${theme.font.weightHeading};
  line-height: 1.5;
  margin: 0 0 calc(${theme.size.elementMargin} * 0.5) 0;

  a {
    color: inherit;
    text-decoration: none;
    border-bottom: 0;
  }
`;

export const H1 = styled.h1`
  ${headingStack};
  font-size: 4em;
  margin: 0 0 calc(${theme.size.elementMargin} * 0.25) 0;
  line-height: 1.3;

  ${mq("xlarge")} {
    font-size: 3.5em;
  }
  ${mq("medium")} {
    font-size: 3.25em;
  }
  ${mq("small")} {
    font-size: 2em;
    line-height: 1.4;
  }
`;

export const H2 = styled.h2`
  ${headingStack};
  font-size: 1.75em;

  ${mq("small")} {
    font-size: 1.5em;
  }
`;

export const H3 = styled.h3`
  ${headingStack};
  font-size: 1.25em;
`;

export const H4 = styled.h4`
  ${headingStack};
  font-size: 1.1em;
`;

export const H5 = styled.h5`
  ${headingStack};
  font-size: 0.9em;
`;

export const H6 = styled.h6`
  ${headingStack};
  font-size: 0.7em;
`;
