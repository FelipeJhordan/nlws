const Database = require("./db");
const createProffy = require("./createProffy");


Database.then( async (db) => {
    //Inserir dados
    proffyValue = {
         name: "Felipe Jhordan",
         avatar: "https://avatars0.githubusercontent.com/u/44248690?s=460&u=035203c7c421295fdf48328dff4d5f25f46db5dc&v=4",
        whatsapp: "899898998",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório epor mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões",
    }

    classValue = {
        subject: 1,
        cost: "28,00",
    }

    classScheduleValues = [
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
          weekday: 1,
          time_from: 520,
          time_to: 1220
        }
    ]
    //Consultar dados inseridos
    // await createProffy(db, {proffyValue, classValue, classScheduleValues});

    const selectedProffys = await db.all("SELECT * FROM proffys");
    // console.log(selectedProffys);

    const selectClassesAndProffys = await db.all(`
    SELECT class.*, proffys.* FROM proffys JOIN class ON (class.proffy_id = proffys.id) WHERE class.proffy_id = 1;`)

    // console.log(selectClassesAndProffys);

    const selectClassesSchedules = await db.all(`
        
    `)

    console.log(selectClassesSchedules);
});