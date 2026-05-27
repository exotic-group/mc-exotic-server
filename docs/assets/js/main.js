document.addEventListener('DOMContentLoaded', function () {
  var collapsibles = document.querySelectorAll('[data-collapsible]');

  collapsibles.forEach(function (el) {
    var toggle = el.querySelector('[data-collapsible-toggle]');
    if (!toggle) return;

    toggle.addEventListener('click', function () {
      var isOpen = el.classList.contains('collapsible--open');
      el.classList.toggle('collapsible--open', !isOpen);
    });
  });

  var copyButtons = document.querySelectorAll('[data-copy]');

  copyButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var text = btn.getAttribute('data-copy');
      navigator.clipboard.writeText(text).then(function () {
        btn.textContent = 'Copiado!';
        btn.classList.add('command__copy--copied');
        setTimeout(function () {
          btn.textContent = 'Copiar';
          btn.classList.remove('command__copy--copied');
        }, 2000);
      }).catch(function () {
        btn.textContent = 'Erro';
        setTimeout(function () {
          btn.textContent = 'Copiar';
        }, 1500);
      });
    });
  });
});
