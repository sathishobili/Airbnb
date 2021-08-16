import Image from 'next/image'
function Banner() {
    return (
        <div className="relative h-[200px] sm:h-[300px]  lg:h-[400px] xl:h-[500px] 2xl:h-[600px]">
            <Image src="https://links.papareact.com/0fm"
                    layout='fill'
                    objectFit="cover"
            />
            <div className="absolute text-center w-full top-1/2">
                <p className="text-sm sm:text-lg">Not Sure Where to Go ? perfect.</p>
                <button className="text-purple-500 bg-white py-4 px-10 rounded-full shadow-md my-3 hover:shadow-xl active:scale-90 transition duration-150">I'm flexible</button>
            </div>
        </div>
    )
}

export default Banner
