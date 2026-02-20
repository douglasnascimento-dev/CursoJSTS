import { Container } from '../../styles/GlobalStyles';

import { Title, Paragraph, StyledLink } from './styled';

const Page404 = () => (
  <Container>
    <Title>404 - Página não encontrada</Title>
    <Paragraph>Desculpe, a página que você procura não existe.</Paragraph>
    <StyledLink to='/'>Voltar para a página inicial</StyledLink>
  </Container>
);

export default Page404;
