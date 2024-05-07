/*-------------- Constants -------------*/

const artists = [
    { artist1: 'Van Gogh', artist2: 'Gauguin', artist3: 'Cézanne', artist4: 'Renoir', image: 'https://uploads7.wikiart.org/images/paul-gauguin/tahitian-mountains-1893.jpg!Large.jpg', correctArtist: 'Gauguin' },
    { artist1: 'Klimt', artist2: 'Klee', artist3: 'Chagall', artist4: 'Miro', image: 'https://d3d00swyhr67nd.cloudfront.net/_source/artuk_stories/paulklee-725px-1.jpg', correctArtist: 'Klee' },
    { artist1: 'Sisley', artist2: 'Manet', artist3: 'Monet', artist4: 'Seurat', image: 'https://d3d00swyhr67nd.cloudfront.net/w800h800/collection/NGS/NGS/NGS_NGS_NG_2235-001.jpg', correctArtist:'Sisley' },
    { artist1: 'Whistler', artist2: 'Monet', artist3: 'Pisarro', artist4: 'Turner', image: 'https://www.theartstory.org/images20/works/whistler_james_abbott_mcneill_2.jpg?1', correctArtist: 'Whistler' },
    { artist1: 'Matisse', artist2: 'Derain', artist3: 'Delauney', artist4: 'Braque', image: 'https://d26jxt5097u8sr.cloudfront.net/s3fs-public/Full_matisse2.jpg', correctArtist: 'Derain' }
]

/*---------- Variables (state) ---------*/


let currentQuestionIndex = 0;
let userChoice = null;
let correct = null;//true or false
let score = 0;

/*----- DOM/event listeners  -----*/


//a query selector and event listener on the next question button
const nextQuestionButton = document.querySelector('#next-question-button')
nextQuestionButton.addEventListener('click', goToNextQuestion)



//a query selector and event listener on every multiple choice button
const option1 = document.querySelector('#option1')
option1.addEventListener('click', checkIfCorrect)

const option2 = document.querySelector('#option2')
option2.addEventListener('click', checkIfCorrect)

const option3 = document.querySelector('#option3')
option3.addEventListener('click', checkIfCorrect)

const option4 = document.querySelector('#option4')
option4.addEventListener('click', checkIfCorrect)


// /*-------------- Functions -------------*/

function goToNextQuestion() {
    //access the next object in the array
    if (currentQuestionIndex < 4) {
        currentQuestionIndex = currentQuestionIndex + 1
        option1.innerText = artists[currentQuestionIndex].artist1;
        option2.innerText = artists[currentQuestionIndex].artist2;
        option3.innerText = artists[currentQuestionIndex].artist3;
        option4.innerText = artists[currentQuestionIndex].artist4;
        img.src = artists[currentQuestionIndex].image;
        //make the correct/incorrect string go empty
        document.getElementById("correct").innerHTML = ""
    }
}



function checkIfCorrect() {
    //console.log(this.innerText)
    if (this.innerText === artists[currentQuestionIndex].correctArtist)
    //console.log("true")
    {score = score + 1
    console.log(score)
    document.querySelector('#score').innerHTML = score
    document.getElementById("correct").innerHTML = "Correct 🎉"}
}