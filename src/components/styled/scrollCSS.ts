import { css } from 'styled-components';

export const scrollCSS = css`
  overflow-x: auto;
  overflow-y: auto;
  scrollbar-color: transparent transparent;
  scrollbar-width: thin;

  &::-webkit-scrollbar {
    width: 0.6rem;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
    border-radius: 0.3rem;
  }

  ${({ theme }) => {
    const { palette } = theme;

    return css`
      &:hover {
        scrollbar-color: ${palette.grey.base} transparent;
      }

      &:hover::-webkit-scrollbar-thumb {
        background-color: ${palette.grey.base};
      }
    `;
  }}

  &::-webkit-scrollbar:horizontal {
    height: 0.6rem;
  }
`;
