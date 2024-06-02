gsap.to(".main-text span", { 
  duration: 4.5, text: "Lee Hye Su." ,
//   repeat: -1,
//   yoyo: true
});

particlesJS("particles-js", {
"particles": {
    "number": {
        "value": 500,// 파티클의 수
        "density": {// 파티클 밀도 설정
            "enable": true,
            "value_area": 1000// 파티클이 분포될 영역 크기
        }
    },
    "color": {
        "value": "#f9f9f9"
    },
    "shape": {
        "type": "polygon",
        "stroke": {
            "width": 0,
            "color": "#000000"
        },
        "polygon": {
            "nb_sides": 4// 다각형 변의 수
        },
        "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
        }
    },
    "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
        }
    },
    "size": {
        "value": 10,
        "random": true,
        "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 8,
            "sync": false
        }
    },
    "line_linked": {
        "enable": false,
        "distance": 150,
        "color": "#000",
        "opacity": 0.4,
        "width": 1
    },
    "move": {
        "enable": true,
        "speed": 0.1,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
        }
    }
},
"interactivity": {
    "detect_on": "canvas",
    "events": {
        "onhover": {
            "enable": true,
            "mode": "bubble"
        },
        "onclick": {
            "enable": true,
            "mode": "push"
        },
        "resize": true
    },
    "modes": {
        "grab": {
            "distance": 400,
            "line_linked": {
                "opacity": 1
            }
        },
        "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
        },
        "repulse": {
            "distance": 200,
            "duration": 0.4
        },
        "push": {
            "particles_nb": 4
        },
        "remove": {
            "particles_nb": 2
        }
    }
},
"retina_detect": true
});