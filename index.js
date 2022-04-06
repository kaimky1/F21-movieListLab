const message = document.querySelector('#message')
const addMovie = (event) => {
    event.preventDefault();
    const inputField = document.querySelector('input');
    const movie = document.createElement('li');
    const movieTitle = document.createElement('span');
    
    movieTitle.textContent = inputField.value;

    movieTitle.addEventListener('click', crossOffMovie);

    movie.appendChild(movieTitle);

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.addEventListener('click', deleteMovie);
    movie.appendChild(deleteBtn);

    document.querySelector('ul').appendChild(movie);
    inputField.value = '';


}

document.querySelector('form').addEventListener('submit', addMovie);

const deleteMovie = (event) => {
    message.textContent = `${event.target.parentNode.firstChild.textContent} deleted!`;
    event.target.parentNode.remove(); 
    
    revealMessage();
};


const crossOffMovie = (event) => {
    event.target.classList.toggle('checked')
    if(event.target.classList.contains('checked') === true){
        message.textContent = `${event.target.textContent} watched!`;
    } else{
        message.textContent = `${event.target.textContent} added back!`;
    }
    revealMessage();
}


const revealMessage = () => {
    message.classList.remove('hide')
    setTimeout(() => {
        message.classList.add('hide')
    }, 1000)
}





