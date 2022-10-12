import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Item from '../Item/Item';

const Topics = () => {
    const topicItem = useLoaderData();

    return (
        <div>
            <div className='bg-gray-200 p-8'>
                <h2 className='text-4xl'> This is the simple quiz of Web Development Topic</h2>
            </div>
            <div className='grid md:grid-cols-4 gap-4 p-12'>
                {
                    topicItem.map(item => <Item
                        key={item.id}
                        item={item}
                    ></Item>)
                }
            </div>
        </div>
    );
};

export default Topics;