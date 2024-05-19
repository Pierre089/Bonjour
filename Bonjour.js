var btn = document.getElementById('btnBonjour');
btn.onclick = function () {
    var txt = document.getElementById('txtPrenom');
    var prenom = txt.value;
    var message = 'Bonjour ' + prenom + ' !';
    var h1 = document.getElementById('lblMessage');
    h1.innerHTML = message;
};
