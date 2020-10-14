// Grabing my elements from the DOM from the Add Habit Form
let form = document.getElementById('add_habit_form');
let accion = document.getElementById('accion');
let cantidad = document.getElementById('cantidad');
let selectedPeriod = document.getElementById('periodo');
let cancelar = $('#botonCancelar');
let addAnother = $('#addAnotherHabit');
let takeMeHome = $('#takeMeHome');

//COLORES
let verde = document.getElementById('verde');
let amarillo = document.getElementById('amarillo');
let naranja = document.getElementById('naranja');
let rojo = document.getElementById('rojo');
let celeste = document.getElementById('celeste');
let azul = document.getElementById('azul');
let violeta = document.getElementById('violeta');
let rosa = document.getElementById('rosa');
let previewDiv = document.getElementById('previewDiv')

//Habit constructor function
function Habit(id, name, times, selectedPeriod, color){
    this.id = id;
    this.name = name;
    this.times = times;
    this.color = color;
    this.basePeriod = selectedPeriod;
    if(this.basePeriod === "dia"){
        this.timesPerDay = times;
        this.timesPerWeek = times * 7;
    }
    if(this.basePeriod === "semana"){
        this.timesPerWeek = times;
    }
    this.completition = [];
    this.weekStats = "";
    this.dailyStats = '';
};

// Funcion que llama al constructor
function createHabit(identifier) {
    let color = previewDiv.className.slice(29);
    if(color === 'default'){
        color = 'verde';
    }
    return identifier = new Habit(identifier, accion.value, cantidad.value, selectedPeriod.value, color);
}

//Cuando se hace submit en el form, llamar a la funcion que crea el habito y guardarlo en el localStorage
form.addEventListener("submit", function(e) {
    $('#questionModal').modal()
    e.preventDefault();
    let id = Math.floor(Math.random() * 10000);
    let name = accion.value.replaceAll(" ", "-");
    let identifier = id + name;
    let uniqueHabit = createHabit(identifier);
    saveToLocalStorage(uniqueHabit);
    accion.value = "";
    cantidad.value = "";
});

//Para guardar el habit en localStorage
function saveToLocalStorage(uniqueHabit){
    let check = JSON.parse(localStorage.getItem("misHabitos"));
    if (check === null){
        let misHabitos = [];
        misHabitos.push(uniqueHabit);
        localStorage.setItem("misHabitos", JSON.stringify(misHabitos));
    } else {
        check.push(uniqueHabit);
        localStorage.setItem("misHabitos", JSON.stringify(check));
    }
}

//Limpiar el form si se toca en cancelar
cancelar.click(function(){   
    accion.value = "";
    cantidad.value = "";
})
// Agregar otro habito despues del modal
addAnother.click(function(){
    window.location.href = 'agregarHabito.html'
})
// Volver a la home despues del modal
takeMeHome.click(function(){
    window.location.href = 'index.html'
})

// Preview del color
amarillo.addEventListener('click', function(){
    previewDiv.className = 'form__colores__previewColor--amarillo';
})
verde.addEventListener('click', function(){
    previewDiv.className = 'form__colores__previewColor--verde';
})
naranja.addEventListener('click', function(){
    previewDiv.className = 'form__colores__previewColor--naranja';
})
rojo.addEventListener('click', function(){
    previewDiv.className = 'form__colores__previewColor--rojo';
})
celeste.addEventListener('click', function(){
    previewDiv.className = 'form__colores__previewColor--celeste';
})
azul.addEventListener('click', function(){
    previewDiv.className = 'form__colores__previewColor--azul';
})
violeta.addEventListener('click', function(){
    previewDiv.className = 'form__colores__previewColor--violeta';
})
rosa.addEventListener('click', function(){
    previewDiv.className = 'form__colores__previewColor--rosa';
})
