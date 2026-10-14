/* Podpis autorky: malý štítek v pravém dolním rohu.
   Na každou stránku stačí jeden řádek před </body>:
   <script src="/ni_bezpecnost/podpis.js"></script>
   Text, odkaz a barvy se mění jen tady. */
(function () {
  var TEXT = 'Navrhla Markéta Sviták/ová';
  var URL = 'https://markotherobot.github.io';

  var css =
    '.mk-podpis{position:fixed;right:12px;bottom:12px;z-index:9999;' +
    'font:700 13px/1.3 system-ui,-apple-system,"Segoe UI",Arial,sans-serif;' +
    'background:rgba(255,255,255,.94);border:2px solid #5a2d91;border-radius:999px;' +
    'padding:6px 14px;box-shadow:0 2px 8px rgba(0,0,0,.12)}' +
    '.mk-podpis a{color:#5a2d91;text-decoration:underline;text-decoration-color:#2e9e6a;' +
    'text-decoration-thickness:2px;text-underline-offset:3px}' +
    '.mk-podpis a:hover{color:#2e9e6a}' +
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
  document.body.appendChild(box);
})();
