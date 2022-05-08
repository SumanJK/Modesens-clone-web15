import {React} from "react";
import "./Login.css"


export const Login=({ isShowLogin })=>{
      
    return(
        <div className={`${isShowLogin ? "active" : ""} show`}>
        <div className="containerLogin">
            <div className="left">
                <img src="/Images/modesens.jpeg" alt="" />
            </div>
            <div className="rightWrapper">
                <div className="right">
                    <h2>Log in to your account</h2>
                    <p>Compare across 500+ stores</p>
                    <p className="adjust">to find the best price.</p>
                    <form className=" formData ">
                    <input type="text" id="email" placeholder="Email" />
                  <br />
                    <input type="password" id="pass" placeholder="Password" />
                    <div className="forgetpass">
                    Forgot Password?
                    </div>
                    <input type="submit" value="log in" className="login">Log in</input>
                    </form>
                    <div className="orDiv">
                        <div className="firsthr">
                            <hr />
                        </div>
                        <div className="or">or</div>
                        <div className="secondhr">
                            <hr />
                        </div>
                    </div>
                    <div className="logos">
                        <div><img src="https://modesens.com/static/img/login-icon/20210617google.svg" alt="" /></div>
                        <div><img src="https://modesens.com/static/img/login-icon/20210617facebook.svg" alt="" /></div>
                        <div><img src="https://modesens.com/static/img/login-icon/20210617apple.svg" alt="" /></div>
                        <div><img src="https://modesens.com/static/img/login-icon/20210617wechat.svg" alt="" /></div>
                    </div>
                    <a href="##">Don't have an account? Please Sign up.</a>
                 </div>
            </div>
        </div>
    </div>
    )
}