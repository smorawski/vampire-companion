interface CharacterImageProps {
  source: string;
  width?: number;
}

const CharacterImage = ({ source, width }: CharacterImageProps) => {
  return <img width={width || 100} src={source} />;
};

export default CharacterImage;
