import React from "react";
import data from "./offers.json";
import styles from "./Offers.module.css";

console.log(data);

const Offers = () => {
  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  return (
    <>
      <div className={styles.title}>
        Special Offers From Your Favorite Stores
      </div>
      <div className={styles.search}>
        <div>
          <input type="text" placeholder="Search store name" />
          <img
            src="https://cdn.modesens.com/static/img/search_keyword_icon_20180510.svg"
            alt=""
          />
        </div>
        <button>
          SHARE
          <img
            src="https://cdn.modesens.com/static/img/20190805Vector.svg"
            alt=""
          />
        </button>
      </div>
      <div onClick={scrollToTop} className={styles.top}>
        <img
          src="https://cdn.modesens.com/static/img/20180929arrow_top.svg"
          alt="top"
        />
        <p>Top</p>
        <img
          src="https://i.pinimg.com/564x/3a/7d/5f/3a7d5fcba0a1890010245259c1b565f1.jpg"
          alt="top"
        />
      </div>
      <div className={styles.container}>
        {data.map((item) => {
          return (
            <div className={styles.itemdiv} key={item.id}>
              <img src={item.image} alt="" />
              <button>SHOP NOW</button>
              <p>{item.des}</p>

              <div className={styles.nocode}>
                <div>
                  <p>No code needed</p>
                  <p>05/05/2022</p>
                </div>
                <div>
                  <img
                    src="https://cdn.modesens.com/static/img/20190805Vector.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Offers;
