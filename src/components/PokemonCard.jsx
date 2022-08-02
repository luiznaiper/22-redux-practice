import { StarOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import Meta from 'antd/lib/card/Meta';

const PokemonCard = ({ name, image, abilities, types }) => {
  return (
    <Card
      title={name}
      cover={<img src={image} alt={name} />}
      extra={<StarOutlined />}
    >
      <Meta description={`abilities: ${abilities}`} />
      <Meta description={`types: ${types}`} />
    </Card>
  );
};

export { PokemonCard };
