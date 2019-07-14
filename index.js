// Code your solution in this file!
function distanceFromHqInBlocks(pta){
    const trip_distance = Math.abs(pta - 42);
    return trip_distance;
}

function distanceTravelledInFeet(pta, ptb){
    const trip_distance = (Math.abs(pta - ptb))  * 264;
    return trip_distance;
}

function distanceFromHqInFeet(pta){
    const trip_distance = (Math.abs(pta - 42))  * 264;
    return trip_distance;
}


function calculatesFarePrice(pta, ptb){
    const trip_distance = (Math.abs(pta - ptb))  * 264;
    let fare;

    if (trip_distance < 400){
        fare = 0;
    } else if (trip_distance < 2000) {
        fare = (trip_distance - 400) * .02;
    } else if (trip_distance < 2500){
        fare = 25;
    } else {
        fare = "cannot travel that far"
    }
 
    return fare;
}