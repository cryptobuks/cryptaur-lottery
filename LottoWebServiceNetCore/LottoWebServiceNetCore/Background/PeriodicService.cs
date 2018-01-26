using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;

namespace LottoWebServiceNetCore.Background
{


    public class PeriodicService : BackgroundService
    {
        private readonly PeriodicServiceSettings _settings;
        protected readonly ILogger<PeriodicService> _logger;

        public PeriodicService(IOptions<PeriodicServiceSettings> settings,
            ILogger<PeriodicService> logger)
        {
            _logger = logger;
            _settings = settings.Value;
        }

        protected override async Task ExecuteAsync(CancellationToken stoppingToken)
        {
            _logger.LogDebug($"PeriodicService is starting.");

            stoppingToken.Register(() =>
                _logger.LogDebug($" GracePeriod background task is stopping."));

            while (!stoppingToken.IsCancellationRequested)
            {
                _logger.LogDebug($"GracePeriod task doing background work.");

                Do();

                await Task.Delay(_settings.SleepTime, stoppingToken);
            }

            _logger.LogDebug($"GracePeriod background task is stopping.");
        }

        protected virtual void Do()
        {

        }
    }
}