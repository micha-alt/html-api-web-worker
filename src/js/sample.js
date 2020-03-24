
// Starten des Workers
const worker = new Worker('./js/worker.js');



worker.addEventListener('message', (ev) => { console.log(ev.data); });

worker.postMessage('Hello Worker');
worker.postMessage([17, 4, 21]);
worker.postMessage({ action: 'add', args: [17,4] });
