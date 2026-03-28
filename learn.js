// declaring variables
var myName = "kofi" +" " +"Agyenim" // Var is discourange in modern javascript 
console.log(myName)

let myAge = 35  // use in block scope , can not be reassigned 
console.log(myAge)

const pi = 34.7
console.log(pi) // can not be reassigned 

const price = 30 
const tax = 0.5
const discount = 0.3
let totalPrice = price + tax * discount
console.log(totalPrice)

let x = '5'+3+4 //this give 534 but in normal sense expected to be 57
console.log(x)

let y = 5+3+'4'// this gives 84 but not 534
console.log(y)

//Block scope 
/*variables declared in a block can't be accessed outside the block */
{
    let num = 2
    console.log(num)
}
//var can be access outside the block 
{
    var num1 = 3
}
console.log(num1)

//let can not be redeclared 
let kofi ,kwadwo ,kwasi 
kofi = 10 
kwadwo = 11
kwasi = 12

let sumAge = kofi + kwadwo + kwasi
console.log(sumAge)

for ( let i=0 ; i < 10 ; i++) // list numbers from 0 to 9 
    console.log(i)

//Data types

//Exponential notation
let count = 2e2
console.log(count)

let expo = 2**3
console.log(expo)

for(let n = 0 ; n <=8; n++)
console.log(2**n)

// undefined
let carName;

//conditional statement
let kofiAge =16
if (kofiAge < 18){
    console.log('you are under age')
}else
    console.log("you can enter")

let kofiNumber = 10

//Ternary operator ? :
let isMember = true

let promo = isMember ?0.2: 0.1
let foodPrice = 20
let currentPrice = foodPrice * promo
console.log(currentPrice)

//Functions are the building blocks in all programmming 

function addition(p1, p2){
  return p1*p2
}
let add = addition(4,3)
console.log(add)

let summation = addition(9,0)
console.log(summation)

function priceOfOne(actualPrice,numberOfPieces,fare,profit){
    return (actualPrice/numberOfPieces) + fare + profit
}

let priceForOne = priceOfOne(45,10,0.3,0.2)
console.log("price for one item is:"+" "+priceForOne)

sub = (g ,h) => g - h;
let subtraction = sub(8,1)
console.log(subtraction)

function greet(name , age ){
    console.log( "Hello" +" "+ name + " "+"You are " + age +" "+ "years old,")
}
greet("Agyenim",20)

//Object is a variable that can hold many variables.

const football ={
    attack:"striker" ,
    defence:"defender",
    midfield:"midfielder"

}
console.log(football.attack +" "+"score most goals"+" "+ football.defence + " " +"stop goals")
console.log(football["midfield"])

const person ={
    firstName:"Agyenim",
    lastName:"Boateng",
    fullName: function(){
       return this.firstName+ " " + this.lastName
    } 
}
console.log(person.fullName())
let human = person
console.log(human)

//Date

const d = new Date()
console.log(d)

//Arrays

const names = ["kofi","aggrey","boateng"]
console.log(names)

//empty array
const cars =[];
cars[0]='toyota'
cars[1]= 'kia'
cars[2]='lamborghinhi'
console.log(cars.toString())

//length
let length = cars.length;
console.log(length)

//sorting
let sort = cars.sort;
console.log(sort)

//push : adding elements to an array
cars.push('honda')
console.log(cars)

cars[cars.length] = 'ferari'
console.log(cars)

console.log(Array.isArray(cars))


//maps

const books = new Map([
    ['mathematics',200],
    ['socail',100],
    ['english', 250],
    ['science',300]
])

//get is used in fetchind data 
let numb = books.get('mathematics')
console.log('the price for the mathematics book is'+" "+ 
    numb
)

let random = Math.random()*100;
console.log(Math.round(random))

//Asynchronous
function sync(d ,f){
    return d -f 
}
let num4 = sync(8,2)
console.log(num4)
setTimeout(sync,3000)

const THEME_KEY = 'asantec-cycle-theme'

function getTheme() {
  return document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light'
}

function setTheme(theme) {
  const next = theme === 'dark' ? 'dark' : 'light'
  document.documentElement.setAttribute('data-theme', next)
  try {
    localStorage.setItem(THEME_KEY, next)
  } catch (e) {}
  return next
}

function syncThemeToggle(button) {
  if (!button) return
  const dark = getTheme() === 'dark'
  button.setAttribute('aria-pressed', String(dark))
  button.setAttribute('aria-label', dark ? 'Switch to light theme' : 'Switch to dark theme')
  button.title = dark ? 'Light mode' : 'Dark mode'
}

function initThemeToggle() {
  const btn = document.getElementById('theme-toggle')
  if (!btn) return
  syncThemeToggle(btn)
  btn.addEventListener('click', () => {
    const next = getTheme() === 'dark' ? 'light' : 'dark'
    setTheme(next)
    syncThemeToggle(btn)
  })
  window.addEventListener('storage', (e) => {
    if (e.key !== THEME_KEY || !e.newValue) return
    if (e.newValue === 'dark' || e.newValue === 'light') {
      document.documentElement.setAttribute('data-theme', e.newValue)
      syncThemeToggle(btn)
    }
  })
}

function initMobileNav() {
  const navbar = document.querySelector('.navbar')
  const navToggle = document.querySelector('.nav-toggle')
  const navMenu = document.querySelector('#primary-nav')

  if (!navbar || !navToggle || !navMenu) return

  navToggle.addEventListener('click', () => {
    const open = navbar.classList.toggle('nav-is-open')
    navToggle.setAttribute('aria-expanded', String(open))
    navToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu')
  })

  navMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navbar.classList.remove('nav-is-open')
      navToggle.setAttribute('aria-expanded', 'false')
      navToggle.setAttribute('aria-label', 'Open menu')
    })
  })
}

document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('footer-year')
  if (yearEl) yearEl.textContent = String(new Date().getFullYear())

  initThemeToggle()
  initMobileNav()
})
