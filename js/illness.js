// ENFERMEDADES
const E1 = {
    name: `Cardiopatía isquémica`,
    source: `Causada por la arteriosclerosis, esta enfermedad impide que el corazón reciba la sangre necesaria. Suele ser asintomática y puede prevenirse.<br>La cardiopatía isquémica es una enfermedad que se puede prevenir de forma significativa, si se conocen y controlan sus factores de riesgo cardiovascular. Los principales factores que la producen son: edad avanzada, antecedentes de cardiopatía isquémica prematura en la familia, aumento de las cifras de colesterol total, tabaquismo, hipertensión arterial, diabetes mellitus, obesidad, sedentarismo.`,
    recommendations: `Si presenta esta enfermedad, le recomendamos tener un seguimiento con su médico. El tratamiento incluye cambios en el estilo de vida, medicamentos, anticoagulantes, angioplastia y cirugía.`,
    symptoms: [0.9,	0.7, 0.3, 0.6, 0, 0.3, 0.5, 0, 0, 0, 0, 0, 0.3, 0, 0.8]
}

const E2 = {
    name: `Arritmias`,
    source: `Una arritmia es una alteración del ritmo cardiaco.<br>Las arritmias cardiacas aparecen por alguno de estos tres motivos:
    <br>El impulso eléctrico no se genera adecuadamante
    <br>El impulso eléctrico se origina en un sitio erróneo.
    <br>Los caminos para la conducción eléctrica están alterados.
    `,
    recommendations: `Depende del tipo de arritmia, de su causa y de las características del paciente:
    <br>Bradiarritmias. Una vez resueltas posibles causas no cardiacas, en ocasiones pueden precisar para su tratamiento de la colocación de un marcapasos.
    <br>Taquiarritmias.  el manejo de las taquiarritmias se realiza generalmente mediante fármacos (que pueden usarse para controlar la arritmia reduciendo la frecuencia cardiaca, para hacerla desaparecer y para prevenir nuevos episodios). 
    `,
    symptoms: [0.9, 0.4, 0.4, 0.2, 0, 0.3, 0.4, 0, 0.2, 0, 0, 0.3, 0, 0, 0]
}

const E3 = {
    name: `Fibrilación Auricular`,
    source: `La fibrilación auricular es un ritmo cardiaco irregular y anormal. Esta condición normalmente causa latidos cardiacos muy rápidos.<br>En ocasiones, la fibrilación auricular aparece sin motivo aparente, pero otras veces sí hay un claro desencadenante. Éstas son las causas más comunes: hipertensión, problemas cardiacos, enfermedades hormonales, desconocidas (no se conoce la causa de la enfermedad).`,
    recommendations: `Controlar la presión arterial, moderar el consumo de alcohol, reducir los estimulantes, dejar el tabaco, ejercicio moderado.`,
    symptoms: [0.2, 0, 0.3, 0.4, 0, 0, 0, 0.4, 0, 0, 0, 0.3, 0, 0.7, 0]
}

const E4 = {
    name: `Valvulopatías`,
    source: `Las valvulopatías son las enfermedades propias de las válvulas del corazón. La función de las válvulas del corazón es abrirse y cerrarse correctamente durante el ciclo cardiaco.<br>La valvulopatía puede ser causada por varias situaciones, como: Fiebre reumática durante la niñez, defecto congénito de la válvula del corazón, enfermedad del músculo del corazón, envejecimiento. `,
    recommendations: `El tratamiento para la valvulopatía depende de lo mal que esté su válvula y cuán seriamente le esté afectando.
    <br>Si sólo tiene una valvulopatía leve, es posible que no necesite tratamiento alguno.  Puede que aún necesite chequeos regulares para controlar sus síntomas y asegurarse de que su válvula no se está deteriorando.
    <br>Le pueden prescribir medicamentos para aliviar sus síntomas y frenar el agravamiento de la enfermedad. El medicamento indicado será el que resulte más efectivo para sus necesidades individuales. 
    `,
    symptoms: [0.7, 0.9, 0.3, 0.4, 0.6, 0, 0, 0.5, 0.3, 0, 0, 0.4, 0, 0, 0]
}

