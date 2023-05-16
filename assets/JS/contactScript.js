document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;

    var link = 'mailto:dominickdonnolo+Portfolio@gmail.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(message);
    window.location.href = link;
});

document.querySelector('#eMail-form').addEventListener('mousemove', function(e) {
    var rect = this.getBoundingClientRect();
    var x = e.clientX - rect.left; // x position within the element
    var y = e.clientY - rect.top;  // y position within the element
    this.style.backgroundPosition = x + 'px ' + y + 'px';
});
