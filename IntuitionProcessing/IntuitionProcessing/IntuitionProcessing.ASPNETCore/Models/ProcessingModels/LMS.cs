using System.Collections.Generic;

namespace IntuitionProcessing.Models
{
	public partial class LMS
	{
		public LMS()
		{
			this.SiteLMS = new HashSet<SiteLMS>();
		}

		public int LMSId { get; set; }
		public string Name { get; set; }
		public string Version { get; set; }
		public string LMSComment { get; set; }

		public virtual ICollection<SiteLMS> SiteLMS { get; set; }
	}
}
