using System.Collections.Generic;

namespace IntuitionProcessing.Models
{
	public partial class AccManager
	{
		public AccManager()
		{
			this.Clients = new HashSet<Client>();
		}

		public int Id { get; set; }
		public string Name { get; set; }
		public string Mail { get; set; }
		public string Phone { get; set; }

		public virtual ICollection<Client> Clients { get; set; }
	}
}
