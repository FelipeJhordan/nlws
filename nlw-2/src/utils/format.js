const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
]

function getSubject(subjectNumber) {
    const position = +subjectNumber - 1;
    return subjects[position];
}

function convertHoursToMinutes(time) {
    const [hour, minutes] = time.split(":");
    return Number(Number(hour * 60) + Number(minutes));
}

module.exports = {
    subjects,
    weekdays,
    getSubject,
    convertHoursToMinutes
}