document.addEventListener('DOMContentLoaded', function() {
    const coin = document.getElementById('coin');
    const result = document.getElementById('result');

    coin.addEventListener('click', function() {
        const randomSpins = Math.floor(Math.random() * 10) + 10; // random number between 3 and 5 (inclusive)
        const randomSpinDuration = Math.random() * 2 + 1; // random spin duration between 1 and 3 seconds
        const isHeads = Math.random() >= 0.5;
        const totalRotation = (randomSpins * 360) + (isHeads ? 0 : 180);

        coin.style.transitionDuration = `${randomSpinDuration}s`;
        coin.style.transform = `rotateY(${totalRotation}deg)`;

        setTimeout(() => {
            if (isHeads) {
                result.textContent = '';
            } else {
                result.textContent = '';
            }
        }, randomSpinDuration * 1000);
    });
});