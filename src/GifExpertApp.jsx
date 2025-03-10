import { useState } from "react";
import { Addcategory } from "./components/AddCategory";
Addcategory

const GifExpertApp = () => {
    const [categories, setCategories ] = useState(['manzana','pera'])

    const onAddCategory = (value) => {
        setCategories([...categories, value ])
    }
  return (
    <>
      <h2>GifExpertApp</h2>
      <Addcategory 
        onNewCategory={(ev) => onAddCategory(ev)}
      />
      <ol>
        {categories.map( c => <li key={c}>
            {c}
        </li>
        )}
      </ol>
    </>
  );
};
export default GifExpertApp;
