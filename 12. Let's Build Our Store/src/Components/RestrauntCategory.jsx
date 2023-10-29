import React, { useState } from "react";
import ItemList from "./ItemList";
import userContext from "../utils/context/userDataContext";
import { useContext } from "react";
import useUserData from "../utils/hooks/useUserData";

function RestrauntCategory({ data, id, setId }) {
  const [activeAccordian, setActiveAccordian] = useState(false);
  {
    /* Direct useage of Context */
  }
  // const userData = useContext(userContext);
  // console.log(userData, "dataaa");

  {
    /* Getting Data of Context from custom hook */
  }
  const userDataFromHook = useUserData();
  console.log(userDataFromHook, "userDataFromHook");

  const handleClick = () => {
    setId(data?.title);
    setActiveAccordian(!activeAccordian);
  };
  return (
    <div className="w-6/12 mx-auto my-4 p-4 bg-gray-50 shadow-lg">
      {/* Header of Category */}
      <div>{userDataFromHook.user}</div>
      <div
        className="flex justify-between cursor-pointer font-bold"
        onClick={handleClick}
      >
        <span className="text-lg">
          {data?.title} {` (${data?.itemCards?.length})`}
        </span>
        <span className="">&#x2304;</span>
      </div>

      {/* Accordion Body */}
      {data?.title == id && (
        <ItemList
          data={data?.itemCards}
          id={id}
          setId={setId}
          unique={data?.title}
          activeAccordian={activeAccordian}
        />
      )}
    </div>
  );
}

export default RestrauntCategory;
