import './app4.css'
import $ from 'jquery'

const $circle = $('.circle')
$circle.on('mouseenter', ()=>{
    $circle.addClass('active')
}).on('mouseleave', ()=>{
    $circle.removeClass('active')
})

let a = 1
export let b =2