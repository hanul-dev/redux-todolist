import { HeaderSection, Title, Navigation, StyledLink } from "../Style/styles";

const Header = () => {
  return (
    <HeaderSection>
      <Title>
        <img className="title-img" src="img/snowflake.png" alt="snowflake" />
        iden
      </Title>
      <Navigation>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/todo">Todo</StyledLink>
        <StyledLink to="/category">category</StyledLink>
      </Navigation>
    </HeaderSection>
  );
};

export default Header;
