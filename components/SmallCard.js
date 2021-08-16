import Image from 'next/image'
import React from 'react'

function SmallCard({img,location,distance}) {
    return (
        <div className="flex space-x-3 m-5 cursor-pointer rounded-lg hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out">
            <div className="relative w-16 h-16">
                <Image src={img}  layout="fill" className="rounded-lg" />
            </div>
            <div className="">
                <h2>{location}</h2>
                <h3 className="text-gray-500">{distance}</h3>
            </div>
        </div>
    )
}

export default SmallCard
