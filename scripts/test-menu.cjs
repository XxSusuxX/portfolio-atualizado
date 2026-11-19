const { spawn } = require('child_process');
const fs = require('fs');

const port = 9266;
const tempProfile = `C:\\Users\\gabri\\AppData\\Local\\Temp\\chrome-debug-${Date.now()}`;

const chrome = spawn('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
  '--headless=new',
  `--remote-debugging-port=${port}`,
  `--user-data-dir=${tempProfile}`,
  '--window-size=1600,900',
  '--disable-gpu',
  'http://localhost:3000'
]);

async function main() {
  let tabs = null;
  for (let i = 0; i < 25; i++) {
    try {
      const res = await fetch(`http://127.0.0.1:${port}/json`);
      tabs = await res.json();
      if (tabs && tabs[0] && tabs[0].webSocketDebuggerUrl) break;
    } catch (e) {}
    await new Promise(r => setTimeout(r, 300));
  }

  if (!tabs || !tabs[0]) {
    console.error('Failed to connect to Chrome debugging port');
    chrome.kill();
    process.exit(1);
  }

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

    for (let i = 0; i < 20; i++) {
      const count = await send('Runtime.evaluate', {
        expression: 'document.querySelectorAll("button").length',
        returnByValue: true
      });
      if (count && count.result && count.result.value > 0) {
        console.log(`Ready with ${count.result.value} buttons`);
        break;
      }
      await new Promise(r => setTimeout(r, 300));
    }

    await new Promise(r => setTimeout(r, 1200));

    // 0. Hero fixed screenshot
    const shot0 = await send('Page.captureScreenshot', { format: 'jpeg', quality: 85 });
    fs.writeFileSync('C:\\Users\\gabri\\.gemini\\antigravity\\brain\\66c19d56-9e2a-42c8-a088-c72a6beff61d\\shot_0px_fixed.jpg', Buffer.from(shot0.data, 'base64'));
    console.log('Saved shot_0px_fixed.jpg');

    // 1. Click to open
    const openRes = await send('Runtime.evaluate', {
      expression: `(() => {
        const btn = document.querySelector('button[aria-label*="menu" i]');
        if (!btn) return 'not found';
        btn.click();
        return 'open clicked';
      })()`,
      returnByValue: true
    });
    console.log(openRes.result.value);

    await new Promise(r => setTimeout(r, 700));
    const shot1 = await send('Page.captureScreenshot', { format: 'jpeg', quality: 85 });
    fs.writeFileSync('C:\\Users\\gabri\\.gemini\\antigravity\\brain\\66c19d56-9e2a-42c8-a088-c72a6beff61d\\shot_menu_open.jpg', Buffer.from(shot1.data, 'base64'));
    console.log('Saved shot_menu_open.jpg');

    // 2. Click to close
    const closeRes = await send('Runtime.evaluate', {
      expression: `(() => {
        const btn = document.querySelector('button[aria-label*="menu" i]');
        if (!btn) return 'not found';
        btn.click();
        return 'close clicked';
      })()`,
      returnByValue: true
    });
    console.log(closeRes.result.value);

    await new Promise(r => setTimeout(r, 700));
    const shot2 = await send('Page.captureScreenshot', { format: 'jpeg', quality: 85 });
    fs.writeFileSync('C:\\Users\\gabri\\.gemini\\antigravity\\brain\\66c19d56-9e2a-42c8-a088-c72a6beff61d\\shot_menu_closed.jpg', Buffer.from(shot2.data, 'base64'));
    console.log('Saved shot_menu_closed.jpg');

    ws.close();
    chrome.kill();
    try { fs.rmSync(tempProfile, { recursive: true, force: true }); } catch (e) {}
    process.exit(0);
  };
}

main().catch(err => {
  console.error(err);
  chrome.kill();
  process.exit(1);
});