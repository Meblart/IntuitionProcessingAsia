using System.Collections.Generic;

namespace IntuitionProcessing.Models
{
	public partial class Case
	{
		public Case()
		{
			this.Actions = new HashSet<Action>();
			this.SiteCases = new HashSet<SiteCase>();
		}

		public int CaseId { get; set; }
		public string AssignedTo { get; set; }
		public System.DateTime CreationDtTm { get; set; }
		public string TicketID { get; set; }
		public string TicketURL { get; set; }
		public string Description { get; set; }
		public virtual ICollection<SiteCase> SiteCases { get; set; }
		public virtual ICollection<Action> Actions { get; set; }

		public virtual ICollection<DbFile> DbFiles { get; set; }
	}
}
