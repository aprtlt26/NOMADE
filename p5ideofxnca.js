
        
        let circles = [];
        let waves = [];
    
        function setup() {
            console.log("Setup is being called");
            let canvas = createCanvas(1000, 800);
            canvas.position(0, 0);
            canvas.parent('myCanvas');
            canvas.style('z-index', '-1'); 
            noFill();
            stroke(0);
            strokeWeight(1);
    
            let centerX = width / 2;
            let centerY = height / 2;
            circles.push({ x: centerX - 100, y: centerY, r: 125 });
            circles.push({ x: centerX, y: centerY, r: 100 });
            circles.push({ x: centerX + 80, y: centerY, r: 110, oval: true });
    
            circles.forEach(circle => {
                addWave(circle.x, circle.y, circle.r, circle.oval);
            });
        }
    
        function draw() {
            background(255,255,255);
            drawCircles();
            updateAndDrawWaves();
        }
    
        function drawCircles() {
            circles.forEach(circle => {
                if (circle.oval) {
                    ellipse(circle.x, circle.y, circle.r * 1.9, circle.r);
                } else {
                    ellipse(circle.x, circle.y, circle.r * 2);
                }
            });
        }

        function windowResized() {
            resizeCanvas(windowWidth, windowHeight);
        }
    
        function updateAndDrawWaves() {
            waves.forEach((wave, index) => {
                if (wave.opacity > 0) {
                    stroke(128, 128, 128, wave.opacity);
                    if (wave.oval) {
                        ellipse(wave.x, wave.y, wave.radius * 1.9, wave.radius);
                    } else {
                        ellipse(wave.x, wave.y, wave.radius * 3);
                    }
                    wave.radius += 4.5;
                    wave.opacity -= 3;
                } else {
                    waves.splice(index, 1);
                    addWave(wave.x, wave.y, wave.baseRadius, wave.oval);
                }
            });
        }
    
        function addWave(x, y, baseRadius, isOval) {
            waves.push({ x: x, y: y, radius: baseRadius, opacity: 255, oval: isOval, baseRadius: baseRadius });
     }