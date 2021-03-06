let string = `
		* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  min-height: 50vh;
}
*::before,
*::after {
  box-sizing: border-box;
}

.skin {
  position: relative;
}
.nose {
  border: 10px solid;
  border-color: #000 transparent transparent transparent;
  width: 0px;
  height: 0px;
  /* 上面三行代码可以画一个三角形 */
  position: absolute;
  left: 50%;
  top: 145px;
  margin-left: -10px;
  z-index: 2;
}
@keyframes shakeNose {
  0% {
    transform: rotate(0deg);
  }
  33% {
    transform: rotate(20deg);
  }
  66% {
    transform: rotate(-20deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
.nose:hover {
  transform-origin: center bottom;
  animation: shakeNose 2s infinite ease-in-out;
}

.arc {
  position: absolute;
  width: 20px;
  height: 7px;
  border: 1px solid #000;
  top: -17px;
  left: -10px;
  border-radius: 10px 10px 0 0;
  background: #000;
}

.eye {
  border: 3px solid #191818;
  border-radius: 50%;
  width: 64px;
  height: 64px;
  position: absolute;
  left: 50%;
  margin-left: -32px;
  top: 100px;
  background: #2e2d2e;
}

.eye::before {
  content: "";
  border: 1px solid #09070a;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: block;
  background: #feffff;
  position: absolute;
  top: 3px;
  left: 5px;
}

.eye.left {
  transform: translateX(-100px);
}

.eye.right {
  transform: translateX(100px);
}

.mouth {
  /* border: 1px solid #000; */
  width: 200px;
  height: 100px;
  position: absolute;
  left: 50%;
  top: 170px;
  transform: translateX(-50%);
}

.mouth .up {
  position: relative;
  top: -10px;
  z-index: 1;
}

.mouth .up .lip {
  border: 2px solid #000;
  height: 30px;
  width: 100px;
  border-top-color: transparent;
  border-right-color: transparent;
  position: absolute;
  background: #ffe500;
}
.mouth .up .lip.left {
  border-radius: 0 0 0 40px;
  left: 50%;
  margin-left: -50%;
  transform: rotate(-20deg);
}

.mouth .up .lip.left::before {
  content: "";
  display: block;
  /* border: 1px solid #000; */
  height: 28.1px;
  width: 100px;
  border-radius: 0 0 0 50px;
  position: absolute;
  right: -6px;
  top: -2.8px;
  background: #ffe500;
}

.mouth .up .lip.right {
  border-radius: 0 0 50px 0;
  right: 50%;
  margin-right: -50%;
  transform: rotate(20deg);
}

.mouth .up .lip.right::before {
  content: "";
  display: block;
  /* border: 1px solid #000; */
  height: 28.1px;
  width: 100px;
  position: absolute;
  left: -6px;
  top: -2.8px;
  background: #ffe500;
  border-radius: 0 0 50px 0;
}

.mouth .down {
  height: 190px;
  width: 150px;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  overflow: hidden;
}

.mouth .down .bottomLip {
  border: 3px solid #160000;
  width: 160px;
  height: 1000px;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 75px / 300px;
  background: #9b000a;
  overflow: hidden;
}

.mouth .down .bottomLip .tongue {
  border-radius: 80px 80px 0 0;
  background: #ff4662;
  width: 150px;
  height: 160px;
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
}

.face {
  position: absolute;
  left: 50%;
  border: 3px solid #0f0500;
  border-radius: 50%;
  margin-left: -44px;
  z-index: 3;
  width: 88px;
  height: 88px;
  top: 200px;
  background: #ff1800;
}

.face.left {
  transform: translateX(-180px);
}

.face.right {
  transform: translateX(180px);
}
`;
let n = 0;
let interval = 50;
const x = () => {
	if (n > string.substr(0, n).length) {
		window.clearInterval(display);
	}
	n += 1;
	demo.innerText = string.substr(0, n);
	demo.scrollTop = demo.scrollHeight;
	showcase.innerHTML = string.substr(0, n);
};
let display = setInterval(() => {
	x();
}, interval);

const Pause = () => {
	window.clearInterval(display);
};

pause.addEventListener('click', Pause);

play.addEventListener('click', () => {
	display = setInterval(x, interval);
});

slow.addEventListener('click', () => {
	Pause();
	interval = 200;
	display = setInterval(x, interval);
});

middle.addEventListener('click', () => {
	Pause();
	interval = 50;
	display = setInterval(x, interval);
});
quick.addEventListener('click', () => {
	Pause();
	interval = 0;
	display = setInterval(x, interval);
});