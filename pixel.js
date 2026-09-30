// Meta Pixel (2541674882923266) — tezlik uchun kechiktirib yuklanadi.
// fbq navbati darhol yaratiladi (PageView yo'qolmaydi), og'ir fbevents.js
// esa sahifa to'liq yuklangandan keyin, brauzer bo'sh paytida yuklanadi.
(function (w, d) {
  if (w.fbq) return;
  var n = w.fbq = function () {
    n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
  };
  if (!w._fbq) w._fbq = n;
  n.push = n; n.loaded = true; n.version = '2.0'; n.queue = [];

  fbq('init', '2541674882923266');
  fbq('track', 'PageView');

  function loadFb() {
    if (loadFb.done) return; loadFb.done = true;
    var s = d.createElement('script');
    s.async = true;
    s.src = 'https://connect.facebook.net/en_US/fbevents.js';
    d.head.appendChild(s);
  }
  function schedule() {
    if ('requestIdleCallback' in w) w.requestIdleCallback(loadFb, { timeout: 2500 });
    else setTimeout(loadFb, 1500);
  }
  // Foydalanuvchi sahifa bilan ishlay boshlasa — darhol yuklaymiz.
  ['pointerdown', 'keydown', 'scroll', 'touchstart'].forEach(function (e) {
    w.addEventListener(e, loadFb, { once: true, passive: true });
  });
  if (d.readyState === 'complete') schedule();
  else w.addEventListener('load', schedule, { once: true });
})(window, document);
