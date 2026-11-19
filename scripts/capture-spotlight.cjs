const { spawn } = require('child_process');
const fs = require('fs');

const chrome = spawn('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
  '--headless=new',
  '--remote-debugging-port=9234',
  '--window-size=1600,900',
  'http://localhost:3007'
]);

setTimeout(async () => {
  try {
    const res = await fetch('http://localhost:9234/json');
    const tabs = await res.json();
    const ws = new WebSocket(tabs[0].webSocketDebuggerUrl);

    let id = 1;
    function send(method, params = {}) {
      return new Promise((resolve) => {
        const curId = id++;
        const handler = (evt) => {
          const data = JSON.parse(evt.data);
          if (data.id === curId) {
            ws.removeEventListener('message', handler);
            resolve(data.result);
          }
        };
        ws.addEventListener('message', handler);
        ws.send(JSON.stringify({ id: curId, method, params }));
      });
    }

    ws.onopen = async () => {
      await send('Page.enable');
      await send('Runtime.enable');
      await new Promise(r => setTimeout(r, 2500));

      // Move mouse to statue chest/shoulder area (x: 820, y: 440)
      for (let i = 0; i < 15; i++) {
        const mx = 400 + (820 - 400) * (i / 14);
        const my = 200 + (440 - 200) * (i / 14);
        await send('Input.dispatchMouseEvent', {
          type: 'mouseMoved',
          x: Math.round(mx),
          y: Math.round(my)
        });
        await new Promise(r => setTimeout(r, 40));
      }

      await new Promise(r => setTimeout(r, 600));

      const shot = await send('Page.captureScreenshot', { format: 'jpeg', quality: 92 });
      fs.writeFileSync('C:\\Users\\gabri\\.gemini\\antigravity\\brain\\66c19d56-9e2a-42c8-a088-c72a6beff61d\\shot_spotlight_mouse.jpg', Buffer.from(shot.data, 'base64'));
      console.log('Saved shot_spotlight_mouse.jpg');

      ws.close();
      chrome.kill();
      process.exit(0);
    };
  } catch (err) {
    console.error('Error:', err);
    chrome.kill();
    process.exit(1);
  }
}, 2000);
