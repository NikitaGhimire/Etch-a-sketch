document.addEventListener('DOMContentLoaded', () => {
  const mainGrid = document.getElementById('mainGrid');
  for (let i = 0; i < 16*16; i++){
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    mainGrid.appendChild(gridItem);
    gridItem.addEventListener('mouseover', ()=>{
      gridItem.style.backgroundColor = 'blue';
    });
  }
  
});



