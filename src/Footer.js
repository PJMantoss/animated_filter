import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <div className='footer'>
        <p><strong>Animated Filter</strong></p>
        <p>&copy; 2022</p>

        <div id="love">
            <span>Made With</span>
            <img src="https://img.icons8.com/dusk/64/000000/like.png" alt="love"/> 
            <span>by <a href="https://github.com/PJMantoss" target="_blank">Mantoss</a></span>
        </div>
    </div>
  )
}

export default Footer;