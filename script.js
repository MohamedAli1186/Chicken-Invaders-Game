
for(var x = 0; x<60; x++){
var farkha = document.createElement('img')
farkha.src="./imgs/Chicken.png"
farkha.classList="farkha"
var X = document.querySelector(".chicken")
X.appendChild(farkha)
}

var rock = document.createElement('img')
rock.src= './imgs/Rocket.png'
rock.classList='rocket'
var z = document.querySelector('.rock')
z.appendChild(rock)



document.addEventListener('keydown',function(){
    var rocket = document.querySelector('.rocket');
    var rocketPosition = rocket.getBoundingClientRect();
    
    // Move left
    if (event.key === 'ArrowLeft' && rocketPosition.left > 0) {
        rocket.style.left = (rocketPosition.left - 20) + 'px';
    }
    // Move right
    if (event.key === 'ArrowRight' && rocketPosition.right < window.innerWidth) {
        rocket.style.left = (rocketPosition.left + 20) + 'px';
    }
    // Move Up
    if (event.key === 'ArrowUp' && rocketPosition.top > 0){
        rocket.style.top =(rocketPosition.top -20) + 'px';
    }
    // Move Down
    if (event.key === 'ArrowDown' && rocketPosition.bottom < (window.innerHeight - 20)){
        rocket.style.top =(rocketPosition.top +20) + 'px';
    }
      // Fire bullet
    if (event.key === ' ') {
        fireBullet(rocketPosition);
    }
    })


    function fireBullet(rocketPosition) {
        var bullet = document.createElement('img');
        bullet.src = './imgs/Bullet.png';
        bullet.classList = 'bullet';
        bullet.style.left = (rocketPosition.left + rocketPosition.width / 2 - 5) + 'px'; // Center the bullet
        bullet.style.top = rocketPosition.top + 'px';
        document.body.appendChild(bullet);
        
        // Animate the bullet upwards
        var bulletInterval = setInterval(function() {
            var bulletPosition = bullet.getBoundingClientRect();
            
            if (bulletPosition.top <= 0) {
                clearInterval(bulletInterval);
                bullet.remove();
            } else {
                bullet.style.top = (bulletPosition.top - 10) + 'px';
            }
        }, 20);
    }