let time
if(process.argv[2].split('s').length == 2){
  time = parseInt(process.argv[2])
}else{
  time = parseInt(process.argv[2]) * 60
}
setInterval(() => {
  console.log(`Left: ${time - 1}s`)
}, time)
clearInterval()
