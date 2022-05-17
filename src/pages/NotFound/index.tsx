import { Text } from '@/components/ui/Text';
import { PageStyled } from '@/components/styled';

const NotFoundPage = () => (
  <PageStyled>
    <Text
      tag="h1"
      size="h1"
      text="Ой, что то пошло не так . . ."
    />
  </PageStyled>
);

export default NotFoundPage;
