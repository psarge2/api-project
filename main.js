const postsList = document.querySelector('.posts-list');
let output = '';

const url = 'https://dev.to/api/articles';

//Get - read posts
//Method - Get
fetch(url)
    .then(res => res.json())
    .then(data => {
    data.forEach(post => {
        output += `
            <div class="card mt-4 col-md-6 bg-light">
                <div class="card-body">
                    <h5 class="card-title">${post.title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p class="card-text">${post.body}</p>
                    <a href="#" class="card-link">Edit</a>
                    <a href="#" class="card-link">Delete</a>
                </div>
            </div>
        `;
    });
    postsList.innerHTML = output;
 })
     