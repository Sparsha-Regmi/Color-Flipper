let btn=document.querySelector('.btn')
let body=document.querySelector('body')

function colorFlipper(){
        let colors=['A','B','C','D','E','F',0,1,2,3,4,5,6,7,8,9]
        let color='#'
        for(i=0;i<3;i++){
            color=color+ String(colors[Math.floor(Math.random()*colors.length)])
        }
        body.style.backgroundColor=color
        btn.textContent='Color Changed'

}

btn.addEventListener('click',colorFlipper)
