import "../style/women/bottom.css";
export const Bottom = () => {
  return (
    <div className="wrapper">
      <div className="flex">
        <div className="left">
          <h1>Download the ModeSens App</h1>
          <p>A seamless experience that takes your style to the next level</p>
          <a href="">
            {" "}
            <button className="btn">DOWNLOAD NOW</button>
          </a>
          <br />
          <br />
          <div className="ImgDiv1">
            <img
              src="https://cdn.modesens.com/static/img/20220420AppDownloaden.png"
              alt=""
              height="400px"
              width="300px"
            />
          </div>
        </div>
        <div className="right">
          <h1>Install the ModeSens Browser Extension</h1>
          <p>Get timely, accurate product information every time you browse</p>
          <a href="" target="_blank">
            {" "}
            <button className="btn">INSTALL NOW</button>
          </a>
          <br />
          <br />
          <div className="ImgDiv2">
            <img
              src="https://cdn.modesens.com/static/img/20211109downloadright.png"
              alt=""
              height="360px"
              width="300px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
