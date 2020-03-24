
onmessage = (ev) => {
  console.log(`Got message: ${ev.data}`);
  if (typeof ev.data === 'string') {
    postMessage('Hello Main Thread');
  } else {
    postMessage('Hm, dunno what to do. You sent: ' + JSON.stringify(ev.data));
  }
}
