import React, {useEffect} from "react";
import AdBanner from "./AdBanner";
import axios from "axios";

const HomeScreen = () => {
  const url = "https://recipes.devmountain.com";

  const getRecipes = () => {
    axios.get(`${url}/recipes`).then((res) => {

      console.log(res.data);
    });
  };

  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <div>
      <AdBanner />
      {/* Much code from Part 2 will be placed around here. Do your best! */}
    </div>
  );
};

export default HomeScreen;
