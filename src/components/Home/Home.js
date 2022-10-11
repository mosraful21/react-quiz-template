import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Home.css'
import Item from '../Item/Item';

const Home = () => {
    const homeItem = useLoaderData();
    console.log(homeItem);
    return (
        <div>
            <div className='bg-gray-200 p-8'>
                <h2 className='text-4xl'> This is the simple quiz</h2>
            </div>
            <div className='grid md:grid-cols-4 gap-4 p-12'>
                {
                    homeItem.map(item => <Item
                        key={item.id}
                        item={item}
                    ></Item>)
                }
            </div>
        </div>
    );
};

export default Home;