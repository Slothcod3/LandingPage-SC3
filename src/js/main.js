$(document).ready(function() {
    $('.animation-words').each(function()  {
        const animationContainer = $(this);
        const wordElement = animationContainer.find('.word');
        const wordsArray = animationContainer.data('words');

        let currentWordIndex = 0;
        let currentLetterIndex = 0;

        function animateWords() {
            if (currentLetterIndex === wordsArray[currentWordIndex].length) {
                currentWordIndex = (currentWordIndex + 1) % wordsArray.length;
                currentLetterIndex = 0;
                wordElement.text('');
            }

            const currentWord = wordsArray[currentWordIndex];
            const currentLetter = currentWord[currentLetterIndex];

            wordElement.text(wordElement.text() + currentLetter);
            currentLetterIndex++;

            setTimeout(animateWords, currentLetterIndex === wordsArray[currentWordIndex].length ? 1000 : 250); // Tempo entre as letras (em milissegundos)
        }

        animateWords();
    });
});
