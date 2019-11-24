import './app1.css'
import $ from 'jquery'

const $number = $('#number')
const $add = $('.add')
const $minus = $('.minus')
const $mult = $('.multiply')
const $divide = $('.divide')
let number = Number(localStorage.getItem('number')) || Number($number.text())
$number.text(number)

$add.on('click', ()=>{
    number += 1
    $number.text(number)
    localStorage.setItem('number', number)
})
$minus.on('click', ()=>{
    number -= 1
    $number.text(number)
    localStorage.setItem('number', number)
})
$mult.on('click', ()=>{
    number *= 2
    $number.text(number)
    localStorage.setItem('number', number)
})
$divide.on('click', ()=>{
    number /= 2
    $number.text(number)
    localStorage.setItem('number', number)
})