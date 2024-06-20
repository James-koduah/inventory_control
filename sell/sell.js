let sell_product_name = document.getElementById('sell_product_name')
sell_product_name.addEventListener('input', sell_suggest_product)
let search_matches_box = document.getElementById('sell_matches')
function sell_suggest_product(){
    text = sell_product_name.value
    if (text == '' || /[A-Za-z0-9]/.test(text) == false) {
        return;
    }
    text = text.toLowerCase()
    search_matches_box.innerHTML = ''
    for (p of products){
        let name = p[0] + ' ' + p[1]
        let name2 = name.toLowerCase()
        if (name2.includes(text)){
            let p = document.createElement('p')
            p.innerText = name
            p.onclick = ()=>{
                sell_product_name.value = name;
                search_matches_box.innerHTML = ''
            }
            search_matches_box.appendChild(p)
        }
    }
    
}