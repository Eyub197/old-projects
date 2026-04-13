const datas = localStorage.getItem("watchlist")
    for (let data of datas) {
        document.body.innerHTML += `

        <section class="movie">
        <img class="poster" src="${data.Poster}">
        <div class="main_info" >
            <h2 class ="movie_title">${data.Title}</h2>
            <i class="fa-solid fa-star star"></i>
           
        </div>
        <div class ="secondary_info">
            <p class= "duration">${data.Runtime}</p>
            <p class= "genre"> ${data.Genre}</p>
            <i class="fa-solid fa-circle-plus add" data-imdbId="${data.imdbID}"   ></i>
            <p class="watch_list">watchlist</p>
        </div>
        <p class="plot">${data.data}</p>
      </section>`
    }

    // const removeIcons = document.querySelectorAll(".remove");
    // removeIcons.forEach((icon, index) => {
    //     icon.addEventListener("click", () => {
    //         datas.splice(index, 1);
    //         localStorage.setItem("watchlist", JSON.stringify(datas));

    //     });
    // });

