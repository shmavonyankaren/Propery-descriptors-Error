function gradeLabs(worksOfStudents) {
    try {
        worksOfStudents.forEach(work => {
            if(work.runLab(10) !== Math.pow(10, 10)) {
                console.log(`${work.student}'s work is not accepted`);
            } else {
                console.log(`${work.student}'s work is accepted`);
            }
        });
    } catch (error) {
        console.log("Error thrown");
    }
}

let studentLabs1 = [
    {
        student: "Blake",
        m: function (num) {
            return Math.pow(num, num);  
        },
    },
    {
        student: "Jessica",
        runLab: function (num) {
            return Math.pow(num, num);
        },
    },
    {
        student: "Mya",
        runLab: function (num) {
            return num * num;
        },
    },
];

let studentLabs2 = [
    {
        student: "Blake",
        runLab: function (num) {
            return Math.pow(num, num);
        },
    },
    {
        student: "Jessica",
        runLab: function (num) {
            return Math.pow(num, num);
        },
    },
    {
        student: "Mya",
        runLab: function (num) {
            return num * num;
        },
    },
];

gradeLabs(studentLabs1);

gradeLabs(studentLabs2);