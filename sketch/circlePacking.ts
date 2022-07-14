interface Circle {
    pos: Position;
    radius: number;
}
interface Position {
    x: number;
    y: number;
}


function calculatePackedCircles(areaWidth: number, areaHeight: number): Circle[] {
    let validatedCircles: Circle[] = []
    for (let i=0; i<1000; i++){
        let candidate: Circle = {
            pos: {x: random(0, areaWidth), y: random(0, areaHeight)},
            radius: random(50, 200)}
        let isCircleValid: boolean = true 
        for (let circle of validatedCircles) {
            let circlesDist: number = dist(candidate.pos.x, candidate.pos.y, circle.pos.x, circle.pos.y)
            if (circlesDist < (candidate.radius + circle.radius)){
                isCircleValid = false
            }
        } if (isCircleValid === true ){
            validatedCircles.push (candidate)
        }
    }
    return validatedCircles;
}

/** Returns the distance between two given positions.
    This function doesn't require p5.js 
 */
function distance(p1: Position, p2: Position): number {
    const x = p1.x - p2.x;
    const y = p1.y - p2.y;
    const hyp = Math.sqrt(x * x + y * y);
    return hyp;
}


 /*function calculatePackedCircles():Circle[]

	validatedCircles = empty list of circles
	
	repeat 1000 times
	
			candidate = generate a circle with random position and radius
	
			if candidate does not overlap with any circle of validatedCircles
	
			    add candidate to validatedCircles
	
			else
	
			    do nothing (we will not use this candidate)
	
	return validatedCircles 
    */
    //TODO: you need to implement this function properly!  
    //These are just a couple of random circles, with no consideration yet for overlap.
    //{ pos: { x: 300, y: 300 }, radius: 100 },
    //{ pos: { x: random(0, areaWidth), y: random(0, areaHeight) }, radius: 40 },//