import "../style/bottom.css"
export const Bottom = ()=>{

    return(
        <div>
            <div className="container flex">
                <div className="left">
                <h1>Download the</h1>
                <h1>ModeSens App</h1>
                <p>A seamless experience that takes your style</p>
                <p> to the next level</p>
                <button className="btn">DOWNLOAD NOW</button>

                <img src="https://cdn.modesens.com/static/img/20220420AppDownloaden.png" alt="" />
                </div>
                <div className="right">
                <h1>Install the ModeSens</h1>
                <h1>Browser Extension</h1>
                <p>Get timely, accurate product information</p>
                <p>exery time you browse</p>
                <button>INSTALL NOW</button>

                <img src="https://cdn.modesens.com/static/img/20211109downloadright.png" alt="" />
                </div>
            </div>
        </div>
    )
}