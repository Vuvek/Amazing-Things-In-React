import { useEffect, useState } from "react";

const useRestauratMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  const fetchRestauraData = async () => {
    const res = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6314473&lng=77.41640629999999&restaurantId=${resId}&catalog_qa=und`
    );
    const data = await res.json();
    setResInfo(data);
  };

  useEffect(() => {
    fetchRestauraData();
  }, [resId]);

  return resInfo;
};

export default useRestauratMenu;
