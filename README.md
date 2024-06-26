# Guess the artist

## Background


Play [Guess the artist](https://emmafrith.github.io/guess-the-artist/ "Guess the artist") to test your art knowledge. 

I built this quiz as I enjoy art and identifying art based on its style.


## Features

The game features 10 paintings, each with 4 multiple choice answers. 

After selecting a choice, there is:

* a 'correct' or 'incorrect' message
* a different sound depending on whether you're correct or not 

You can only guess once for each question.

Your score will go up by one with each correct answer. 

At the end of the game you'll recieve a personalised message based on how many answers you got correct. 


## Screenshots

![Screenshot showing a correct answer screen.](./images/correct-answer-display.png)
Screenshot showing a correct result.

![Screenshot showing an incorrect answer screen.](./images/incorrect-answer.png)
Screenshot showing an incorrect result on a smaller screen such as an iPad.

![Screenshot showing a personalised message.](./images/personalised-message.png)
Screenshot showing the end of the game when you got more than 6 correct answers. 

![Screenshot showing the responsive design.](./images/responsive-design.png)
Screenshot showing the responsive design. 


## Technologies used

This game is built using HTML, CSS and Javascript. 

The game is responsive for use on different devices. 


## Planning materials

I used Excalidraw to design and pseudocode this game. 

![Screenshot showing how I planned the game](./images/planning-the-quiz.png)


## Attributions

The images are taken from the following websites:

* WikiArt
* Art UK
* The Art Story
* The National Gallery of Art
* The Bookroom Art Press
* Christies
* Park West Gallery
* Wikepedia 


## Future enhancements

This MVP can be enhanced by adding more paintings and randomising the paintings shown each time you play. 

It could also feature more themes, such as 'Guess the movemenent'. 

The design also needs improvement as there is some movement when navigating between questions. 


## Code notes

### Code for checking if you got the right answer

There is a query selector and event listener on each mutliple choice button. 

Each of these run a function to check if the answer is correct.

The function checks the inner text of each button using the "this" keyword.

It then compares it against the correct answer which is stored in the artist objects. 

```this.innerText === artists[currentQuestionIndex].correctArtist```

### Code for going to the next question 

There is a query selector and event listener on the 'next question' button. 

This runs a function to move the user to the next question.

The function adds 1 to the current question index so that it can take data from the next object in the array:

```currentQuestionIndex = currentQuestionIndex + 1```

The inner text of each button is then updated with each new artist:

```option1.innerText = artists[currentQuestionIndex].artist1```

### Code for restarting the game 

As soon as the user selects their answer on the final question, a function is run to end the game. 

The function works by adding the 'hidden' class to the next question button and removing the 'hidden' classes to the play again button:

```nextQuestionButton.classList.add("hidden")```

```playAgainButton.classList.remove("hidden")```

There is a query selector and event listener on the 'play again' button which then runs a function to reset the data to the first index from the array of objects. 