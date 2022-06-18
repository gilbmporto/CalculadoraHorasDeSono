//Não usar o .value diretamente na declaração da variável abaixo.
var qtdeHorasIdeal = document.getElementById("qtdeHorasIdeal");

var diasDaSemana = document.getElementsByClassName("diaDaSemana");

var resposta = document.getElementsByClassName("resposta")[0];

//A propriedade .value foi colocada apenas nessa linha do código pelo fato de que ela não funciona na declaração.
var qtdeHorasIdealTotal = Number(qtdeHorasIdeal.value) * 7

var botao = document.getElementById("btn")

botao.addEventListener('click', () => {
  let totalDeHoras = 0;
  for (let i = 0; i < 7; i++) {
    totalDeHoras = totalDeHoras + Number(diasDaSemana[i].value);
  }
  if (totalDeHoras == (Number(qtdeHorasIdeal.value) * 7)) {
    
    resposta.innerHTML = '<em style="color: green">Você dormiu bem, seu arrombado.</em>'
  } else if (totalDeHoras < (Number(qtdeHorasIdeal.value) * 7)) {
    resposta.innerHTML = `<em style="color: red">Você dormiu menos do que o recomendado. Você deveria ter dormido ${(Number(qtdeHorasIdeal.value) * 7) - totalDeHoras} horas a mais nessa semana.</em>`
  } else {
    resposta.innerHTML = `<em style="color: red">Você dormiu muito mais, seu resto de bosta. Você deveria ter dormido ${totalDeHoras - (Number(qtdeHorasIdeal.value) * 7)} horas a menos nessa semana.</em>`
  }
})

/*let getSleepHours = day => {
    switch (day) {
      case 'Monday':
        return 8;
        break;
      case 'Tuesday':
        return 8;
        break;
      case 'Wednesday':
        return 7;
        break;
      case 'Thursday':
        return 8;
        break;
      case 'Friday':
        return 8;
        break;
      case 'Saturday':
        return 6;
        break;
      case 'Sunday':
        return 8;
        break;
    }
  }
  
  const getActualSleepHours = () => {
    return getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday');
  }
  
  const getIdealSleepHours = (idealHours) => {
    return idealHours * 7;
  }
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours(7);
    if (actualSleepHours === idealSleepHours) {
      console.log('You got the perfect amount of sleep! Congratulations!');
    } else if (actualSleepHours > idealSleepHours) {
      console.log('You are sleeping more than what\'s needed! Your time slept over is: ' + (actualSleepHours - idealSleepHours) + ' hours');
    } else {
      console.log('Dude, you should get some rest! Your sleep debt is: ' + (idealSleepHours - actualSleepHours) + ' hours')
    }
  }
  
  calculateSleepDebt();*/