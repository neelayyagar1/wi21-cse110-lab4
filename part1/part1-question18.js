let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

var x;
for(x in statistics){
    var n = x.startsWith("r");
    if(n == true || statistics[x] % 2 == 1){
        console.log(statistics[x]);
    }
}
