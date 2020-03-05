module.exports = function check(str,bracketsConfig) {

  for (let i = 0; i < bracketsConfig.length;) {
    let tempBracket = bracketsConfig[i].join('')
    if (str.includes(tempBracket)) {
      str = str.replace(tempBracket,'')
      i = 0
    } else {
      i++
    }
  }
  return str === '' ? true : false


}


