// Database project `

const Scholar = {
    Class_A: [
        {name: "Jack", age: 19, course: ["JavaScript", "Database"]},
        {name: "John", age: 20, course: ["Web Design", "C++", "IT Essential"]},
        {name: "Jack", age: 19, course: ["Visual Art", "Algorithm", "Physic"]},
    ],

    Class_B: [
        {name: "Finn", age: 19, course: ["JavaScript", "Web Design"]},
        {name: "Eleven", age: 22, course: ["Database", "C++", "Java"]},
        {name: "Gaten", age: 10, course: ["Visual Art", "Robotic", "Physic"]},
    ],

    Class_C: [],
};

const displayData = (room) => {
    const scholars = Scholar[room];
    if(scholars && scholars.length > 0){
        console.log(`\n===Student in ${room}===`);
        for(let i = 0; i < scholars.length; i++){
            console.log(`${i + 1}. Name: ${scholars[i].name}, Age: ${scholars[i].age}, Courses: ${scholars[i].course.join(", ")}`)
        }
    } else if (scholars && scholars.length === 0){
        console.log(`${room} does not have any student yet.`);
    } else {
        console.log(`${room} does not exist.`);
    }
}

function insertData(room, newName, newAge, newCourse) {
    const newRoom = Scholar[`${room}`];
    if(!newRoom) {
        console.log(`${room} does not exist.`);
        return;
    } else {
        const newElement = {
            name: newName,
            age: newAge,
            course: Array.isArray(newCourse)? newCourse: [newCourse],
        }
        newRoom.push(newElement);
        console.log(`${newName} added to ${room}.`)
        return true;
    }
}

const removeData = (room, index) => {
    const classroom = Scholar[room];
    if(!classroom) {
        console.log(`${room} does not exist.`);
        return false;
    }

    if(index < 0 || index >= classroom.length) {
        console.log(`Index ${index} is out of bound in ${room}.`);
        return false;
    }

    const removeScholar = classroom.splice(index, 1)[0];
    console.log(`${removeScholar.name} is removed from ${room}.`)
    return true;
}

const updateData = (room, studentName, field, value) => {
    if(!Scholar[room]) {
        console.log(`${room} does not exist.`);
        return false;
    }
    const scholar = Scholar[room].find(student => student.name === studentName);
    if(!scholar) {
        console.log(`Student ${studentName} is not found in ${room}.`);
        return false;
    }
    scholar[field] = value;
    console.log(`Updated ${studentName}'s ${field} in ${room}.`);
    return true;
}

console.log("Testing: ");

console.log("Before changes: ");
displayData("Class_A");
displayData("Class_B");
displayData("Class_C");
console.log("\n");
insertData("Class_C", "Hopper", 19, "Math");
removeData("Class_A", 0);
updateData("Class_A", "Jack", 20, "AI");
console.log("\nAfter changes: ");
displayData("Class_A");
displayData("Class_B");
displayData("Class_C");


