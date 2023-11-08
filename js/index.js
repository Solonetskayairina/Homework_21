    class Student {
        constructor(name, lastName, yearOfBirth, grades) {
        this.name = name;
        this.lastName = lastName;
        this.yearOfBirth = yearOfBirth;
        this.grades = grades;
        this.visiting = new Array(25);
        }

        age() {
            const currentYear = new Date().getFullYear();
            return currentYear - this.yearOfBirth;
        }

        averageScore() {
            if (this.grades.length === 0) {
                return 0;
            }
            const sumGrades = this.grades.reduce((sum, grades) => (sum + grades), 0);
            return sumGrades / this.grades.length
        }

        present() {
            for (let i = 0; i < this.visiting.length; i++) {
                if (this.visiting[i] === undefined) {
                    this.visiting[i] = true;
                    break;
                }
            }
        }

        absent() {
            for (let i = 0; i < this.visiting.length; i++) {
                if (this.visiting[i] === undefined) {
                    this.visiting[i] = false;
                    break;
                }
            }
        }

        summary() {
           const averageGrade = this.averageScore();
           const attendanceCount = this.visiting.filter((value) => value === true).length;
           const attendanceRate = attendanceCount / 25;

            if (averageGrade > 90 && attendanceRate > 0.9) {
                return 'Молодець!';
            } else if (averageGrade > 90 || attendanceRate > 0.9) {
                return 'Добре, але можна краще';
            } else {
                return 'Редиска!';
            }
        }
    }

    const student1 = new Student("Dima", "Petrov", 2003, [95, 80, 92, 88, 78]);
    console.log(student1)

    const student2 = new Student("Maria", "Petrenko", 2005, [91, 95, 91, 100, 93]);
    console.log(student2)

    console.log("Age student 1:", student1.age())
    console.log("Age student 2:", student2.age())

    student1.present();
    student1.absent();
    student1.present();
    student1.present();
    student2.present();
    student2.absent();

    console.log("Student 1:", student1.summary());
    console.log("Student 2:", student2.summary());