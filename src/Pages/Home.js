import React from 'react';
import image1 from "../Assets/image1.jpg";
import image2 from "../Assets/image2.jpeg"
import { Link } from "react-router-dom"
import "../Styles/Home.css"

function Home() {
  return (
    <div className='home'>
        <div className='section-one'>
          <div className='img1'>
            <img src={image1} alt='img'/>
          </div>
          
          <div className='text1'>
            <p> Welcome to MR Fancy Store, your ultimate destination for all things fashion. Step into a world of style, sophistication, and endless inspiration. Whether you're a trendsetter, a fashion enthusiast, or simply seeking a wardrobe refresh, we've got you covered.

  Discover the latest trends that are making waves in the fashion world. From vibrant colors and bold prints to timeless classics and minimalist chic, our curated collection showcases the very best of what's hot right now. Stay ahead of the curve with our expertly crafted fashion guides, offering tips, tricks, and advice on how to effortlessly elevate your style.</p>
          </div>
        </div>

        <div className='section-two'>
          <div className='text2'>
            <p>At MR Fancy Store, we believe that fashion is a form of self-expression. Our mission is to empower individuals to embrace their unique sense of style and feel confident in their own skin. Our diverse range of fashion articles, lookbooks, and editorials cater to all tastes and preferences, ensuring there's something for everyone.</p>
            
            <div className='button'>
              <Link>
                <button> Read More </button>
              </Link>
            </div>
          </div>

          <div className='img2'>
            <img src={image2} alt='img2'/>
          </div>
        </div>

    </div>
  )
}

export default Home