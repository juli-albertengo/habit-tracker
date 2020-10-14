// Grabing my elements from the DOM for the Week Display
let day1 = document.getElementById(1);
let day2 = document.getElementById(2);
let day3 = document.getElementById(3);
let day4 = document.getElementById(4);
let day5 = document.getElementById(5); 
let day6 = document.getElementById(6);
let day7 = document.getElementById(7);

// Figuring out which day of the week we are on
let today = moment().format('dddd');

// Displaying the current week based on whatever the day is
function displayWeek(today){
    switch(today){
        case "Monday":
            day1.innerHTML = moment().format('L').slice(3,5);  
            day1.parentElement.className = "semana__dia-activo";
            day2.innerHTML = moment().add(1, 'days').format('L').slice(3,5);
            day3.innerHTML = moment().add(2, 'days').format('L').slice(3,5);
            day4.innerHTML = moment().add(3, 'days').format('L').slice(3,5);
            day5.innerHTML = moment().add(4, 'days').format('L').slice(3,5);
            day6.innerHTML = moment().add(5, 'days').format('L').slice(3,5);
            day7.innerHTML = moment().add(6, 'days').format('L').slice(3,5);
            break;
        case "Tuesday":
            day1.innerHTML = moment().subtract(1, 'days').format('L').slice(3,5);
            day2.innerHTML = moment().format('L').slice(3,5);
            day2.parentElement.className = "semana__dia-activo";
            day3.innerHTML = moment().add(1, 'days').format('L').slice(3,5);
            day4.innerHTML = moment().add(2, 'days').format('L').slice(3,5);
            day5.innerHTML = moment().add(3, 'days').format('L').slice(3,5);
            day6.innerHTML = moment().add(4, 'days').format('L').slice(3,5);
            day7.innerHTML = moment().add(5, 'days').format('L').slice(3,5);
            break;
        case "Wednesday":
            day1.innerHTML = moment().subtract(2, 'days').format('L').slice(3,5);
            day2.innerHTML = moment().subtract(1, 'days').format('L').slice(3,5);
            day3.innerHTML = moment().format('L').slice(3,5);
            day3.parentElement.className = "semana__dia-activo";
            day4.innerHTML = moment().add(1, 'days').format('L').slice(3,5);
            day5.innerHTML = moment().add(2, 'days').format('L').slice(3,5);
            day6.innerHTML = moment().add(3, 'days').format('L').slice(3,5);
            day7.innerHTML = moment().add(4, 'days').format('L').slice(3,5);
            break;
        case "Thursday":
            day1.innerHTML = moment().subtract(3, 'days').format('L').slice(3,5); 
            day2.innerHTML = moment().subtract(2, 'days').format('L').slice(3,5);
            day3.innerHTML = moment().subtract(1, 'days').format('L').slice(3,5);
            day4.innerHTML = moment().format('L').slice(3,5);
            day4.parentElement.className = "semana__dia-activo";
            day5.innerHTML = moment().add(1, 'days').format('L').slice(3,5);
            day6.innerHTML = moment().add(2, 'days').format('L').slice(3,5);
            day7.innerHTML = moment().add(3, 'days').format('L').slice(3,5);
            break;
        case "Friday":
            day1.innerHTML = moment().subtract(4, 'days').format('L').slice(3,5);
            day2.innerHTML = moment().subtract(3, 'days').format('L').slice(3,5); 
            day3.innerHTML = moment().subtract(2, 'days').format('L').slice(3,5);
            day4.innerHTML = moment().subtract(1, 'days').format('L').slice(3,5);
            day5.innerHTML = moment().format('L').slice(3,5);
            day5.parentElement.className = "semana__dia-activo";
            day6.innerHTML = moment().add(1, 'days').format('L').slice(3,5);
            day7.innerHTML = moment().add(2, 'days').format('L').slice(3,5);
            break;
        case "Saturday":
            day1.innerHTML = moment().subtract(5, 'days').format('L').slice(3,5); 
            day2.innerHTML = moment().subtract(4, 'days').format('L').slice(3,5); 
            day3.innerHTML = moment().subtract(3, 'days').format('L').slice(3,5);
            day4.innerHTML = moment().subtract(2, 'days').format('L').slice(3,5);
            day5.innerHTML = moment().subtract(1, 'days').format('L').slice(3,5);
            day6.innerHTML = moment().format('L').slice(3,5);
            day6.parentElement.className = "semana__dia-activo";
            day7.innerHTML = moment().add(1, 'days').format('L').slice(3,5);
            break;
        case "Sunday":
            day1.innerHTML = moment().subtract(6, 'days').format('L').slice(3,5);  
            day2.innerHTML = moment().subtract(5, 'days').format('L').slice(3,5);
            day3.innerHTML = moment().subtract(4, 'days').format('L').slice(3,5);
            day4.innerHTML = moment().subtract(3, 'days').format('L').slice(3,5);
            day5.innerHTML = moment().subtract(2, 'days').format('L').slice(3,5);
            day6.innerHTML = moment().subtract(1, 'days').format('L').slice(3,5);
            day7.innerHTML = moment().format('L').slice(3,5);
            day7.parentElement.className = "semana__dia-activo";
            break;
        default:
            console.log("invalid input")
   };
}

