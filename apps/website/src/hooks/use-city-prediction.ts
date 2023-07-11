import { useState } from 'react';

import { getCityPredictions } from '@website/api-requests/location';
import { AxiosAbortController } from '@packages/utils/axios';

export default function () {
  const [isLoading, setIsLoading] = useState(false);
  const [predictions, setPredictions] = useState([]);

  const getPredictions = async (text: string) => {
    if (!text) return setPredictions([]);

    setIsLoading(true);

    try {
      AxiosAbortController.create('getCityPredictions');
      const response = await getCityPredictions(text);
      setPredictions(response.data);
    } catch (err: any) {
      if (err.code === 'ERR_CANCELED') return;

      setPredictions([]);
    }

    setIsLoading(false);
  };

  const clearPredictions = () => setPredictions([]);

  return {
    isLoading,
    predictions,
    getPredictions,
    clearPredictions,
  };
}
