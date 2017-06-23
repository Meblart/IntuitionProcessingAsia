namespace IntuitionProcessing.Models
{
	public class SiteCase
	{
		public virtual int SiteId { get; set; }
		public virtual Site Site { get; set; }

		public virtual int CaseId { get; set; }
		public virtual Case Case { get; set; }
	}
}
