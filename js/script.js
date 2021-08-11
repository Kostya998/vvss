
// someVar = 5
// var myFunction = function () {
//     console.log('Ты смотришь сюда уже ' + someVar + ' секунд')
//     someVar = someVar + 5
// }
// var myset = setInterval(myFunction, 5000);
// clearInterval(myset)


// $('html').mousemove(function (event) {
//     $('#heading').offset({ left: event.pageX, top: event.pageY })
// }
// )





somevar = 0;
var nameQuestion = prompt('ВВеди своё имя и нажми ок )')
var result = $('h1').text('Доброе Утро ' + nameQuestion + ' Хорошего тебе дня !')


var myIntelvalFunction = function () {
    result.offset({ left: somevar })
    somevar++
}




setInterval(myIntelvalFunction, 20);
result.fadeOut(6000)