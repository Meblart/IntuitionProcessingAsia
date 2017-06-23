using System;

namespace IntuitionProcessing.Models
{
	public class DbFile
	{
		public int DbFileId { get; set; }
		public string FileName { get; set; }
		public DateTime FileDate { get; set; }
		public string FileComment { get; set; }

		public virtual int DbFileContentId { get; set; }
		public virtual DbFileContent DbFileContent { get; set; }

		public virtual int CaseId { get; set; }
		public virtual Case Case { get; set; }
	}
}
