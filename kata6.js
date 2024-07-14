function likes(names) {
    if(names.length === 0) return 'no one likes this'
    if(names.length === 1){
      return `${names[0]} likes this`
    } else if(names.length === 2){
      return `${names[0]} and ${names[1]} like this`
    } else if(names.length === 3){
      return `${names[0]}, ${names[1]} and ${names[2]} like this`
    } else {
      return `${names[0]}, ${names[1]} and ${names.length-2} others like this`
    }
  } 

  function toCamelCase(str){
    let result = '';
    let capitalizeNext = false;
  
    for (let i = 0; i < str.length; i++) {
      if (str[i] === '-' || str[i] === '_') {
        capitalizeNext = true;
      } else {
        if (capitalizeNext) {
          result += str[i].toUpperCase();
          capitalizeNext = false;
        } else {
          result += str[i];
        }
      }
    }
  
    return result;
  }

  module.exports = {likes,toCamelCase}