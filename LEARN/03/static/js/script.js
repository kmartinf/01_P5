//alert('hello');

//---------------------- Challenge 1: Age in Days --------------------- //

//var birthYear = prompt('what year were you born... Good friends?');
    
//function ageInDays(birthYear){
function ageInDays(){
    //ask year you were born
    //I can take this code out and request the function? yes
    var birthYear = prompt('what year were you born... Good friends?');
    
    //does math to calculate the year
    var ageInDayss = (2021 - birthYear) * 365; 

    //create h1 element in the DOM
    var h1 = document.createElement('h1');

    //create text element and concatined string + previous result
    var textAnswer = document.createTextNode('You are ' +ageInDayss + ' days old');
    
    //set the ID of the create H1 to "ageInDays"
    //why it doesnt need the parenthesis? "ageInDays()"??

        //Maybe because is not asking to run the function but 
        //- to access it information?

        //This has nothing to do with the function,
        //- it is just a label id to recognize the H1 from other H1
    h1.setAttribute('id', 'ageInDays');

    //Append as a child the TEXT NODE from above
    h1.appendChild(textAnswer);

    //gets the flexbox DIV "flex-box-result" from the DOM
    //and Append the H1 which inside of it, is the TEXT NODE
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset(){
    //here you can see how that H1 in id is use to identify
    //This remove the H1 from the "flex-box-result" DIV  
    document.getElementById('ageInDays').remove();
}

//---------------------- challenge 2: cat generator --------------------- //

function generateCat(){
    //creates image tag
    var image = document.createElement('img');

    //create var called "div" for document.getElement...
    var div = document.getElementById("flex-cat-gen")

    //Add the url to the image tag created
    image.src = 'https://thecatapi.com/api/images/get?format=src&type=gif&size=small';
    
    //append image tag to DIV 
    
    //add an id of catImage to the created img tag
    image.setAttribute('id', 'catImage');
}

function removeCat(){
    //This remove the IMG from the "flex-cat-gen" DIV 
    var div = document.getElementById('catImage')
    div.remove();
}

//---------------------- challenge 3: rock paper scissor --------------------- //

//---------------------- Main Function --------------------- //

function rpsGame(yourChoice){
    //console.log(yourChoice);
    div.appendChild(image);    
    //console.log(yourChoice.id);
    console.log('your choice:',yourChoice.id);

    //init variables
    var humanChoice, botChoice;
    
    //human choice comes from the your click choice ID
    humanChoice = yourChoice.id

    //bot = random choice
    //these are two functions nested together
    //randToRpsInt generates a random number and floor to an INT
    //numberToChoice evaluates that number and assign it to one of the options
    botChoice = numberToChoice(randToRpsInt());
    //console.log(botChoice);
    console.log('computer choice:', botChoice)

    //compare human vs bot choice
    //this translate each human vs bot choice and assign a number
    //this translate each bot vs human choice and assign a number
    //further explain in the function area
    results = decideWinner(humanChoice, botChoice);
    console.log(results);
    
    //conditional statement which evaluate only human result
    //and returns a specific message and color such as:
    //{'message': 'You won!', 'color': 'green'}
    message = finalMessage(results);
    console.log(message);
    
    // this remove the option images
    // add the choosen images from human and bot
    // add a message in the center as to who won
    // changes the shadow of the images to red,yellow,green
    rpsFrontEnd(humanChoice, botChoice, message);

}

//----------------- individual functions -----------------//

//this function generates a random number from 0 to 1.
//then it multiple it to 3 ex: .532 = 1.596
//then it floor it down to an integre ex: 1.596 = 1
// therefore it can make results of 0 or 1 or 2
function randToRpsInt () {
    return Math.floor(Math.random() * 3);
}

//this function takes a number ex: 2
//and uses to choose one of the index
//finally it return the choosen index
//0 = rock , 1 = paper, 2 = scissors
function numberToChoice (number){
    return ['rock','paper','scissors'][number]
}


//this translate the 9 cases into two number result
//for example: if human chooses paper and bot chooses rock
//it will return 1
//the var in the bottom is what ask for the score
//the database above it just the object (dictionary)
function decideWinner(humanChoice, botChoice){
    var rpsDatabase = {
        'rock'    :{'scissors': 1,   'rock': 0.5, 'paper': 0 },
        'paper'   :{'scissors': 0,   'rock': 1,   'paper': 0.5},
        'scissors':{'scissors': 0.5, 'rock': 0,   'paper': 1 },
    }
    var humanScore = rpsDatabase[humanChoice][botChoice];
    var botScore = rpsDatabase[botChoice][humanChoice];

    

    return [humanScore, botScore];
}


//this function is what returns the message
//since 0 = you lose, .5 = tie, and 1 = win
//you only need to check the human to see which result it got
//you dont need to do a greater then or so between the chooses
//to realize who one.
//yet this function still receive an array of 2 numbers and
//and only uses the first one (human) to reterminate the 
//if, else if, else conditional statement
//we will access the color result for the text color too.

/*
function finalMessage([humanScore, botScore]){
    if (humanScore === 0){
        return {'message': 'You lost!', 'color': 'red'};
    }else if (humanScore === 0.5) {
        return {'message': 'You tie!', 'color': 'yellow'};
    }else {
        return{'message': 'You won!', 'color': 'green'};
    }
}
*/

function finalMessage([humanScore, botScore]){
    if (humanScore < botScore){
        return {'message': 'You lost!', 'color': 'red'};
    }else if (humanScore = botScore) {
        return {'message': 'You tie!', 'color': 'yellow'};
    }else {
        return{'message': 'You won!', 'color': 'green'};
    }
}


function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage){
    //this collects each of the images from the IMG tag
    //we do this so simplify the code and not have to type the URL many times
    var imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src,
    }

    //remove all the images
    removeAllImages()
    /*
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();
    */

    //create div for each image choice and the center text message
    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    //create the img tag and uses the database to get the URL location
    //create the h1 tag and uses the final message conditional statement to decise which message
    //InnerHTML is a very dangerous tag, it exposes some security xss attacks
    humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>" 
    messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px; '>" + finalMessage['message'] + "</h1>" 
    botDiv.innerHTML = "<img src='" + imagesDatabase[botImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);'>" 
    
    //append it to the flex-box-rps-div
    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);

}

