'use client'
import { Movie } from "@/typings";
import Image from "next/image";
import getImagePath from "@/lib/getImagePath";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

Autoplay.globalOptions = { delay: 8000 };

function CarouselBanner({ movies = [] }: { movies: Movie[] }) {
    const [emblaRef] = useEmblaCarousel({ loop: true, duration: 100 }, [Autoplay()]);

    console.log('Movies in CarouselBanner:', movies); // Log to check movies prop

    return (
        <div className="overflow-hidden lg:-mt-40 relative cursor-pointer" ref={emblaRef}>
            <div className="flex">
                {movies && movies.length > 0 && movies.map(movie => (
                    <div className="flex-none w-full relative" key={movie.id}>
                        <Image 
                            src={getImagePath(movie.backdrop_path, true)} 
                            alt={movie.title || "Movie Image"}   
                            width={1920}
                            height={1080}
                            layout="responsive"
                            objectFit="cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CarouselBanner;
