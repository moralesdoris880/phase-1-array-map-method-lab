const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  let newtitletutorials = tutorials.map(function newtitles(tutorial){
    let newtutorial = tutorial
    const words = newtutorial.split(" ");
  
    for(let i=0;i<words.length; i ++){
      words[i]= words[i][0].toUpperCase()+ words[i].substr(1);
      
    }
    newtutorial = words.join(" ");
    //console.log(newtutorial);
    tutorial= newtutorial;
    return tutorial;
  
  })
  return newtitletutorials
}









