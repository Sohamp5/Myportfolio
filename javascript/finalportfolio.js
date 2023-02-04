var w = window.matchMedia("(max-width:600px)")
var x = document.getElementById('navbar')
var b1 = document.getElementById('bar1')
var b2 = document.getElementById('bar2')
var b3 = document.getElementById('bar3')

function menu(){
    if(this.w.matches){
        if(this.x.style.transform ==  "translateX(0px)"){
            this.x.style.transform = "translateX(-600px)"
            this.b2.style.opacity = "1"
            this.b1.style.transform = "rotateZ(0deg) translateY(-5px)" 
            this.b3.style.transform = "rotateZ(0deg) translateY(5px)"
        }
        else{
            this.x.style.transform = "translateX(0px)"
            this.b2.style.opacity = "0"
            this.b1.style.transform = "rotateZ(45deg) translateY(5px)"
            this.b3.style.transform = "rotateZ(-45deg) translateY(-5px)"
        }
    }
    else{
        this.x.style.transform = "translateX(0px)"
    }
}


function myfun(){
    if(document.getElementById('indi').style.left=="30px")
    {
        document.getElementById('circles').style.backgroundColor = "white"
        document.getElementById("indi").style.left = "0px";
    }
    else {
        document.getElementById('circles').style.backgroundColor = "#000336"
        document.getElementById("indi").style.left = "30px";
    }
    var element = document.querySelector('div.whole');
    element.classList.toggle('dark-mode');
    var db = document.querySelector('body');
    db.classList.toggle('dark-body');
    var bd = document.querySelector('div.block_div');
    bd.classList.toggle('dark-block_div');
    var ft = document.querySelector('div.foot');
    ft.classList.toggle('dark-foot')
}

