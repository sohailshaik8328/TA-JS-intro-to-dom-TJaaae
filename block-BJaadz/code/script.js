// Select the h1 element and store it in a variable named heading.
let heading = document.querySelector('h1')

// Check the typeof heading and log it.
console.log(typeof heading)

// Change the color of heading to black.
heading.style.color = 'black'

// Select all the hr elements and store it in a variable named allHrs using querySelectorAll
let allHrs = document.querySelectorAll('hr')
/* 
Convert the NodeList returned by querySelectorAll
to Array using Array.from() or spread operator and 
store it in allHrsArray

Array.from converts an array kind of data into array
so we can use methods like map, reduce

HINT:
*/
let allHrsArray = Array.from(allHrs)


// Set the border of the all the hr elements to "1px solid tomato"
allHrsArray.map((hr) => {
  return hr.style.border = '1px solid tomato'
})

// Change the background of all the hr to "antiquewhite" using for of loop.
for(let hr of allHrsArray){
  hr.style.background = 'antiquewhite'
}

// Change the 'border-radius' of all the hr to "5px" using array.
allHrsArray.map((hr) => {
  return hr.style.borderRadius = '5px'
})

// Change the alignment of the heading(h1) to center.
heading.style.textAlign = 'center'

// Change the font size of the heading to 3rem.
heading.style.fontSize = '3rem'

// Change the border of hr with class 'image' to `2px solid purple`.
let imageHr = document.querySelector('.image')
imageHr.style.border = '2px solid purple'

// Hide the box number 17 (last box).
let hide = document.querySelector('.seventeen')
hide.style.display = 'none'

// Change the border of all the hr element from solid to dashed type
allHrsArray.map(hr => {
  return hr.style.border = '1px dashed tomato '
})

// Create a pragraph element and store it in variable named 
//'para' using `createElement`
let para = document.createElement('p')

// Change the inner text of para to "querySelector
// returns an element you can maupulate but querySelectorAll 
//returns the collection of elements in array kind of structure."

para.innerText = 'querySelector'

// Remove all the elements from box 1
let boxOne = document.querySelector('.one')
boxOne.remove();

// Replace all the elements inside box 1 with the para (you created above)
boxOne.append(para)
/* Walking the DOM
Do the following after selecting box 16 and storing 
in variable named box16

  - Access the parentNode
  - Access the childNodes
  - Access previousSibling
  - Access nextSibling
  - Access firstChild
  - Access lastChild

  - Access previousElementSibling
  - Access nextElementSibling
  - Access firstElementChild
  - Access lastElementChild

  - Focus on the difference between element and node
*/
let box16 = document.querySelector('.sixteen')
console.log(document.parentNode)
console.log(document.childNodes)
console.log(document.previousSibling)
console.log(document.nextSibling)
console.log(document.firstChild)
console.log(document.lastChild)

console.log(document.previousElementSibling)
console.log(document.nextElementSibling)
console.log(document.parentNode)
console.log(document.parentNode)



// Select box 2 and append a new paragraph element
// with content "Append inserts as last child" just after hr element.
let newPara = document.createElement('p')
newPara.innerText = 'Append inserts as last child'
let box2 = document.querySelector('.awesome-box')
box2.append(newPara)

// Select box 3 and prepend a new paragraph element 
//with content "Prepend inserts as first child" just before hr element.
let prependPara = document.createElement('p')
prependPara.innerText = 'Prepend inserts as first child'
let box3 = document.querySelector('.three')
box3.prepend(prependPara)

// Change the border of box 4 to '1px solid black'
let box4 = document.querySelector('.four')
box4.style.border = '1px solid black'

// Change the border radius of box 5 to 10px.
let box5 = document.querySelector('.five')
box5.style.borderRadius = '10px'

// Change the text color of box 6 to black.
let box6 = document.querySelector('.six')
box6.style.color = 'black'

// Change the font size of the para inside box 1 to 0.8rem.
let box1 = document.querySelector('.one')
box1.style.fontSize = '0.8 rem'

// Change the background of all the alternate boxes (1, 3, 5, ....)
// to aliceblue
let allBoxes = document.querySelector('.box')
allBoxes.filter((box) => {
  if(box % 2 !== 0){
    return box.style.background = 'aliceblue'
  }
})

// add a class named "awesome-box" to the box 6 using 
//classList property of DOM element.
box6.classList.add= 'awesome-box'

// Using the toggle classList property toggle the class
// `awesome-box` from box 2
box2.classList.toggle = 'awesome-box'

// Using the remove classList proeprty remove the class
// `awesome-box` from box 4
box4.classList.remove = 'awesome-box'

// Change the background of the body to bisque
document.body.style.background = 'bisque'

// Create a button and store it in a variable named 'btn'
let btn = document.createElement('button')


// textContent of the button should be 'Click Me'
btn.textContent = 'Click Me'

// Change the background of the btn to 'oldlace'
btn.style.background = 'oldace'

// Change the font size of the btn to 1rem
btn.style.fontSize = '1rem'

// Change the border of the btn to '1px solid black'
btn.style.border = '1px solid black'

// Add the padding of '0.5rem 1rem' to btn
btn.style.padding = '0.5rem 1rem'

// Append the btn in box number 9
let box9 = document.querySelector('.nine')
box9.append(btn)

// Create a img element with src 
//value `https://images.unsplash.com/photo-1592500595497-d1f52a40b207?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80` and store in a variable named imgElm

let img = document.createElement('img')
img.src = 'https://images.unsplash.com/photo-1592500595497-d1f52a40b207?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80'
// Select the box 7 using class seven
let box7 = document.querySelector('.seven')


// Remove all the elements form box seven
box7.remove()

// Append the imgElm to the box no 7
box7.append(img)

// Change the width and height of the image to `100%`
img.style.width = '100%'
img.style.height = '100%'

// Select the box 5 using class five
// let box5= document.querySelector('.five')


// Create an input element
let input = document.createElement('input')

// Change the placeholder property of the input 
//element to "Enter you email!"
input.placeholder = 'Enter your email!'

// Append the input element to the box 5 you selected above
box5.append(input)

// Create two anchor (a) element with  the text of 
//`AltCampus` and `Google`
let alt_a = document.createElement('a')
alt_a.innerText = 'AltCampus'
let google_a = document.createElement('a')
google_a.innerText = 'Google' 

// Change the href property of the anchor
// elements to `https://altcampus.school` and `https://google.com`
alt_a.href = 'https://altcampus.school'
google_a.href = 'https://google.com'

// Append both the elements to box 5 you selected above.
box5.append(alt_a, google_a)
