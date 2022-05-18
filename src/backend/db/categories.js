import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Cricket",
    image: "./images/category/cricket.png",
    iconImage: "./images/cricket.png"
  },
  {
    _id: uuid(),
    categoryName: "Football",
    image: "./images/category/football.png",
    iconImage: "./images/football.png"
  },
  {
    _id: uuid(),
    categoryName: "Boxing",
    image: "./images/category/boxing.png",
    iconImage: "./images/boxing.png"
  },
  {
    _id: uuid(),
    categoryName: "MMA",
    image: "./images/category/mma.png",
    iconImage: "./images/mma.png"
  },
  {
    _id: uuid(),
    categoryName: "Badminton",
    image: "./images/category/badminton.png",
    iconImage: "./images/badminton.png"
  },
  {
    _id: uuid(),
    categoryName: "Racing",
    image: "./images/category/racing.png",
    iconImage: "./images/racing.png"
  }  
];
