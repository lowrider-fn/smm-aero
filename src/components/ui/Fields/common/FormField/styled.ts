import styled from 'styled-components';

import { Text } from '@/components/ui/Text';

export const FormFieldStyled = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 0 0.2rem;
  margin-bottom: 1.5rem;
  outline: none;
`;

export const FieldStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const LabelStyled = styled.label`
  width: min-content;
  margin: 0 0 0.4rem;
  color: ${({ theme }) => theme.palette.grey.base};
  user-select: none;
`;

export const TextStyled = styled(Text)`
  padding: 0 0.4rem;
  margin-top: 0.4rem;
  color: ${({ theme }) => theme.palette.common.red};
`;
