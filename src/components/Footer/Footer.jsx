/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from 'react';

const Footer = () => {
    return (
        <footer class="bg-dark text-white text-center py-3 container">
  <div class="container mb-5 mt-5">
    <p class="mb-0">Explore more delicious recipes from our talented chefs</p>
    <p class="mb-0">Follow us on social media for updates and culinary inspiration</p>
    <ul class="list-inline social-icons mt-3">
      <li class="list-inline-item"><a href="#"><i class="fab fa-facebook-f"></i></a></li>
      <li class="list-inline-item"><a href="#"><i class="fab fa-twitter"></i></a></li>
      <li class="list-inline-item"><a href="#"><i class="fab fa-instagram"></i></a></li>
      <li class="list-inline-item"><a href="#"><i class="fab fa-pinterest"></i></a></li>
    </ul>
    <p class="mt-3">&copy; 2023 Chef Recipe. All rights reserved.</p>
  </div>
</footer>

    );
};

export default Footer;