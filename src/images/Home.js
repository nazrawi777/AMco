import React, { useState, useEffect, useRef } from 'react';
import './Home.css'; // Import the CSS file
import logo from "./logo.png";
import { FaTimes } from 'react-icons/fa';
import { FaInstagram, FaFacebook } from "react-icons/fa";

const CountingAnimation = ({ countingRef, startCountingAnimation }) => {
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5 // Trigger when 50% of the target element is visible
    };

    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startCountingAnimation(entry.target);
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    if (countingRef.current) {
      observer.observe(countingRef.current);
    }

    return () => {
      if (countingRef.current) {
        observer.unobserve(countingRef.current);
      }
    };
  }, [startCountingAnimation, countingRef]);

  return (
    <div ref={countingRef}>
      <h5>1</h5>
    </div>
  );
};

const Home = () => {
  const [videoId, setVideoId] = useState(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false); // State to track if a video is playing

  const videos = [
    'https://www.youtube.com/embed/SMuTwf9tqdM?autoplay=1&rel=0',
    'https://www.youtube.com/embed/wgj-7ga7u1A?autoplay=1&rel=0',
    'https://www.youtube.com/embed/safhEEVwOIY?autoplay=1&rel=0',
    'https://www.youtube.com/embed/Kikm9LAGenE?autoplay=1&rel=0'
  ];

  // Create separate ref objects for cr3 and cr6
  const countingRefCr3 = useRef(null);
  const countingRefCr6 = useRef(null);

  const handleClick = (index) => {
    setVideoId(videos[index]);
    setIsVideoPlaying(true); // Set isVideoPlaying to true when video is clicked
  };

  const handleClose = (event) => {
    event.stopPropagation(); // Stop event propagation
    setVideoId(null);
    setIsVideoPlaying(false); // Reset isVideoPlaying when video is closed
  };

  const startCountingAnimation = (targetElement) => {
    const startNumber = 1; // Start counting from 1
    const endNumber = 100;
    const duration = 4000; // Animation duration in milliseconds
    const steps = endNumber - startNumber; // Total steps from start to end
    const interval = duration / steps; // Interval for each step
  
    let currentNumber = startNumber;
    const increment = 1; // Increment by 1 for each step
  
    const intervalId = setInterval(() => {
      if (currentNumber <= endNumber) {
        // Update the displayed number
        targetElement.textContent = currentNumber;
        currentNumber += increment;
      } else {
        // Display "100+" when the count reaches 100
        targetElement.textContent = "100+";
        // Stop the interval when reaching the end number
        clearInterval(intervalId);
      }
    }, interval);
  };

  return (
    <div>
    <section id="home" className="home-container">
      <div className="nd">
        <img
          className="nc"
          alt=""
          src="/home.png"
        />
        <div className="ni">
          <p className="nb">Exemplary<br/> Craftsmanship</p>
          <p className="na">AMCO is Ethiopia's Leading Construction, Interior<br/>
            Design, and Furniture Brand</p>
          <button className='cino'> Explore</button>
          <img
          className="bc"
          alt=""
          src="/h1.png"
        />
        <div class="color-overlay"></div>

        </div>
      </div>
      

    </section>
     <section id="about" className='abiy'>
     <div className='rc19'></div>
            <button className='nine'> ABOUT US</button>
            <div className="container4">
            <div className="image-column">
                <img src="about.png" alt="About AMCO" />
            </div>
            <div className="text-column">
                <h1>About AMCO</h1>
                <h2>Interiors & Furniture</h2>
                <p>for decades AMCO interior design and<br/>
                  furniture company has been delivering the<br/>
                  best and timeless spaces and beautiful<br/>
                  hand crafted fine furniture that attractes<br/>
                  the eyes</p>
            </div>
        </div>
    </section>
    <section id="service" className='service'>

    <div className="container1">  
    <div className='nazii'>
    <div classname="jni">
    <div className='rc209'>
            <button className='nnn'> HOW WE WORK</button>
    </div>
    </div>
    <div class="container10">
  <div class="rectangle99">
    <img src="si1.png" alt="Image 1" width="50" height="50"/>
    <h1>Implementation and Execution</h1>
    <p>Once the design plan is finalized,<br/>
designers oversee the execution of<br/>
renovation tasks, managing<br/>
contractors, scheduling<br/>
installations, and ensuring quality<br/>
control. They address any<br/>
challenges that arise during the<br/>
renovation process to keep the<br/>
project on track and within budget<br/>
</p>
  </div>
  <div class="rectangle99">
    <img src="si2.png" alt="Image 2" width="50" height="50"/>
    <h1>Selection and Coordination</h1>
    <p>We select materials, furnishings, and<br/>
fixtures that align with the client s<br/>
vision and budget. They coordinate<br/>
with contractors, architects, and<br/>
suppliers to ensure seamless<br/>
integration of design elements into<br/>
the renovation process, overseeing<br/>
everything from paint colors to<br/>
furniture placement</p>
  </div>
  <div class="rectangle99">
    <img src="si4.png" alt="Image 4" width="50" height="50"/>
    <h1>Assessment and Planning</h1>
    <p>We assess the existing space,<br/>
understand client needs, and<br/>
develop a plan to optimize the<br/>
layout, functionality, and aesthetics<br/>
of the renovated area. They consider<br/>
factors like spatial flow, lighting, and<br/>
structural integrity to create a<br/>
cohesive design concept.</p>
  </div>
  <div class="rectangle99">
  <img src="si1.png" alt="Image 3" width="50" height="50"/>
    <h1>Final Touches and Styling </h1>
    <p>As the renovation nears completion,<br/>
     designers add the finishing touches <br/>
     to bring the space to life. This <br/>
     includes styling with decor, artwork,<br/>
      and accessories to enhance the <br/>
      overall ambiance and functionality <br/>
      of the renovated interior, ensuring<br/>
       that the client's vision is fully<br/>
        realized.</p>
    
  </div>
</div>
<div className='tri19'></div>
            <button className='tri20'> SERVICES</button>
<div class="serv">

    <div class="image-co1umn">
        <img src="servi1.png" alt="Your Image" class="image20"/>
    </div>
    
    <div class="text-co1umn">
        <h1>Construction</h1>
        <p>At AMCO, we prioritize quality in all aspects of our<br/>
construction projects. From meticulous materials<br/>
selection to exceptional craftsmanship, we are<br/>
committed to upholding high standards. We<br/>
believe that quality construction not only<br/>
guarantees durable and long-lasting buildings but<br/>
also leads to client satisfaction.

</p>

    </div>
</div>
<img src="c19.png" alt="Your Image" class="image220"/>
<div className='tri1'></div>


  <div className='uf'>
  
    
    <div class="text-co1umn2">
        <h1>Interior Design</h1>
        <p>AMCO has ample experience in both interior and<br/>
building design. We have been engaged on office,<br/>
hotel, residential, hospitals and apartment. 100+<br/>
projects are our proofs.

</p>
<div class="image-co1umn2">
        <img src="servi2.png" alt="Your Image" class="image22"/>
    </div>
    </div>
  </div>
  <img src="c20.png" alt="Your Image" class="imagec220"/>
  <div class="servv">

    <div class="image-co1umn20">
        <img src="servi3.png" alt="Your Image" class="image210"/>
    </div>
    
    <div class="text-co1umn20">
        <h1>Furniture
Manufacturing</h1>
        <p>AMCO specializes in professional furniture<br/>
manufacturing, offering a wide range of<br/>
unique designs, trend setting workmanship,<br/>
and top-quality products. Our dedicated<br/>
manufacturing plant spans across a total<br/>
area of 3000 square meters of land,<br/>
equipped with state of the art technology<br/>
and advanced machinery.

</p>

    </div>
    
</div>
<img src="Rectangle 51.png" alt="Your Image" class="image202"/>
<img src="c19.png" alt="Your Image" class="imagec1220"/>
    </div>
        <div className='feature'>
        
        <div className="rec4" >
         <img src="5.png" alt="Photo 1"/>
        </div>
        <div className="rec5" >
         <img src="4.png" alt="Photo 1"/>
        </div>
        <div className="niw">
        <div className='rec7'></div>
        <h1>INTERIOR DESIGN</h1>

        <div className='rec8'>
        <h2>FURNITURE</h2>
        </div>
        <div className="dot-container">
          <div className="dot1"></div>
          <div className="dot"></div>
          <div className="dot"></div>
       </div>
       <div className='rec219'></div>
            <button className='nnnn'> PRODUCTS</button>
        </div>
        </div>
        <div className='cti'>
    <h1>We aim for excellence across all industries <br/>

we engage with in Ethiopia</h1>
  
        <img src="https://www.visionplusbusiness.it/materiale/header-about.jpg" alt="Your Image" class="nity"/>
        
          </div>  
          <div className="container69">
      
      <div className="contact30">
   <h2>Contact Us</h2>
   <div className="contact-form30">
     <div className="input-row20">
       <div className="input-box100">
         <input type="text" id="name" name="name" placeholder="Name" />
       </div>
     </div>
     <div className="input-row20">
       <div className="input-box100">
         <input type="text" id="email" name="email" placeholder="Email" />
       </div>
       <div className="input-box100">
         <input type="text" id="phone" name="phone" placeholder="Phone" />
       </div>
     </div>
     <div className="input-row20">
       <div className="input-box100">
         <textarea id="message" name="message" placeholder="Message"></textarea>
       </div>
     </div>
     <div className="input-row20">
       <input type="submit" value="Submit" />
     </div>
   </div>
 </div>
 
       <div className="contactf50">
         <div className="contact-info1">
           <div className='cont5'>
           <p>Email </p>
           <p>Phone </p>
           <p>Location </p>
           </div>
           <div className="nu1">
           <p>smcakcmak@gmail.com</p>
           <p>+251-9-00-00-00</p>
           <p> kscamcsmcnxcx</p>
           </div>
           
         </div>
       </div>
 
       <div className="contact200">
         <h2>Socials</h2>
         <div className="social-media20">
         <FaInstagram className="icon20" />
             <FaFacebook className="icon20" />
         </div>
       </div>
       
     </div>
      </div>
      <button className='last1'> Contact Us</button>
          <h6 className='li'>Copyrights 2024 © NAMIK Development</h6>
  </section>
  <section id="portfolio" className='portfolio-section'> 
  <div className='portfolio-section1'> 
          <h1>Preferred & Admired </h1>
          <p>Experience the satisfaction of our delighted clients who have been impressed by our past projects</p>
          <div className='portfolio-images'>
            {videos.map((video, index) => (
              <div className="portfolio-image-container" key={index} onClick={() => handleClick(index)}>
                {!isVideoPlaying && ( // Conditionally render the image if no video is playing
                  <img src={logo} alt="Your Image" className="portfolio-image" />
                )}
                {videoId === video && (
  <div className="video-overlay">
    <iframe 
      className="video-player"
      width="560" 
      height="315" 
      src={video} 
      frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowFullScreen
    ></iframe>
    <button className="close-button" onClick={(event) => handleClose(event)}>
      <FaTimes />
    </button>
  </div>
)}
              </div>
            ))}
          </div>
        </div>

  <div className="dot-container1">
    <div className="dot2"></div>
    <div className="dot3"></div>
    <div className="dot3"></div>
  </div>

  <div className='chu'>
          <div className='cr1'>
            <h1>OUR PREVIOUS PROJECTS</h1>
            <div className='cr3'>
              <img src="c0.png" alt="Your Image" className="proage" />
              {/* Pass the countingRef to the CountingAnimation component */}
              <CountingAnimation countingRef={countingRefCr3} startCountingAnimation={startCountingAnimation} />
              <h3>HAPPY CUSTOMERS</h3>
            </div>
            <div className='cr6'>
              <img src="c1.png" alt="Your Image" className="proage1" />
              
              {/* Pass the countingRef to the CountingAnimation component */}
              <CountingAnimation countingRef={countingRefCr6} startCountingAnimation={startCountingAnimation} />
              <h3>COMPLETED PROJECTS</h3>
            </div>
          </div>
        </div>


        <img src="cp.png" alt="Your Image" class="image239"/>
      

    <div className='sl219'></div>
  
</section>
    </div>
  );
};

export default Home;
