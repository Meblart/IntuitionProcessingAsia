namespace IntuitionProcessing.Models
{
	public partial class Action
	{
		public int ActionId { get; set; }
		public ActionType Type { get; set; }
		public string Message { get; set; }
		public string Receiver { get; set; }
		public string Sender { get; set; }
		public System.DateTime ActionDtTm { get; set; }

		public virtual Case Case { get; set; }
	}
}
