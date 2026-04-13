const containerDiv = document.querySelector(".container");
const btnChangeGrid = document.querySelector(".change-grid");
const btnReset = document.querySelector(".reset")
const btnRandomColor = document.querySelector(".random-color")
const btnWowoMode = document.querySelector(".wowo-Mode")
const btnGumichka = document.querySelector(".gumichka")
const colorPicker = document.querySelector("input")
const btnColorPicker = document.querySelector(".color-picker")
const btnBigSize = document.querySelector(".big-size")
const btnMediumSize = document.querySelector(".medium-size")
const btnSmallSize = document.querySelector(".small-size")
let gridItems =[]


function createDivs(size = 16) {
  removeAll();
  const squareSize = 600 / size;
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const gridItem = document.createElement("div");
      gridItem.className = "grid-item";
      gridItem.style.width = `${squareSize}px`;
      gridItem.style.height = `${squareSize}px`;
      containerDiv.appendChild(gridItem);
      gridItems.push(gridItem)
      gridItem.addEventListener("mouseover", () => {
        gridItem.style.backgroundColor = "#2E2E2E";
      });
    }
  }
}

function removeAll() {
  gridItems.forEach((gridItem )=> {
    gridItem.remove()
  });
  gridItems = []
}

btnChangeGrid.addEventListener('click', () => {
  let size = parseInt(prompt("Enter a grid size you like (max 64)"));
  if (!isNaN(size) && size > 0 && size <= 100) {
    createDivs(size);
  } else {
    alert("Error! Enter a valid number between 1 and 64.");
  }
});

btnReset.addEventListener('click', ()=> { 
  gridItems.forEach((gridItem) => gridItem.style.backgroundColor = "#808080" ) } )


let generateRandomColor = () => {
  let randomColor = Math.floor(Math.random() * 16777216)
  let color = "#" + randomColor.toString(16).padStart(6, '0')
  return color
}

btnRandomColor.addEventListener('click', ()=> {
    const randomColor = generateRandomColor()
    gridItems.forEach((gridItem )=> gridItem.addEventListener('mouseover', ()=>{
    gridItem.style.backgroundColor = randomColor
 }))
})

//!Extara credits

let generateRandomRgbColor = () => {

  let r = Math.floor(Math.random() * 256)
  let g = Math.floor(Math.random() * 256)
  let b = Math.floor(Math.random() * 256)
  let color = `rgb(${r}, ${g}, ${b})`
  return color

}

let darkenColor = (gridItem) => {
  let color = gridItem.style.backgroundColor;
  if (!gridItem) return;

  const rgbValues = color.match(/\d+/g);
  let r = parseInt(rgbValues[0]);
  let g = parseInt(rgbValues[1]);
  let b = parseInt(rgbValues[2]);

  r = Math.max(0, Math.round(r - r * 0.1));
  g = Math.max(0, Math.round(g - g * 0.1));
  b = Math.max(0, Math.round(b - b * 0.1));

  gridItem.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

btnWowoMode.addEventListener('click', ()=>{
  gridItems.forEach((gridItem) => {
    gridItem.addEventListener('mouseover', ()=>{
      gridItem.style.backgroundColor = generateRandomColor()
      darkenColor(gridItem)
    })
    
  })
})

//!Extra credits


//* gumichka

btnGumichka.addEventListener('click', ()=> {
  gridItems.forEach((gridItem) => {
    gridItem.addEventListener('mouseover', ()=> {
      gridItem.style.backgroundColor  ="#808080"
    })
  })
  })

  //*gumichka

  btnColorPicker.addEventListener('click', () => {
    gridItems.forEach((gridItem) => {
      gridItem.addEventListener('mouseover', ()=> {
        gridItem.style.backgroundColor = colorPicker.value
      })
    })
  })


  //*sizes

btnBigSize.addEventListener('click', ()=> {
  createDivs(100)
})


btnMediumSize.addEventListener('click', ()=> {
  createDivs(50)
})


btnSmallSize.addEventListener('click', ()=> {
  createDivs(20)
})

//*sizes
document.addEventListener('DOMContentLoaded', () => {
  createDivs();
})
