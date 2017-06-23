using System.Collections.Generic;

namespace IntuitionProcessing.Models
{
	public partial class Site
	{
		public Site()
		{
			this.SiteProducts = new HashSet<SiteProduct>();
			this.SiteLMS = new HashSet<SiteLMS>();
		}

		public int SiteId { get; set; }
		public IntegrationType IntegrationType { get; set; }
		public string URL { get; set; }
		public string SiteComment { get; set; }

		public virtual ICollection<SiteProduct> SiteProducts { get; set; }
		public virtual ICollection<SiteLMS> SiteLMS { get; set; }
		public virtual ICollection<SiteCase> SiteCases { get; set; }
		public virtual Client Client { get; set; }
	}
}
