const fs = require('fs');
const path = require('path');

// 1. Safely remove .next directory before build if requested
if (process.argv.includes('--clean')) {
  const nextDir = path.join(__dirname, '..', '.next');
  try {
    fs.rmSync(nextDir, { recursive: true, force: true, maxRetries: 3, retryDelay: 100 });
  } catch {
    // ignore if already removed
  }
}

// 2. Patch next/dist/lib/recursive-delete.js so OneDrive reparse points never throw EINVAL on readlink
const targetFile = path.join(
  __dirname,
  '..',
  'node_modules',
  'next',
  'dist',
  'lib',
  'recursive-delete.js'
);

if (fs.existsSync(targetFile)) {
  const content = fs.readFileSync(targetFile, 'utf8');
  if (content.includes('const linkPath = await _fs.promises.readlink(absolutePath);')) {
    const patched = content.replace(
      `        if (isSymlink) {
            const linkPath = await _fs.promises.readlink(absolutePath);
            try {
                const stats = await _fs.promises.stat((0, _path.isAbsolute)(linkPath) ? linkPath : (0, _path.join)((0, _path.dirname)(absolutePath), linkPath));
                isDirectory = stats.isDirectory();
            } catch  {}
        }`,
      `        if (isSymlink) {
            try {
                const linkPath = await _fs.promises.readlink(absolutePath);
                const stats = await _fs.promises.stat((0, _path.isAbsolute)(linkPath) ? linkPath : (0, _path.join)((0, _path.dirname)(absolutePath), linkPath));
                isDirectory = stats.isDirectory();
            } catch {
                try {
                    const stats = await _fs.promises.stat(absolutePath);
                    isDirectory = stats.isDirectory();
                } catch {}
            }
        }`
    );
    fs.writeFileSync(targetFile, patched, 'utf8');
  }
}
