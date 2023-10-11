let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭",
               "🦀", "🐝", "🤖", "🐘", 
               "🐸", "🕷","🐆", "🦕", "🦁"]

let emojiEl = document.getElementById("emoji-el")
let startFightEl = document.getElementById("startFight")

startFightEl.addEventListener("click", function(){
      
    let randomIndex1 = Math.floor(Math.random()*fighters.length)
    let randomIndex2 = Math.floor(Math.random()*fighters.length)
    console.log(randomIndex1)
    emojiEl.textContent = fighters[randomIndex1]+ " Vs "+fighters[randomIndex2]

})