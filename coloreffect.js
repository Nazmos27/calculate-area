
// randomize the color 
function random(){
    let arr = ['rgba(254, 202, 202)', 'rgba(255, 251, 235)',  'rgba(248, 113, 113)', 'rgba(252, 211, 77)', 'rgba(110, 231, 183)', 'rgba(147, 197, 253)', ' rgba(236, 72, 153)', ];
    return arr[Math.floor(Math.random() * arr.length)];
}

document.getElementById('card01').addEventListener('mouseenter', function(){
    document.getElementById('card01').style.backgroundColor = random();
})
document.getElementById('card02').addEventListener('mouseenter', function(){
    document.getElementById('card02').style.backgroundColor = random();
})
document.getElementById('card03').addEventListener('mouseenter', function(){
    document.getElementById('card03').style.backgroundColor = random();
})
document.getElementById('card04').addEventListener('mouseenter', function(){
    document.getElementById('card04').style.backgroundColor = random();
})
document.getElementById('card05').addEventListener('mouseenter', function(){
    document.getElementById('card05').style.backgroundColor = random();
})
document.getElementById('card06').addEventListener('mouseenter', function(){
    document.getElementById('card06').style.backgroundColor = random();
})


document.getElementById('blog-btn').addEventListener('click',function(){
    window.location.href = 'QnA.html'
  })
