// 1. Почему код даёт именно такие результаты?
var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2 - префиксная форма инкремента a = 2, потом идет присвоение с = а = 2;

d = b++; alert(d);           // 1 - постфиксная форма инкремента,переменная будет увеличена после использования ее значения, b = 1;

c = (2+ ++a); alert(c);      // 5 - а = 2 уже увеличена, инекремент перед ее вызовом, сумма. Теперь а=3, с=5;

d = (2+ b++); alert(d);      // 4 - b = 2 уже был увеличен, но инкремент произойдет после вызова переменной в выражение b = 2, в = 4;

alert(a);                    // 3 - a = 2 + 1 (из 1 и 3 кода);
alert(b);                    // 3 - b = 2 + 1 (из 1 и 3 кода);

// 2. Чему будет равен x в примере ниже?
var a = 2;
var x = 1 + (a *= 2); // сначала вызов а и умножение его на 2, потом увеличение его на 1 и присвоение результата в x, x = 5.
alert("Ответ: "+"x="+x);

// 3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу:
//если a и b положительные, вывести их разность;
//если а и b отрицательные, вывести их произведение;
//если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.

var a = 5;
var b = 4;
if(a >= 0 && b >= 0) {
    alert("Числа положительные! Разность: " + (a - b));
}
else if (a <= 0 && b <= 0) {
    alert("Числа отрицательные! Произведение: " + (a * b));
}
else {
    alert("Числа разных знаков! Сумма: " + (a + b));
}

// 4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.
//Дополнительное задание. Попробуйте сделать рекурсией, можно без switch.

var a = parseInt(prompt("Введите число в промежутке от 0 до 15."));
switch (a) {
     case 0:
         document.write("0 ");    
        
     case 1:
         document.write("1 ");        
     case 2:
         document.write("2 ");
     case 3:
         document.write("3 ");
     case 4: 
         document.write("4 ");
     case 5:
         document.write("5 ");
     case 6:
         document.write("6 ");
     case 7:
         document.write("7 ");
     case 8:
         document.write("8 ");
     case 9:
         document.write("9 ");
     case 10:
         document.write("10 ");
     case 11:
         document.write("11 ");
     case 12:
         document.write("12 ");
     case 13:
         document.write("13 ");
     case 14:
         document.write("14 ");
     case 15:
         document.write("15 ");
         break;
     default:
         document.write("Неверно выполнен ввод числа");
         break;
}

// 5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.

function sum (x, y) {
    return x + y;
}

function dif (x, y) {
    return x - y;
}

function mul (x, y) {
    return x * y;
}

function div (x, y) {
    if(y != 0) {
        return x / y;
    }
    else {
        alert("На '0' делить нельзя!")
    }
}

var a = parseFloat(prompt("Введите число a."));
var b = parseFloat(prompt("Введите число b."));

alert("Сумма: " + sum (a, b) + "\nРазность: " + dif (a, b) + "\nПрoизведение: " + mul (a, b) + "\nДеление: " + div (a, b));

// 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 5) и вернуть полученное значение (использовать switch).

function sum (x, y){
    return x+y;
}
function dif (x, y){
    return x-y;
}
function mul (x, y){
    return x*y;
}
function div (x, y){
    return x/y; 
}

function mathOperation(arg1, arg2, operation){
    switch (operation){
        case "sum":
            return sum(arg1, arg2);
            break;
        case "dif":
            return dif(arg1, arg2);
            break;
        case "mul":
            return mul(arg1, arg2);
            break;
        case "div":
            return div(arg1, arg2);
            break;
        default:
            return NaN;
            break;
    }
}

var a = parseFloat(prompt("Введите число a"));
var b = parseFloat(prompt("Введите число b"));
var oper = prompt("Выберите операцию: sum, dif, mul, div");

alert("Результат операции: " + mathOperation(a, b, oper));

// 7. *Сравнить null и 0. Попробуйте объяснить результат.

var Null = null, Zero = 0;
if(Null > Zero) {
    document.write("null > zero <br>");
}
if(Null < Zero) {
    document.write("null < zero <br>");
}
if(Null == Zero) {
    document.write("null = zero <br>");
}
if(Null != Zero) {
    document.write("null != zero <br>");
} 

// 8. *С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow), где val – заданное число, pow – степень.

function power(val, pow) {
   
    if(pow == 1) {
      return val;
    }
    if( pow==0 ) {
      return 1;
    }
    
     
    if (pow > 0) {
      var temp = val * power(val, pow - 1);
      console.log(temp);
      return temp;
    } 
    return (1 / val) * (power(val, pow + 1));
}

var a = parseFloat(prompt("Введите число"));
var b = parseInt(prompt("Введите положительную, отрицательную или нулевую степень"));
alert("Результат: " + power(a, b));



function power(val, pow){
    if(pow == 0){
        return 1;
    }
	if(pow == 1){
		return val;
	}
	return val * power(val, pow-1);
}
console.log(power(2, 10));






