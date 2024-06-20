import { useEffect, useState } from 'react';
import Replicate from 'replicate';

// Define the input types
interface Input {
  source_image: string;
  driving_video: string;
}

// Define the output type (adjust according to the actual API response)
interface Output {
  result?: any;
  error?: string;
}

interface Props {
  imageUrls: string[];
}

const useThinPlate = ({ imageUrls }: Props) => {
  const [outputs, setOutputs] = useState<Output[]>([]);
  const [errors, setErrors] = useState<string[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      const newOutputs: Output[] = [];
      const newErrors: string[] = [];

      imageUrls.map(async (imageUrl, index) => {
        const replicate = new Replicate({
          auth: import.meta.env.VITE_REPLICATE_API_TOKEN,
          baseUrl:
            'https://glacial-bayou-86820-65acb0ccb297.herokuapp.com/https://api.replicate.com/v1',
        });

        const input: Input = {
          source_image: imageUrl,
          driving_video:
            'https://replicate.delivery/mgxm/005e32a9-ff8e-4dfd-bcfd-bbbf3791ca94/driving.mp4',
        };

        try {
          const result = await replicate.run(
            'yoyo-nb/thin-plate-spline-motion-model:382ceb8a9439737020bad407dec813e150388873760ad4a5a83a2ad01b039977',
            { input }
          );
          newOutputs.push({ result });
          setOutputs(newOutputs);
        } catch (err: any) {
          newErrors.push(err.message);
          setErrors(newErrors);
        }
      });
    };

    fetchImages();
  }, []);

  return { outputs, errors };
};

export default useThinPlate;
