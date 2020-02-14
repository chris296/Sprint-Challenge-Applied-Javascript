// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function createCard(data) {
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imagecontainer = document.createElement('div');
    const image = document.createElement('img');
    const authorname = document.createElement('span');

    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imagecontainer.classList.add('img-container');
    
    headline.textContent = data.headline;
    image.src = data.authorPhoto;
    authorname.textContent = data.authorName;

    card.append(headline, author);
    author.append(imagecontainer,authorname);
    imagecontainer.append(image);

    return card;

}

axios.get("https://lambda-times-backend.herokuapp.com/articles")
.then(response => {
    console.log(response);
    response.data.articles.javascript.forEach(item => {
        document.querySelector('.cards-container').append(createCard(item));
    })
    response.data.articles.bootstrap.forEach(item => {
        document.querySelector('.cards-container').append(createCard(item));
    })
    response.data.articles.technology.forEach(item => {
        document.querySelector('.cards-container').append(createCard(item));
    })
    response.data.articles.jquery.forEach(item => {
        document.querySelector('.cards-container').append(createCard(item));
    })
    response.data.articles.node.forEach(item => {
        document.querySelector('.cards-container').append(createCard(item));
    })
})

// axios.get("https://lambda-times-backend.herokuapp.com/articles")
// .then(response => {
//     console.log(response);
//     response.data.articles.forEach(item => {
//         item.forEach(element => {
//             document.querySelector('.card-container').append(createCard(element));
//         })
//     })
// })