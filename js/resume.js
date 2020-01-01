document.addEventListener('DOMContentLoaded', event => {
  window.location.href= "#about";

  window.addEventListener('hashchange', event => {
    const anchor = `#${ event.newURL.split('#')[1] }`;

    document.querySelectorAll('.anchor-link').forEach(node => {
      node.classList.remove('active');
    });

    document.querySelectorAll(`[href="${anchor}"]`)[0].classList.add('active');

  });
});