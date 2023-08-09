//starts counter at 0
const counter = document.getElementById("counter");
counter.value = 0;

//counter increases by 1 every second
let intervalID = setInterval(addTime, 1000);

//helps switch pause and resume button back and forth
let clicks = 0;


//decrease counter when press minus button
document.getElementById("minus").addEventListener("click", () => {
    minusTime();
});

//increase counter when press plus button
document.getElementById("plus").addEventListener("click", () => {
    addTime();
});

//like number on counter when press heart button
document.getElementById("heart").addEventListener("click", () => {
    heartNum();
    
})

//adds comments to page when press submit

//counter starts when page loads
document.addEventListener("DOMContentLoaded", () => {
    intervalID;
});

//pauses and resumes counter  
// *** not sure how to pause all other functions when counter is paused ***
document.getElementById("pause").addEventListener("click", () => {
    if(clicks > 0){
        intervalID = setInterval(addTime, 1000);
        document.getElementById("pause").innerText = "pause";
        document.getElementById("plus").disabled = false;
        document.getElementById("minus").disabled = false;
        document.getElementById("heart").disabled = false;
        document.getElementById("submit").disabled = false;
        clicks = 0;
    } else if (clicks === 0){
        clearInterval(intervalID);
        document.getElementById("pause").innerText = "resume";
        document.getElementById("plus").disabled = true;
        document.getElementById("minus").disabled = true;
        document.getElementById("heart").disabled = true;
        document.getElementById("submit").disabled = true;
        clicks++;
    }
});


function addTime(){
    counter.value+=1;
    counter.innerText = counter.value;
}
function minusTime(){
    counter.value-=1;
    counter.innerText = counter.value;
}

let liked;
function heartNum(){
    const num = counter.innerText;
    let foundItem = document.getElementById(num);
    
    if(foundItem){
        liked+=1;
        console.log(liked);
        foundItem.innerText = `${num} has been liked ${liked} times`;
    } else {
        const item = document.createElement("li");
        item.id = num;
        document.querySelector(".likes").appendChild(item);
        item.innerText = `${num} has been liked ${liked=1} times`;
    }
    

}

