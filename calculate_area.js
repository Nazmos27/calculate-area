// function myFunction(shapeInput01,shapeInput02,shapeCm01,shapeCm02) {
//     var shapeInputField01 = document.getElementById(shapeInput01);
//     var shapeInputField02 = document.getElementById(shapeInput02)
//     var shapeCmText01 = document.getElementById(shapeCm01)
//     var shapeCmText02 = document.getElementById(shapeCm02)
//     if (shapeInputField01.style.display === 'none' && shapeInputField02.style.display === 'none' && shapeCmText01.style.display === 'none' && shapeCmText02.style.display === 'none') {
//         shapeCmText01.style.display = 'block'
//         shapeCmText02.style.display = 'block'
//         shapeInputField01.style.display = 'block'
//         shapeInputField02.style.display = 'block'
//     } else {
//         console.log('asfda')
//         shapeCmText01.style.display = 'none'
//         shapeCmText02.style.display = 'none'
//         shapeInputField01.style.display = 'none'
//         shapeInputField02.style.display = 'none'
//     }
// }


// document.getElementById('toggle-btn-elipse').addEventListener('click', function () {
//     console.log('asdfaf')
//     myFunction('elipse-input-01','elipse-input-02','elipse-cm-01','elipse-cm-02')
// })

function togglingInputField(shape) {
    var shape 
    if (shape.style.display === "none") {
      shape.style.display = "flex"
    } else {
      shape.style.display = "none";
    }
  }



function calculatingArea(shapevalue01,shapevalue02){
  const area = shapevalue01 * shapevalue02
  return area
}

function ul(parameter, text){
  const ul = document.getElementById('list-container');
  const element = document.createElement('li');
  const textdocument = document.getElementById(text).innerText;
  element.innerHTML = `
  <p> ${textdocument} ${parameter}cm<sup>2</sup> <button class="btn-convert text-white font-bold mt-2 bg-blue-700 px-1 rounded-md">convert to m<sup>2</sup></button></p>
  `;
  ul.appendChild(element);
}

document.getElementById('calculate-triangle').addEventListener('click',function(){
  const value1 = document.getElementById('triangle-input-01').value
  const value2 = document.getElementById('triangle-input-02').value
  const triangleArea = calculatingArea(value1,value2)
  console.log(calculatingArea(value1,value2))
  document.getElementById('triangle-input-01').value = ''
  document.getElementById('triangle-input-02').value = ''
  ul(triangleArea,'triangle')

})



  document.getElementById('toggle-btn-triangle').addEventListener('click',function(){
    const triangleField = document.getElementById('triangle-input')
    togglingInputField(triangleField)
  })
  document.getElementById('toggle-btn-rhombus').addEventListener('click',function(){
    const rhombusField = document.getElementById('rhombus-input')
    togglingInputField(rhombusField)
  })
  document.getElementById('toggle-btn-rectangle').addEventListener('click',function(){
    const rectangleField = document.getElementById('rectangle-input')
    togglingInputField(rectangleField)
  })
  document.getElementById('toggle-btn-pentagon').addEventListener('click',function(){
    const pentagonField = document.getElementById('pentagon-input')
    togglingInputField(pentagonField)
  })
  document.getElementById('toggle-btn-parallelogram').addEventListener('click',function(){
    const parallelogramField = document.getElementById('parallelogram-input')
    togglingInputField(parallelogramField)
  })
  document.getElementById('toggle-btn-elipse').addEventListener('click',function(){
    const elipseField = document.getElementById('elipse-input')
    togglingInputField(elipseField)
  })


