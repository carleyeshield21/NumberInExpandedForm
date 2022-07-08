// This is the link to this JavaScript Coding Challenge
// https://www.codewars.com/kata/5842df8ccbd22792a4000245/train/javascript

function expandedForm(num) {
  let numstr = num.toString()
  let numarr = Array.from(numstr)
  
  let places = []
  for(i=0; i<=numarr.length-1; i++){
    // console.log(i)
    places.push(i)
  }
  places.reverse()

//   console.log(numarr)
//   console.log(places)

  let arr = []
  for(i=0; i<=numarr.length-1; i++){
    // console.log(numarr[i], places[i])
    if(numarr[i] != '0'){
        // arr.push([numarr[i], places[i]])
        // console.log(places[i])
        arr.push(numarr[i].concat('0'.repeat(places[i])))
    }
  }
//   console.log(arr)
//   console.log(arr.join('+'))
  console.log(`${arr.join(' + ')} = ${num}`)
}
expandedForm(12); // Should return '10 + 2'
console.log('========')
expandedForm(42); // Should return '40 + 2'
console.log('========')
expandedForm(70304); // Should return '70000 + 300 + 4'
console.log('========')
expandedForm(598645614572)