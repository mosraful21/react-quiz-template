import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <div className='flex md:justify-between items-center p-5 border-b-4 border-gray-500 shadow-slate-50'>
                <h4 className='ml-12 md:bg-light-500 text-4xl font-semibold'>Simple Quiz</h4>
                <nav className='header mr-12'>
                    <Link to="/">Topics</Link>
                    <Link to="/statistics">Statistics</Link>
                    <Link to="/blog">Blog</Link>
                </nav>
            </div>
        </div>
    );
};

export default Header;