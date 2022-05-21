import { movies} from '../modules/db.js'

let add_film = document.forms.add_film
let ul = document.querySelector('.promo__interactive-list')
let promo__bg = document.querySelector('.promo__bg')
let inp = document.querySelector('#search')

let promo__genre = document.querySelector('.promo__genre')
let promo__title = document.querySelector('.promo__title')
let promo__descr = document.querySelector('.promo__descr')
let promo__ratings = document.querySelector('.promo__ratings')

let display_none_img = document.querySelector('.display_none_img')
let display_none_img1 = document.querySelector('.display_none_img1')
let display_none_img2 = document.querySelector('.display_none_img2')

display_none_img.style.display = "none"
display_none_img1.style.display = "none"
display_none_img2.style.display = "none"

let all_films = document.querySelector('#all_films')
let Actions = document.querySelector('#Actions')
let drama = document.querySelector('#drama')
let comedy = document.querySelector('#comedy')
let adventure = document.querySelector('#Adventures')


inp.onkeyup = () => {
    let filtered = movies.filter(item => item.Title.toLowerCase().includes(inp.value.toLowerCase()))
    changeFilm(filtered[0])
    reload(filtered)
}

add_film.onsubmit = (e) => {
    e.preventDefault();

    let Title = {}
    let fm = new FormData(add_film)
    fm.forEach((value, key) => {
        Title[key] = value
    })
    movies.push(Title)
    reload(movies)
}


function reload(arr) {
    ul.innerHTML = ""
    arr.forEach((movie, index) => {
        let li = document.createElement('li')
        let del = document.createElement('div')
    
        li.innerHTML = `${index + 1}.${movie.Title}`
    
        del.onclick = () => {
            arr.splice(arr.indexOf(movie), 1)
            reload(arr)
        }
    
        li.classList.add('promo__interactive-item')
        del.classList.add('delete')
        li.append(del)
        ul.append(li)

        li.onclick = () => {
            changeFilm(movie)
        }
    
        Actions.onclick = () => {
            let action = movies.filter(item => item.Genre.includes('Action'))  
            reload(action)
            changeFilm(action[0])
        }
        drama.onclick = () => {
            let drama = movies.filter(item => item.Genre.includes('drama'))
            reload(drama)  
            changeFilm(drama[0])
        }
        comedy.onclick = () => {
            let comedy = movies.filter(item => item.Genre.includes('comedy'))  
            reload(comedy) 
            changeFilm(comedy[0])
        }
        adventure.onclick = () => {
            let adventure = movies.filter(item => item.Genre.includes('adventure'))
            reload(adventure)
            changeFilm(adventure[0])
        }
        all_films.onclick = () => {
            reload(movies)
        }
    })
}

function changeFilm(props) {
    promo__bg.style.backgroundImage = `url("${props.Poster}")`
    
    promo__genre.innerHTML = props.Genre
    promo__title.innerHTML = props.Title
    promo__descr.innerHTML = props.Awards
    promo__ratings.lastChild.previousSibling.innerHTML = `Кинопоиск: ${props.Metascore}`
    promo__ratings.firstChild.nextSibling.innerHTML = `IMDB: ${props.imdbRating}`
}

reload(movies)