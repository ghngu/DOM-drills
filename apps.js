document.addEventListener('DOMContentLoaded', function () {
    var div = document.createElement('div');
    var h1 = document.createElement('h1');
    var h1Text = document.createTextNode('This is an h1!');

    div.className = 'header-container';

    h1.appendChild(h1Text);
    div.appendChild(h1);
    document.body.appendChild(div);

    var h2 = document.createElement('h2');
    var h2Text = document.createTextNode('This is an h2!');

    h2.appendChild(h2Text);
    div.appendChild(h2);

    var h3 = document.createElement('h3');
    var h3Text = document.createTextNode('This is an h3!');

    h3.appendChild(h3Text);
    div.appendChild(h3);

    var h4 = document.createElement('h4');
    var h4Text = document.createTextNode('This is an h4!');

    h4.appendChild(h4Text);
    div.appendChild(h4);

    var h5 = document.createElement('h5');
    var h5Text = document.createTextNode('This is an h5!');
    
    h5.appendChild(h5Text);
    div.appendChild(h5);

    var h6 = document.createElement('h6');
    var h6Text = document.createTextNode('This is an h6!');

    h6.appendChild(h6Text);
    div.appendChild(h6);

    h1.className = 'h1';
    h2.className = 'h2';
    h3.className = 'h3';
    h4.className = 'h4';
    h5.className = 'h5';
    h6.className = 'h6';

    var colors = ['teal', 'purple', 'red', 'blue', 'orange', 'crimson', 'yellow', 'green'];
    
    h1.addEventListener('dblclick', function() {
        var ranNum = Math.floor(Math.random() * colors.length);
        h1.style.color = colors[ranNum];
    });

    var li = document.createElement('li');

    var item = 1;
    var ul = document.createElement('ul');
    document.body.appendChild(ul);

    function newLi() {
        var li = document.createElement('li');
        let liText = document.createTextNode('This is list item number ' + item);
        li.appendChild(liText)
        ul.appendChild(li);
        li.addEventListener('click', function() {
            var ranNum = Math.floor(Math.random() * colors.length);
            li.style.color = colors[ranNum];
        });
        li.addEventListener('dblclick', function() {
            ul.removeChild(li);
        });
        item++;
    };

    var btn = document.getElementById("btnLi");

    btn.addEventListener('click', newLi);
});