function removeAllImages(){

     //remove all the images
     document.getElementById('rock').remove();
     document.getElementById('paper').remove();
     document.getElementById('scissors').remove();
}

//---------------------- challenge 4: Change Color --------------------- //


//---------------------- Main Function --------------------- //
function buttonColorChange (formThisAction){

    //gets the choosen form option value and see which function to run
    //console.log(buttonThingy)
         if (formThisAction.value == 'red')   {buttonRed();} 
    else if (formThisAction.value == "green") {buttonGreen();}
    else if (formThisAction.value == 'random'){buttonRandom();}
    else if (formThisAction.value == 'reset') {buttonReset();}
}

//---------------------- Record Color Button --------------------- //

//get all buttons in the html in an array
var all_buttons = document.getElementsByTagName('button');
console.log(all_buttons);

//Paste all color information in to storeAllButtonsColor
var storeAllButtonsColor = [];
for (let i = 0; i < all_buttons.length; i++) {
    storeAllButtonsColor.push(all_buttons[i].classList[1]);
}
console.log(storeAllButtonsColor);

//---------------------- Mini Function --------------------- //

//function to turn red 
//using a FOR LOOP, we iterate thru each button
//we remove from each button the second class
//we add a class of DANGER from boottrap red color style
function buttonRed(){
    for (let i = 0; i < all_buttons.length; i++) {
        let buttonClass = all_buttons[i].classList;
            buttonClass.remove(all_buttons[i].classList[1]);
            buttonClass.add('btn-danger');
    }
}

