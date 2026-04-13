import { tweetsData } from './data.js'
import { v4 as uuidv4 } from 'https://jspm.dev/uuid'


const btnAddNewReply = document.createElement("button")
btnAddNewReply.innerHTML = `<button>Add new reply</button>`
const newInputReply = document.createElement("textarea")
newInputReply.innerHTML = ` <textarea>f</textarea> `
const replyDiv = document.querySelector(".reply-container")

function addNewRepyes(tweedID){
    let currentReply = tweetsData.filter(tweet => tweet.uuid === tweedID)
    
    const replyDiv = document.querySelector(`.reply-container${currentReply.uuid}`)
    repliesContainer.innerHTML = ''; 
    replyDiv.appendChild(btnAddNewReply);
    replyDiv.appendChild(newInputReply);
}



console.log(newInputReply.innerHTML)

console.log(btnAddNewReply.innerHTML)

document.addEventListener('click', function(e){
    if(e.target.dataset.like){
       handleLikeClick(e.target.dataset.like) 
    }
    else if(e.target.dataset.retweet){
        handleRetweetClick(e.target.dataset.retweet)
    }
    else if(e.target.dataset.reply){
        handleReplyClick(e.target.dataset.reply)
    }
    else if(e.target.id === 'tweet-btn'){
        handleTweetBtnClick()
    }else if(e.target.id === 'reply'){
        handleNewReplyClick()
    }
    else if(e.target.dataset.delete){
        handleDeleteTweet(e.target.dataset.delete)
    }
})
 
function handleLikeClick(tweetId){ 
    const targetTweetObj = tweetsData.filter(function(tweet){
        return tweet.uuid === tweetId
    })[0]

    if (targetTweetObj.isLiked){
        targetTweetObj.likes--
    }
    else{
        targetTweetObj.likes++ 
    }
    targetTweetObj.isLiked = !targetTweetObj.isLiked
    render()
}

function handleRetweetClick(tweetId){
    const targetTweetObj = tweetsData.filter(function(tweet){
        return tweet.uuid === tweetId
    })[0]
    
    if(targetTweetObj.isRetweeted){
        targetTweetObj.retweets--
    }
    else{
        targetTweetObj.retweets++
    }
    targetTweetObj.isRetweeted = !targetTweetObj.isRetweeted
    render() 
}

function handleTweetBtnClick(){
    const tweetInput = document.getElementById('tweet-input')

    if(tweetInput.value){
        tweetsData.unshift({
            handle: `@Scrimba`,
            profilePic: `images/scrimbalogo.png`,
            likes: 0,
            retweets: 0,
            tweetText: tweetInput.value,
            replies: [],
            isLiked: false,
            isRetweeted: false,
            uuid: uuidv4()
        })
    render()
    tweetInput.value = ''
    }

}


function handleDeleteTweet (tweetId) {
    let toDelete = tweetsData.filter(data => data.uuid === tweetId)[0]

    if(toDelete !== -1){
        tweetsData.splice(toDelete, 1)
        render()
    }
}


function getFeedHtml(){
    let feedHtml = ``
    
    tweetsData.forEach(function(tweet){      
        let likeIconClass = ''
        
        if (tweet.isLiked){
            likeIconClass = 'liked'
        }
        
        let retweetIconClass = ''
        
        if (tweet.isRetweeted){
            retweetIconClass = 'retweeted'
        }
        
        let repliesHtml = ''
        
       if(tweet.replies.length === 0 || tweet.replies.length > 0){

        tweet.replies.forEach(function(reply){
            repliesHtml+= `
            <div class="tweet-reply">
            <div class="tweet-inner">
                <img src="${reply.profilePic}" class="profile-pic">
                    <div>
                        <p class="handle">${reply.handle}</p>
                        <p class="tweet-text">${reply.tweetText}</p>
                    </div>
                </div>
            </div>
            `
        })
    }
          
        feedHtml += `
<div class="tweet">
    <div class="tweet-inner">
        <img src="${tweet.profilePic}" class="profile-pic">
        <div>
            <p class="handle">${tweet.handle}</p>
            <p class="tweet-text">${tweet.tweetText}</p>
            <div class="tweet-details">
                <span class="tweet-detail">
                    <i class="fa-regular fa-comment-dots"
                    data-reply="${tweet.uuid}"
                    ></i>
                    ${tweet.replies.length}
                </span>
                <span class="tweet-detail">
                    <i class="fa-solid fa-heart ${likeIconClass}"
                    data-like="${tweet.uuid}"
                    ></i>
                    ${tweet.likes}
                </span>
                <span class="tweet-detail">
                    <i class="fa-solid fa-retweet ${retweetIconClass}"
                    data-retweet="${tweet.uuid}"
                    ></i>
                    ${tweet.retweets}
                </span>
                <span class="tweet-detail">
                    <i class="fa-solid fa-trash delete" 
                    data-delete ="${tweet.uuid}"
                    ></i>
                </span>
            </div>   
        </div>            
    </div>
    <div class="hidden" id="replies-${tweet.uuid}">
        ${repliesHtml}
    </div>   
</div>
`
   })
   return feedHtml 
}
function render(){
    document.getElementById('feed').innerHTML = getFeedHtml()
}

function handleReplyClick(tweetId) {
    const repliesContainer = document.getElementById(`replies-${tweetId}`);
    repliesContainer.classList.toggle('hidden');
    if (!repliesContainer.classList.contains('hidden')) {
        repliesContainer.innerHTML = getReplySectionHtml(tweetId);
        
        const addReplyButton = repliesContainer.querySelector('.add-reply-button');
        const replyTextarea = repliesContainer.querySelector('.new-reply-textarea');
        
        addReplyButton.addEventListener('click', function() {
            const newReplyText = replyTextarea.value.trim();
            
            if (newReplyText) {
                addNewReply(tweetId, newReplyText);
                render();
            }
        });
    }
}

function getReplySectionHtml(tweetId) {
    return `
        <div class="reply-section">
            <textarea class="new-reply-textarea" placeholder="Your reply..."></textarea>
            <button class="add-reply-button">Add new reply</button>
        </div>
    `;
}

function addNewReply(tweetId, newReplyText) {
    const tweet = tweetsData.find(tweet => tweet.uuid === tweetId);

    tweet.replies.push({
        handle: `@YourHandle`,
        profilePic: `images/scrimbalogo.png`,
        tweetText: newReplyText,
    });

}

render()