const E5 = {
    name: `Insuficiencia cardiaca`,
    source: `La insuficiencia cardiaca se produce cuando hay un desequilibrio entre la capacidad del corazón para bombear sangre y las necesidades del organismo.<br>Sucede cuando el corazón no es capaz de bombear suficiente sangre al resto del cuerpo. Varias enfermedades pueden causarla: valvulopatías, arritmias...`,
    recommendations: `Existen tratamientos eficaces para retrasar la progresión de la insuficiencia cardiaca, mejorar la calidad de vida, la capacidad de esfuerzo y prolongar la supervivencia. Son los siguientes: tratar la causa que la produce, medidas higiénicas y cuidado personal y de alimentación, los diuréticos mejoran los síntomas congestivos y rebajan la hinchazón o la congestión pulmonar, los fármacos vasodilatadores reducen la carga con la que debe trabajar el corazón, aumentan su rendimiento y rebajan la tensión arterial, en otros casos es necesario implantar dispositivos a los pacientes.`,
    symptoms: [0, 0.6, 0.6, 0, 0.5, 0, 0.3, 0.7, 0, 0.5, 0.5, 0, 0, 0.7, 0.7]
}

const E6 = {
    name: `Cardiopatía coronaria`,
    source: `Es un estrechamiento de los pequeños vasos sanguíneos que suministran sangre y oxígeno al corazón. Esta enfermedad también se denomina arteriopatía coronaria.<br>Es causada por la acumulación de placa en las arterias que van al corazón. Esto también se puede llamar endurecimiento de las arterias (arterioesclerosis)`,
    recommendations: `El tratamiento depende de sus síntomas y de qué tan grave es la enfermedad. Usted debe estar informado sobre:
    <br>Otros medicamentos que se utilizan para tratar la angina, qué hacer cuando padezca dolor torácico, mantenerse activo cuando padezca cardiopatías, consumir una dieta saludable para el corazón.
    `,
    symptoms: [0.9, 0.8, 0, 0.9, 0, 0, 0, 0.4, 0, 0, 0, 0, 0, 0.4, 0.5]
}

const E7 = {
    name: `Infarto de miocardio`,
    source: `Coloquialmente conocido como infarto, el infarto de miocardio aparece por un riego sanguíneo insuficiente debido a la obstrucción de una arteria.<br>Las arterias coronarías se pueden estrechar por distintas causas. Las más comunes son un coágulo de sangre y la aterosclerosis (depósito e infiltración de grasas en las paredes de las arterias) que se va produciendo progresivamente facilitado por los factores de riesgo como hipertensión, colesterol alto, tabaco, obesidad, sedentarismo o edad avanzada.`,
    recommendations: `Si sufre de un infarto de miocardio, debe llamar a urgencias para que lo traten de inmediato. Puede mejorar sus hábitos de vida para prevenir este padecimiento.`,
    symptoms: [0, 0.6, 0.6, 0, 0, 0.7, 0.3, 0, 0, 0, 0, 0, 0.4, 0, 0.9]
}

const E8 = {
    name: `Miocardiopatias`,
    source: `Una miocardiopatía es una enfermedad primaria del músculo cardíaco que se distingue de otras cardiopatías estructurales como la enfermedad coronaria, las valvulopatías y las cardiopatías congénitas.<br>A menudo, se desconoce la causa de las miocardiopatías. En algunas personas, sin embargo, es el resultado de otra enfermedad (adquirida) o la transmite un progenitor (heredada).
    <br>Los factores que contribuyen a la miocardiopatía adquirida pueden ser presión arterial alta prolongada, daño en el tejido cardíaco por un ataque cardíaco, frecuencia cardíaca acelerada crónica, trastornos metabólicos, como obesidad, enfermedad tiroidea o diabetes, entre otras.`,
    recommendations: `En muchos casos, no se puede prevenir una miocardiopatía. Para reducir el riesgo de tener una miocardiopatía u otro tipo de enfermedad cardíaca, es aconsejable mantener un estilo de vida saludable para el corazón y adoptar hábitos como los siguientes: Evitar el consumo de alcohol o de cocaína, controlar la presión arterial alta, el colesterol alto y la diabetes, seguir una dieta saludable, hacer ejercicio de forma regular, dormir bien, reducir el estrés`,
    symptoms: [0.3, 0.9, 0.2, 0, 0.7, 0, 0, 0.4, 0.2, 0, 0.3, 0, 0, 0, 0]
}

