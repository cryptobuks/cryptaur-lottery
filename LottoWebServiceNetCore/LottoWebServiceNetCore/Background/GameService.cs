using LottoWebServiceNetCore.Api;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;

namespace LottoWebServiceNetCore.Background
{
    public class GameService : PeriodicService
    {
        private readonly IBusinessCardApi _api;

        public GameService(
            IOptions<PeriodicServiceSettings> settings,
            ILogger<PeriodicService> logger,
            IBusinessCardApi api) 
            : base(settings, logger)
        {
            _api = api;
        }

        protected override void Do()
        {
            //var res = _api.GetName("hi").Result;
            //_logger.LogInformation(res);

            _api.SetName("hi", "Hello Kostan from linux");
        }
    }
}