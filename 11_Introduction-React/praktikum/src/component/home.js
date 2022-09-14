import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import logo from '../asset/img/logo.png';
import Image from './asset/img/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg';
import HTML from './public/index.html';

var Home = React.createClass({
    render: function() {
      return (
        <body class="home-background">
    <header>
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-8 col-md-12 col-sm-12 col-12">
                    <div class="alterra">
                        <a href="index.html"><Image src={logo}/></a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-12 col-sm-12 col-12">
                    <div class="container">
                        <div class="row align-items-center navig">
                            <div class="col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-right"><a href="index.html" class="aktif">HOME</a></div>
                            <div class="col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-center"><a href="about.html">ABOUT</a></div>
                            <div class="col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-left"><a href="#">EXPERIENCE</a></div>
                            <div class="col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-right"><a href="form.html">CONTACT</a></div> 
                        </div>
                    </div> 
                </div>    
            </div>
        </div> 
    </header>
    
        <div class="container h-100">
            <div class="row align-items-center isi-home">
                <div class="col-lg-4 col-md-12 col-sm-12  col-12">
                    <img id="foto-profil" src="asset/img/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg"/>
                </div>
                <div class="col-lg-8 col-md-12 col-sm-12 col-12">
                    <div class="main-p">
                        <p class="sapaan">Hi, my name is </p>
                        <p class="nama">Anne Sullivan</p>
                        <p class="hobi">I build things for the web</p>
                        <p class="tombol"><a href="about.html">Get In Touch</a></p>
                    </div>
                </div>
            </div>
        </div>
   
</body>
      );
    }
  });

  export default Home;