
import MoviesCarousel from '@/components/MoviesCarousel';
import { getDiscoverMovies, getPoplularMovies } from '@/lib/getMovies';



type Props = {
    params: {
        id: string;
    };
   
};

async function GenrePage({params: {id}} : Props) {

  const termToUse = decodeURI(id);

  const movies = await getPoplularMovies();

  return (
    <div className="max-w-7xl mx-auto relative top-20">
      <MoviesCarousel  movies={movies} />
  </div>
  
  );
}

export default GenrePage