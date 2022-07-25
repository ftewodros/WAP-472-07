
window.onload = function () {
    load()
    document.getElementById('login').onclick = login
    document.getElementById('logout').onclick = logout
    document.getElementById('btn').onclick = add
    document.getElementById('btnPlaceOrder').onclick = placeOrder
}


let loginPage = document.getElementById('login')
let productPage = document.getElementById('container')
let emptyMessage = document.getElementById('emptyMessage')
let cartTable = document.getElementById('cart')


let sum = 0;
let total = 0
let cartArray = []

// called when your app loads or refresh
function load() {
    let token = sessionStorage.getItem("accessToken")
    if (!token) {
        homeScreen()
    } else {
        productScreen()
        welcome()
        emptytableView()
        fetchProducts()
    }
}

function welcome() {
    const token = sessionStorage.getItem("accessToken")
    const name = token.split('-')[1]
    document.getElementById('feven').innerHTML = " welcome "+ name
    const welcome = document.getElementById('feven')
    welcome.style.fontSize ="30px"
    welcome.style.color ='white'


}

// cart table view 
function emptytableView() {
    document.getElementById('emptyMessage').style.display = 'block'
    document.getElementById('cart').style.display = 'none'
}

// login 
function login() {

    fetch('http://localhost:9000/login', {
        method: 'POST',
        body: JSON.stringify({
            username: document.getElementById('username').value,
            password: document.getElementById('password').value
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.json())
        .then(data => {
            if (data.error) {
                //here is error
                // document.getElementById('errorMsg').innerHTML = data.error;
            } else {
                sessionStorage.setItem('accessToken', data.accessToken);
                console.log(data)
                load()


            }
        })

}

// toggle page from product to home page 
function homeScreen() {
    document.getElementById('loginPage').style.display = 'block'
    document.getElementById('container').style.display = 'none'
}

// toggle page from home screen to product page 
function productScreen() {
    document.getElementById('loginPage').style.display = 'none'
    document.getElementById('container').style.display = 'block'
}

function logout() {
    sessionStorage.clear('accessToken')
    homeScreen()
    document.getElementById("tbody").innerHTML = ''
    document.getElementById('feven').innerHTML=''

}

// adding to cart 
function add() {

    document.getElementById('emptyMessage').style.display = 'none';
    document.getElementById('cart').style.display = 'block';


    let rowId = event.target.parentNode.parentNode.id;
    const check = checkIfItemAlreadyAdded(rowId);

    if (check) {
        console.log(true)
    } else {
        //add product to cart
        fetchProductsById(rowId)
        displayTotal()
    }
}

// checks if the product is already added to the cart
function checkIfItemAlreadyAdded(id) {
    const ifExist = cartArray.find(item => item.productId == id)

    if (ifExist) {
        return true
    } else {
        return false
    }
}

// displays product on the product list table
function displayProducts(data) {
    let html = "";
    data.map(item => {
        html += `<tr id=${item.productId}>
    <td  >${item.productName}</td>
    <td  >${item.price}</td>
    <td  ><img id='image' src=${item.image}></td>
    <td >${item.stock}</td>
    <td> <input type="button" value="add to cart" onclick="add()" /> </td>
    </tr>`;
    })
    document.getElementById("tbody").innerHTML = html

}

// sum of a specfic item 
function specifItemSum(id) {
    let item = cartArray.find(item => item.productId == id)

    return item.count * item.price

}

// displays cart
function displayCart() {

    let html1 = "";
    cartArray.map(item => {
        sum += item.price * item.count
        displayTotal()
        html1 += `<tr id=${item.productId}>
        <td>${item.productName}</td>
        <td>${item.price}</td>
         <td>${specifItemSum(item.productId)}</td>
        <td><button onclick='decrementQuantity(${item.productId})' id='minus'>-</button><span > ${item.count}</span> <button onclick='addQuantity(${item.productId})' id='plus'>+</button></td>
        </tr>`;
    })
    sum = 0

    document.getElementById("tbody2").innerHTML = html1

}

// gets all the products from data base or backend
function fetchProducts() {
    fetch('http://localhost:9000/product', {
        headers: {
            Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`
        }
    }).then(response => response.json())
        .then(data => {
            if (data.error) {
                // document.getElementById('products').innerHTML = data.error;
            } else {
                displayProducts(data)
                // document.getElementById('products').innerHTML = data.title;
            }
        });
}

// gets a specfic item by id 
function fetchProductsById(id) {
    fetch(`http://localhost:9000/product/${id}`, {
        headers: {
            Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`
        }
    }).then(response => response.json())
        .then(data => {
            if (data.error || !data.stock) {
                // document.getElementById('products').innerHTML = data.error;
            } else {
                cartArray.push(data)
                displayCart()


                // document.getElementById('products').innerHTML = data.title;
            }
        });
}

// plus sign , increment the quantity in the cart

function addQuantity(id) {
    cartArray.map(item => {
        if (item.productId == id) {
            if (item.stock > item.count) {
                item.count = item.count + 1
                displayCart()
            }
            else {
                alert('not enough product in stock')
            }


        }
    })
}

// minus sign , decerement the quantity in the cart 
function decrementQuantity(id) {
    cartArray.map((item, index) => {
        if (item.productId == id) {
            item.count--
            if (item.count == 0) {
                cartArray.splice(index, 1)
                sum = 0
                if (cartArray.length == 0) {
                    document.getElementById('emptyMessage').style.display = 'block'
                    document.getElementById('cart').style.display = 'none'
                    displayTotal()
                }
                displayTotal()
            }
            displayCart()
        }
    })
}

// displays the total amount of our cart
function displayTotal() {
    let totalHtml = "";
    totalHtml += `<tr>
    <td id="total">Total = ${sum}</td>
    </tr>`;

    document.getElementById("tbody3").innerHTML = totalHtml

}


function placeOrder() {

    fetch('http://localhost:9000/product/order', {
        method: 'POST',
        body: JSON.stringify({
            array: cartArray
        }),
        headers: {
            'Authorization': `Bearer ${sessionStorage.getItem('accessToken')}`,
            'Content-Type': 'application/json'
        }

    })
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                //here is error
                // document.getElementById('errorMsg').innerHTML = data.error;
            } else {
                document.getElementById("tbody").innerHTML = '';
                document.getElementById('emptyMessage').style.display = 'block';
                document.getElementById('cart').style.display = 'none';
                document.getElementById('tbody2').querySelectorAll('tr').forEach(r => r.remove())
                displayProducts(data);
                cartArray = [];
            }
        })


}