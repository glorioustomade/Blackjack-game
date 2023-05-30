
 let player={
   name : "Glorioustomade",
   chips : 145
  }
   
    let cards =[] 
 
    let sum = 0
    let hasBlackJack = false
    let isAlive = false
    let  message = ""

    let messageEl = document.getElementById ("message-el")
    let sumEl = document.getElementById ("sum-el")
    let cardEl = document.getElementById ("card-el")
    let playerEl = document.getElementById ("player-el")
   
      playerEl.textContent = (player.name + ": $" + player.chips)

     function getRandomCard(){
      let randomNumber = Math.floor(Math.random()* 13) + 1
       if(randomNumber>10){
          return 10
       }else if (randomNumber === 1){
          return 11
       }else{
          return randomNumber
       }
   }

    function startGame(){
      isAlive = true
      let firstCard = getRandomCard()
      let secondCard = getRandomCard()
      cards = [firstCard, secondCard]
      sum = firstCard + secondCard
        renderGame()
    }


    function renderGame(){
     cardEl.textContent = "Cards:"
   for (let i=0; i<cards.length; i++){
       cardEl.textContent += cards[i] + " "
   }
        sumEl.textContent = "Sum:" + sum
        if (sum <= 20){
            message = "Do you want to draw a new card "
        }else if (sum === 21){
            message = " You've got Blackjack! "
            hasBlackJack = true
           }else{
            message = "You are out of the game "
            isAlive= false
        }  
         messageEl.textContent = message

    }
    function newCard(){
     if (isAlive === true && hasBlackJack === false) {
      let card = getRandomCard()
      sum += card
      cards.push(card)
      renderGame()
     }
      }

  





// let fruit = ["🍏", "🍅", "🍏", "🍏", "🍅"]
// let appleShelf = document.getElementById("apple-shelf")
// let orangeShelf = document.getElementById ("orange-shelf")

// function myShelf(){
//   for (let i=0; i<fruit.length; i++){
//     if (fruit[i]=== "🍏" ){
//       appleShelf.textContent += "🍏"
//     }else if (fruit [i] === "🍅"){
//       orangeShelf.textContent += "🍅"
//     }
   
//    }
   
// }
// myShelf()














// let likesDocumentaries = false
// let likesStartups = false

// if (likesDocumentaries === false || likesStartups === false){

// }recommendMovie()

// function recommendMovie(){
//   console.log("Hey, check out this new film we think you will like!")
// }












//  function rollDice(){
//      let randomNumber = Math.floor(Math.random()*6) +1
//      return randomNumber
//      }
//      console.log(rollDice())















// let sentence = ["Hello ", "my ", "name ", "is ", "Per"]
// let greetingEl = document.getElementById("greeting-el")
// for (let i=0; i<sentence.length; i++){
//     greetingEl.textContent += sentence[i]
        
// }










// for (let i=10; i<101; i +=10)
// console.log(i)













// if (sum < 21){
//     console.log("Do you want to draw a new card")
// } else if (sum === 21){
//     console.log("Wohoo! You've got Blackjack!")
// }else if (sum > 21){
//     console.log("You are out of the game")
// }

// let age = 20

// console.log(age)

// if (age<21){
//     console.log("You can not enter the club!")
// }else if (age === 22){
//     console.log("Welcome!")
// }

// let age = 100

// if (age <100){
//     console.log("Not elegible")
// }else if (age === 100){
//     console.log("Here is your birthday card from the King!")
// }else{
//     console.log("Not elegible, you have already gotten one")
// }