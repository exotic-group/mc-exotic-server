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

  var copyLinks = document.querySelectorAll('.copy-link');

  copyLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      var href = link.getAttribute('href');
      if (!href) return;

      navigator.clipboard.writeText(href).then(function () {
        showToast('Link copiado!');
      }).catch(function () {
        showToast('Erro ao copiar');
      });
    });
  });

  function showToast(message) {
    var existing = document.querySelector('.copy-toast');
    if (existing) existing.remove();

    var toast = document.createElement('div');
    toast.className = 'copy-toast';
    toast.textContent = message;
    document.body.appendChild(toast);

    requestAnimationFrame(function () {
      toast.classList.add('copy-toast--show');
    });

    setTimeout(function () {
      toast.classList.remove('copy-toast--show');
      setTimeout(function () {
        toast.remove();
      }, 300);
    }, 2000);
  }
});
