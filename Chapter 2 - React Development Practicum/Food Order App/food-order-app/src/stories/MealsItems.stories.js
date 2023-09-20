// YourComponent.stories.ts|tsx

import MealsItem from "../components/MealsItem";

//👇 This default export determines where your story goes in the story list
const meta = {
  component: MealsItem,
};

export default meta;

export const Default = {};

export const Hamburger = {
  args: {
    //👇 The args you need here will depend on your component
    id: "349812039820ksjdfhskdjfh",
    name: "Burger",
    description: "Tasty",
    price: 22.99,
    image: {
      display_url:
        "https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_1280.jpg",
    },
    handleEditItem: () => {},
  },
};
