const input = document.querySelector("input")
const generateMoviesBtn = document.querySelector(".btn")
let moviesArray= []


const getMovies = async () => {
    const title = input.value.trim()
    
    if(input.value !== ""){
        const response = await fetch(`https://www.omdbapi.com/?s=${title}&apikey=2bb388d9`)
        const movies = await response.json()
        console.log(movies)
        return movies
    }
}

export const getMovieDetails = async (imdbId)=> {
    const response = await fetch(`https://www.omdbapi.com/?i=${imdbId}&apikey=2bb388d9`)
    const detailedMovies = await response.json()
    console.log(detailedMovies)
    return detailedMovies
}

const renderMovies = async () => {
    let html
    const movies = await getMovies()

    for (const movie of movies.Search) {
        const detail = await getMovieDetails(movie.imdbID);
        html += `
          <section class="movie">
            <img class="poster" src="${movie.Poster}">
            <div class="main_info" >
                <h2 class ="movie_title">${movie.Title}</h2>
                <i class="fa-solid fa-star star"></i>
                <p class="rating">${detail.Ratings[0].Value}<p>
            </div>
            <div class ="secondary_info">
                <p class= "duration">${detail.Runtime}</p>
                <p class= "genre"> ${detail.Genre}</p>
                <i class="fa-solid fa-circle-plus add" data-imdbId="${movie.imdbID}"   ></i>
                <p class="watch_list">watchlist</p>
            </div>
            <p class="plot">${detail.Plot}</p>
          </section> `}
    document.querySelector(".movies").innerHTML = html

    const iconsAdd = document.querySelectorAll(".add")
    iconsAdd.forEach(icon => icon.addEventListener("click", ()=>{
        const id = icon.dataset.imdbid
        saveToLocalStorage(id)
    }))
}

const saveToLocalStorage = async id => {
    const detail = await getMovieDetails(id);
    const storedData = localStorage.getItem("watchlist")
    const storedMovies = JSON.parse(storedData) || []
    storedMovies.push(detail);
    localStorage.setItem("watchlist", JSON.stringify(storedMovies))
    console.log("Movie added to local storage:", detail)
}


generateMoviesBtn.addEventListener("click", async () => {
   await renderMovies()
})
