using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Options;
using Nethereum.Hex.HexTypes;
using Nethereum.Web3;
using Nethereum.Web3.Accounts;
using Nethereum.ABI.FunctionEncoding.Attributes;

namespace LottoWebServiceNetCore.Api
{
    public interface IBusinessCardApi
    {
        Task<string> GetName(string key);

        Task SetName(string key, string value);
    }

    public class BusinessCardApi : IBusinessCardApi
    {
        private readonly ApiSettings _apiSettings;
        const string Abi = @"[{'constant':false,'inputs':[{'name':'key','type':'string'},{'name':'value','type':'string'}],'name':'setName','outputs':[],'payable':false,'stateMutability':'nonpayable','type':'function'},{'constant':true,'inputs':[{'name':'key','type':'string'}],'name':'getName','outputs':[{'name':'','type':'string'}],'payable':false,'stateMutability':'view','type':'function'},{'constant':false,'inputs':[{'name':'newOwner','type':'address'}],'name':'transferOwnership','outputs':[],'payable':false,'stateMutability':'nonpayable','type':'function'},{'inputs':[],'payable':false,'stateMutability':'nonpayable','type':'constructor'}]";



        public BusinessCardApi(IOptions<ApiSettings> apiSettings)
        {
            _apiSettings = apiSettings.Value;
        }

        public async Task<string> GetName(string key)
        {

            var account = new Account(_apiSettings.FunderPrivateKey);
            var web3 = new Web3(account, _apiSettings.EthereumAddress);
            var contract = web3.Eth.GetContract(Abi, _apiSettings.ContractAddress);
            var documentsFunction = contract.GetFunction("getName");
            var result = await documentsFunction.CallAsync<string>(key);
            return result;
        }

        public async Task SetName(string key, string value)
        {
            var account = new Account(_apiSettings.FunderPrivateKey);
            var web3 = new Web3(account, _apiSettings.EthereumAddress);
            var contract = web3.Eth.GetContract(Abi, _apiSettings.ContractAddress);
            var documentsFunction = contract.GetFunction("setName");
            var transactionHash = await documentsFunction.SendTransactionAsync(_apiSettings.OwnerAddress, new HexBigInteger(900000), null, key, value);

        }


    }

    [FunctionOutput]
    public class Document
    {
        [Parameter("string", "name", 1)]
        public string Name { get; set; }
    }
}
