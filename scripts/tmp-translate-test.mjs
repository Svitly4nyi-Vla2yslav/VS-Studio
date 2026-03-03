fetch("https://translate.googleapis.com/translate_a/single?client=gtx&sl=de&tl=tr&dt=t&q=Leistungen")
  .then(r => r.text())
  .then(t => console.log(t.slice(0,120)))
  .catch(e => { console.error(e.message); process.exit(1); });
