import MoviesCarousel from "@/components/MoviesCarousel";
import { getPoplularMovies, getSearcedMovies } from "@/lib/getMovies";
import { notFound } from "next/navigation";

type Props = {
    params: {
        term: string;
    };
};

async function SearchPage({params: {term}}: Props) {

    if(!term) notFound();

    const termToUse = decodeURI(term);

    
    const movies = await getSearcedMovies(termToUse);
    
    const popularMovies = await getPoplularMovies();

  return (
    <div className="max-w-7xl mx-auto relative top-20">
      <div className="flex flex-col space-y-4 mt-32 xl:mt-42">
        <h1 className="text-6xl font-bold px-10">Search Results for {termToUse}</h1>
        <MoviesCarousel title="Movies" movies={movies} />
        <MoviesCarousel title="You may also like" movies={popularMovies} />
      </div>
    </div>
  )
}

export default SearchPage;