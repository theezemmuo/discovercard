if (!window.clickTaleTagInjected) {
  !(function(d, t, u) {
    clickTaleTagInjected = true;

    function injectTag() {
      var ns = d.createElementNS;
      var a = ns ? ns.call(d, 'http://www.w3.org/1999/xhtml', t) : d.createElement(t),
        s = d.getElementsByTagName(t)[ 0 ];
      a.async = true;
      a.crossOrigin = 'anonymous';
      a.type = 'text/javascript';
      a.src = u;
      s.parentNode.insertBefore(a, s);
    }

    if (d.readyState !== 'loading') {
      injectTag();
    } else {
      d.addEventListener('DOMContentLoaded', () => {
        setTimeout(injectTag, 0);
      });
    }
  })(document, 'script', 'https://cdnssl.clicktale.net/www15/ptc/fd145cf2-4109-439c-97f8-e0bc3c3e290d.js');
}
