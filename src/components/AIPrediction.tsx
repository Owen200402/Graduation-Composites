import { useState } from "react";
import useThinPlate from "../services/useThinPlate";
import { ImageLinkPaths } from "./ImageLinkPaths";

const AIPrediction = () => {
  const [AIVisibility, setAIVisibility] = useState(false);

  const { outputs, errors } = useThinPlate({ imageUrls: ImageLinkPaths });
  return (
    <>
      <button
        onClick={() => setAIVisibility(true)}
        className="btn btn-primary"
        style={{ marginBottom: '2rem' }}
      >
        Thin Plate AI
      </button>
      {AIVisibility && (
        <div>
          <h2 style={{ textAlign: 'center' }}>
            Thin Plate Spline Motion Model (under development)
          </h2>
          {errors.length >= 1 && <p>Error: {errors}</p>}
          {outputs && (
            <div>
              {outputs.map((output, index) => (
                <div key={index}>
                  <h4>Result {index + 1}</h4>
                  <pre>{JSON.stringify(output, null, 2)}</pre>
                  {ImageLinkPaths.length === index + 1 && (
                    <h4 style={{ color: 'green', marginBottom: '3rem' }}>
                      Done!
                    </h4>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default AIPrediction;
