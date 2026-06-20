import QRCode from 'qrcode';

async function test() {
  try {
    const svg1 = await QRCode.toString('test', { type: 'svg', color: { light: '#0000' } });
    console.log("SVG 1 (4 chars) OK:\n", svg1);
  } catch (e) {
    console.error("SVG 1 failed:", e);
  }

  try {
    const svg2 = await QRCode.toString('test', { type: 'svg', color: { light: '#00000000' } });
    console.log("SVG 2 (8 chars) OK:\n", svg2);
  } catch (e) {
    console.error("SVG 2 failed:", e);
  }
}

test();
