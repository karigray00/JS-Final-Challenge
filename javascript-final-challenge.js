const wizards = [
        {
          name: 'Neville Longbottom',
          scores: [90, 95, 100, 95, 100]
        },
        {
          name: 'Hermione Granger',
          scores: [100, 100, 100, 100, 100]
        },
        {
          name: 'Ron Weasley',
          scores: [70, 60, 45, 80, 75]
        },
        {
          name: 'Harry Potter',
          scores: [80, 75, 70, 85, 90]
        },
        {
          name: 'Draco Malfoy',
          scores: [90, 85, 70, 85, 90]
        },
        {
          name: 'Padma Patil',
          scores: [95, 100, 100, 95, 100]
        },
        {
          name: 'Terry Boot',
          scores: [95, 90, 100, 95, 100]
        },
        {
          name: 'Ernie Macmillan',
          scores: [90, 85, 100, 85, 90]
        },
        {
          name: 'Lavender Brown',
          scores: [80, 75, 70, 85, 90]
        },
        {
          name: 'Zacharias Smith',
          scores: [80, 75, 70, 85, 90]
        },
        {
          name: 'Gregory Goyle',
          scores: [0, 45, 30, 35, 20]
        },
      ]

function getAvg(listOfNumbers) {
  let total = 0;
  listOfNumbers.forEach(function (number) {
    total += number;
  });
  return total / listOfNumbers.length;
}

function getTopStudentsSorted(students) {
  let topStudents = [];
  students.forEach((student) => {
    let avg = getAvg(student.scores);
    if (avg >= 90) {
      topStudents.push(student.name);
    }
  });
  return topStudents.sort()
}

document.querySelector('.topStudentsList').innerHTML = getTopStudentsSorted(wizards).join("<br>")