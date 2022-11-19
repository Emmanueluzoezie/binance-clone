import { useEffect, useState } from "react"
import { carouselItems } from "../../../data/data"

const Banner = () => {
    const [currentIndex, SetCurrentIndex] = useState(0)
    const carouselInfiniteScroll = () => {
        if (currentIndex === carouselItems.length - 1) {
            return SetCurrentIndex(0)
        }
        return SetCurrentIndex(currentIndex + 1)
    }

    useEffect(() => {
        const interval = setInterval(() => { carouselInfiniteScroll() }, 5000)
        return () => clearInterval(interval)
    })

    return (
        <div className="flex mt-6 flex-nowrap overflow-hidden  w-full">
            {carouselItems.map((item, index) => (
                <div key={index} className="carousel-div flex items-center justify-center p-0 m-0 rounded-2xl" style={{ transform: `translate(-${currentIndex * 100}%)` }}>
                    {item.carousel}
                </div>
            ))}
        </div>
    )
}

export default Banner