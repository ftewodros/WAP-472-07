/*js*/






let students = [
    { name: 'Quincy', grades: [99, 88], courses:['cs301', 'cs303']},
    { name: 'Jason', grades: [29, 38], courses:['cs201', 'cs203']},
    { name: 'Alexis', grades: [79, 78], courses:['cs105', 'cs211'] },
    { name: 'Sam', grades: [91, 82], courses:['cs445', 'cs303'] },
    { name: 'Katie', grades: [66, 77], courses:['cs303', 'cs477'] }
  ];

  let res = students.filter(s => s.courses.includes('cs303'))
    .map(s => ({
        name: s.name,
        avg: s.grades.reduce((x, y) => x + y, 0)/s.grades.length
    }));
   
   console.log(res);