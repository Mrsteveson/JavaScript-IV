// CODE here for your Lambda Classes

// Parent Function -> Person.

class Person {
    constructor(params) {
        this.name = params.name;
        this.age = params.age;
        this.location = params.location;
        this.gender = params.gender;
    }

    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    }
}

// Child Function -> Instructor

class Instructor extends Person {
    constructor(instructorParams) {
        super(instructorParams)
        this.specialty = instructorParams.specialty;
        this.favLanguage = instructorParams.favLanguage;
        this.catchPhrase = instructorParams.catchPhrase;
    }

    demo(subject) {
        return `Today we are learning about ${subject}!`;
    }

    grade(student, subject) {
        return `${student} receives a perfect score on ${subject}!`
    }
}


// Child Function -> Student

class Student extends Person {
    constructor(studentParams) {
        super(studentParams)
        this.previousBackground = studentParams.previousBackground;
        this.className = studentParams.className;
        this.favSubjects = studentParams.favSubjects;
    }

    listsSubjects() {
        return `${this.favSubjects}.`
    }

    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}.`
    }

    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}.`
    }
}


// GrandChild Function -> Project Manager

class ProjectManager extends Instructor {
    constructor(projectManagerParams) {
        super(projectManagerParams) 
        this.gradClassName = projectManagerParams.gradClassName;
        this.favInstructor = projectManagerParams.favInstructor;
    }

    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!`;
    }    

    debugsCode(student, subject) {
        return `${this.name} debugs ${student}'s code on ${subject}.`;
    }
}


//Person 
const person = new Person ({
    name: 'Joe',
    location: 'Earth',
    age: 100,
    gender: 'ambiguous',
});

// Instructor 
const luis = new Instructor ({
    name: 'Luis',
    location: 'Earth',
    age: 21,
    gender: 'male',
    specialty: 'solving problems',
    favLanguage: 'JavaScript',
    catchPhrase: 'Luis 4 President',
});

// Student
const patrick = new Student ({
    name: 'Patrick Steveson',
    location: 'Illinois',
    age: 27,
    gender: 'male',
    previousBackground: 'Finance',
    className: 'Web18',
    favSubjects: ['Html', 'CSS', 'JavaScript']
});

// Project Manager
const kevin = new ProjectManager ({
    name: 'Kevin',
    location: 'Illinois',
    age: 25,
    gender: 'male',
    gradClassName: 'CS13',
    favInstructor: 'Beej',
});

// Console.logs
console.log(person.speak());
console.log(luis.demo('Javascript'));
console.log(luis.grade('Patrick', 'Javascript'));
console.log(patrick.listsSubjects());
console.log(patrick.PRAssignment('JavaScript'));
console.log(patrick.sprintChallenge('JavaScript'));
console.log(kevin.debugsCode('Patrick', 'JavaScript'));


// Notes