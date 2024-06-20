let results = document.getElementById('results')

let product = {
    boo(name, spec, qty, price, exp){
        return `<div class="result">
                <div class="result_img"><img src='/images/placeholder.png'></div>
                <div class="result_text">
                    <header>${name} <i>${spec}</i></header>
                    <div class="specs">
                        <p><strong>Qty: </strong> ${qty}</p>
                        <p><strong>Price: </strong>GHC ${price}</p>
                        <p><strong>EXP date: </strong>${exp}</p>
                    </div>
                </div>
            </div>`
    }
}



loadAll()



function loadAll(){
    for (p of products){
        results.innerHTML += product.boo(...p)
    }
}


let search_box = document.getElementById('search_box')
search_box.addEventListener('input', ()=>{search_products()})

function search_products(){
    let text = document.getElementById('search_box').value
    if (text == '' || /[A-Za-z0-9]/.test(text) == false) {
        loadAll()
        return;
    }
    text = text.toLowerCase()
    results.innerHTML = ''
    for (p of products){
        let name = p[0] + ' ' + p[1]
        name = name.toLowerCase()
        if (name.includes(text)){
            results.innerHTML += product.boo(...p)
        }
    }

    if (results.innerHTML == ''){
        results.innerHTML = product.boo('No Result Found', 'N/A', 0, 0, 0)
    }
    
}