/*
'0b0ba1f4f7e505f4625ead1eca91f145397baaf7a15ff08d83226ac9a6bacce6f9aa6517d1585e00000000545fb3ea2ff05d5beaf5d63ef895f92571a71277fdb7aca545a0d89baaeaac2d15'
'a6f5c193'
'228ed8f56d230f3f20c89f742c902c30afa764ab9425f5c7274f0ffb18051900'
 */

var multiHashing = require('cryptonight-hashing');

var algorithms = ['cryptonight', 'cryptonight_light', 'cryptonight_heavy' ];

const param = {
    blob: '0b0ba1f4f7e505f4625ead1eca91f145397baaf7a15ff08d83226ac9a6bacce6f9aa6517d1585e00000000545fb3ea2ff05d5beaf5d63ef895f92571a71277fdb7aca545a0d89baaeaac2d15',
    job_id: '600071875611320',
    target: '814e1b00',
    wid: 10,
    height: 1818762
};
const submit = {
    nonce: 'a6f5c193',
    result: '228ed8f56d230f3f20c89f742c902c30afa764ab9425f5c7274f0ffb18051900',
    _0xad: 'false',
    job_id: '600071875611320'
};

var data = (() => {
	let input = Buffer.from(param.blob, 'hex');
	let rand = parseInt('a6f5c193', 16);
	if (param.wid !== undefined) {
		rand = (rand & 0x0fffffff) | (param.wid << 28);
	}
	input[0x27] = (rand & 0xff000000) >> 0x18;
	input[0x28] = (rand & 0xff0000) >> 0x10;
	input[0x29] = (rand & 0xff00) >> 0x8;
	input[0x2a] = (rand & 0xff) >> 0x0;
	return input;
})();

var hashedData = algorithms.map(function(algo){
    return multiHashing[algo](data).toString('hex');
});

console.log(hashedData);

var multiHashing = require('multi-hashing');

var cryptoNight = multiHashing['cryptonight'];

function cryptoNightFast(buf) {
    return cryptoNight(Buffer.concat([new Buffer([buf.length]), buf]), true);
}

console.log(cryptoNight(buf).toString('hex'));
console.log(cryptoNightFast(data).toString('hex'));