using LottoWebServiceNetCore.Api;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;

namespace LottoWebServiceNetCore.Controllers
{
    [Route("api/[controller]")]
    public class ValuesController : Controller
    {
        private readonly BusinessCardApi _api;

        public ValuesController(BusinessCardApi api)
        {
            _api = api;
        }

        //// GET api/values/"hi"
        [HttpGet("{key}")]
        public string Get(string key)
        {
            return _api.GetName(key).Result;
        }

    }
}