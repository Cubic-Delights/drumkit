for(var i = 0 ; i < document.querySelectorAll(".drum").length ; i++)
{
    document.querySelectorAll("button")[i].addEventListener("click",function() 
    {
        var key = this.innerHTML;
        makeSound(key);
        buttonAnimation(key);
    });
}

document.addEventListener("keydown",function(event)
{
    makeSound(event.key);
    buttonAnimation(event.key);
})

function makeSound(key)
{
    switch(key)
        {
            case 'w':
                var aw = new Audio('./sounds/tom-1.mp3');
                aw.play();
            break;
            case 'a':
                var aa = new Audio('./sounds/tom-2.mp3');
                aa.play();
            break;
            case 's':
                var as = new Audio('./sounds/tom-3.mp3');
                as.play();
            break;
            case 'd':
                var ad = new Audio('./sounds/tom-4.mp3');
                ad.play();
            break;
            case 'j':
                var aj = new Audio('./sounds/snare.mp3');
                aj.play();
            break;
            case 'k':
                var ak = new Audio('./sounds/crash.mp3');
                ak.play();
            break;
            case 'l':
                var al = new Audio('./sounds/kiss-bass.mp3');
                al.play();
            break;
        }
}

function buttonAnimation(key)
{
    var pressedKey = document.querySelector('.'+key);
    pressedKey.classList.add('pressed');
    setTimeout(function(){
        pressedKey.classList.remove('pressed');
    },100);
    
}