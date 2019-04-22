/*
'0b0ba1f4f7e505f4625ead1eca91f145397baaf7a15ff08d83226ac9a6bacce6f9aa6517d1585e00000000545fb3ea2ff05d5beaf5d63ef895f92571a71277fdb7aca545a0d89baaeaac2d15'
'a6f5c193'
'228ed8f56d230f3f20c89f742c902c30afa764ab9425f5c7274f0ffb18051900'
 */

var multiHashing = require('cryptonight-hashing');

var algorithms = ['cryptonight', 'cryptonight_light', 'cryptonight_heavy' ];

var data = (() => {
	let input = Buffer.from('0b0ba1f4f7e505f4625ead1eca91f145397baaf7a15ff08d83226ac9a6bacce6f9aa6517d1585e00000000545fb3ea2ff05d5beaf5d63ef895f92571a71277fdb7aca545a0d89baaeaac2d15', 'hex');
	let rand = parseInt('a6f5c193', 16);
	input[0x27] = (rand & 0xff000000) >> 0x18;
	input[0x28] = (rand & 0xff0000) >> 0x10;
	input[0x29] = (rand & 0xff00) >> 0x8;
	input[0x2a] = (rand & 0xff) >> 0x0;
	return input;
})();

var hashedData = algorithms.map(function(algo){
    return multiHashing[algo](data);
});

console.log(hashedData);