import './Login.scss';
import React from 'react'

export default function Login() {
  return (
    <div id="loginContainer">
      <div id="cta">
        <div className="ctaLogo1">
          <img src="/images/cta-logo-one.svg" alt="" />
          <a href="#">
            <button>GET ALL THERE</button>
          </a>
        </div>
        <div id="description">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum,
            minima veniam esse officiis perferendis odit optio tempora totam rem
            aperiam veritatis, error corrupti,{" "}
          </p>
        </div>
        <div id='logo2'>

        <img src="/images/cta-logo-two.png" alt="" />
        </div>
      </div>
    </div>
  );
}
