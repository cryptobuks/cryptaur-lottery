using System.Collections.Generic;
using System.Linq;
using LottoWebServiceNetCore.Api;
using LottoWebServiceNetCore.Background;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;

namespace LottoWebServiceNetCore
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;

        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddLogging();

            //services.AddOptions();
            services.AddMvc();
            services.Configure<PeriodicServiceSettings>(Configuration.GetSection("PeriodicServiceSettings"));
            services.Configure<ApiSettings>(Configuration.GetSection("ApiSettings"));
            services.AddTransient<IBusinessCardApi, BusinessCardApi>();
            services.AddSingleton<IHostedService, GameService>();
            
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            app.UseMvc();
        }

        
    }

    // Copyright (c) .NET Foundation. Licensed under the Apache License, Version 2.0.
}
