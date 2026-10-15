/* Podpis autorky: malý štítek v pravém dolním rohu.
   Na každou stránku stačí jeden řádek před </body>:
   <script src="/ni_bezpecnost/podpis.js"></script>
   Text, odkaz a barvy se mění jen tady. */
(function () {
  var TEXT = 'navrženo m';
  var URL = 'https://markotherobot.github.io';

  var css =
    '.mk-podpis{margin:24px 0 8px;text-align:center;' +
    'font:500 12px/1.4 system-ui,-apple-system,"Segoe UI",Arial,sans-serif}' +
    '.mk-podpis a{color:#4a5568;text-decoration:underline;text-decoration-color:#2e9e6a;' +
    'text-decoration-thickness:1px;text-underline-offset:2px}' +
    '.mk-podpis a:hover{color:#3182ce}' +
    '@media print{.mk-podpis{display:none}}';

  var style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  var box = document.createElement('div');
  box.className = 'mk-podpis';
  var link = document.createElement('a');
  link.href = URL;
  link.textContent = TEXT;
  box.appendChild(link);

  var blocks = document.querySelectorAll('.card-context');
  if (blocks.length) {
    var last = blocks[blocks.length - 1];
    last.parentNode.insertBefore(box, last.nextSibling);
  } else {
    var container = document.querySelector('.timeline-container');
    (container || document.body).appendChild(box);
  }
})();
