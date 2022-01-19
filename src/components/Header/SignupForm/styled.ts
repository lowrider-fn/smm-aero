import styled from 'styled-components';

import { Text } from '../../ui/Text';

export const TextGreenStyled = styled(Text)`
  color: ${({ theme }) => theme.palette.green.base};
`;

export const TextGreyStyled = styled(Text)`
  color: ${({ theme }) => theme.palette.grey.dark};
`;

export const DescriptionStyled = styled(TextGreyStyled)`
  margin-bottom: 1.5rem;
  text-align: center;
`;

export const BoxStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`;