import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getgifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);
  const getImages = async () => {
    const resp = await getGifs(category);
    setImages(resp);
  };
  useEffect(() => {
    getImages();
    //  getGifs(category).then(newImages => setImages(newImages));
  }, []);
  return (
    <>
      <h4>{category}</h4>
      <div className="card-grid">
        {images.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};
