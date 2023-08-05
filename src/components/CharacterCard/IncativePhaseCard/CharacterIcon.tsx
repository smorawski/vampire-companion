import { Image } from "react-bootstrap";

interface CharacterImageProps {
  source: string;
  width?: number;
}

const CharacterImage = ({ source, width }: CharacterImageProps) => {
  return <Image width={width || 100} src={source} />;
};

export default CharacterImage;
