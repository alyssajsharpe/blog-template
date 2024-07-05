import React from 'react';

const Header: React.FC = () => {
    return (
        
        <header className='header'>
            <div className='header-container'>
                <ul className="menu">
                    <li className="menu--item"><a className="menu--link" href="#">Home</a></li>
                    <li className="menu--item"><a className="menu--link" href="/about">About</a></li>
                    <li className="menu--item"><a className="menu--link" href="/blog">Blog</a></li>
                    <li className="menu--item"><a className="menu--link" href="/contact">Contact</a></li>
                
                    </ul>
            </div>
           
      </header> 
    );
}

export default Header;
