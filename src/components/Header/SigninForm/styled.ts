import styled from 'styled-components';

import { Text } from '../../ui/Text';

import { Button } from '@/components/ui/Button';

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

export const ControlsStyled = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const BoxStyled = styled.div`
  display: flex;
  flex-direction: column;

  &:last-child {
    align-items: end;
  }
`;

export const ButtonStyled = styled(Button)`
  margin: 2.5rem 0 3rem;
`;