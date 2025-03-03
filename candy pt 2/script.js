document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('dispense-btn');
    const candyLandingZone = document.querySelector('.candy-landing-zone');

    const candyImages = [
        'img/Subject 14 copy 2.png', 
        'img/Subject 15 copy.png',
        'img/Subject 16.png',
        'img/Subject 17.png'
    ];

    

    
    function dispenseCandy() {
        const candy = document.createElement('img');
        const randomIndex = Math.floor(Math.random() * candyImages.length); 
        candy.src = candyImages[randomIndex];
        candy.classList.add('candy');

        
        const randomPosition = Math.floor(Math.random() * (candyLandingZone.offsetWidth - 50)); // 50 is the candy width
        candy.style.left = `${randomPosition}px`;

      
        candyLandingZone.appendChild(candy);


        setTimeout(() => {
            candy.remove();
        }, 3000); 
    }

   
    button.addEventListener('click', dispenseCandy);
});


const candyImages = [
    'img/Subject 14 copy 2.png', 
    'img/Subject 15 copy.png',
    'img/Subject 16.png',
    'img/Subject 17.png'
];




const hoverText = document.querySelector('.hover-me');
const hoverBox = document.getElementById('hover-box');



hoverText.addEventListener('mouseenter', () => {
 hoverBox.style.display = 'block';  
});


hoverText.addEventListener('mouseleave', () => {
 hoverBox.style.display = 'none';  
});


hoverText.addEventListener('mousemove', (e) => {
 const offsetX = 10;  
 const offsetY = 10;  

 
 hoverBox.style.left = e.pageX + offsetX + 'px';
 hoverBox.style.top = e.pageY + offsetY + 'px';


 hoverBox.textContent = 'I wanted to eat these so bad as a kid'; 
});


