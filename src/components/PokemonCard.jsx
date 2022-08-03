import { Card } from 'antd';
import Meta from 'antd/lib/card/Meta';
import { useDispatch } from 'react-redux';
import { setFavorite } from '../slices/dataSlice';
import { StarButton } from './StarButton';

const PokemonCard = ({ name, image, abilities, types, id, favorite }) => {
  const dispatch = useDispatch();
  const handleOnFavorite = () => {
    dispatch(setFavorite({ pokemonId: id }));
  };
  return (
    <Card
      title={name}
      cover={<img src={image} alt={name} />}
      extra={<StarButton isFavorite={favorite} onClick={handleOnFavorite} />}
    >
      <Meta description={`abilities: ${abilities}`} />
      <Meta description={`types: ${types}`} />
    </Card>
  );
};

export { PokemonCard };
