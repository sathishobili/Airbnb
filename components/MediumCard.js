import Image from 'next/image'
import React from 'react'

function MediumCard({img,title}) {
    return (
        <div className="cursor-pointer hover:scale-105 hover:transition transition duration-300 space-x-3 ease-out">
            <div className="relative w-80 h-80">
                <Image src={img} layout="fill" className="rounded-lg" />
            </div>
            <p className="text-3xl m-3">{title}</p>
        </div>
    )
}

export default MediumCard
