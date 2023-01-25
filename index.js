const mainContainer = document.querySelector('#container');
mainContainer.classList.add('#container');

const btn = document.querySelector('button');
btn.addEventListener('click', function(e){
    let prValue = Number(prompt("Please enter number below 100"));
    if (prValue >= 100){
        alert('Number must be below 100, try again')
    }
    else{
        mainContainer.style.gridTemplateColumns = "repeat(" + prValue + ",1fr)";
        mainContainer.style.gridTemplateRows = "repeat(" + prValue + ",1fr)";
        for (let i = 0; i < prValue; i++){
        for(let j = 0; j < prValue; j++){
        const gridItems = document.createElement('div');
        gridItems.classList.add('grid-item');
        mainContainer.appendChild(gridItems);  
        };
        };

        
        const newItems = document.querySelectorAll('.grid-item');
        newItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.backgroundColor = 'white';
        });

        item.addEventListener('mouseleave', function() {
            this.style.backgroundColor = 'white';
        });
        }) 
    }
});








