const posts = [];
function savePost() {
    const tittle = document.getElementById("tittle").value;
    const category = document.getElementById("category").value;
    const resume = document.getElementById("resume").value;
    const author = document.getElementById("author").value;
    const date = document.getElementById("date").value;
    if (tittle && category && resume && author && date) {
        storePost(tittle, category, resume, author, date)
        cleanFields()
    } else {
        alert("Preencha todos os campos!");
    }
}
function cleanFields() {
    document.getElementById("tittle").value = "";
    document.getElementById("category").value = "";
    document.getElementById("resume").value = "";
    document.getElementById("author").value = "";
    document.getElementById("date").value = "";
}
function storePost(tittle, category, resume, author, date) {
    const post = {
        tittle,
        category,
        resume,
        author,
        date,
    };
    posts.push(post);
    console.log(posts)
}
function showPosts() {
    let showContent = "";
    posts.forEach((post, index) => {
        showContent += `
        <div class="itemPost">
        <h2>${post.tittle}</h2>
        <p><strong>Categoria:</strong>${post.category}</p>
        <p><strong>Resumo:</strong>${post.resume}</p>
        <p><strong>Author:</strong>${post.author}</p>
        <p><strong>Data de publicação:</strong>${post.date}</p>
         <button onclick="editPost(${index})">Editar</button>
        <button onclick="deletePost(${index})">Excluir</button>
         </div>
         `;
    });
}

GUILHERME AUGUSTO DE GODOY SACHINELLI, Agora
const posts = [];
function savePost() {
    const tittle = document.getElementById("tittle").value;
    const category = document.getElementById("category").value;
    const resume = document.getElementById("resume").value;
    const author = document.getElementById("author").value;
    const date = document.getElementById("date").value;
    if (tittle && category && resume && author && date) {
        storePost(tittle, category, resume, author, date)
        cleanFields();
        showPosts();
    } else {
        alert("Preencha todos os campos!");
    }
}
function cleanFields() {
    document.getElementById("tittle").value = "";
    document.getElementById("category").value = "";
    document.getElementById("resume").value = "";
    document.getElementById("author").value = "";
    document.getElementById("date").value = "";
}
function storePost(tittle, category, resume, author, date) {
    const post = {
        tittle,
        category,
        resume,
        author,
        date,
    };
    posts.push(post);
    console.log(posts)
}
function showPosts() {
    let showContent = "";
    posts.forEach((post, index) => {
        showContent += `
        <div class="itemPost">
        <h2>${post.tittle}</h2>  
        <p><strong>Categoria:</strong>${post.category}</p>
        <p><strong>Resumo:</strong>${post.resume}</p>
        <p><strong>Author:</strong>${post.author}</p>
        <p><strong>Data de publicação:</strong>${post.date}</p>
         <button onclick="editPost(${index})">Editar</button>
         <button onclick="deletePost(${index})">Excluir</button>
         </div>
        `;
    });
    document.getElementById("list").innerHTML = showContent;

}
function editPost(index){
    const post = posts[index]

    document.getElementById("title").value = post.tittle
    document.getElementById("category").value = post.category
    document.getElementById("resume").value = post.resume
    document.getElementById("author").value = post.author
    document.getElementById("date").value = post.date
    
}
