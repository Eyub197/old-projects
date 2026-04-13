const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const body = document.querySelector("body")
const button = document.querySelector("button")

posts.forEach(person => {
   let postElement = document.createElement("div")
   postElement.classList.add("post")

   function likes(pst){
    person.likes++
   }
   
   postElement.innerHTML = 
   ` 
<main>
   <section class="post-profile">
       <img class="avatar" src="${person.avatar}" alt="">
       <h4 class="name">${person.name}</h4>
       <p class="location">${person.location}</p>
   </section>
   <img src="${person.post}" alt="vangogh">
   <section class="stats">
       <div class="img-container">
          <button onClick = "likes"><img class="social-img heart" src="./images/icon-heart.png" alt="heart"></button>
           <img class="social-img dm"src="./images/icon-dm.png" alt="dm">
           <img class="social-img send-comment" src="./images/icon-comment.png" alt="commnet">
       </div>  
       <p class="likes bold">Likes ${person.likes}</p>
       <p class="comment"><span class="username bold">${person.username} </span>${person.comment}</p>
   </section>
</main> 
`
body.appendChild(postElement) 
})


