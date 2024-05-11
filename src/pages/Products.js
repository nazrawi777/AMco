import React, { useState, useEffect } from 'react';
import './products.css';
import { FaInstagram, FaFacebook } from "react-icons/fa";
import data from './data';

const Products = () => {
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState(data);

  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => {
      const category = x.category.toLowerCase();
      return category === cat.toLowerCase();
    });
    setFilter(updatedList);
  };

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <div className='niy'>
      <>
        <div className='buttons'>
          <button className='b1' onClick={() => setFilter(data)}>All</button>
          <button className='b2' onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
          <button className='b3' onClick={() => filterProduct("women's clothing")}>Women's Clothing</button>
          <button className='b4' onClick={() => filterProduct('electronics')}>Electronics</button>
          <button className='b5' onClick={() => filterProduct('jewelery')}>Jewelry</button>
        </div>
        <div className='box'>
          {loading ? (
            <p>Loading...</p>
          ) : (
            filter.length > 0 ? (
              filter.map((product) => (
                <div key={product.id} className='card'>
                  <img src={product.image} className='cardimg' alt={product.title}/>
                  <div className='cardbody'>
                    <h5 className='cardtitle'>{product.title.substring(0, 12)}</h5>
                    <p className='cardtext'>ETB{product.price}</p>
                    <a href='#' className='btn btn-primary'>
                      View Details
                    </a>
                  </div>
                </div>
              ))
            ) : (
              <p>No products found.</p>
            )
          )}
        </div>
      </>
      <div>
      <img src="cp.png" alt="Your Image" class="imag29"/>
      
      <div className="container009">
       
      <div className="contactc1">
   <h2>Contact Us</h2>
   <div className="contact-form">
     <div className="input-row">
       <div className="input-box">
         <input type="text" id="name" name="name" placeholder="Name" />
       </div>
     </div>
     <div className="input-row">
       <div className="input-box">
         <input type="text" id="email" name="email" placeholder="Email" />
       </div>
       <div className="input-box">
         <input type="text" id="phone" name="phone" placeholder="Phone" />
       </div>
     </div>
     <div className="input-row">
       <div className="input-box">
         <textarea id="message" name="message" placeholder="Message"></textarea>
       </div>
     </div>
     <div className="input-row2">
       <input type="submit" value="Submit" />
     </div>
   </div>
 </div>
 
       <div className="contactc2">
         <div className="contact-infoc2">
           <div className='contc2'>
           <p>Email </p>
           <p>Phone </p>
           <p>Location </p>
           </div>
           <div className="nuc2">
           <p>smcakcmak@gmail.com</p>
           <p>+251-9-00-00-00</p>
           <p> kscamcsmcnxcx</p>
           </div>
           
         </div>
       </div>
 
       <div className="contactc3">
         <h2>Socials</h2>
         <div className="social-mediac3">
         <FaInstagram className="iconc3" />
             <FaFacebook className="iconc3" />
         </div>
       </div>
       
     </div>
     <div className='si219c3'></div>
             <button className='latc3'> Contact Us</button>
           <h6 className='c3'>Copyrights 2024 © NAMIK Development</h6>
      </div>
    </div>
  );
};

export default Products;