document.addEventListener('DOMContentLoaded', displayWeek(today));

//Getting the habits from the local storage
let misHabitos = JSON.parse(localStorage.getItem("misHabitos"));

// Grabing the container from the DOM to put the habits in it
let habitos = document.querySelector(".misHabitos");

//Showing the noHabitsContainer
if(misHabitos === null || misHabitos.length === 0){
    let myContainer = document.getElementById('noHabits');
    let titulo = document.querySelector('.titulo');
    let semana = document.querySelector('.semana');
    let calendarBoy = document.querySelector('.calendarBoy');
    titulo.className = 'showToggle';
    semana.className = 'showToggle';
    calendarBoy.className = 'showToggle';
    myContainer.className = 'noHabitsContainer';   
}

//Creating a divHabito for each habit stored in LocalStorage
if (misHabitos !== null){
    misHabitos.forEach(habito => {
        let divHabito = document.createElement("div");
        divHabito.className = "misHabitos__divHabito--" + habito.color;
        divHabito.id = habito.id;
        let titulo = document.createElement("h4");
        let scores = document.createElement("p");
        let daily = document.createElement('p');
        let goCorner = document.createElement("div");
        let deleteCorner = document.createElement("div");
        let deletePrompt = document.createElement('div');
        let updatePrompt = document.createElement('div');
        
        titulo.innerHTML = habito.name;
        scores.innerHTML = habito.weekStats ? habito.weekStats : `This week: 0/${habito.timesPerWeek}`;
        daily.innerHTML = habito.dailyStats ? habito.dailyStats : `Today: 0`
        goCorner.className = "go-corner";
        goCorner.innerHTML = '<span class="material-icons">trending_up</span>';
        deleteCorner.className = "delete-corner";
        deleteCorner.innerHTML = '<span class="material-icons">delete</span>';
        deletePrompt.className = 'showToggle';
        deletePrompt.innerHTML = '<p>Delete this habit</p>';
        updatePrompt.className = 'showToggle';
        updatePrompt.innerHTML = '<p>Mark this habit as completed</p>';

        goCorner.addEventListener("click", updateHabitPrompt);
        deleteCorner.addEventListener("click", deleteHabitPrompt);
        deletePrompt.addEventListener('click', deleteHabit);
        updatePrompt.addEventListener('click', updateHabit)
        divHabito.appendChild(titulo);
        divHabito.appendChild(daily);
        divHabito.appendChild(scores);
        divHabito.appendChild(goCorner);
        divHabito.appendChild(deleteCorner);
        divHabito.appendChild(updatePrompt);
        divHabito.appendChild(deletePrompt);
        habitos.appendChild(divHabito);
    })
}

//Prompt before deleting the habit
function deleteHabitPrompt(e){
    let id = e.target.parentElement.parentElement.id;
    let miHabito = document.getElementById(id);
    let deleteP = miHabito.lastChild;
    let updateP = miHabito.children.item(5);
    deleteP.className = 'prompt';
    updateP.className = 'showToggle';
    miHabito.addEventListener('mouseleave', function(){
        deleteP.className = 'showToggle';
        })
}

//Actually deleting the Habit
function deleteHabit(e){
    let id = e.target.parentElement.parentElement.id;
    let habitos = JSON.parse(localStorage.getItem("misHabitos"));
    let updatedHabits = habitos.filter(habito => { 
     if (habito.id !== id){
             return habito;
     }
    })
    localStorage.setItem("misHabitos", JSON.stringify(updatedHabits));
    $('#deleteModal').addClass('deleteModal')
    $('#deleteModal').modal()
 }

// Prompt before updating the habit
function updateHabitPrompt(e){
    let id = e.target.parentElement.parentElement.id;
    let miHabito = document.getElementById(id);
    let deleteP = miHabito.lastChild;
    let updateP = miHabito.children.item(5);
    deleteP.className = 'showToggle';
    updateP.className = 'prompt';
    miHabito.addEventListener('mouseleave', function(){
        updateP.className = 'showToggle';
    })
}

//Actually Updating the Habit
function updateHabit(e){
    let id = e.target.parentElement.parentElement.id;
    let todaysDate = moment().format('L');
    let completado = {};
    let thisWeek = getWeekForStats(today);
    let habitos = JSON.parse(localStorage.getItem("misHabitos"));
    habitos.forEach(habito => {
        if (habito.id === id){
            if (habito.completition.length === 0){
                completado[todaysDate] = 1
                habito.completition.push(completado)
            } else {
                habito.completition.forEach(fecha => {
                    if (fecha[todaysDate] !== 0 ){
                        fecha[todaysDate] = fecha[todaysDate] + 1;
                    } else {
                        completado[todaysDate] = 1
                        habito.completition.push(completado);
                    }
                })
            }
        }
        if (habito.id === id){
            let fechas = getCompletadosDates(habito.completition);
            let points = getComparison(fechas, thisWeek, habito.completition);
            habito.weekStats = `This week: ${points}/${habito.timesPerWeek}`;
            let dailyPoints = getDaily(habito.completition);
            habito.dailyStats = `Today: ${dailyPoints}`;
            console.log(habito.dailyStats);
        }
    })
    localStorage.setItem("misHabitos", JSON.stringify(habitos));
    $('#updateModal').addClass('updateModal')
    $('#updateModal').modal()
}

