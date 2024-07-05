import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className='footer'>
              <div className='footer-wave'>
                    <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M0,0V46.29c47.47,22.54,103.71,34.28,158.57,28.85,52.66-5.1,102.09-28.07,156.2-35.17C401.33,34.32,456.77,46.19,512,58.77c48.17,11,96.31,22.3,144.58,22.6,59.24.36,116.09-14.82,172.42-32,36.64-10.65,73.71-20.85,111.2-23.42,46.42-3.11,92.51,6.44,139.19,13.37V0Z" className='shapeFill'></path>
                    </svg>
                </div>
            <div className='footer-container'>
                <ul className="menu">
                    <li className="menu--item"><a className="menu--link" href="#">Home</a></li>
                    <li className="menu--item"><a className="menu--link" href="/about">About</a></li>
                    <li className="menu--item"><a className="menu--link" href="/blog">Blog</a></li>
                    <li className="menu--item"><a className="menu--link" href="/contact">Contact</a></li>
                </ul>
                <p className='text-center'>&copy;2024 Alyssa Sharpe | All Rights Reserved</p>
            </div>
      </footer> 
    );
}

export default Footer;
