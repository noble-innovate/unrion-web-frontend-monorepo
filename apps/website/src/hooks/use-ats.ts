import { useState } from 'react';

import { addToATSWaitList } from '@website/api-requests/ats';

export default function () {
  const [addingToATSWaitList, setAddingToATSWaitList] = useState(false);
  const [addToATSWaitListResponse, setAddToATSWaitListResponse] = useState<
    Record<'success' | 'error', boolean>
  >({ success: false, error: false });

  const handleAddToATSWaitList = async (email: string) => {
    try {
      setAddingToATSWaitList(true);
      setAddToATSWaitListResponse({ error: false, success: false });

      await addToATSWaitList(email);

      setAddToATSWaitListResponse({ error: false, success: true });
    } catch (error) {
      setAddToATSWaitListResponse({ error: true, success: false });

      setTimeout(() => {
        setAddToATSWaitListResponse({ error: false, success: false });
      }, 2000);
    }

    setAddingToATSWaitList(false);
  };

  return {
    handleAddToATSWaitList,
    addingToATSWaitList,
    addToATSWaitListResponse,
  };
}
