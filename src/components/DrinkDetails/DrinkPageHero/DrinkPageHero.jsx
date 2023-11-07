import {
  Title,
  Glass,
  Description,
  StyledImage,
  StyledImageContainer,
} from './DrinkPageHero.styled';
import defaultImage from '../../../assets/images/emptyImage/drink-image.jpg';
import { StyledSearchWrapper } from '../../DrinksSearch/DrinksSearch.styled';
import Button from '../Button/Button';
import PageTitle from 'src/components/PageTitle/PageTitle';

const DrinkPageHero = ({ drinkDetails }) => {
  const { _id, drink, glass, alcoholic, description, drinkThumb, favorite } =
    drinkDetails;

  return (
    <StyledSearchWrapper>
      <PageTitle>{drink}</PageTitle>
      <Glass>
        {glass} / {alcoholic}
      </Glass>
      <Description>{description}</Description>
      <Button drinkId={_id} favoriteStatus={favorite} />
      <StyledImageContainer>
        <StyledImage
          src={drinkThumb}
          alt="picture Cocktail"
          onError={(event) => {
            event.currentTarget.src = defaultImage;
          }}
        />
      </StyledImageContainer>
    </StyledSearchWrapper>
  );
};

export default DrinkPageHero;
