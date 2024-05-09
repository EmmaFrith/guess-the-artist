/*-------------- Constants -------------*/

const artists = [
    { artist1: 'Van Gogh', artist2: 'Gauguin', artist3: 'Cézanne', artist4: 'Renoir', image: 'https://uploads7.wikiart.org/images/paul-gauguin/tahitian-mountains-1893.jpg!Large.jpg', correctArtist: 'Gauguin', alt: 'Colourful painting of Tahitian mountains.' },
    { artist1: 'Klimt', artist2: 'Klee', artist3: 'Chagall', artist4: 'Miro', image: 'https://d3d00swyhr67nd.cloudfront.net/_source/artuk_stories/paulklee-725px-1.jpg', correctArtist: 'Klee', alt: 'Surreal and celestial composition featuring a house, clocktower and mountain.' },
    { artist1: 'Sisley', artist2: 'Manet', artist3: 'Monet', artist4: 'Seurat', image: 'https://d3d00swyhr67nd.cloudfront.net/w800h800/collection/NGS/NGS/NGS_NGS_NG_2235-001.jpg', correctArtist: 'Sisley', alt: 'Impressionist painting of water in blues and greys.' },
    { artist1: 'Whistler', artist2: 'Monet', artist3: 'Pisarro', artist4: 'Turner', image: 'https://www.theartstory.org/images20/works/whistler_james_abbott_mcneill_2.jpg?1', correctArtist: 'Whistler', alt: 'Muted beach landscape in sandy colours with hints of blue and purple, and a sail boat in the distance.' },
    { artist1: 'Matisse', artist2: 'Derain', artist3: 'Delauney', artist4: 'Braque', image: 'https://d26jxt5097u8sr.cloudfront.net/s3fs-public/Full_matisse2.jpg', correctArtist: 'Derain', alt: 'Fauvist landscape with vidid trees and hills, painted in distinct strokes.'},
    { artist1: 'Gore', artist2: 'Cezanne', artist3: 'Derain', artist4: 'Hockney', image: 'https://www.bookroomartpress.co.uk/wp-content/uploads/2022/09/The-Icknield-Way-Spencer-Frederick-Gore.jpg', correctArtist: 'Gore', alt: 'Landscape of hills and trees with saturated colours such a purple, pink and yellow.' },
    { artist1: 'Matisse', artist2: 'Picasso', artist3: 'Cezanne', artist4: 'Braque', image: 'https://www.christies.com/-/jssmedia/images/features/articles/2021/11/the-cox-collection/paul-cezanne-cox-christies-main.jpg?h=953&iar=0&w=1200&rev=bbadaa3ed4a240babee9b8a4b046190b&hash=36c714b5e6e237a12bfe9dc99b0f2c2c6062bf0f', correctArtist: 'Cezanne', alt: 'Abstracted view of the sea and rooftops framed by trees.' },
    { artist1: 'Picasso', artist2: 'Dali', artist3: 'Kandinsky', artist4: 'Chagall', image: 'https://www.parkwestgallery.com/wp-content/uploads/2015/07/903005_laccordeoniste-m.-204-1957_chagall-jpg.jpg', correctArtist: 'Chagall', alt: 'Surreal and celestial composition with reclining woman in fluid ink and watercolour or gouache.' },
    { artist1: 'Munch', artist2: 'Van Gogh', artist3: 'Pisarro', artist4: 'Seurat', image: 'https://sal-bucket-1.s3.amazonaws.com/wp-content/uploads/2020/06/30144802/Vincent_van_Gogh_-_The_Fields_1890.jpg', correctArtist: 'Van Gogh', alt: 'Landscape with fields in blue, green and yellow in swervy brushstrokes.' },
    { artist1: 'Matisse', artist2: 'Signac', artist3: 'Seurat', artist4: 'Cross', image: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Paul_Signac_%281863-1935%29%2C_L%E2%80%99estuaire_%C3%A0_Trieux%2C_Bretagne._Watercolour%2C_pencil_and_ink%2C_11.2_x_20_cm.jpg', correctArtist: 'Signac', alt: 'Fluid pen and ink drawing depicting seafront, sailboats and cliffs.' }
]

/*---------- Variables (state) ---------*/

let currentQuestionIndex = 0;
let score = 0;

/*----- DOM/event listeners  -----*/

const resultText = document.querySelector('#result')

const scoreDisplay = document.querySelector('#score')

const nextQuestionButton = document.querySelector('#next-question-button')
nextQuestionButton.addEventListener('click', goToNextQuestion)

const playAgainButton = document.querySelector('#play-again-button')
playAgainButton.addEventListener('click', playAgain)

const option1 = document.querySelector('#option1')
option1.addEventListener('click', checkIfCorrect)

const option2 = document.querySelector('#option2')
option2.addEventListener('click', checkIfCorrect)

const option3 = document.querySelector('#option3')
option3.addEventListener('click', checkIfCorrect)

const option4 = document.querySelector('#option4')
option4.addEventListener('click', checkIfCorrect)

const positiveAudioPlayer = document.querySelector('#positive-audio')

const negativeAudioPlayer = document.querySelector('#negative-audio')

// /*-------------- Functions -------------*/

function goToNextQuestion() {
    option1.disabled = false;
    option2.disabled = false;
    option3.disabled = false;
    option4.disabled = false;
    if (currentQuestionIndex < 9) {
        currentQuestionIndex = currentQuestionIndex + 1
        option1.innerText = artists[currentQuestionIndex].artist1;
        option2.innerText = artists[currentQuestionIndex].artist2;
        option3.innerText = artists[currentQuestionIndex].artist3;
        option4.innerText = artists[currentQuestionIndex].artist4;
        img.src = artists[currentQuestionIndex].image;
        img.alt = artists[currentQuestionIndex].alt;
        document.getElementById("correct").innerHTML = ""
    }
    else {
        endGame()
    }
}

function endGame() {
    nextQuestionButton.classList.add("hidden");
    playAgainButton.classList.remove("hidden");
    if (score < 6) {
        resultText.innerText = 'This was hard'
    }
    else {
        resultText.innerText = 'You’re good at this'
    }
}

function playAgain() {
    currentQuestionIndex = - 1;
    score = 0;
    nextQuestionButton.classList.remove("hidden");
    playAgainButton.classList.add("hidden");
    goToNextQuestion();
    scoreDisplay.innerHTML = score
    resultText.innerText = ''
}

function checkIfCorrect() {
    option1.disabled = true;
    option2.disabled = true;
    option3.disabled = true;
    option4.disabled = true;
    if (this.innerText === artists[currentQuestionIndex].correctArtist) {
        score = score + 1
        scoreDisplay.innerHTML = score
        document.getElementById("correct").innerHTML = "Correct 🎉"
        positiveAudioPlayer.play()
    }
    else {
        document.getElementById("correct").innerHTML = `Incorrect ❌ <br> it was ${artists[currentQuestionIndex].correctArtist}`
        negativeAudioPlayer.play()
    }
    if (currentQuestionIndex >= 9) {
        endGame();
    }
}









