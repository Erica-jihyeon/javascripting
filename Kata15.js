/*const organizeInstructors = function(instructors) {
  const organized = {
  }
  for(const ist of instructors) {
    switch(ist.course) {
      case("iOS"): organized.iOS = []; break;
      case("Web"): organized.Web = []; break;
      case("Blockchain"): organized.Blockchain = []; break;
    }
  }
  for(const ist of instructors) {
    switch(ist.course) {
      case("iOS"): organized.iOS.push(ist.name); break;
      case("Web"): organized.Web.push(ist.name); break;
      case("Blockchain"): organized.Blockchain.push(ist.name); break;
    }
  }
  return organized;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));*/

const organizeInstructors = function(instructors) {
  const organized = {  }
  for(const one of instructors) {
    let courseName = one.course
    // key in object : object 안에 key 있으면 true 반환
    if(courseName in organized) {
      organized[courseName].push(one.name)
    } else {
      //object에 key 없는 경우, 바로 key 만들고 첫번째 값 넣기
      organized[courseName] = [one.name]
    }
  }
  return organized;
};
  
  console.log(organizeInstructors([
    {name: "Samuel", course: "iOS"},
    {name: "Victoria", course: "Web"},
    {name: "Karim", course: "Web"},
    {name: "Donald", course: "Web"}
  ]));
  console.log(organizeInstructors([
    {name: "Brendan", course: "Blockchain"},
    {name: "David", course: "Web"},
    {name: "Martha", course: "iOS"},
    {name: "Carlos", course: "Web"}
  ]));