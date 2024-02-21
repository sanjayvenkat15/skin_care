import React from 'react'




// Import Swiper styles
import { Pagination} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Testimonials() {
  return (
    <div id='testimonials'>

   
    <section className='testimonials__container'>

<h2>Testimonials</h2>
<h5>Review from Clients</h5>
      <Swiper
       modules={[ Pagination]}
       spaceBetween={40}
       slidesPerView={1}
 
       pagination={{ clickable: true }}
      
   
     >
<SwiperSlide id='testimonial'>
  <div className='client__avatar'>
    <img src="https://cdn.pixabay.com/photo/2019/08/01/05/59/girl-4376755_640.jpg" alt="profile"/>
   
  </div>

  <div className='right'>


<div className='details'>
    <h4>Customer Story</h4>
    <h2>Quick and best results.You are the best!</h2>
</div>
<p>

</p>
<p>
    There are many variations of passages of lorem ipsum available.
</p>
<div className='name'>
<h5><strong>Mary Danso</strong></h5>
<small>
    Marketing Manager
</small>
</div>

</div>
    </SwiperSlide>




    <SwiperSlide id='testimonial'>
  <div className='client__avatar'>
    <div>
    <img src="https://cdn.pixabay.com/photo/2019/08/01/05/59/girl-4376755_640.jpg" alt="profile"/>
    </div>
    
  </div>
  <div className='right'>


<div className='details'>
    <h4>Customer Story</h4>
    <h2> I highly recommend it for those looking for a long-lasting!</h2>
</div>
<p>

</p>
<p>
    There are many variations of passages of lorem ipsum available.
</p>
<div className='name'>
<h5><strong>Mary Danso</strong></h5>
<small>
    Marketing Manager
</small>
</div>

</div>
    </SwiperSlide>
    <SwiperSlide id='testimonial'>
  <div className='client__avatar'>
    <img src="https://cdn.pixabay.com/photo/2019/08/01/05/59/girl-4376755_640.jpg" alt="profile"/>
  </div>
  <div className='right'>


<div className='details'>
    <h4>Customer Story</h4>
    <h2>Quick and best results.You are the best!</h2>
</div>
<p>

</p>
<p>
    There are many variations of passages of lorem ipsum available.
</p>
<div className='name'>
<h5><strong>Mary Danso</strong></h5>
<small>
    Marketing Manager
</small>
</div>

</div>
    </SwiperSlide>


</Swiper>

     </section>
     </div>
  )
}

export default Testimonials