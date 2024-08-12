const getImagePath = (imagePath?: string, fullsize?: boolean) =>{
    return imagePath
    ?   `http://image.tmdb.org/t/p${fullsize ? "/original" : "/w500"}/${imagePath}`
    :   "/links.papareact.com/";
};

export default getImagePath;
