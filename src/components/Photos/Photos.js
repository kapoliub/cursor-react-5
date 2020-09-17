import React from "react";
import Photo from "./Photo";

const PHOTOS_DATA = [
  {
    url:
      "https://i.pinimg.com/originals/9f/e0/d1/9fe0d1e9c35f7778d5a972c74add164c.jpg",
    name: "Lana",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda eos adipisci accusantium nam perferendis quidem quia facere reprehenderit exercitationem ratione asperiores fugit consequuntur explicabo fuga, veritatis quas in rerum sit eaque quae!",
  },
  {
    url: "https://adobe.ly/3hARzal",
    name: "Tiffany",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda eos adipisci accusantium nam perferendis quidem quia facere reprehenderit exercitationem ratione asperiores fugit consequuntur explicabo fuga, veritatis quas in rerum sit eaque quae!",
  },
  {
    url: "https://vistapointe.net/images/portrait-1.jpg",
    name: "Bob",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda eos adipisci accusantium nam perferendis quidem quia facere reprehenderit exercitationem ratione asperiores fugit consequuntur explicabo fuga, veritatis quas in rerum sit eaque quae!",
  },
  {
    url:
      "https://photographyicon.com/wp-content/uploads/2011/06/example-of-portrait-photography.jpg",
    name: "Babushka",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda eos adipisci accusantium nam perferendis quidem quia facere reprehenderit exercitationem ratione asperiores fugit consequuntur explicabo fuga, veritatis quas in rerum sit eaque quae!",
  },
  {
    url:
      "https://renuarlocaj.com/wp-content/uploads/2019/12/Genta-Portrait-Photography-Beauty-Photography-Make-Up-Ujvara-Hajdari-Photographer-Renuar-Locaj-1.jpg",
    name: "Natali",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda eos adipisci accusantium nam perferendis quidem quia facere reprehenderit exercitationem ratione asperiores fugit consequuntur explicabo fuga, veritatis quas in rerum sit eaque quae!",
  },
  {
    url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR3wz63H965x839ZcJgWUCAYyPMoB2Q3IX5Lg&usqp=CAU",
    name: "Dedushka",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda eos adipisci accusantium nam perferendis quidem quia facere reprehenderit exercitationem ratione asperiores fugit consequuntur explicabo fuga, veritatis quas in rerum sit eaque quae!",
  },
];

const Photos = () => {
  return (
    <div>
      {PHOTOS_DATA.map((el, i) => (
        <Photo
          url={el.url}
          name={el.name}
          description={el.description}
          key={i}
        />
      ))}
    </div>
  );
};

export default Photos;
