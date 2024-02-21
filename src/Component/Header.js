import React, { useEffect, useState } from 'react'
import logo from "../assets/mylogo.png"
import product from "../assets/header.png"
import client1 from "../assets/client1.png"
import client2 from "../assets/client2.png"
import client3 from "../assets/client3.png"
import client4 from "../assets/client4.png"
import client5 from "../assets/client5.png"
import client6 from "../assets/client6.png"
import client7 from "../assets/client7.png"
import client8 from "../assets/client8.png"
import products from "../assets/header-img.png"
import learn from "../assets/learn.png"
// import why from "../assets/why.png"

import siderimg from "../assets/girl.png"
import Testimonials from './Testimonial'
import Contact from './Contact'
function Header() {
    const[navShow,setNavShow]=useState(false)
    const [openIndex, setOpenIndex] = useState(null);
    const[videoShow,setVideoShow]=useState(false)
    
	const toggleFAQ = (index) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
      };


      useEffect(()=>{

const scroll=()=>{
    let Navbar=document.querySelector("nav")
    if(window.scrollY>0){
      
    Navbar.classList.add("window-scroll")
    
    }
    else{
        Navbar.classList.remove("window-scroll")
    }
}

window.addEventListener("scroll",scroll)

return()=>window.removeEventListener("scroll",scroll)

      },[])
  return (
    <>

    <nav>
    <div className='container nav__container'>
    <a href='#' className='mylogo'>
    <img src={logo} />
    {/* <p><strong>sanjay</strong></p> */}
    </a>
    
    <ul className={navShow?'items':'item'}>
    <li  onClick={()=>setNavShow(false)}>
        <a href='#'  className='active'>Home</a>
    </li>
    <li onClick={()=>setNavShow(false)}>
        <a href='#products'>Products</a>
    </li>
    <li onClick={()=>setNavShow(false)}>
        <a href='#testimonials'>Testimonials</a>
    </li>
    <li onClick={()=>setNavShow(false)}>
        <a href='#why-choose-us'>Why Choose Us</a>
    </li>
 

    <li onClick={()=>setNavShow(false)}>
        <a href='#faqs'>FAQs</a>
    </li>
    
    </ul>
    
    
    
    <div className='icons'>
    
        <a href='#'><i class="uil uil-search"></i></a>
    
        <a href='#'><i class="uil uil-shopping-basket"></i></a>
    
        <a href='#'><i class="uil uil-user"></i></a>
    
    
    </div>
    {
        navShow?<div className='menu-btn ' >
        <i class="uil uil-multiply" onClick={()=>setNavShow(false)}></i>
        </div>:
        <div className='menu-btn' >
    
    <i class="fa-solid fa-bars" onClick={()=>setNavShow(true)}></i>
    </div>
    }
    
    
    
    
    </div>
    
    
    </nav>
{/* <---------------------end of navbar-----------> */}

<header>
    <div className='container ' style={{width:"85%"}}>
<div className='info'>
    <div className='delivery'>
    <small>Free Delivery Worldwide</small>
    <i className='uil uil-truck'></i>
    </div>
    <h1>Foundation Mates & Poreless</h1>
    <p>
        Maybelline's #1 foundation perfect for oily skin.
        No stickiness,No shine.
    </p>
    <div className='cta'>
    <a href='#products' className='btn btn-primary'>See Products</a>
    <a href='#' id='show-btn' onClick={()=>setVideoShow(!videoShow)}>
        <img src="https://www.pngitem.com/pimgs/m/535-5357035_music-player-play-button-icon-music-player-png.png"/>
        how it works
    </a>
</div>

</div>
<div className='header-img'>
<img src={siderimg}/> 

</div>
<div className='header__details'>
<img src={product}/>
</div>
   
</div>

</header>

{/* <-----------------End of Header------------> */}

<section id={videoShow?"commercialopen":"commercial"}  >
    <div className='close'> <i class="uil uil-multiply" onClick={()=>setVideoShow(false)}></i></div>
    <div className='container'>
        <video controls autoPlay>
            <source src="https://player.vimeo.com/external/371098659.sd.mp4?s=e7b51457cf7bb16485050e427c72bba7b8e4fda5&profile_id=164&oauth2_token_id=57447761" type='video/mp4' />
        </video>
    </div>
</section>
{/* <-----------------End of Commercial------------> */}

<section id='products'>
    <div className='container'>
       <h1>Best Cosmetic Products</h1>
       <p>Achieve flawless skin with our high-coverage foundation, providing a natural-looking finish that lasts all day.
Enhance your features with our versatile eyeshadow palette, offering a stunning range of colors for endless creative possibilities.
Get luscious, voluminous lashes with our lengthening mascara, designed to define and amplify your natural beauty.
</p>

<article>
    <div className='product__image'>
        <img src={products}/>
    </div>
    <div className='products__info'>
        <h2>GODS-prime Plus<br></br>30 ML</h2>
        <p>
        Enjoy a special discount of 20% off on all foundation purchases, giving you a flawless complexion at an unbeatable price.
Get a complimentary eyeshadow brush set with the purchase of any eyeshadow palette, allowing you to achieve professional-level eye looks effortlessly.  
        </p>
        <a href='#'>Read More</a>
    </div>
</article>
<article>
   
    <div className='products__info'>
        <h2>HD Micro Foundation Matifying Liquid<br></br>30 ML</h2>
        <p>
        Achieve a shine-free complexion that looks naturally smooth and velvety with our HD Micro Foundation Matifying Liquid, the perfect
         choice for a refined, matte makeup look.
        </p>
        <a href='#'>Read More</a>
    </div>
    <div className='product__image'>
        <img src="https://cdn.pixabay.com/photo/2014/12/21/23/31/cosmetics-575521_640.png"/>
    </div>
</article>

    </div>
</section>
{/* <-----------------End of Products------------> */}
<section id='why-choose-us'>
<div className='container'>
    <div className='head'>
        <div className='left'>
<h4>Why Choose Us</h4>
<h2>How To User?<br></br>learn more details</h2>
        </div>

        <div className='right'>
<div className='image'>
    <img src="https://cdn.pixabay.com/photo/2012/04/15/19/12/pie-34974_640.png"/>
</div>
<div>
    <p>Does not contain alcohol</p>
    <h4>PH 3.5</h4>
</div>
        </div>
    </div>

    <article>
        <div className='image-first'>
            <img src={"https://cdn.pixabay.com/photo/2014/12/21/23/38/perfume-575713_640.png"}/>
        </div>
        <div className='info'>
            <h4>Apply & Ingredients</h4>
            <p>
            Start with a clean and moisturized face.
Shake the bottle well before use.
Dispense a small amount of the foundation onto the back of your hand or a mixing palette.
Using a foundation brush, sponge, or your fingertips, blend the product onto your skin in gentle, outward motions.

            </p>
            <p>
            Set the foundation with a setting powder for extended wear, if desired.
Ingredients in HD Micro Foundation Matifying Liquid may vary depending on the specific brand or product. However, typical ingredients in matifying liquid foundations may include:

Dimethicone: Provides a smooth and silky texture while creating a mattifying effect.
            </p>
            <a href='#'><img src={learn}/></a>
        </div>
    </article>
</div>



</section>
{/* <-----------------End of Why choose us------------> */}

<section id='clients'>
<h4>some of my trusted clients</h4>


<div className='container clients__container' >
<div><img src={client1}/></div>
<div><img src={client2}/></div>
<div><img src={client3}/></div>
<div><img src={client4}/></div>
<div><img src={client5}/></div>
<div><img src={client6}/></div>
<div><img src={client7}/></div>
<div><img src={client8}/></div>

</div>




</section>
{/* <----------End of Clients-----------------> */}
<section id='faqs'>
<h1>FAQ</h1>
	<div className='container faqs__container'>

	<div className="faq">
      <article className={openIndex === 1 ? 'faq__article faq-open' : 'faq__article'}>
        <span className="faq__icon" onClick={() => toggleFAQ(1)}>
          {openIndex === 1 ? <i className="uil uil-minus"></i> : <i className="uil uil-plus"></i>}
        </span>
        <div className="faq__question-answer">
          <h4 className="faq__question">How does this product benefit me?</h4>
          <p className={openIndex === 1 ? 'faq__answer-open' : 'faq__answer'}>
            Our product offers various benefits such as improved health, enhanced well-being, and increased happiness.
          </p>
        </div>
      </article>

      <article className={openIndex === 2 ? 'faq__article faq-open' : 'faq__article'}>
        <span className="faq__icon" onClick={() => toggleFAQ(2)}>
          {openIndex === 2 ? <i className="uil uil-minus"></i> : <i className="uil uil-plus"></i>}
        </span>
        <div className="faq__question-answer">
          <h4 className="faq__question">Is the product safe for long-term use?</h4>
          <p className={openIndex === 2 ? 'faq__answer-open' : 'faq__answer'}>
            Yes, our product is designed for long-term use and has undergone rigorous safety testing to ensure its effectiveness and safety.
          </p>
        </div>
      </article>

      <article className={openIndex === 3 ? 'faq__article faq-open' : 'faq__article'}>
        <span className="faq__icon" onClick={() => toggleFAQ(3)}>
          {openIndex === 3 ? <i className="uil uil-minus"></i> : <i className="uil uil-plus"></i>}
        </span>
        <div className="faq__question-answer">
          <h4 className="faq__question">How can I purchase the product?</h4>
          <p className={openIndex === 3 ? 'faq__answer-open' : 'faq__answer'}>
            You can purchase our product through our official website or authorized retailers. Visit our website for more information.
          </p>
        </div>
      </article>

      <article className={openIndex === 4 ? 'faq__article faq-open' : 'faq__article'}>
        <span className="faq__icon" onClick={() => toggleFAQ(4)}>
          {openIndex === 4 ? <i className="uil uil-minus"></i> : <i className="uil uil-plus"></i>}
        </span>
        <div className="faq__question-answer">
          <h4 className="faq__question">Are there any side effects?</h4>
          <p className={openIndex === 4 ? 'faq__answer-open' : 'faq__answer'}>
            Our product is well-tolerated, but some individuals may experience mild side effects. Consult with a healthcare professional for personalized advice.
          </p>
        </div>
      </article>

      <article className={openIndex === 5 ? 'faq__article faq-open' : 'faq__article'}>
        <span className="faq__icon" onClick={() => toggleFAQ(5)}>
          {openIndex === 5 ? <i className="uil uil-minus"></i> : <i className="uil uil-plus"></i>}
        </span>
        <div className="faq__question-answer">
          <h4 className="faq__question">Can the product be used by all age groups?</h4>
          <p className={openIndex === 5 ? 'faq__answer-open' : 'faq__answer'}>
            Our product is suitable for adults of all age groups. However, we recommend consulting with a healthcare professional for specific age-related concerns.
          </p>
        </div>
      </article>

      <article className={openIndex === 6 ? 'faq__article faq-open' : 'faq__article'}>
        <span className="faq__icon" onClick={() => toggleFAQ(6)}>
          {openIndex === 6 ? <i className="uil uil-minus"></i> : <i className="uil uil-plus"></i>}
        </span>
        <div className="faq__question-answer">
          <h4 className="faq__question">Are there any restrictions on product usage?</h4>
          <p className={openIndex === 6 ? 'faq__answer-open' : 'faq__answer'}>
            Our product may have certain usage restrictions. Please refer to the product label or consult with a healthcare professional for specific guidelines.
          </p>
        </div>
      </article>

      <article className={openIndex === 7 ? 'faq__article faq-open' : 'faq__article'}>
        <span className="faq__icon" onClick={() => toggleFAQ(7)}>
          {openIndex === 7 ? <i className="uil uil-minus"></i> : <i className="uil uil-plus"></i>}
        </span>
        <div className="faq__question-answer">
          <h4 className="faq__question">How can I contact customer support?</h4>
          <p className={openIndex === 7 ? 'faq__answer-open' : 'faq__answer'}>
            For any inquiries or assistance, you can reach our customer support team through phone, email, or live chat. Visit our website for contact details.
          </p>
        </div>
      </article>
    </div>

	</div>
</section>
{/* <----------End of FAQ-----------------> */}

<Testimonials/>
<Contact/>

<footer >

<div className='container footer__container'>

	<div className='footer__1'>
		<div className='logo'>
			<a href='#'><h3>SmartHome</h3></a>
		</div>
		<p>As good as a story is at hitting the reasons why the company
			 is great, consumers need 
	to know: "What's in it for me?"</p>
	<div className='footer__subscribe'>
		<input type='email' placeholder='Enter Email' required/>
		<button type='submit' ><i class="uil uil-arrow-right"></i></button>
	</div>
	</div>
	<div className='footer__2'>
		<h4>Permalinks</h4>
		<ul className='permalinks'>
<li>
	<a href='#'>Home</a>
</li>
<li>
	<a href='#products'>Products</a>
</li>
<li>
	<a href='#why-choose-us'>Why Choose Us</a>
</li>

<li>
	<a href='#contacts'>Testimonials
</a>
</li>
<li>
	<a href='#faqs'>FAQs</a>
</li>

</ul>
	</div>

	<div className='footer__3'>
		<h4>Privacy</h4>
		<ul className='privacy'>
<li>
	<a href='#'>Privacy Policy</a>
</li>
<li>
	<a href='#about'>Terms and condition</a>
</li>
<li>
	<a href='#'>Refund Policy</a>
</li>



</ul>
	</div>
	<div className='footer__4'>
		<h4>Contact Us</h4>
		<p>
			+01 234 567 8910
			sanjayven20@gmail.com
		</p>
		<ul className='footer__social'>
<a href='https://facebook.com/apple' target='_blank'>
<i class="uil uil-facebook-f"></i>
</a>

<a href='https://facebook.com/apple' target='_blank'>
<i class="uil uil-instagram-alt"></i>
</a>
<a href='https://twitter.com/apple' target='_blank'>
<i class="uil uil-twitter"></i>
</a>
<a href='https://linkedin.com/apple' target='_blank'>
<i class="uil uil-linkedin-alt"></i>
</a>


</ul>


	</div>
</div>

<div className='copyright'>
<small>Copyright &copy; MC BOY</small>
</div>
</footer>
</>
  )
}

export default Header
