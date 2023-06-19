import React from 'react';
import './Footer2.css';

import facebook from '../../image/facebook.svg.png';
import linkedIn from '../../image/linkedIn.png';
import instragram from '../../image/instragram.png';
import twiteer from '../../image/twiteer.png';

// import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import InstagramIcon from '@mui/icons-material/Instagram';


const Footer2 = () => {
    return (
        <div id="footer">
           <div className="footer-container">
                 <div className="social-icon">
                 <a href=""> <i> <img src={facebook} alt=""/> </i> </a>
                 <a href=""> <i> <img src={linkedIn} alt=""/> </i> </a>
                 <a href=""> <i> <img src={instragram} alt=""/> </i> </a>
                 <a href=""> <i> <img src={twiteer} alt=""/> </i> </a>
                 {/* <a href="">  <i> {facebook}   </i> </a> */}

                    {/* <a href="" > <FacebookOutlinedIcon className='i-con'/> </a>
                    <a href=""  > <LinkedInIcon className='i-con'/> </a>
                    <a href="" > <InstagramIcon/> </a>
                    <a href="" > <TwitterIcon/> </a>
                    <a href="" > <i><FacebookOutlinedIcon/></i> </a>
                */}
                 </div>
                 <div className="footer-nav">
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">Contact</a></li>
                        <li><a href="">Address</a></li>
                        <li><a href="">Phone</a></li>
                    </ul>
                 </div>
                 <div className="footer-bottom">
                    <p>Mohin al Hoque 2023</p>
                 </div>
           </div>
         
        </div>
    );
};

export default Footer2;