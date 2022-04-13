const url = 'http://www.omdbapi.com/?s=spider&i=tt3896198&apikey=63c5c072' ;
const moviesDetail = 'http://www.omdbapi.com/?i=tt3896198&apikey=63c5c072';

const resultItem = document.querySelector('.resultItem');
const searchContainer = document.querySelector('.searchContainer');

const dataFromApi = async (searchValue) => {
    resultItem.innerHTML ='';
    const response = await fetch(`http://www.omdbapi.com/?s=${searchValue}&i=tt3896198&apikey=63c5c072`);
    const data = await response.json();
    const mainData = data.Search;
    if (mainData == undefined) {
        return;
    }
    if (data.Response==="True") {
        mainData.forEach(element => {
            const tag = `
                <div class="itemContainer px-3" id=${element.imdbID}>
                    <img class="itemImg" src="${element.Poster}" alt="">
                    <div class="itemTitle ms-4">
                        ${element.Title} 
                        <div class="pt-1">${element.Year}</div>
                    </div>
                </div>
            `;
            resultItem.innerHTML += tag;
        });
        const itemContainers = document.querySelectorAll('.itemContainer');
        for (let index = 0; index < itemContainers.length; index++) {
            const element = itemContainers[index];
            const elementId = itemContainers[index].id;
            element.addEventListener('click', ()=>{
                detailFromApi(elementId);
                resultItem.innerHTML='';
                inputValue.value='';
            })
        }
    }
};

const detailFromApi = async (searchDetail) => {
    const response = await fetch(`http://www.omdbapi.com/?i=${searchDetail}&apikey=63c5c072`);
    const data = await response.json();
    const showMovie = document.querySelector('.showMovie')
    showMovie.innerHTML='';
    const insertData = `
        <div class="row g-4">
            <div class="col-12 col-md-5 p-4 text-center d-flex align-items-center">
                <img class="img-thumbnail" style="width: 100%;" src="${data.Poster}" alt="">
            </div>
            <div class="col-12 col-md-7 p-3 text-light">
                <div class="ms-4 h2 text-warning mb-4 fw-bold">${data.Title}</div>
                <div class="mb-2 fs-6"><span><b>Year</b> : ${data.Year}</span> / <span><b>Released Date</b> : ${data.Released}</span></div>
                <div class="mb-2 fs-6"><b>Genre</b> : ${data.Gentre}</div>
                <div class="mb-2 fs-6"><b>Actors</b> : ${data.Actors}</div>
                <div class="mb-2 fs-6"><b>Director</b> : ${data.Director}</div>
                <div class="mb-2 fs-6"><b>Writer</b> : ${data.Writer}</div>
                <div class="mb-2 fs-6">
                    <b>Plot</b> : ${data.Plot}
                </div>
                <div class="mb-2 fs-6"><b>Runtime</b> : ${data.Runtime}</div>
                <div class="mb-2 fs-6"><b>Language fs-6</b> : ${data.Language}</div>
            </div>                    
        </div>
    `;
    showMovie.innerHTML=insertData;
    

}

const inputValue = document.querySelector('.inputValue');

inputValue.addEventListener('keyup', (event)=>{
    value = event.target.value.trim();
    dataFromApi(value)
})




// Actors: "Tobey Maguire, Kirsten Dunst, Willem Dafoe"
// Awards: "Nominated for 2 Oscars. 16 wins & 63 nominations total"
// BoxOffice: "$407,022,860"
// Country: "United States"
// DVD: "01 Nov 2002"
// Director: "Sam Raimi"
// Genre: "Action, Adventure, Sci-Fi"
// Language: "English"
// Metascore: "73"
// Plot: "When bitten by a genetically modified spider, a nerdy, shy, and awkward high school student gains spider-like abilities that he eventually must use to fight evil as a superhero after tragedy befalls his family."
// Poster: "https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg"
// Production: "N/A"
// Rated: "PG-13"
// Ratings: Array(3)
// 0: {Source: 'Internet Movie Database', Value: '7.4/10'}
// 1: {Source: 'Rotten Tomatoes', Value: '90%'}
// 2: {Source: 'Metacritic', Value: '73/100'}
// length: 3
// [[Prototype]]: Array(0)
// Released: "03 May 2002"
// Response: "True"
// Runtime: "121 min"
// Title: "Spider-Man"
// Type: "movie"
// Website: "N/A"
// Writer: "Stan Lee, Steve Ditko, David Koepp"
// Year: "2002"
// imdbID: "tt0145487"
// imdbRating: "7.4"
// imdbVotes: "788,154"
// [[Prototype]]: Object