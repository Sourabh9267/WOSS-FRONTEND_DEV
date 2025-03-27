// console.log(new Date(),"\n",
// new Date("2022-10-14"),"\n",
// new Date("2023-10"),"\n",
// new Date("2023-10-12"),"\n",
// new Date("2023-12-22 10:00"),"\n",
// new Date("2023-12-22 10:25"),"\n",
// new Date("2023-12-22 10:25:38"),"\n",
// new Date("2023-12-22 10:25:38-93"),"\n",
// new Date(3000));

let liveClock;;

setInterval(function Time(){
    let liveClock=new Date();
    console.log(liveClock);

},1000)
