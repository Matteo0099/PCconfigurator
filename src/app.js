var cart = {
    // (A) PROPERTIES
    hPdt: null,      // html products list
    hItems: null,    // html current cart
    items: {},       // current items in cart
    iURL: "public/", // product image url folder

    // (B) LOCALSTORAGE CART
    // (B1) SAVE CURRENT CART INTO LOCALSTORAGE
    save: () => {
        localStorage.setItem("cart", JSON.stringify(cart.items));
    },

    // (B2) LOAD CART FROM LOCALSTORAGE
    load: () => {
        cart.items = localStorage.getItem("cart");
        if (cart.items == null) { cart.items = {}; }
        else { cart.items = JSON.parse(cart.items); }
    },

    // (B3) EMPTY ENTIRE CART
    nuke: () => {
        if (confirm("Empty cart?")) {
            cart.items = {};
            localStorage.removeItem("cart");
            cart.list();
        }
    },

    // (C) INITIALIZE
    init: () => {
        // (C1) GET HTML ELEMENTS
        cart.hPdt = document.getElementById("cart-products");
        cart.hItems = document.getElementById("cart-items");

        // (C2) DRAW PRODUCTS LIST
        cart.hPdt.innerHTML = "";
        let template = document.getElementById("template-product").content,
            p, item, part;
        for (let id in products) {
            p = products[id];
            item = template.cloneNode(true);
            item.querySelector(".p-img").src = cart.iURL + p.img;
            item.querySelector(".p-name").textContent = p.name;
            item.querySelector(".p-desc").textContent = p.desc;
            item.querySelector(".p-price").textContent = "$" + p.price.toFixed(2);
            item.querySelector(".p-add").onclick = () => { cart.add(id); };
            cart.hPdt.appendChild(item);
        }

        // (C3) LOAD CART FROM PREVIOUS SESSION
        cart.load();

        // (C4) LIST CURRENT CART ITEMS
        cart.list();
    },

    // (D) LIST CURRENT CART ITEMS (IN HTML)
    list: () => {
        // (D1) RESET
        cart.hItems.innerHTML = "";
        let item, part, pdt, empty = true;
        for (let key in cart.items) {
            if (cart.items.hasOwnProperty(key)) { empty = false; break; }
        }

        // (D2) CART IS EMPTY
        if (empty) {
            item = document.createElement("div");
            item.innerHTML = "Cart is empty";
            //document.getElementById("element").style.display = "block";
            cart.hItems.appendChild(item);
        }

        // (D3) CART IS NOT EMPTY - LIST ITEMS
        else {
            let template = document.getElementById("template-cart").content,
                p, total = 0, subtotal = 0;
            for (let id in cart.items) {
                // (D3-1) PRODUCT ITEM
                p = products[id];
                item = template.cloneNode(true);
                item.querySelector(".c-del").onclick = () => { cart.remove(id); };
                item.querySelector(".c-name").textContent = p.name;
                item.querySelector(".c-qty").value = cart.items[id];
                item.querySelector(".c-qty").onchange = function () { cart.change(id, this.value); };
                cart.hItems.appendChild(item);

                // (D3-2) SUBTOTAL
                subtotal = cart.items[id] * p.price;
                total += subtotal;
            }

            // (D3-3) TOTAL AMOUNT
            item = document.createElement("div");
            item.className = "c-total";
            item.id = "c-total";
            item.innerHTML = "TOTAL: $" + total;
            cart.hItems.appendChild(item);

            // (D3-4) EMPTY & CHECKOUT
            item = document.getElementById("template-cart-checkout").content.cloneNode(true);
            cart.hItems.appendChild(item);
        }
    },

    // (E) ADD ITEM INTO CART
    add: (id) => {
        if (cart.items[id] == undefined) { cart.items[id] = 1; }
        else { cart.items[id]++; }
        cart.save(); cart.list();
    },

    // (F) CHANGE QUANTITY
    change: (pid, qty) => {
        // (F1) REMOVE ITEM
        if (qty <= 0) {
            delete cart.items[pid];
            cart.save(); cart.list();
        }
        // (F2) UPDATE TOTAL ONLY
        else {
            $('#totale').maskMoney();
            cart.items[pid] = qty;
            var total = 0;
            for (let id in cart.items) {
                total += cart.items[id] * products[id].price;
                document.getElementById("c-total").innerHTML = "TOTAL: $" + total;
            }
        }
    },

    // (G) REMOVE ITEM FROM CART
    remove: (id) => {
        delete cart.items[id];
        cart.save();
        cart.list();
    },

    // (H) CHECKOUT
    checkout: () => {
        // SEND DATA TO SERVER
        // CHECKS
        // SEND AN EMAIL
        // RECORD TO DATABASE
        // PAYMENT
        // WHATEVER IS REQUIRED
        alert("TO DO");

        /*var data = new FormData();
        data.append("cart", JSON.stringify(cart.items));
        data.append("products", JSON.stringify(products));
    
        fetch("SERVER-SCRIPT", { method:"POST", body:data })
        .then(res=>res.text()).then((res) => {
          console.log(res);
        })
        .catch((err) => { console.error(err); });*/
    }
};
window.addEventListener("DOMContentLoaded", cart.init);


