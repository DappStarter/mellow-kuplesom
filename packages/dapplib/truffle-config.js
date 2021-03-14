require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope clock brand ten index remember still assault grace opinion swap gentle'; 
let testAccounts = [
"0x058476ae176982ef739be568d415c392f52c3a0e2c290e4cd58350cff292392e",
"0xf3c48159604a1ad24f1261e538afc92fef822813e0e1e3f420b8b5f75a264809",
"0xd115ba7e188b04017136e0432a42987fd7e14dc6b806a4c0ec55df73aafe2965",
"0x2d6085904b514dfe5193d9efbf529622982ce593c44d40d9809171cd166cb61b",
"0x343e167b47d4b3c3ff65cb5daeb4a8c0ad2901500901ddc391b480c9473c3c1e",
"0xa40dc3e550a06393341448286684f7419506c368d537a5ac81f7a6d7c8c9be82",
"0x3b5f60fc72ca8af5b4e4b4f3567579f7bb2b325a48d13b51cf87b742258c4c60",
"0xa63ee75488a36285a9656d7d347ea4dca5ff851601247e2de5d7888ddc974537",
"0xc7a5de1312014081d9b7a9d55541f9cd0d7730cb50aaaf88683981cb8523685b",
"0x84b3e54ac7f0c64353c2e2087a9ab90ceee67c6d576b74e3d0730f301ed904f0"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
