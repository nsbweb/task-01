var signWavesCanv = document.querySelector('#sign-Waves');
var swc = signWavesCanv.getContext('2d');

signWavesCanv.width = window.innerWidth;
signWavesCanv.height = window.innerHeight / 3;

function Wave(y, legnth, amplitude, frequency, r, g, b, a){
    this.y = y;
    this.legnth = legnth;
    this.amplitude = amplitude;
    this.frequency = frequency;
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a

    this.draw = function(){
        swc.beginPath();
        swc.moveTo(0, signWavesCanv.height / 2)
        for(let i = 0; i < signWavesCanv.width; i++){
            swc.lineTo(i, this.y + Math.sin(i * this.legnth + increment) * this.amplitude * Math.sin(increment));
        }
        swc.strokeStyle = `rgba(${this.r},${this.g},${this.b},${this.a})`
        swc.stroke();
    }

    var increment = this.frequency
    this.update= function(){

        increment += this.frequency
        this.draw();
    }
}

window.addEventListener('resize', function(){
    signWavesCanv.width = window.innerWidth;
    signWavesCanv.height = window.innerHeight / 3;

    init();
})

//var waveArray = [];
function init(){
    //waveArray = [];
// for(var i = 0; i < 5; i++){
//     var y = 100 + i*100;
//     var legnth = 0.01;
//     var amplitude = 100;
//     var frequency = 0.01;
//     var h = 100;
//     var s = 50;
//     var l = 50

//     // var legnth = i + 0.01;
//     // var amplitude = i + 100;
//     // var frequency = i + 0.01;
//     // var h = Math.round(Math.random() * 3 + 100);
//     // var s = Math.round(Math.random() * 1 + 100);
//     // var l = Math.round(Math.random() * 2 + 100)
    
//     waveArray.push(new Wave(y, legnth, amplitude, frequency, h, s, l));
// }


}

var wave = new Wave(signWavesCanv.height / 4, 0.0040, signWavesCanv.height / 4, 0.01, 144,43,223,1)
var wave1 = new Wave(signWavesCanv.height / 4 + signWavesCanv.height / 4 / 4 , 0.0050, signWavesCanv.height / 4 + signWavesCanv.height / 4 / 4, 0.01, 73,43,225,1)
var wave2 = new Wave(signWavesCanv.height / 4 + signWavesCanv.height / 4 / 2, 0.0045, signWavesCanv.height / 4 + signWavesCanv.height / 4 / 2, 0.01, 42,124,224,1)
var wave3 = new Wave(signWavesCanv.height / 4 + signWavesCanv.height / 4 / 1, 0.007, signWavesCanv.height / 4 + signWavesCanv.height / 4 / 3, 0.01, 43,197,255,1)


function animate(){
    requestAnimationFrame(animate);
    //console.log('hhhhe')
    swc.fillStyle = 'rgba(193,206,215,0.03)';
    swc.fillRect(0,0, signWavesCanv.width, signWavesCanv.height);
    //swc.clearRect(0,0, signWavesCanv.width, signWavesCanv.height);
        //console.log('hi');

    wave.update();
    wave1.update();
    wave2.update();
    wave3.update();

    // for(i = 0; i < waveArray.legnth; i++){
    //     waveArray[i].update();
    // }
    
}

init();
animate();