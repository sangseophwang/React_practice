import React from "react";

function Food({ name, picture }) {
  return (
    <div>
      <h2>I like {name} !!!!!!!</h2>
      <img src={picture} />
    </div>
  );
}

const foodILike = [
  {
    name: "Kimchi",
    image: "https://cdn.imweb.me/thumbnail/20200415/6b6e035658bac.png",
  },
  {
    name: "Kimbop",
    image:
      "https://static.wtable.co.kr/image/production/service/recipe/689/edd1e01f-4502-453b-8b61-688941aefb76.jpg?size=1024x",
  },
  {
    name: "Hamburger",
    image:
      "https://img.hani.co.kr/imgdb/resize/2017/0709/149948783091_20170709.JPG",
  },
  {
    name: "Beer",
    image:
      "https://news.imaeil.com/inc/photos/2020/05/21/2020052113283164926_l.jpg",
  },
  {
    name: "Chicken",
    image:
      "https://crcf.cookatmarket.com/product/images/2019/10/johu_1570435051_6401.jpg",
  },
];

function App() {
  return (
    <div>
      <h1>Hello!</h1>
      {foodILike.map((dish) => (
        <Food name={dish.name} picture={dish.image} />
      ))}
    </div>
  );
}

export default App;
