//alert('hello');

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


//challenge 2: cat generator
function generateCat(){
    //creates image tag
    var image = document.createElement('img');

    //create var called "div" for document.getElement...
    var div = document.getElementById("flex-cat-gen")

    //Add the url to the image tag created
    image.src = 'https://thecatapi.com/api/images/get?format=src&type=gif&size=small';
    
    //append image tag to DIV 
    div.appendChild(image);    

    //add an id of catImage to the created img tag
    image.setAttribute('id', 'catImage');
}

function removeCat(){
    //This remove the IMG from the "flex-cat-gen" DIV 
    var div = document.getElementById('catImage')
    div.remove();
}

//challenge 3: rock paper scissor

//---------------------- Main Function --------------------- //

function rpsGame(yourChoice){
    //console.log(yourChoice);
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