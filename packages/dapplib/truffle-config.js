require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give narrow fog table name raise mad million hidden end army gate'; 
let testAccounts = [
"0xcc98e11da17eab1329b105191671c9713451b70f3e5fe08d9edb94ce0bebff04",
"0xd3e3c995421e6a1a69d7c058f7c53d8550fbc757cab31ba6cc67e028501dec28",
"0x62d9d4376f12eb697d576514c7f47876532978b4c91e13c3e5f2fbe38e6e7021",
"0xe116cfc3b8680e8628d171cbe3371cddf52174e72ecee2f990cf0537deb7b885",
"0x367f18fde793b4304cbfff9d37dac9bd04e96f9fe63bcd463cf0e0fcde106129",
"0xe8ce2fd2e54c2d339b28ecf86436fbae884f78ab333938b1e193b94006c2209a",
"0x5c2d4bc46b738bcf0b5c72794461c0ba556e5f894db2a4e85d36e3d4111e2806",
"0x69351e1f57652bde8af8d01cae0653452044c0981c8bc91d957d39c86babea9a",
"0x793215f1ec03ca681c163df949fc7c7d793d1314f5683d71ff6afb4bcaa8798b",
"0x9096e67bff0570ab3557be6f3c2123efacb34d957f4df585e7a4d4904baf3495"
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
            version: '^0.8.0'
        }
    }
};

