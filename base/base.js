let active_section = document.getElementById('inventory')
let section_menu = document.getElementsByClassName('menu_item')

function change_section(nav, section){
    active_section.style.display = 'none'
    let sec = document.getElementById(section)
    sec.style.display = 'block'
    active_section = sec
    active_section.scrollIntoView({ behavior: 'smooth', block: 'start' })

    for (item of section_menu){
        item.classList.remove('active_me')
    }
    nav.classList.add('active_me')
}

var products = [
    ['Ideal Milk', '300ml', '300 tins', '8', '08/09/2026'],
    ['Ideal Milk', '900ml', '132 tins', '22', '09/02/2026'],
    ['Milo Tin', '500g', '72 tins', '35', '05/04/2025'],
    ['Key Soap', 'Bar', '86 bars', '20', '2028'],
    ['Jaama Soap', '800g', '112 pcs', '3.50', '2027'],
    ['Jaama Soap', '1500g', '144 pcs', '7', '2027'],
    ['Jaama Soap', '3000g', '24 pcs', '11', '2028'],
    ['Frytol', '60ml', '98 pcs', '4', '09/05/2027'],
    ['Frytol', '150ml', '56 pcs', '8', '05/03/2027'],
    ['Frytol', '500ml', '44 pcs', '13', '05/02/2026']
]