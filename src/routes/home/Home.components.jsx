import Directory from "../../components/directory/directory.component";
import React from "react";
const Home = () => {
  const categories = [
    {
      id: 1,
      title: "Hats",
      imageUrl: require("../../assets/keagan-henman-ZqXXVeRCyZ0-unsplash.jpg"),
    },
    {
      id: 2,
      title: "Jackets",
      imageUrl: require("../../assets/the-nix-company-4Hmj9gkyM6c-unsplash.jpg"),
    },
    {
      id: 3,
      title: "Sneakers",
      imageUrl: require("../../assets/brad-starkey-Bowrbqz1kgw-unsplash.jpg"),
    },
    {
      id: 4,
      title: "Men",
      imageUrl: require("../../assets/david-herron-Aku-FFRKlFc-unsplash.jpg"),
    },
    {
      id: 5,
      title: "Women",
      imageUrl: require("../../assets/katsiaryna-endruszkiewicz-BteCp6aq4GI-unsplash1.jpg"),
    },
  ];

  return <Directory categories={categories}></Directory>;
};

export default Home;
