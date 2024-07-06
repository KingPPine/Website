setTimeout(addShadow, 1000);

function addShadow() {
    const headers = document.getElementsByTagName('h1');
    var header = headers[0];
    var shadow = '';
    for (var i = 0; i < 8; i++) {
        shadow += (shadow ? ',' : '') + -i * 1 + 'px ' + i * 1 + 'px 0 #E85A4F';
    }
    header.style.textShadow = shadow;
    header.style.transform = 'translate(10px, -10px)';
}