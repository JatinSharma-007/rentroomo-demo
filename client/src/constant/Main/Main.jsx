import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import {useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";

import Footer from "../Footer/Footer";

import "swiper/css"
import "swiper/css/navigation"
import "./Main.css"

import homeImg from "./home.jpg"
import propertyImg from "./popular1.jpg"
import valueImg from './value.jpg'

const Main = () => {
  const [accordian, setAccordian] = useState("close");
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const navigate = useNavigate();
  const { user } = useContext(AuthContext);


  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const { dispatch } = useContext(SearchContext);

  const handleSearch = () => {
    dispatch({ type: "NEW_SEARCH", payload: { destination, dates, options } });
    navigate("/hotels", { state: { destination, dates, options } });
  };
  useEffect(()=>{
    const accordionItems = document.querySelectorAll(".value__accordion-item")
    
    accordionItems.forEach((item) =>{
      const accordionHeader = item.querySelector('.value__accordion-header')

      try{
        accordionHeader.addEventListener('click', ()=>{
          const openItem = document.querySelector('.accordion-open')
          toggleItem(item)

          if(openItem && openItem!== item){
            toggleItem(openItem)
          }
        })
      }catch{
        console.log("accordian")
      }
     
    })

    const toggleItem = (item) =>{
      const accordionContent = item.querySelector('.value__accordion-content')
      if(item.classList.contains('accordion-open')){
        accordionContent.removeAttribute('style')
        item.classList.remove('accordion-open')
      }
      else{
        item.classList.add("accordion-open");
        accordionContent.style.height = accordionContent.scrollHeight + 'px';
        setAccordian("open")
      }
      
    }
  }, [accordian]);
  return (
    <main className="main">
      <section className="home section" id="home">
        <div className="home__container container grid">
          <div className="home__data">
            <h1 className="home__title">Welcome to Rentroomo!</h1>
            <p className="home__description">
              Find your desired house within 100 hours <br /> with few easy steps.
            </p>
            <form action="" className="home__search">
              <i className="bx bx-map"></i>
              <input
                type="search"
                placeholder="Dehradun"
                className="home__search-input"
              />
              <button onClick={handleSearch} className="button">Search</button>
            </form>
            <div className="home__value">
              <div>
                <h1 className="home__value-number">
                  100K <span>+</span>
                </h1>
                <span className="home__value-description">
                  Customers <br />
                </span>
              </div>
              <div>
                <h1 className="home__value-number">
                  40K <span>+</span>
                </h1>
                <span className="home__value-description">
                  Properties<br />
                </span>
              </div>
              <div>
                <h1 className="home__value-number">
                  12K<span>+</span>
                </h1>
                <span className="home__value-description">
                  Placed Rented <br />
                </span>
              </div>
            </div>
          </div>
          <div className="home__images">
            <div className="home__orbe"></div>
            <div className="home__img">
              <img src={homeImg} alt="Property Image Home" />
            </div>
          </div>
        </div>
      </section>
      <section className="popular section" id="popular">
        <div className="container">
          <span className="section__subtitle">Best Choice</span>
          <h2 className="section__title"> Popular Properties <span>.</span></h2>
          <Swiper navigation={true} grabCursor={true} loop={true} slidesPerView={3} centeredSlides={true} spaceBetween={32} modules={[Navigation]} className="mySwiper popular__container">
            <SwiperSlide>
              <article className="popular__card swiper-slide">
                <img src={propertyImg} alt="Property Image" className="popular__img" />
                <div className="popular__data">
                  <h2 className="popular__price">
                    <span>&#8377;</span> 35,000
                  </h2>
                  <h3 className="popular__title">
                    Aliva Prida Jarvin
                  </h3>
                  <p className="popular__description">
                    Jakrata Garden City Streets, Cakung, Pulo Gadung, Jakrata Timur DK Jakrata
                  </p>
                </div>
              </article>
              </SwiperSlide>
              <SwiperSlide>
              <article className="popular__card swiper-slide">
                <img src={propertyImg} alt="Property Image" className="popular__img" />
                <div className="popular__data">
                  <h2 className="popular__price">
                    <span>&#8377;</span> 35,000
                  </h2>
                  <h3 className="popular__title">
                    Aliva Prida Jarvin
                  </h3>
                  <p className="popular__description">
                    Jakrata Garden City Streets, Cakung, Pulo Gadung, Jakrata Timur DK Jakrata
                  </p>
                </div>
              </article>
              </SwiperSlide>
              <SwiperSlide>
              <article className="popular__card swiper-slide">
                <img src={propertyImg} alt="Property Image" className="popular__img" />
                <div className="popular__data">
                  <h2 className="popular__price">
                    <span>&#8377;</span> 35,000
                  </h2>
                  <h3 className="popular__title">
                    Aliva Prida Jarvin
                  </h3>
                  <p className="popular__description">
                    Jakrata Garden City Streets, Cakung, Pulo Gadung, Jakrata Timur DK Jakrata
                  </p>
                </div>
              </article>
              </SwiperSlide>
              <SwiperSlide>
              <article className="popular__card swiper-slide">
                <img src={propertyImg} alt="Property Image" className="popular__img" />
                <div className="popular__data">
                  <h2 className="popular__price">
                    <span>&#8377;</span> 35,000
                  </h2>
                  <h3 className="popular__title">
                    Aliva Prida Jarvin
                  </h3>
                  <p className="popular__description">
                    Jakrata Garden City Streets, Cakung, Pulo Gadung, Jakrata Timur DK Jakrata
                  </p>
                </div>
              </article>
              </SwiperSlide>
          </Swiper>
        </div>
      </section>
      <section className="value section" id="value">
        <div className="value__container container grid">
          <div className="values__images">
            <div className="value__orbe">
              <div className="value__img">
                <img src={valueImg} alt="Value Image" />
              </div>
            </div>
          </div>
          <div className="value__content">
            <div className="value__data">
              <span className="section__subtitle">
                Our Value
              </span>
              <h2 className="section__title">
                Value We Give To <span>.</span>
              </h2>
              <p className="value__description">
                When it Comes to real estate we are best Provider in the industry lorem ipsum sit demor,When it Comes to real estate we are best Provider in the industry lorem ipsum  
              </p>
            </div>
            <div className="value__accordion">
              <div className="value__accordion-item">
                  <header className="value__accordion-header">
                  <i className='bx bxs-shield-x value__accordion-icon'></i>
                  <h3 className="value__accordion-title">
                    Cloud Shifting
                  </h3>
                  <div className="value__accordion-arrow">
                    <i className='bx bxs-down-arrow' ></i>
                  </div>
                  </header>

                  <div className="value__accordion-content">
                    <p className="value__accordion-description">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, voluptatem quaerat perspiciatis pariatur, praesentium similique debitis facilis autem ipsum ullam.
                    </p>
                  </div>
              </div>
              <div className="value__accordion-item">
                  <header className="value__accordion-header">
                  <i className='bx bxs-shield-x value__accordion-icon'></i>
                  <h3 className="value__accordion-title">
                    Cloud Shifting
                  </h3>
                  <div className="value__accordion-arrow">
                    <i className='bx bxs-down-arrow' ></i>
                  </div>
                  </header>

                  <div className="value__accordion-content">
                    <p className="value__accordion-description">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, voluptatem quaerat perspiciatis pariatur, praesentium similique debitis facilis autem ipsum ullam.
                    </p>
                  </div>
              </div>
              <div className="value__accordion-item">
                  <header className="value__accordion-header">
                  <i className='bx bxs-shield-x value__accordion-icon'></i>
                  <h3 className="value__accordion-title">
                    Cloud Shifting
                  </h3>
                  <div className="value__accordion-arrow">
                    <i className='bx bxs-down-arrow' ></i>
                  </div>
                  </header>

                  <div className="value__accordion-content">
                    <p className="value__accordion-description">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, voluptatem quaerat perspiciatis pariatur, praesentium similique debitis facilis autem ipsum ullam.
                    </p>
                  </div>
              </div>
              <div className="value__accordion-item">
                  <header className="value__accordion-header">
                  <i className='bx bxs-shield-x value__accordion-icon'></i>
                  <h3 className="value__accordion-title">
                    Cloud Shifting
                  </h3>
                  <div className="value__accordion-arrow">
                    <i className='bx bxs-down-arrow' ></i>
                  </div>
                  </header>

                  <div className="value__accordion-content">
                    <p className="value__accordion-description">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, voluptatem quaerat perspiciatis pariatur, praesentium similique debitis facilis autem ipsum ullam.
                    </p>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </main>
  );
};

export default Main;
