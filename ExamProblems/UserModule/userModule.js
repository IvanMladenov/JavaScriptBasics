function solve (arr){
    var criteria = arr[0].split("^"),
        students=[],
        trainers=[];

    for (var i = 1; i < arr.length; i++) {
        var obj = JSON.parse(arr[i]);
        if (obj.role==='trainer'){
            trainers.push(obj);
        }else {
            students.push(obj);
        }
    }

    if (criteria[0]==='name'){
        students.sort(function(a,b){
            if (a.firstname=== b.firstname){
                return a.lastname.localeCompare(b.lastname);
            }else {
                return a.firstname.localeCompare(b.firstname);
            }
        });
    }else {
        students.sort(function(a,b){
            if (a.level=== b.level){
                return a.id - b.id;
            }else {
                return a.level - b.level;
            }
        });
    }

    trainers.sort(function(a, b){
       if (a.courses.length=== b.courses.length){
           return a.lecturesPerDay - b.lecturesPerDay;
       }else {
           return a.courses.length - b.courses.length;
       }
    });

    students = filterStudents(students);
    trainers = trainersRedused(trainers);

    console.log('{"students":' + JSON.stringify(students) + ',"trainers":' + JSON.stringify(trainers) + '}');

    function filterStudents(students){
        var filtered = [];

        for (var index in students){
            var newStudent ={};
            var totalGrades = 0;
            students[index].grades.forEach(function(x){totalGrades+=Number(x)});
            newStudent['id'] = students[index].id;
            newStudent['firstname'] = students[index].firstname;
            newStudent['lastname'] = students[index].lastname;
            newStudent['averageGrade'] = (totalGrades/students[index].grades.length).toFixed(2);
            newStudent['certificate'] = students[index].certificate;

            filtered.push(newStudent);
        }

        return filtered;
    }

    function trainersRedused (trainers){
        var redused = [];

        for (var index in trainers){
            var newTrainer = {};
            newTrainer['id'] = trainers[index].id;
            newTrainer['firstname'] = trainers[index].firstname;
            newTrainer['lastname'] = trainers[index].lastname;
            newTrainer['courses'] = trainers[index].courses;
            newTrainer['lecturesPerDay'] = trainers[index].lecturesPerDay;

            redused.push(newTrainer);
        }

        return redused;
    }
}