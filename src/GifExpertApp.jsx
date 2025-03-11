import { useState } from "react";
import { Addcategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);

  const onAddCategory = (value) => {
    if (categories.includes(value.toLowerCase())) return;
    setCategories([value, ...categories]);
  };
  return (
    <>
      <h2>GifExpertApp</h2>
      <Addcategory onNewCategory={(val) => onAddCategory(val)} />
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
export default GifExpertApp;
