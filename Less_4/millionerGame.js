var userAnswer, questionCounter = 0, wrongAnswer = 0, gain = 0;

for (var i = 0; i < question.length; i++) {
    userAnswer = prompt("Вопрос №" +(i+1)+":"+" " + question[i].ques+"\n"+"Варианты ответов:"+"\n" + question[i].answ1 + "\n" + question[i].answ2 + "\n" + question[i].answ3 + "\n" + question[i].answ4 + "\n" + "\nВыберите один из 4-х вариантов ответа! \nЧтобы выйти из игры введите -1");

    if (userAnswer == -1) {
        alert("Возвращайтесь, будем Вас ждать.")
        break;
    }
    if (userAnswer == question[i].correct) {
        gain += (i+1)*100;
        alert("Поздравляем, вы ответили правильно и получаете  за ответ "+((i+1)*100)+" рублей");
        questionCounter++;
        }
        else {
            wrongAnswer++;
            alert("К сожалению вы ответили неверно\n У вас осталось "+(3-wrongAnswer)+" попытки");
            if (wrongAnswer==3) {break;}
            }
    }
    alert("Вы  ответиили правильно на "+questionCounter+" вопросов из "+question.length+" и заработали за игру "+gain+" рублей"); 



