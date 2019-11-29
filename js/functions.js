// ANIMACIONES
try {
    $left = document.querySelector('.izquierda');
    $right = document.querySelector('.derecha');
    $container = document.querySelector('.contenedor');

    $left.addEventListener('mouseenter', (e) => {
        $container.classList.add('izquierda-is-hovered');
    })
    $left.addEventListener('mouseleave', (e) => {
        $container.classList.remove('izquierda-is-hovered');
    })

    $right.addEventListener('mouseenter', (e) => {
        $container.classList.add('derecha-is-hovered');
    })
    $right.addEventListener('mouseleave', (e) => {
        $container.classList.remove('derecha-is-hovered');
})
} catch (error) {
    // pass
}

// FUNCIONES
let count = 1;
let progess = document.getElementById('progreso'); 
let previousButton = document.getElementById('previous');
let indexButton = document.getElementById('index');
let diagnosisButton = document.getElementById('diagnostico');
previousButton.style.display = 'none';

indexButton.addEventListener('click', (e) => {
    e.preventDefault();

    let question = window.confirm(`¿Estás seguro que deseas salir del test? Si lo haces, perderás tus respuestas.`);
    if(question) window.location.href = 'index.html'
});

diagnosisButton.addEventListener('click', (e) => {
    e.preventDefault();

    let question = window.confirm(`¿Estás seguro que deseas salir del test? Si lo haces, perderás tus respuestas.`);
    if(question) window.location.href = 'diagnosticos.html'
});

function resetAll(){
    localStorage.clear();
}

function getSelectedIllness(){
    const $ILLNESS_ARRAY = document.getElementsByName('enf');
    let selectedIllness = [];

    for(let i = 0; i < $ILLNESS_ARRAY.length; i++) if($ILLNESS_ARRAY[i].checked) selectedIllness.push($ILLNESS_ARRAY[i].value);

    if(selectedIllness.length === 1){
        alert('Seleccione dos o más enfermedades');
        return;
    }

    localStorage.setItem('flag', 'true');
    localStorage.setItem('selectedIllness', selectedIllness);
    window.location.href = 'preguntas.html';
}

function start(type){
    if(type === 'diagnosis') {
        window.location.href = 'diagnosticos.html';
    } else if(type === 'general') {
        window.location.href = 'preguntas.html';
    } else if(type === 'specific') {
        window.location.href = 'especifico.html';
    }
}

if(localStorage.getItem('flag') === 'true'){
    let diagnosisType = document.getElementById('tipoCuestionario');
    diagnosisType.innerText = '';
    diagnosisType.innerText = 'Diagnóstico específico';
}

function getNextQuestion(){
    count++;

    if(count > 15) {
        count--;
        return
    }
    fillProgress(count);
    let nextButton = document.getElementById('next');
    nextButton.innerText = '';
    nextButton.innerText = 'Siguiente';
    nextButton.onclick = getNextQuestion;
    previousButton.style.display = 'initial';
    let previousQuestion = document.getElementById(`pregunta${count - 1}`)
    previousQuestion.style.display = 'none';
    let nextQuestion = document.getElementById(`pregunta${count}`);
    nextQuestion.style.display = 'block';
    getSelectedValue(count - 1);
    if(count === 15){
        getSelectedValue(count);
        let nextButton = document.getElementById('next');
        nextButton.innerText = '';
        nextButton.innerText = 'Resultados';
        nextButton.onclick = () => {
            window.location.href = 'resultados.html';
        }
    }
}

function getPreviousQuestion(){
    count--;
    if(count < 1) {
        count++;
        return
    }
    
    if(count === 1) previousButton.style.display = 'none';

    fillProgress(count);
    let question = document.getElementById(`pregunta${count + 1}`);
    question.style.display = 'none';
    let previousQuestion = document.getElementById(`pregunta${count}`)
    previousQuestion.style.display = 'block';
}

function fillProgress(counter){
    progess.innerText = '';
    progess.innerText += `Pregunta ${counter} de 15`;
}

function getSelectedValue(counter){
    let radioButtons = document.getElementsByName(`p${counter}`);
    for(button of radioButtons){
        if(button.checked){
            localStorage.setItem(`p${counter}`, button.value);
        }
    }
}

function getUsersAnswers() {
    symptoms = [];

    for(let i = 1; i < 16; i++) symptoms.push(parseFloat(localStorage.getItem(`p${i}`)))

    return symptoms;
}

function results(){
    let symptoms = getUsersAnswers();
    let title = document.getElementById('nombreEnfermedad');
    let text = document.getElementById('textoEnfermedad');
    let answer;

    if(localStorage.getItem('flag') === 'true'){
        let selectedIllness = localStorage.getItem('selectedIllness').split(',');
        answer = specificDiagnosis(symptoms, selectedIllness);
    } else {
        answer = generalDiagnosis(symptoms);
    }

    for(let i = 0; i < Object.keys(answer).length; i++){
        if(i === 2) return

        title.innerHTML = `${answer[`illness${i}`].name}`;
        text.innerHTML = `<h4>Origen</h4>${answer[`illness${i}`].source}<h4>Recomendaciones</h4>${answer[`illness${i}`].recommendations}`
    }
}

function noBack(){
    history.pushState(null, null, location.href);
    window.onpopstate = function () {
        history.go(1);
    }
}