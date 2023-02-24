module.exports = async function(db, {proffyValue, classValue, classScheduleValues}) {
   // insert data in the table proffys
   const insertedProffy = await db.run(`
    INSERT INTO proffys (
        name,
        avatar,
        whatsapp,
        bio
    ) VALUES (
        "${proffyValue.name}", "${proffyValue.avatar}", "${proffyValue.whatsapp}", "${proffyValue.bio}"
    );
   `);
    
   const proffy_id = insertedProffy.lastID;

   const insertedClass = await db.run(`
   INSERT INTO class (
        subject,
        cost,
        proffy_id
   ) VALUES (
    "${classValue.subject}", "${classValue.cost}", "${proffy_id}"
   );
   `);
   
   const class_id = insertedClass.lastID;

   const insertedAllClassesScheduleValues = classScheduleValues.map( (scheduleValue) => {
       return db.run(`
            INSERT INTO class_schedule (
                class_id,
                weekday,
                time_from,
                time_to
            ) VALUES (
                "${class_id}",
                "${scheduleValue.weekday}",
                "${scheduleValue.time_from}",
                "${scheduleValue.time_to}"
            );`);
   } );

   await Promise.all(insertedAllClassesScheduleValues);
}