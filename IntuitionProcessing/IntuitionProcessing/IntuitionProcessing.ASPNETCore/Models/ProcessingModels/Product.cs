using System.Collections.Generic;

namespace IntuitionProcessing.Models
{
	public partial class Product
	{
		public Product()
		{
			this.SiteProducts = new HashSet<SiteProduct>();
		}

		public int ProductId { get; set; }
		public string Version { get; set; }
		public string Name { get; set; }
		public string ProductComment { get; set; }

		public virtual ICollection<SiteProduct> SiteProducts { get; set; }
	}
}
