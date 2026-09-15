/* Renders the board (index.html) and the case file (cases.html) from data/incidents.js. */
(function () {
  'use strict';

  var DATA = window.PERP_WALK_DATA;
  if (!DATA || !Array.isArray(DATA.models)) return;

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function fmtDate(iso) {
    if (!iso) return '';
    var parts = iso.split('-');
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var y = parts[0], m = parts[1] ? months[parseInt(parts[1], 10) - 1] : '', d = parts[2] ? parseInt(parts[2], 10) : '';
    return [d, m, y].filter(Boolean).join(' ');
  }

  function renderBoard(root) {
    // Highest count first. Ties keep the order in the docket.
    var models = DATA.models.slice().sort(function (a, b) {
      return (b.incidents || []).length - (a.incidents || []).length;
    });
    root.innerHTML = models.map(function (m) {
      var n = (m.incidents || []).length;
      var logoClass = 'logo' + (m.logoShape === 'tall' ? ' logo--tall' : '');
      return (
        '<section class="row" style="--hot:' + esc(m.color) + '" aria-label="' + esc(m.name) + '">' +
          '<div class="head" style="background-image:url(' + esc(m.head) + ')' + (m.headPosition ? ';--head-pos:' + esc(m.headPosition) : '') + '" role="img" aria-label="' + esc(m.person) + ', in grayscale, behind the row"></div>' +
          '<div class="logo-wrap"><div class="' + logoClass + '" style="-webkit-mask-image:url(' + esc(m.logo) + ');mask-image:url(' + esc(m.logo) + ')" role="img" aria-label="' + esc(m.company) + ' logo"></div></div>' +
          '<div class="meta">' +
            '<h2 class="model">' + esc(m.name) + '</h2>' +
            '<p class="company">' + esc(m.company) + '</p>' +
            '<p class="person"><b>' + esc(m.person) + '</b> <span>&middot; ' + esc(m.title) + '</span></p>' +
          '</div>' +
          '<a class="tally" href="cases.html?model=' + encodeURIComponent(m.id) + '" ' +
             'aria-label="' + n + ' reported incidents for ' + esc(m.name) + '. Open the case file.">' +
            '<span class="count">' + n + '</span>' +
            '<span class="label">' + (n === 1 ? 'incident' : 'incidents') + '</span>' +
          '</a>' +
        '</section>'
      );
    }).join('');
  }


  function renderStatute(st) {
    if (!st || !st.citation) return '';
    return (
      '<div class="statute">' +
        '<p class="statute-label">The statute</p>' +
        '<p class="statute-cite"><a href="' + esc(st.url) + '" rel="noopener" target="_blank">' + esc(st.citation) + '</a>' +
          (st.title ? ' <span class="statute-title">' + esc(st.title) + '</span>' : '') +
          (st.jurisdiction ? ' <span class="statute-juris">' + esc(st.jurisdiction) + '</span>' : '') + '</p>' +
        '<blockquote class="statute-quote">' + esc(st.quote) + '</blockquote>' +
        (st.translation ? '<p class="statute-translation">' + esc(st.translation) + '</p>' : '') +
        (st.penalty ? '<p class="statute-penalty"><b>Penalty.</b> ' + esc(st.penalty) + '</p>' : '') +
        (st.note ? '<p class="statute-note">' + esc(st.note) + '</p>' : '') +
      '</div>'
    );
  }

  function renderCases(headRoot, root) {
    var id = new URLSearchParams(location.search).get('model');
    var m = DATA.models.filter(function (x) { return x.id === id; })[0];
    if (!m) {
      headRoot.innerHTML = '<h1>No such case file</h1>';
      root.innerHTML = '<p class="empty">Pick a model from <a href="index.html">the board</a>.</p>';
      return;
    }
    document.title = m.name + ' case file | AI Safety Only Needs a Perp Walk';
    document.body.style.setProperty('--hot', m.color);

    var list = (m.incidents || []).slice().sort(function (a, b) { return (b.date || '').localeCompare(a.date || ''); });

    headRoot.innerHTML =
      '<h1>' + esc(m.name) + ': <span style="color:' + esc(m.color) + '">' + list.length + '</span></h1>' +
      '<p class="who"><b>' + esc(m.person) + '</b>, ' + esc(m.title) + '</p>';

    if (!list.length) {
      root.innerHTML = '<p class="empty">Nothing on file yet. Add one in <code>data/incidents.js</code>.</p>';
      return;
    }

    root.innerHTML = list.map(function (c, i) {
      var links = (c.articles || []).map(function (a) {
        return '<li><a href="' + esc(a.url) + '" rel="noopener" target="_blank">' + esc(a.title) + '</a> ' +
               '<span class="outlet">&mdash; ' + esc(a.outlet) + '</span></li>';
      }).join('');
      return (
        '<article class="case">' +
          '<div class="num">' + String(list.length - i).padStart(2, '0') + '</div>' +
          '<div>' +
            '<p class="date">' + esc(fmtDate(c.date)) + '</p>' +
            '<h2>' + esc(c.headline) + '</h2>' +
            (c.status ? '<span class="status">' + esc(c.status) + '</span>' : '') +
            (c.summary ? '<p class="summary">' + esc(c.summary) + '</p>' : '') +
            renderStatute(c.statute) +
            '<ul class="coverage">' + links + '</ul>' +
          '</div>' +
        '</article>'
      );
    }).join('');
  }

  var board = document.getElementById('board');
  if (board) renderBoard(board);

  var cases = document.getElementById('cases');
  var caseHead = document.getElementById('case-head');
  if (cases && caseHead) renderCases(caseHead, cases);
})();