/*var totale = 0;
var sum =  document.querySelector("#sum");

function setRoof(Pc) {
    var dropbox = document.PcConfigurator.Roof_type;
    dropbox.options.length = 0; 	
    dropbox.options[dropbox.options.length] = new Option(' ','0');
    var totaleMobo = 0;

    if (Pc == "1")  {
        dropbox.options[dropbox.options.length] = new Option('GIGABYTE', '3');
        dropbox.options[dropbox.options.length] = new Option('ASRock', '4');
        totaleMobo = totaleMobo + 140;
    }
    else if (Pc =="2") {
        dropbox.options[dropbox.options.length] = new Option('MSI', '1');
        dropbox.options[dropbox.options.length] = new Option('Asus', '2');
        totaleMobo = totaleMobo + 220;
    }

    totale = totale + totaleMobo;
    setMobo();
    return totale;
}

function setMobo() {
    var totaleCpu = 0;
    var dropbox = document.PcConfigurator.Cpu;
        dropbox.options.length = 0; 	
        dropbox.options[dropbox.options.length] = new Option(' ','0');

    if (document.PcConfigurator.Pc_type.value == "1")  {
        dropbox.options[dropbox.options.length] = new Option('RYZEN 9 5950x', '1');
        dropbox.options[dropbox.options.length] = new Option('RYZEN 7 5800xt', '2');
        dropbox.options[dropbox.options.length] = new Option('RYZEN 5 5800xt', '3');
        dropbox.options[dropbox.options.length] = new Option('RYZEN 3 3500xt', '4');
    }
    else if(document.PcConfigurator.Pc_type.value == "2") {
        dropbox.options[dropbox.options.length] = new Option('Intel i9 11900k', '5');
        dropbox.options[dropbox.options.length] = new Option('Intel i7 11900k', '6');
        dropbox.options[dropbox.options.length] = new Option('Intel i5 11900k', '7');
        dropbox.options[dropbox.options.length] = new Option('Intel i3 11900k', '8');
    }

    if(document.PcConfigurator.Cpu.value == "1" || document.PcConfigurator.Cpu.value == "5") {
        totaleCpu = totaleCpu + 400;
    }
    if(document.PcConfigurator.Cpu.value == "2" || document.PcConfigurator.Cpu.value == "6") {
        totaleCpu = totaleCpu + 300;
    }
    if(document.PcConfigurator.Cpu.value == "3" || document.PcConfigurator.Cpu.value == "7") {
        totaleCpu = totaleCpu + 250;
    }
    if(document.PcConfigurator.Cpu.value == "4" || document.PcConfigurator.Cpu.value == "8") {
        totaleCpu = totaleCpu + 180;
    }

    totale = totale + totaleCpu;
    setCpu();
    return totale;
    //document.querySelector("#sum").value = totale;
}

function setCpu() {
    var totaleCpu = 0; 
    var dropbox = document.PcConfigurator.Gpu;
        dropbox.options.length = 0; 	
        dropbox.options[dropbox.options.length] = new Option(' ','0');

    if(document.PcConfigurator.Cpu.value != 0 && document.PcConfigurator.Cpu.value < 9) {
        //AMD
        dropbox.options[dropbox.options.length] = new Option('AMD 6900xt','1');
        dropbox.options[dropbox.options.length] = new Option('AMD 6800xt','2');
        dropbox.options[dropbox.options.length] = new Option('AMD 6700xt','3');
        dropbox.options[dropbox.options.length] = new Option('AMD 6600xt','4');
        //RTX
        dropbox.options[dropbox.options.length] = new Option('RTX 3090','5');
        dropbox.options[dropbox.options.length] = new Option('RTX 3080','6');
        dropbox.options[dropbox.options.length] = new Option('RTX 3070','7');
        dropbox.options[dropbox.options.length] = new Option('RTX 3060','8');
    }

    if(document.PcConfigurator.Gpu.value == "1" || document.PcConfigurator.Gpu.value == "5") {
        totaleCpu = totaleCpu + 999;
    }
    if(document.PcConfigurator.Gpu.value == "2" || document.PcConfigurator.Gpu.value == "6") {
        totaleCpu = totaleCpu + 800;
    }
    if(document.PcConfigurator.Gpu.value == "3" || document.PcConfigurator.Gpu.value == "7") {
        totaleCpu = totaleCpu + 650;
    }
    if(document.PcConfigurator.Gpu.value == "4" || document.PcConfigurator.Gpu.value == "8") {
        totaleCpu = totaleCpu + 400;
    }

    totale = totale + totaleCpu;
    setGpu();
    return totale;
    //document.querySelector("#sum").value = totale;
}

function setGpu() {
    var totaleGpu = 0;
    var dropbox = document.PcConfigurator.Case;
        dropbox.options.length = 0; 	
        dropbox.options[dropbox.options.length] = new Option(' ','0');
        dropbox.options[dropbox.options.length] = new Option('Corsair 4000D ATX','1');
        dropbox.options[dropbox.options.length] = new Option('NZXT H510 Flow ATX','2');
        dropbox.options[dropbox.options.length] = new Option('Fractal Meshify C','3');
        dropbox.options[dropbox.options.length] = new Option('Be Quiet! 500DX', '4');
    	
    if(document.PcConfigurator.Case.value == "1" || document.PcConfigurator.Case.value == "2") {
        totaleGpu = totaleGpu + 90;
    }
    if(document.PcConfigurator.Case.value == "3" || document.PcConfigurator.Case.value == "4") {
        totaleGpu = totaleGpu + 120;
    }

    //somma totale
    totale = totale + totaleGpu;
    document.querySelector("#sum").value = totale;
    console.log(totale);
}

//reset
function reset() {
    //var count = 0;
    totale = 0; 
    document.querySelector("#sum").value = 0;
    console.log("Reset Total Order");
    setRoof();
    setMobo();
    setCpu();
    setGpu();
}

function calculator() {
    var productPrice = document.getElementById("sumOfProducts")

    for (var i = 0; i < listOfProducts.length; i++) {
        if (productPrice == listOfProducts[i].price) {
            var productPriceSum = {
                price: listOfProducts[i].price
            }
            var parentDivTwo = document.getElementById("sumOfProducts")
            getPhonePriceSum = document.createElement("h3")
            getPhonePriceSum.innerText = productPriceSum.price + " kr"
            parentDivTwo.appendChild(getPhonePriceSum)
        }
        console.log("test")
    }
}

/*var cart = [];
var cartElement = document.getElementById("cart");

function addToCart(obj) {
    var str = obj.dataset.productname;
    var price = obj.dataset.price;
    cart.push(str);
    cartElement.innerHTML = cart.join("<br>");
    var old_price = document.getElementById('total_sum').value;
    var new_price = parseInt(old_price) + parseInt(price);
    document.getElementById('total_sum').value = new_price;
    document.getElementById('sum').innerHTML = new_price;
}

var products = document.getElementsByClassName('details');

for (var i = 0; i < products.length; i++) {
    products[i].addEventListener("click", handleClick, false);
}

function handleClick(e) {
    addToCart(this);
}*/
