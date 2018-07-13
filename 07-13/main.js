function go(direction,speed){

    if(speed > 75){
        document.write( "The car is moving in " + direction +" at "+ speed + " mph "+ "slow down")
    }
    else{
        document.write( "The car is moving in " + direction +" at "+ speed + " mph "+ " you are good")
    }

    
    }
    go(
        "forward", 80
    );
    go("forward, 70");