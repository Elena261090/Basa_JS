function HundTenOne(number){
    this.hundred = 0;
    this.ten = 0;
    this.one = 0;
    if (number >= 0 && number < 1000) {
      this.hundred = parseInt(number/100);
      number = number % 100;
      this.ten = parseInt(number/10);
      number = number % 10;
      this.one = number;
    }
    else {
      alert("Number[" + number + "] the error must be between 0 and 999");
    }
  }
  
  var x = +prompt("Введите любое число от 0 до 1000.");
  var a = new HundTenOne(x);
    console.log(a);


