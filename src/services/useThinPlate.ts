import { useEffect, useState } from 'react';
import Replicate from 'replicate';

// Define the input types
interface Input {
  source_image: string;
  driving_video: string;
}

// Define the output type (adjust according to the actual API response)
interface Output {
  // Add properties based on the actual API response
  result?: any;
  error?: string;
}

const useThinPlate = () => {
  const [output, setOutput] = useState<Output | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchImage = async () => {
      const replicate = new Replicate({
        auth: 'r8_eH4fEUdfSAA0pxLU4H6k8MsuDZiw27b168BJL',
        baseUrl: 'http://glacial-bayou-86820-65acb0ccb297.herokuapp.com/https://api.replicate.com/v1', // Use your local CORS proxy
      });

      const input: Input = {
        source_image:
          'https://replicate.delivery/mgxm/b8efcd01-da81-42c7-8cd6-0a820084a983/source.png',
        driving_video:
          'https://replicate.delivery/mgxm/005e32a9-ff8e-4dfd-bcfd-bbbf3791ca94/driving.mp4',
      };

      try {
        const result = await replicate.run(
          'yoyo-nb/thin-plate-spline-motion-model:382ceb8a9439737020bad407dec813e150388873760ad4a5a83a2ad01b039977',
          { input }
        );
        setOutput({ result });
      } catch (err: any) {
        setError(err.message);
      }
    };

    fetchImage();
  }, []);

  return { output, error };
};

export default useThinPlate;
