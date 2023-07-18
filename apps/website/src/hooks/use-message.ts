import { useState } from 'react';

import {
  addToATSWaitList,
  saveContactUsMessage,
} from '@website/api-requests/message';

export default function () {
  const [addingToATSWaitList, setAddingToATSWaitList] = useState(false);
  const [addToATSWaitListResponse, setAddToATSWaitListResponse] = useState<
    Record<'success' | 'error', boolean>
  >({ success: false, error: false });

  const [savingContactUsMessage, setSavingContactUsMessage] = useState(false);
  const [saveContactUsMessageResponse, setSaveContactUsMessageResponse] =
    useState<Record<'success' | 'error', boolean>>({
      success: false,
      error: false,
    });

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
      }, 3500);
    }

    setAddingToATSWaitList(false);
  };

  const handleSaveContactUsMessage = async (data: {
    fullName: string;
    email: string;
    message: string;
  }) => {
    try {
      setSavingContactUsMessage(true);
      setSaveContactUsMessageResponse({ error: false, success: false });

      await saveContactUsMessage(data);

      setSaveContactUsMessageResponse({ error: false, success: true });
    } catch (error) {
      setSaveContactUsMessageResponse({ error: true, success: false });
    }

    setTimeout(() => {
      setSaveContactUsMessageResponse({ error: false, success: false });
    }, 3500);

    setSavingContactUsMessage(false);
  };

  return {
    handleAddToATSWaitList,
    addingToATSWaitList,
    addToATSWaitListResponse,
    handleSaveContactUsMessage,
    savingContactUsMessage,
    saveContactUsMessageResponse,
  };
}
