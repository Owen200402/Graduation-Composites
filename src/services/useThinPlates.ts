import useThinPlate from './useThinPlate';

// Define the output type (adjust according to the actual API response)
interface Output {
  // Add properties based on the actual API response
  result?: any;
  error?: string;
}

interface Props {
    imageUrls: string[];
}

const useThinPlates = ({imageUrls}: Props) => {
  const outputs = [];

  const results = imageUrls.map(url => {
    useThinPlate({imageUrl: url})
  })

  return results;
};

export default useThinPlates;
