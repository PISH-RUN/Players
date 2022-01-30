
// Coordinates type
export type Position = {
    x: number
    y: number
}
// Generate random position for pins on earth component
export const shufflePosition = (count: number, width: number, height: number, blockWidth: number, blockHeight: number,fullGlobe: boolean): Array<Position> => {

    // Create array for store positions
    const positions: Array<Position> = new Array()
    const circleRadius: number =0.38*width;
    const circleArea = Math.PI * Math.pow(circleRadius,2)
    const blockArea = blockHeight * blockWidth *(fullGlobe?2.2:3.2);

    while(positions.length<count){
        //Generate random position coordinates
        const randomPosition = getRandomPositionInCircle(0.46*width,0.43*width,circleRadius,fullGlobe)
        if ((positions.length > circleArea/blockArea) || !isOverlap(blockWidth,blockHeight,randomPosition.x,randomPosition.y,positions))
            positions.push({x: randomPosition.x , y: randomPosition.y })
    }
    return positions

}


function isOverlap(boxWidth: number, boxHeight: number ,x: number, y: number , positions:Array<Position>): boolean { // return true if overlapping
    for(const pos of positions) {
        if( x>pos.x-boxWidth && x<pos.x+boxWidth &&
            y>pos.y-boxHeight && y<pos.y+boxHeight ) return true;
    }
    return false;
}

function getRandomPositionInCircle(xOffset: number,yOffset:number,radius: number,fullGlobe:boolean){
    const {random: r} = Math;
    const degree = r() * 360;
    const radians = degree * Math.PI / 180;
    let randomRadius = 0;
    if(fullGlobe)
     randomRadius = r() * ((degree>40&&degree<140)?((Math.cos(50* Math.PI / 180)*radius)/Math.cos((90-degree)* Math.PI / 180)):radius);
    else
    {
     randomRadius = r() * ((degree>125&&degree<205)?radius:((((degree>65&&degree<135)?0.7:(degree<65||degree>305)?0.3:0.6)*radius)/Math.cos(((90+(90*(Math.floor((degree-45)/90))))-degree)* Math.PI / 180)));
    }
     const x = xOffset + (randomRadius * Math.cos(radians));
    const y = yOffset + (randomRadius * Math.sin(radians));
    return {x, y};

}