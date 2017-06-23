using IntuitionProcessing.Models;
using Microsoft.EntityFrameworkCore;

namespace IntuitionProcessing.ASPNETCore.Data
{
	public class ProcessingDbContext : DbContext
	{
		public ProcessingDbContext(DbContextOptions<ProcessingDbContext> options)
			: base(options)
		{ }

		protected override void OnModelCreating(ModelBuilder modelBuilder)
		{
			setupSiteCaseRelationship(modelBuilder);
			setupSiteLMSRelationship(modelBuilder);
			setupSiteProductRelationship(modelBuilder);
			setupDbFileRelationship(modelBuilder);
		}

		public DbSet<AccManager> AccManagers { get; set; }
		public DbSet<Models.Action> Actions { get; set; }
		public DbSet<Case> Cases { get; set; }
		public DbSet<Client> Clients { get; set; }
		public DbSet<LMS> LMSes { get; set; }
		public DbSet<Product> Products { get; set; }
		public DbSet<Site> Sites { get; set; }
		public DbSet<SiteCase> SiteCases { get; set; }
		public DbSet<SiteLMS> SiteLMS { get; set; }
		public DbSet<SiteProduct> SiteProducts { get; set; }
		public DbSet<DbFile> DbFiles { get; set; }
		public DbSet<DbFileContent> DbFileContents { get; set; }

		private void setupDbFileRelationship(ModelBuilder modelBuilder)
		{
			modelBuilder.Entity<DbFile>().
				HasOne(dbFile => dbFile.DbFileContent).
				WithOne(dbFileContent => dbFileContent.DbFile).
				HasForeignKey<DbFileContent>(dbFileContent => dbFileContent.DbFileId);
		}

		private void setupSiteCaseRelationship(ModelBuilder modelBuilder)
		{
			modelBuilder.Entity<SiteCase>().HasKey(siteCase => new { siteCase.SiteId, siteCase.CaseId });

			modelBuilder.Entity<SiteCase>().
				HasOne(siteCase => siteCase.Site).
				WithMany(site => site.SiteCases).
				HasForeignKey(siteCase => siteCase.SiteId);

			modelBuilder.Entity<SiteCase>().
				HasOne(siteCase => siteCase.Case).
				WithMany(_case => _case.SiteCases).
				HasForeignKey(siteCase => siteCase.CaseId);
		}

		private void setupSiteLMSRelationship(ModelBuilder modelBuilder)
		{
			modelBuilder.Entity<SiteLMS>().HasKey(siteLMS => new { siteLMS.SiteId, siteLMS.LMSId });

			modelBuilder.Entity<SiteLMS>().
				HasOne(siteLMS => siteLMS.Site).
				WithMany(site => site.SiteLMS).
				HasForeignKey(siteLMS => siteLMS.SiteId);

			modelBuilder.Entity<SiteLMS>().
				HasOne(siteLMS => siteLMS.LMS).
				WithMany(lms => lms.SiteLMS).
				HasForeignKey(siteLMS => siteLMS.LMSId);
		}
		private void setupSiteProductRelationship(ModelBuilder modelBuilder)
		{
			modelBuilder.Entity<SiteProduct>().HasKey(siteProd => new { siteProd.SiteId, siteProd.ProductId });

			modelBuilder.Entity<SiteProduct>().
				HasOne(siteProd => siteProd.Site).
				WithMany(site => site.SiteProducts).
				HasForeignKey(siteProd => siteProd.SiteId);

			modelBuilder.Entity<SiteProduct>().
				HasOne(siteProd => siteProd.Product).
				WithMany(prod => prod.SiteProducts).
				HasForeignKey(siteProd => siteProd.ProductId);
		}

	}
}
