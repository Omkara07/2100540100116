import React, { useState } from 'react'
import Input from './Input'
import Card from './Card'

const Filter = () => {
    const [company, setCompany] = useState("")
    const [Categories, setCategory] = useState("")
    const [top, setTop] = useState(0)
    const [min, setMin] = useState(0)
    const [max, setMax] = useState(0)


    return (
        <>
            <div className='flex px-8 text-xl font-bold pt-5'>
                Filter
            </div>
            <div className='flex gap-3 px-5'>
                <Input label={"Company"} onChange={(e) => {
                    setCompany("e.target.value")
                }} />
                <Input label={"Categories"} onChange={(e) => {
                    setCategory("e.target.value")
                }} />
                <Input label={"Top (number) "} onChange={(e) => {
                    setTop("e.target.value")
                }} />
                <Input label={"Minimum Price"} onChange={(e) => {
                    setMin("e.target.value")
                }} />
                <Input label={"Maximum Price"} onChange={(e) => {
                    setMax("e.target.value")
                }} />
            </div>
        </>
    )
}

export default Filter
