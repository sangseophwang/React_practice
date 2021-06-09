import React from "react";
import PropTypes from "prop-types";

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image: "https://cdn.imweb.me/thumbnail/20200415/6b6e035658bac.png",
    rating: 3.2,
  },
  {
    id: 2,
    name: "Kimbop",
    image:
      "https://static.wtable.co.kr/image/production/service/recipe/689/edd1e01f-4502-453b-8b61-688941aefb76.jpg?size=1024x",
    rating: 4.1,
  },
  {
    id: 3,
    name: "Hamburger",
    image:
      "https://img.hani.co.kr/imgdb/resize/2017/0709/149948783091_20170709.JPG",
    rating: 4.5,
  },
  {
    id: 4,
    name: "Beer",
    image:
      "https://news.imaeil.com/inc/photos/2020/05/21/2020052113283164926_l.jpg",
    rating: 4.8,
  },
  {
    id: 5,
    name: "Chicken",
    image:
      "https://crcf.cookatmarket.com/product/images/2019/10/johu_1570435051_6401.jpg",
    rating: 4.7,
  },
];

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I like {name} !!!!!!!</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

function App() {
  return (
    <div>
      <h1>Hello!</h1>
      {foodILike.map((dish) => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

export default App;