function getCompletadosDates(objetosCompletado){
    let fechas = []
    objetosCompletado.forEach(completado =>{
        fechas = Object.keys(completado);
    })
    return fechas;
}

// Get week for stats
function getWeekForStats(today){
    let thisWeek = [];
    switch(today){
        case "Monday":
            day1 = moment().format('L');  
            day2 = moment().add(1, 'days').format('L');
            day3 = moment().add(2, 'days').format('L');
            day4 = moment().add(3, 'days').format('L');
            day5 = moment().add(4, 'days').format('L');
            day6 = moment().add(5, 'days').format('L');
            day7 = moment().add(6, 'days').format('L');
            thisWeek.push(day1, day2, day3, day4, day5, day6, day7);
            break;
        case "Tuesday":
            day1 = moment().subtract(1, 'days').format('L');
            day2 = moment().format('L');
            day3 = moment().add(1, 'days').format('L');
            day4 = moment().add(2, 'days').format('L');
            day5 = moment().add(3, 'days').format('L');
            day6 = moment().add(4, 'days').format('L');
            day7 = moment().add(5, 'days').format('L');
            thisWeek.push(day1, day2, day3, day4, day5, day6, day7);
            break;
        case "Wednesday":
            day1 = moment().subtract(2, 'days').format('L');
            day2 = moment().subtract(1, 'days').format('L');
            day3 = moment().format('L');
            day4 = moment().add(1, 'days').format('L');
            day5 = moment().add(2, 'days').format('L');
            day6 = moment().add(3, 'days').format('L');
            day7 = moment().add(4, 'days').format('L');
            thisWeek.push(day1, day2, day3, day4, day5, day6, day7);
            break;
        case "Thursday":
            day1 = moment().subtract(3, 'days').format('L'); 
            day2 = moment().subtract(2, 'days').format('L');
            day3 = moment().subtract(1, 'days').format('L');
            day4 = moment().format('L');
            day5 = moment().add(1, 'days').format('L');
            day6 = moment().add(2, 'days').format('L');
            day7 = moment().add(3, 'days').format('L');
            thisWeek.push(day1, day2, day3, day4, day5, day6, day7);
            break;
        case "Friday":
            day1 = moment().subtract(4, 'days').format('L');
            day2 = moment().subtract(3, 'days').format('L'); 
            day3 = moment().subtract(2, 'days').format('L');
            day4 = moment().subtract(1, 'days').format('L');
            day5 = moment().format('L');
            day6 = moment().add(1, 'days').format('L');
            day7 = moment().add(2, 'days').format('L');
            thisWeek.push(day1, day2, day3, day4, day5, day6, day7);
            break;
        case "Saturday":
            day1 = moment().subtract(5, 'days').format('L'); 
            day2 = moment().subtract(4, 'days').format('L'); 
            day3 = moment().subtract(3, 'days').format('L');
            day4 = moment().subtract(2, 'days').format('L');
            day5 = moment().subtract(1, 'days').format('L');
            day6 = moment().format('L');
            day7 = moment().add(1, 'days').format('L');
            thisWeek.push(day1, day2, day3, day4, day5, day6, day7);
            break;
        case "Sunday":
            day1 = moment().subtract(6, 'days').format('L');  
            day2 = moment().subtract(5, 'days').format('L');
            day3 = moment().subtract(4, 'days').format('L');
            day4 = moment().subtract(3, 'days').format('L');
            day5 = moment().subtract(2, 'days').format('L');
            day6 = moment().subtract(1, 'days').format('L');
            day7 = moment().format('L');
            thisWeek.push(day1, day2, day3, day4, day5, day6, day7);
            break;
        default:
            console.log("invalid input")
   };
   return thisWeek;
}

//Comparar veces completadas con la currentWeek
function getComparison(fechas, currentWeek, completadosObjetos){
    let points = 0;
    for (let i = 0; i <= fechas.length - 1; i++){
        for (let j=0; j<= currentWeek.length; j++){
            if (fechas[i] === currentWeek[j]){
                let myDate = fechas[i]
                points = points + completadosObjetos[0][myDate];
            }
        }
    }
    return points;
}

function getDaily(objetosCompletado){
    let hoy = moment().format('L');
    let dailyPoints = objetosCompletado[0][hoy];
    return dailyPoints;
}

$('#updateModalButton').click(function(){
    location.reload()
})

$('#deleteModalButton').click(function(){
    location.reload()
})
