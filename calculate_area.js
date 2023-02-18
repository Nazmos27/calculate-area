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

function myFunction() {
    var x = document.getElementById("triangle-input");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  document.getElementById('toggle-btn-triangle').addEventListener('click',function(){
    console.log('asdf')
    myFunction()
  })

