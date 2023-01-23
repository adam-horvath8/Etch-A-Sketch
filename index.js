const btn = document.querySelector('button');
btn.addEventListener('click', function(e){
    let prValue =  Number(prompt("Please enter number below 100"));
   
});

const mainContainer = document.querySelector('#container');
mainContainer.classList.add('#container');
const gridItems = document.createElement('div');
    for (let i = 0; i < 16; i++){
    for(let j = 0; j < 16; j++){
    const gridItems = document.createElement('div');
    gridItems.classList.add('grid-item');
    mainContainer.appendChild(gridItems);  
    }
} 







const newItems = document.querySelectorAll('.grid-item');

newItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.backgroundColor = 'white';
    });

    item.addEventListener('mouseleave', function() {
        this.style.backgroundColor = 'white';
    });
});





