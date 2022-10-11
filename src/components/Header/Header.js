import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <div className='flex justify-between items-center p-5'>
                <h4 className='ml-12 text-4xl font-semibold'>Math Quiz</h4>
                <nav className='header mr-12'>
                    <Link to="/home">Home</Link>
                    <Link to="/topic">Topic</Link>
                    <Link to="/statistics">Statistics</Link>
                    <Link to="/blog">Blog</Link>
                </nav>
            </div>
        </div>
    );
};

export default Header;