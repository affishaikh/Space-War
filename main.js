const UNIT = 'px';
const movingSpeed = 50;

const setupBlaster = function() {
  const blaster = document.getElementById('blaster');
  blaster.style.position = 'relative';
  blaster.style.top = '480px';
  blaster.style.display = 'inline-block';
};

let positionFromLeft = 0;

const makeBullet = function() {
  let bulletPosition = positionFromLeft + -110;
  bulletPosition += UNIT;
  return (
    '<div id="bullet" style="width: 10px; height:40px; position: relative; top: 300px; left:' +
    bulletPosition +
    '; background-color: red; display: inline-block"></div>'
  );
};

const moveBlaster = function(onKeyDownEvent) {
  const blaster = document.getElementById('blaster');
  if (onKeyDownEvent.key === 'ArrowRight' && positionFromLeft <= 1150) {
    positionFromLeft += movingSpeed;
    blaster.style.left = positionFromLeft + UNIT;
  }
  if (onKeyDownEvent.key === 'ArrowLeft' && positionFromLeft >= 20) {
    positionFromLeft -= movingSpeed;
    blaster.style.left = positionFromLeft + UNIT;
  }
  if (onKeyDownEvent.key === ' ') {
    let bullet = makeBullet();
    document.getElementsByTagName('body')[0].innerHTML += bullet;
    let bulletTopPosition = 300;
    let intervalId = setInterval(() => {
      bulletTopPosition = bulletTopPosition - 10;
      document.getElementById('bullet').style.top = bulletTopPosition + UNIT;
      if (bulletTopPosition === -300) {
        clearInterval(intervalId);
      }
    }, 50);
  }
};

const myfunction = function(mouse) {
  console.log('entered');
  console.log(mouse.clientX);
};