const E9 = {
    name: `Tromboembolismo Pulmonar`,
    source: `El tromboembolismo pulmonar (TEP) es la oclusión o taponamiento de una parte del territorio arterial pulmonar (vasos sanguíneos que llevan sangre pobre en oxígeno desde el corazón hasta los pulmones para oxigenarla) a causa de un émbolo o trombo que procede de otra parte del cuerpo.<br>
    Existen varios factores que aumentan las posibilidades de sufrir un tromboembolismo pulmonar. Los más importantes son: fracturas de extremidades inferiores o cirugía reciente, reposo en cama o inmovilización prolongados, viajes prolongados, estados de hipercoagulabilidad, cáncer y tratamiento con quimioterapia, obesidad, tabaco`,
    recommendations: `En la mayor parte de los casos se consigue con anticoagulación parenteral (administrada por punción endovenosa o subcutánea, pero depende del caso individual de cada paciente y requiere un proceso especializado. Consulte a su médico.`,
    symptoms: [0.5, 0.9, 0.3, 0.4, 0, 0, 0, 0, 0.3,	0, 0.5, 0, 0, 0, 0]
}

const E10 = {
    name: `Cardiopatía congénita`,
    source: `Las cardiopatías congénitas son un grupo de enfermedades caracterizado por la presencia de alteraciones estructurales del corazón producidas por defectos en la formación del mismo durante el periodo embrionario.<br>En la inmesa mayoría de las cardiopatías congénitas, existe una causa multifactorial y por el momento no conocida, siendo raros los casos ligados a una única mutación genética concreta. La posibilidad de transmisión a la descendencia o repetición de otro defecto congénito en un hijo es en general baja y oscila entre el 3% y el 5%, aunque puede variar significativamente en función del tipo concreto de cardiopatía.`,
    recommendations: `El tratamiento, cuando se precisa, suele ser quirúrgico. En algunos casos, la alteración puede corregirse con una única intervención quirúrgica, pero en las cardiopatías congénitas más complejas puede ser necesaria la realización de más de una operación. Con el desarrollo de las nuevas tecnologías, muchos procedimientos se pueden realizar por vía percutánea mediante punciones, sin necesidad de cirugía abierta.`,
    symptoms: [0, 0.8, 0.4, 0.9, 0.5, 0, 0, 0, 0, 0.7, 0, 0, 0, 0, 0]
}

const ILLNESS_ARRAY = [E1, E2, E3, E4, E5, E6, E7, E8, E9, E10];
const UMBRAL = 0.3;

// MÉTODOS MAX-MIN PARA OBTENER LOS RESULTADOS
function specificDiagnosis(data, uillness) {
    let [aux, res] = [[], []];
    let answer = {};

    for (let i = 0; i < uillness.length; i++) {
        for (let j = 0; j < 15; j++) {
            const pos = parseInt(uillness[i]) - 1;
            aux[j] = Math.min(data[j], ILLNESS_ARRAY[pos].symptoms[j]);
        }
        res[i] = aux;
        aux = [];
    }

    for (let i = 0; i < uillness.length; i++) res[i] = parseFloat(res[i].reduce((a, b) => a + b, 0));

    let i = res.indexOf(Math.max.apply(Math, res));

    if(res[i] <= UMBRAL){
        answer[`illness0`] = {
            name: `¡Felicidades!`,
            source: `¡Ninguna enfermedad coincide!`,
            recommendations: `Sigue cuidándote, tu corazón te lo agradece C:`,
            };

        return answer
    }

    answer = {
        illness0: ILLNESS_ARRAY[uillness[i]-1],
    }
    return answer;

}

function generalDiagnosis(data){
    let [res, aux, illnessArray] = [[], [], []];
    let [j, count] = [0, 0];
    let answer = {};

    ILLNESS_ARRAY.map((illness) => {
        for(let i = 0; i < 15; i++) aux[i] = Math.min(data[i], illness.symptoms[i]);
        res[j] = aux;
        aux = [];
        j++;
    });

    for(let i = 0; i < 10; i++) res[i] = parseFloat(res[i].reduce((a, b) => a + b, 0));

    let i = res.indexOf(Math.max.apply(Math, res));

    console.log(res)

    if(res[i] <= UMBRAL){
        answer[`illness0`] = {
            name: `¡Felicidades!`,
            source: `¡Ninguna enfermedad coincide!`,
            recommendations: `Sigue cuidándote, tu corazón te lo agradece C:`,
        };

        return answer
    }

    for(let k = 0; k < 10; k++) if(res[k] === res[i]) illnessArray.push(k);

    illnessArray.map((idx) => {
        answer[`illness${count}`] = ILLNESS_ARRAY[idx];
        count++;
    })

    return answer;
}