//Same as the red button but instead we use SUCCESS style from boottrap
function buttonGreen(){
    for (let i = 0; i < all_buttons.length; i++) {
        let buttonClass = all_buttons[i].classList;
            buttonClass.remove(all_buttons[i].classList[1]);
            buttonClass.add('btn-success');
    }
}


//We iterate thru the button from before and remove the second class
//but now we add the Store button class from earlier in the example
function buttonReset (){
    for (let i = 0; i < all_buttons.length; i++) {
        let buttonClass = all_buttons[i].classList;
            buttonClass.remove(all_buttons[i].classList[1]);
            buttonClass.add(storeAllButtonsColor[i]);

    } 
}

//We iterate thru the button from before and remove the second class 
//but now we use a FOR LOOP to iterate thru a random number to get a random INDEX
//and then we used the random INDEX to assign it to the ADD operation
//remember the multiplication of 4 is to get from 0 to 3.99
//the floor is to make it into an integrate of 0, 1, 2, or 3
function buttonRandom(){
    let choices = ['btn-primary', 'btn-danger', 'btn-success', 'btn-warning']
    for (let i=0; i < all_buttons.length; i++) {
        let randomIndex = Math.floor(Math.random() * 4);
        let buttonClass = all_buttons[i].classList;
            buttonClass.remove(all_buttons[i].classList[1]);
            buttonClass.add(choices[randomIndex]);
    }
}

//---------------------- challenge 5: BlackJack --------------------- //

//return to time 6:06:53
//return to time 6:33:29

