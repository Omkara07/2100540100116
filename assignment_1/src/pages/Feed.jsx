import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar'
import Filter from '../components/Filter'
import Card from '../components/Card'

const Feed = () => {
    const [products, setProducts] = useState([])
    // useEffect(() => {
    //     axios.get()
    // }, [])

    const [data, setData] = useState([
        {
            productName: "Laptop 1",
            price: 2236,
            rating: 4.7,
            discount: 63,
            availability: "yes"
        },
        {
            productName: "Laptop 1",
            price: 2236,
            rating: 4.7,
            discount: 63,
            availability: "yes"
        },
        {
            productName: "Laptop 1",
            price: 2236,
            rating: 4.7,
            discount: 63,
            availability: "yes"
        },
        {
            productName: "Laptop 1",
            price: 2236,
            rating: 4.7,
            discount: 63,
            availability: "yes"
        },
        {
            productName: "Laptop 1",
            price: 2236,
            rating: 4.7,
            discount: 63,
            availability: "yes"
        },
    ])
    return (
        <>
            <Navbar />
            <Filter setProducts={setProducts} />
            <div className='flex justify-around px-10 py-20 flex-wrap gap-10'>
                {data.map((item) => {
                    return <Card item={item} />
                })}
            </div>
        </>
    )
}

export default Feed
