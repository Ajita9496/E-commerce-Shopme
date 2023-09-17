import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs';
import { FiTruck } from 'react-icons/fi';
import { BsCurrencyDollar } from 'react-icons/bs';
import { CiPercent } from 'react-icons/ci';
import { BiHeadphone } from 'react-icons/bi';
import { AiOutlineShoppingCart, AiOutlineCloseCircle } from 'react-icons/ai';
import { BsEye } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';
import Homeproduct from './homeproduct';
import navigate from "react-router-dom"
import Productdetail from './productdetail'
import './home.css'
const Home = ({ product, setProduct, detail, view, close, setClose, addtocart }) => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('All Products');
  const [isBanner1Visible, setIsBanner1Visible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log(isBanner1Visible);
      setIsBanner1Visible((prev) => !prev);
      console.log(isBanner1Visible);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  const filtterproduct = (product) => {
    const update = Productdetail.filter((x) => {
      return x.Cat === product;
    })
    setProduct(update);
    setSelectedCategory(product);
    navigate("./product");
  }

  const AllProducts = () => {
    setSelectedCategory('All Products');
    navigate("./product");
  }
  return (
    <>
      {
        close ?
          <div className='product_detail'>
            <div className='container'>
              <button onClick={() => setClose(false)} className='closebtn'><AiOutlineCloseCircle /></button>
              {
                detail.map((curElm) => {
                  return (
                    <div className='productbox'>
                      <div className='img-box'>
                        <img src={curElm.Img} alt={curElm.Title}></img>
                      </div>
                      <div className='detail'>
                        <h4>{curElm.Cat}</h4>
                        <h2>{curElm.Title}</h2>
                        <p>A Screen Everyone Will Love: Whether your family is streaming or video chatting with friends tablet A8... </p>
                        <h3>${curElm.Price}</h3>
                        <button onClick={() => addtocart (curElm)}>Add To Cart</button>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div> : null
      }
      <div class="carousel">
      <div class="banner">
          <div class="container">
            <div class="detail">
              <h3>Introducing iPhone 15 Pro</h3>
              <h4>Enter A17 Pro.
                Game‑changing chip. </h4>
              <h4>
                Groundbreaking performance.</h4>
                <button onClick={AllProducts} class="link"> Shop Now</button>
            </div>
            <div class="img_box">
              <img src="img/Apple-iPhone-15.png" alt="sliderimg" />
            </div>
          </div>
        </div>
        <div class="banner">
          <div class="container">
            <div class="detail">
              <h3>The Best Note Book Collection 2023</h3>
              <button onClick={AllProducts} class="link"> Shop Now</button>
            </div>
            <div class="img_box">
              <img src="img/slider-img.png" alt="sliderimg" />
            </div>
          </div>
        </div>
        <div class="banner">
          <div class="container">
            <div class="detail">
              <h3>Apple iPad Pro M2 chip.</h3>
              <h4>Next-generation performance.</h4>
              <h4>Next‑generation capabilities.</h4>
              <button onClick={AllProducts} class="link"> Shop Now</button>
            </div>
            <div class="img_box">
              <img src="img/I-pad.png" alt="sliderimg" />
            </div>
          </div>
        </div>
        <div class="banner">
          <div class="container">
            <div class="detail">
              <h3>Beats Studio Buds +</h3>
              <h4>True Wireless Noise Cancelling Earbuds</h4>
              <button onClick={AllProducts} class="link"> Shop Now</button>
            </div>
            <div class="img_box">
              <img src="img/beats.png" alt="sliderimg" />
            </div>
          </div>
        </div>
      </div>

      <div className='product_type'>
        <div className='container'>
          <div onClick={() => filtterproduct("Tablet")} className='box'>
            <div className='img_box'>
              <img src='./img/i-pad.png' alt='mobile'></img>
            </div>
            <div className='detail'>
              <p>Tablet</p>
            </div>
          </div>
          <div onClick={() => filtterproduct("Smart Watch")} className='box'>
            <div className='img_box'>
              <img src='./img/smart watch.png' alt='watch'></img>
            </div>
            <div className='detail'>
              <p>Smart Watch</p>
            </div>
          </div>
          <div onClick={() => filtterproduct("Headphone")} className='box'>
            <div className='img_box'>
              <img src='./img/headphone.png' alt='headphone'></img>
            </div>
            <div className='detail'>
              <p>Headphone</p>
            </div>
          </div>
          <div onClick={() => filtterproduct("Gaming")}  className='box'>
            <div className='img_box'>
              <img src='./img/keypad.png' alt='cpu '></img>
            </div>
            <div className='detail'>
              <p>Gaming</p>
            </div>
          </div>
        </div>
      </div>
      <div className='about'>
        <div className='container'>
          <div className='box'>
            <div className='icon'>
              <FiTruck />
            </div>
            <div className='detail'>
              <h3>Free Shipping</h3>
              <p>Oder above $1000</p>
            </div>
          </div>
          <div className='box'>
            <div className='icon'>
              <BsCurrencyDollar />
            </div>
            <div className='detail'>
              <h3>Return & Refund</h3>
              <p>Money Back Gaurenty</p>
            </div>
          </div>
          <div className='box'>
            <div className='icon'>
              <CiPercent />
            </div>
            <div className='detail'>
              <h3>Member Discount</h3>
              <p>On every Oder</p>
            </div>
          </div>
          <div className='box'>
            <div className='icon'>
              <BiHeadphone />
            </div>
            <div className='detail'>
              <h3>Customer Support</h3>
              <p>Every Time Call Support</p>
            </div>
          </div>
        </div>
      </div>
      <div className='product'>
        <h2>Top Products</h2>
        <div className='container'>
          {
            Homeproduct.map((curElm) => {
              return (
                <div className='box' key={curElm.id}>
                  <div className='img_box'>
                    <img src={curElm.Img} alt={curElm.Title}></img>
                    <div className='icon'>
                      <li onClick={() => addtocart(curElm)}><AiOutlineShoppingCart /></li>
                      <li onClick={() => view(curElm)}><BsEye /></li>
                    </div>
                  </div>
                  <div className='detail'>
                    <p>{curElm.Cat}</p>
                    <h3>{curElm.Title}</h3>
                    <h4>${curElm.Price}</h4>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>

    </>
  )
}

export default Home