import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(false);

  useEffect(() => {
    // const status = navigator.onLine;
    // setOnlineStatus(status);
    window.addEventListener("offline", () => {
      setOnlineStatus(true);
    });
    window.addEventListener("online", () => {
      setOnlineStatus(false);
    });
  }, []);

  return onlineStatus;
};

export default useOnlineStatus;
