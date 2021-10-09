function addStudent(newStudent) {
    let students = loadStudents();
    if (!(students.find((s) => s.Id == newStudent.Id))) {
        students.push(studentMaintain(newStudent));
        saveStudents(students);
        console.log('Added Successfully');
    } else
        console.log('This student is already added');
}

function deleteStudent(id) {
    let students = loadStudents();
    students = students.filter((s) => s.Id != id);
    saveStudents(students);
    console.log('Student deleted');
}

function readStudent(id) {
    const students = loadStudents();
    const target = students.find((s) => s.Id === id);
    if (target)
        console.log(target.Id, ' ', target.Name, ' ', target.Subject, ' ', target.Grade, ' "' + target.Comment + '"');
    else
        console.log('Student Not Found');
}

function updateStudent(targetStudent) {
    const students = loadStudents();
    let target = students.find((s) => s.Id == targetStudent.Id);
    if (target) {
        targetStudent = studentMaintain(targetStudent);
        target.Name = targetStudent.Name;
        target.Subject = targetStudent.Subject;
        target.Grade = targetStudent.Grade;
        target.Comment = targetStudent.Comment;
        saveStudents(students);
        console.log('Student Updated successfully');
    }
    else
        console.log('This Student is not existed');
}

function listStudents() {
    const students = loadStudents();
    students.forEach((s) => console.log(s.Id, ' ', s.Name, ' ', s.Subject, ' ', s.Grade, ' "' + s.Comment + '"'));
}

function loadStudents() {
    try {
        const fs = require('fs');
        const students = fs.readFileSync('students.json');
        return JSON.parse(students);
    } catch (e) {
        return [];
    }
}

function saveStudents(students) {
    const fs = require('fs');
    fs.writeFileSync('students.json', JSON.stringify(students));
}

function studentMaintain(o) {
    if (o.Comment == null)
        o.Comment = 'No comment';
    return o;
}

module.exports = {
    addStudent,
    deleteStudent,
    readStudent,
    listStudents,
    updateStudent,
}