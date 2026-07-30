import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addPlatform } from "../features/platforms/platformSlice";

function Platforms({ platformName, setPlatformName }) {
  const platforms = useSelector((state) => state.platforms.platforms);
  const dispatch = useDispatch();

  const handleAddPlatform = () => {
    if (platformName.trim() === "") return;
    
    dispatch(addPlatform(platformName));
    setPlatformName("");
  };

  return (
    <>
      <h2>Available Platforms</h2>

      <button onClick={handleAddPlatform}>Add Platform</button>

      <ul>
        {platforms.map((platform, index) => (
          <li key={index}>{platform}</li>
        ))}
      </ul>
    </>
  );
}

export default React.memo(Platforms);
