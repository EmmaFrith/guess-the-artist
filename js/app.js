/*-------------- Constants -------------*/

const questionOneArtists = ['Van Gogh', 'Gaugin', 'Cézanne', 'Renoir']
//https://uploads7.wikiart.org/images/paul-gauguin/tahitian-mountains-1893.jpg!Large.jpg


const questionTwoArtists = ['Klimt', 'Klee', 'Chagall', 'Miro']
//https://d3d00swyhr67nd.cloudfront.net/_source/artuk_stories/paulklee-725px-1.jpg


const questionThreeArtists = ['Sisley', 'Manet', 'Monet', 'Seurat']
//https://d3d00swyhr67nd.cloudfront.net/w800h800/collection/NGS/NGS/NGS_NGS_NG_2235-001.jpg


const questionFourArtists = ['Whistler', 'Monet', 'Pisarro', 'Turner' ]
//https://www.theartstory.org/images20/works/whistler_james_abbott_mcneill_2.jpg?1


const questionFiveArtists = ['Matisse', 'Derain', 'Delauney', 'Braque']
//https://d26jxt5097u8sr.cloudfront.net/s3fs-public/Full_matisse2.jpg



/*---------- Variables (state) ---------*/

let userChoice = null;



/*----- Cached Element References  -----*/

const nextQuestionButton = document.querySelector('#next-question-button')
nextQuestionButton.addEventListener('click', goToNextQuestion2)


const userChoiceOption2 = document.querySelector('#option2')
option2.addEventListener('click', checkIfCorrect)


// /*-------------- Functions -------------*/

function goToNextQuestion2 () {
    option1.innerText = questionTwoArtists[0];
    option2.innerText = questionTwoArtists[1];
    option3.innerText = questionTwoArtists[2];
    option4.innerText = questionTwoArtists[3];
    img.src = 'https://d3d00swyhr67nd.cloudfront.net/_source/artuk_stories/paulklee-725px-1.jpg';
    document.getElementById("correct").innerHTML = ""
}


function checkIfCorrect () {
    if(userChoiceOption2) {
        score.innerText = "1/5"
        document.getElementById("correct").innerHTML = "Correct 🎉"
    } 
}

/*----------- Event Listeners ----------*/

