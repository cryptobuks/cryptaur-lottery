import Web3 from 'web3';
import signer from 'ethjs-signer';
import BN from 'bn.js';
import abi from './abi.json';


const contractAddress = '0xf46F6822d4f8F82FF70748443db8caD5abC88625';

// OWNER INFO
const ownerAddress = '0x235A272e53cbefE8d666F73919fAc5cDFf068E6B';
const ownerPrivateKey = '0x1e14bbd3971b187a44dec907ef06ba662cfb14de442014b42c268a535d339325';

class CryptaurAPI {
    constructor() {
        this.web3 = new Web3(new Web3.providers.HttpProvider('https://rinkeby.infura.io/gd42uD3nh0LHM4wqIEfh'));
        this.contract = this.web3.eth.contract(abi).at(contractAddress);
        console.log(this.contract);
    }

    sendRawRequest = (contractData) => {
        this.web3.eth.getTransactionCount(ownerAddress, (err, nonce) => {
            this.web3.eth.getGasPrice((err, gas) => {
                console.log(gas);
                this.web3.eth.sendRawTransaction(signer.sign({
                    to: contractAddress,
                    value: 0,
                    gasPrice: gas,
                    gasLimit: new BN('4000000'),
                    nonce,
                    data: contractData,
                }, ownerPrivateKey), (err, result) => console.log(result));
            });
        });
    }

    getName() {
        this.contract.getName('hi', (err, result) => console.log(result));
    }

    setName() {
        this.sendRawRequest(this.contract.setName.getData('hi', 'Hello Eduard!!!'));
    }
}

const API = new CryptaurAPI();

export default API; // export singleton
