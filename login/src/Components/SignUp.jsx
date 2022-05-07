import {React} from "react";
import "./Login.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
//bigimagelink - https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80

export const SignUp=()=>{
      
    return(
        <div>
            <div className="left">
                <img src="/Images/modesens.jpeg" alt="" />
                <div className="logo">
                    
                </div>
            </div>
            <div className="right">
                <h3>Create an account</h3>
                <p>Compare across 500+ stores</p>
                <p className="adjust">to find the best price.</p>
                <form >
                  <input type="text" id="email" placeholder="Email" />
                  <br />
                  <input type="password" id="pass" placeholder="Password" />
                </form>
                <div className="offers">
                <input type="radio" value="Subscribe" id="Subscribe"/><label for="Subscribe">Subscribe to personalized sale updates and offers</label>
                </div>
                <button>Sign Up</button>
                <div className="firsthr">
                    <hr />
                </div>
                 <div className="or">or</div>
                 <div className="secondhr">
                     <hr />
                 </div>
                 <div className="logos">
                      <div><img src="https://modesens.com/static/img/login-icon/20210617google.svg" alt="" /></div>
                      <div><img src="https://modesens.com/static/img/login-icon/20210617facebook.svg" alt="" /></div>
                      <div><img src="https://modesens.com/static/img/login-icon/20210617apple.svg" alt="" /></div>
                      <div><img src="https://modesens.com/static/img/login-icon/20210617wechat.svg" alt="" /></div>
                 </div>
                 <a href="">Already have an account? Please sign in.</a>
                 <div className="signinfooter">
                     By creating an account, I agree to the <a href="">Terms Of Use</a> and the <a href="">Privacy Policy</a>
                 </div>
            </div>
        </div>
    )
}