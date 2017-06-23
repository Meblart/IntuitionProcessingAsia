using IntuitionProcessing.ASPNETCore.Data;
using IntuitionProcessing.Models;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.SpaServices.Webpack;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using System.Net;
using System.Threading.Tasks;

namespace IntuitionProcessing.ASPNETCore
{
	public class Startup
	{
		public Startup(IHostingEnvironment env)
		{
			var builder = new ConfigurationBuilder()
					.SetBasePath(env.ContentRootPath)
					.AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
					.AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
					.AddEnvironmentVariables();
			Configuration = builder.Build();
		}

		public IConfigurationRoot Configuration { get; }

		// This method gets called by the runtime. Use this method to add services to the container.
		public void ConfigureServices(IServiceCollection services)
		{
			// Add framework services.
			services.AddMvc();
			var connection = @"Server=(localdb)\mssqllocaldb;Database=InuitionProcessingDB;Trusted_Connection=True;";
			services.AddDbContext<ProcessingDbContext>(options => options.UseSqlServer(connection));
			services.AddDbContext<UsersDbContext>(options => options.UseSqlServer(connection));

			services.AddIdentity<IntuitionUser, IdentityRole>(options =>
					options.Cookies.ApplicationCookie.Events = new CookieAuthenticationEvents
					{
						OnRedirectToLogin = ctx =>
						{
							if (ctx.Request.Path.StartsWithSegments("/api") &&
								ctx.Response.StatusCode == (int)HttpStatusCode.OK)
							{
								ctx.Response.StatusCode = (int)HttpStatusCode.Unauthorized;
							}
							else
							{
								ctx.Response.Redirect(ctx.RedirectUri);
							}
							return Task.FromResult(0);
						}
					}
			)
			.AddEntityFrameworkStores<UsersDbContext>()
			.AddDefaultTokenProviders();
		}

		// This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
		public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
		{
			loggerFactory.AddConsole(Configuration.GetSection("Logging"));
			loggerFactory.AddDebug();

			if (env.IsDevelopment())
			{
				app.UseDeveloperExceptionPage();
				app.UseWebpackDevMiddleware(new WebpackDevMiddlewareOptions
				{
					HotModuleReplacement = true
				});
			}
			else
			{
				app.UseExceptionHandler("/Home/Error");
			}

			app.UseStaticFiles();

			app.UseIdentity();

			app.UseMvc(routes =>
			{
				routes.MapRoute(
									name: "default",
									template: "{controller=Home}/{action=Index}/{id?}");

				routes.MapSpaFallbackRoute(
									name: "spa-fallback",
									defaults: new { controller = "Home", action = "Index" });
			});
		}
	}
}
