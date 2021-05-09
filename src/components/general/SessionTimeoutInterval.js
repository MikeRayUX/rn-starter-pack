import React, { useState, useEffect } from 'react';
import { minutes, seconds, sleep } from '../../utils/time';
import Flash from './Flash';
const SessionTimeoutInterval = ({
  MINUTES_TO_EXPIRE,
  timeout_active,
  onExpire,
}) => {
  const [session_expired_message, setSessionExpiredMessage] = useState('');

  useEffect(() => {
    let refreshCount = 1;

    let interval = setInterval(() => {
      console.log(`interval fired (${refreshCount})`);
      refreshCount += 1;
      if (!timeout_active) {
        console.log('session timeout interval is not active: clearing');
        clearInterval(interval);
        refreshCount = 0;
      }

      if (refreshCount >= MINUTES_TO_EXPIRE) {
        // await sleep(0.5);
        clearInterval(interval);
        console.log('session has expired. Setting session expired flash');
        setSessionExpiredMessage('Your Session has Expired.');
      }
    }, minutes(1));

    return () => {
      console.log('session timeout interval cleared');
      clearInterval(interval);
    };
  }, [timeout_active]);

  return (
    <>
      <Flash
        isVisible={!!session_expired_message}
        message={session_expired_message}
        onPress={async () => {
          setSessionExpiredMessage('');
          await sleep(0.2);
          onExpire();
        }}
      />
    </>
  );
};

export default SessionTimeoutInterval;
