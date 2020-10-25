module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 !== 0 ) return false;
  let arr = [];
  let memory = false;
  arr = str.split('');
  let configLength = bracketsConfig.length;
  for(let j = 0; j < arr.length; j++) {
    for(let i = 0; i < configLength; i++) {
      if(arr[j] == bracketsConfig[i][1]) {
        if(bracketsConfig[i][1] == bracketsConfig[i][0]) {
          if(arr[j] == arr[j + 1]) {
            arr.splice(j, 2);
            j -= 1;
            break;
          } else if(memory) {
            if(arr[j - 1] == arr[j]) {
              arr.splice(j - 1, 2);
              j -= 2;
              memory = false;
              break;
            } else return false;
          } else {
            memory = true;
            break;
          };
        } else {
          if(arr[j - 1] == bracketsConfig[i][0]) {
            arr.splice(j - 1, 2);
            j -= 2;
            break;
          } else return false;
        }
      }
    }
  }
  
  return true;
}
