const { spawn } = require('child_process');
const fs = require('fs');

const chrome = spawn('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
  '--headless=new',
  '--remote-debugging-port=9233',
  '--window-size=1600,900',
  'http://localhost:3006'
]);

setTimeout(async () => {
  try {
    const res = await fetch('http://localhost:9233/json');
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
      await new Promise(r => setTimeout(r, 3000));

      const scrollPositions = [
        { name: 'editorial_1_hero.jpg', ratio: 0 },
        { name: 'editorial_2_resilience.jpg', ratio: 0.33 },
        { name: 'editorial_3_arsenal.jpg', ratio: 0.66 },
        { name: 'editorial_4_projects.jpg', ratio: 1.0 },
      ];

      for (const pos of scrollPositions) {
        await send('Runtime.evaluate', {
          expression: `window.scrollTo(0, (document.documentElement.scrollHeight - window.innerHeight) * ${pos.ratio});`
        });
        await new Promise(r => setTimeout(r, 1200));
        const shot = await send('Page.captureScreenshot', { format: 'jpeg', quality: 90 });
        const outPath = `C:\\Users\\gabri\\.gemini\\antigravity\\brain\\66c19d56-9e2a-42c8-a088-c72a6beff61d\\${pos.name}`;
        fs.writeFileSync(outPath, Buffer.from(shot.data, 'base64'));
        console.log('Saved', pos.name);
      }

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
