import React from 'react'
import { IoStar } from "react-icons/io5";

const Card = ({ item }) => {
    return (
        <div className='flex flex-col border border-gray-300 w-[20vw] rounded-lg gap-4 p-8 shadow-md hover:shadow-lg '>
            <div className="flex text-2xl font-bold">{item.productName}</div>
            <div className='flex items-center gap-10'>
                <div className="flex text-xl font-bold">Rs {item.price}</div>
                <div className="flex ">Rs {item.discount} Off</div>
            </div>
            <div className='flex gap-2 items-center'>
                <div className="flex">Rating : {item.rating}</div>
                <IoStar className='text-yellow-500' />
            </div>
            <div className="flex">{item.availability == "yes" ? "Hurry Only few Left" : item.availability}</div>
        </div>
    )
}

export default Card
