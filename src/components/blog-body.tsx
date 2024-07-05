import React from 'react';

const BlogBody: React.FC = () => {
    return (
        <div>
            {/* Intro */}
            <div>
                <div>
                    <h2 className='text-center'> Welcome to my blog!</h2>
                    <p className='padding-large padding-top-small'> 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>
            {/* Intro Cards*/}
           <div className='card-container'>
                <div className='card'>
                    <img className='card-img' src='../../../public/forest.jpg'></img>
                    <h3 className='card-title'>Forest</h3>
                </div>
                <div className='card'>
                    <img className='card-img' src='../../../public/beach.jpg'></img>
                    <h3 className='card-title'>Ocean Beach</h3>
                </div>
                <div className='card'>
                    <img className='card-img' src='../../../public/mountain.jpg'></img>
                    <h3 className='card-title'>Mountains</h3>
                </div>
                <div className='card'>
                    <img className='card-img' src='../../../public/open-water.jpg'></img>
                    <h3 className='card-title'>Open Water</h3>
                </div>
           </div>
        {/* Banner Image*/}
        <div className='padding-bottom-large'>
            <div className='middle-banner'>
                <h1 className='banner-text '>Last year's adventure...</h1>
            </div>
            <div className='blog-container'>
                <h3>Blog Title 1</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className='blog-container'>
                <div className='flex'>
                    <div className='blog-text-container padding-right-small'>
                        <p className='blog-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus quam pellentesque nec nam aliquam sem. Tellus molestie nunc non blandit massa enim nec dui nunc. Ut morbi tincidunt augue interdum velit euismod in. Et malesuada fames ac turpis egestas maecenas pharetra convallis posuere. Vitae nunc sed velit dignissim sodales ut eu sem. Sem fringilla ut morbi tincidunt augue. Lectus arcu bibendum at varius. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Sapien faucibus et molestie ac feugiat sed lectus.</p>
                        <p className='blog-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus quam pellentesque nec nam aliquam sem. Tellus molestie nunc non blandit massa enim nec dui nunc. Ut morbi tincidunt augue interdum velit euismod in. Et malesuada fames ac turpis egestas maecenas pharetra convallis posuere. Vitae nunc sed velit dignissim sodales ut eu sem. Sem fringilla ut morbi tincidunt augue. Lectus arcu bibendum at varius. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Sapien faucibus et molestie ac feugiat sed lectus.</p>
                        <p className='blog-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus quam pellentesque nec nam aliquam sem. Tellus molestie nunc non blandit massa enim nec dui nunc. Ut morbi tincidunt augue interdum velit euismod in. Et malesuada fames ac turpis egestas maecenas pharetra convallis posuere. Vitae nunc sed velit dignissim sodales ut eu sem. Sem fringilla ut morbi tincidunt augue. Lectus arcu bibendum at varius. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Sapien faucibus et molestie ac feugiat sed lectus.</p>
                    </div>
                    <img className='blog-image' src='../../../public/cabin.jpg'></img>
                </div>
            </div>
            <div>
                <h3>Blog Title 2</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            
            <div className='blog-container'>
            <div className='flex'>
                <img className='blog-image padding-right-small' src='../../../public/cabin.jpg'></img>
                    <div className='blog-text-container'>
                        <p className='blog-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus quam pellentesque nec nam aliquam sem. Tellus molestie nunc non blandit massa enim nec dui nunc. Ut morbi tincidunt augue interdum velit euismod in. Et malesuada fames ac turpis egestas maecenas pharetra convallis posuere. Vitae nunc sed velit dignissim sodales ut eu sem. Sem fringilla ut morbi tincidunt augue. Lectus arcu bibendum at varius. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Sapien faucibus et molestie ac feugiat sed lectus.</p>
                        <p className='blog-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus quam pellentesque nec nam aliquam sem. Tellus molestie nunc non blandit massa enim nec dui nunc. Ut morbi tincidunt augue interdum velit euismod in. Et malesuada fames ac turpis egestas maecenas pharetra convallis posuere. Vitae nunc sed velit dignissim sodales ut eu sem. Sem fringilla ut morbi tincidunt augue. Lectus arcu bibendum at varius. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Sapien faucibus et molestie ac feugiat sed lectus.</p>
                        <p className='blog-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus quam pellentesque nec nam aliquam sem. Tellus molestie nunc non blandit massa enim nec dui nunc. Ut morbi tincidunt augue interdum velit euismod in. Et malesuada fames ac turpis egestas maecenas pharetra convallis posuere. Vitae nunc sed velit dignissim sodales ut eu sem. Sem fringilla ut morbi tincidunt augue. Lectus arcu bibendum at varius. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Sapien faucibus et molestie ac feugiat sed lectus.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default BlogBody;
