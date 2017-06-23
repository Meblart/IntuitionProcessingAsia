namespace IntuitionProcessing.Models
{
	public class DbFileContent
	{
		public int DbFileContentId { get; set; }
		public byte[] FileContent { get; set; }

		public int DbFileId { get; set; }
		public virtual DbFile DbFile { get; set; }
	}
}