//two objects and one array for variables database and cards grouping
let blackjackGame = {
    'you': {'scoreSpan': '#your-blackjack-result', 'div': '#your-box', 'score': 0},
    'dealer': {'scoreSpan': '#dealer-blackjack-result', 'div': '#dealer-box', 'score': 0},
    'buttons':{'buttonHit': '#blackjack-hit-button','buttonStand': '#blackjack-stand-button','buttonDeal': '#blackjack-deal-button'},
    'cards': ['2','3','4','5','6','7','8','9','10','J','Q','K','A'],
    'cardMap': {'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9,'10':10,'J':10,'Q':10,'K':10,'A':[1,11]},
}


//variable creating so can easily access 'you' or 'dealer'
//in this way we can call ex:
//YOU[div] = #your-box
//DEALER[score] = 0
//DEALER[div]= #dealer-box
const YOU = blackjackGame['you']
const DEALER = blackjackGame['dealer']
const BUTTON = blackjackGame['buttons']

//variables for quickly getting the AUDIO
const hitSound = new Audio('static/sounds/swish.m4a');
//const hitSound2 = new Audio('static/sounds/aww.mp3');



//querySelector is the same as getElementsById or getElementsByClassname
//addEventlistener add as an InnerHTML onclick="function()"
//this method it more clean because then we dont have to go add things to
//the inner html, we can control it or change it from this file
//plus the querySelector allow us to select ID, Classes, Tagname etc 
document.querySelector('#blackjack-hit-button').addEventListener('click', blackjackHit);
document.querySelector('#blackjack-deal-button').addEventListener('click', blackjackDeal);
//OR
//document.querySelector(BUTTON['buttonHit']).addEventListener('click', blackjackHit);
//document.querySelector(BUTTON['buttonDeal']).addEventListener('click', blackjackDeal);



//---------------------- Main Function --------------------- //

//this is the main function where everything will get piece together
//the CARD variable just gets a randomCARD by getting a numberINDEX in the CARDS Array above 
//to pass down to ShowCard function
//the YOU or DEALER gets pass down to as ActivePlayer
//the updateScore and showScore are part of the DATABASE score and SPAN tag area
function blackjackHit(){
    let card = randomCard();
    //showCard(card, DEALER);
    showCard(card, YOU);
    updateScore(card, YOU)
    showScore(YOU)

}


    
//---------------------- Mini Function --------------------- //

//this function does multiple things
//1. create a varible which creates an IMG element
//2. Add an SRC to the image
//2b. Uses 'card' to get which card (this is a function that generates a random Index selector)
//3. Select activePlayer (YOU or DEALER) and drill down to it DIV (#your-box) and append the img tag
//4. plays a sound when you added a card to the player DIV area
function showCard(card, activePlayer){
    if(activePlayer['score'] <= 21 ){
        //cardImage.src = 'static/images/'+card+'.png';
        let cardImage = document.createElement('img');
        cardImage.src = `static/images/${card}.png`;
        document.querySelector(activePlayer['div']).appendChild(cardImage);
        hitSound.play();
    }
}

//this function is to remove all the cards when you press "DEAL BUTTOM"
//it does it by selection eacher player respective DIV boxes - and IMG with in it
//Then using a FOR LOOP it removes each card in the generated Array of AppendChild Cards
function blackjackDeal (){
    let yourImages = document.querySelector('#your-box').querySelectorAll('img');
    let dealerImages = document.querySelector('#dealer-box').querySelectorAll('img');
    //OR
    //let yourImages = document.querySelector(YOU['div']).querySelectorAll('img');
    //let dealerImages = document.querySelector(DEALER['div']).querySelectorAll('img');
    //another way of getting the #your-box / # dealer-box using YOU object

    //Remove the first card and FOR LOOP the next card in the Array inside the DIV 
    for (let i = 0; i < yourImages.length; i++) {yourImages[i].remove();}
    for (let i = 0; i < dealerImages.length; i++) {dealerImages[i].remove();}
    
    //When you press DEAL return the score of the players back to 0 in the DATABASE
    YOU['score'] = 0;
    DEALER['score']= 0;

    //Make the scoreback to 0 in the span tag result
    document.querySelector('#your-blackjack-result').textContent = 0;
    document.querySelector('#dealer-blackjack-result').textContent = 0;
    //OR
    //document.querySelector(YOU['scoreSpan']).textContent = 0;
    //document.querySelector(DEALER['scoreSpan']).textContent = 0;
    
    //make the score span tag result TEXT COLOR back to white
    document.querySelector('#your-blackjack-result').style.color = '#ffffff';
    document.querySelector('#dealer-blackjack-result').style.color = '#ffffff';
    //OR
    //document.querySelector(YOU['scoreSpan']).style.color = '#ffffff';
    //document.querySelector(DEALER['scoreSpan']).style.color = '#ffffff';


    //console.log(yourImages);
    //hitSound2.play();
}

//This is a function to generate a random number between 0 and 12
//this number is used to selected a random index number in the CARDS array above
function randomCard(){
    //cards[Math.floor(Math.random()*13)]
    let randomIndex = Math.floor(Math.random()*13);
    return blackjackGame['cards'][randomIndex];
}

function updateScore(card, activePlayer){
    //if player score is = or less than 21, keep playing!
    if(activePlayer['score'] <= 21 ){
        if (card === 'A'){
        //if adding 11 keeps me below 21, add 11. Otherwise, add 1
                if (activePlayer['score'] +  blackjackGame['cardMap'][card] <= 21){
                    activePlayer['score'] += blackjackGame['cardMap'][card][1];
                } else {
                    activePlayer['score'] += blackjackGame['cardMap'][card][0];
                }
        //else STOP playing and show the score of the player 
        } else {
            activePlayer['score'] += blackjackGame['cardMap'][card];
        }   
    }
}

//Show score of the player in span text tag
function showScore(activePlayer){
    //IF the player score is bigger than 21, than show text BUST and in RED
    if(activePlayer['score'] > 21 ){
        document.querySelector(activePlayer['scoreSpan']).textContent = 'BUST!';
        document.querySelector(activePlayer['scoreSpan']).style.color = 'red';
    // ELSE keep showing the SCORE number (in white by default)
    }else {
    document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
    }
}








