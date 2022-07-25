window.onload = function() {
    const btn = document.getElementById('btn');

    btn.onclick = function() {
        console.log('Button is clicked....1');
    }
    btn.onclick = function() {

        console.log('Button is clicked....2', document.getElementById('title').value);
    }

    btn.onmouseover = function() {
        console.log('mouse over');
    }

    const btn2 = document.getElementById('btn2');
    btn2.addEventListener('click', function() {
        console.log('Add Event Listener Button 2 is clicked.....1');
    });
    btn2.addEventListener('click', function() {
        console.log('Add Event Listener Button 2 is clicked.....2');
    });
}