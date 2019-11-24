import './app2.css'
import $ from 'jquery'

const $tab = $('.tab')
$tab.on('click', 'li', (e)=>{
    let index = Array.from($('.tab li')).indexOf(e.currentTarget)
    $(e.currentTarget).addClass('active')
                      .siblings().removeClass('active')
    $('.tabContent').children().eq(index).addClass('active')
                    .siblings().removeClass('active')
})

$tab.children().eq(0).trigger('click')

