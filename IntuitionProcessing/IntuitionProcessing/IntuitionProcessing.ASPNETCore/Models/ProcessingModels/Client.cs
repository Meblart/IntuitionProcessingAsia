using System.Collections.Generic;

namespace IntuitionProcessing.Models
{
	public partial class Client
	{
		public Client()
		{
			this.Sites = new HashSet<Site>();
		}

		public int ClientId { get; set; }
		public string Code { get; set; }
		public string Name { get; set; }
		public string ClientComment { get; set; }

		public virtual ICollection<Site> Sites { get; set; }
		public virtual AccManager AccManager { get; set; }
	}
}
