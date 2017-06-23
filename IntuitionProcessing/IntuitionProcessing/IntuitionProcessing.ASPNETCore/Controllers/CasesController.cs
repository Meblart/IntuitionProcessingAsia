using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace IntuitionProcessing.ASPNETCore.Controllers
{
	[Authorize]
	[Route("api/cases")]
	public class CasesController : Controller
	{

		// GET: api/
		[HttpGet]

		public JsonResult GetAll()
		{
			var caseUp = new CaseForController() { site = "test", description = "resfsf" };
			var result = new List<CaseForController>();
			result.Add(caseUp);
			result.Add(caseUp);
			result.Add(caseUp);
			result.Add(caseUp);
			result.Add(caseUp);

			return Json(result);
		}

		// GET api/values/5
		[HttpGet("{id}")]
		public string Get(int id)
		{
			return "value";
		}

		// POST api/values
		[HttpPost]
		public IActionResult Post([FromBody] CaseForController newCase)
		{
			return new ObjectResult("StatusCode: " + StatusCode(200));
		}

		// PUT api/values/5
		[HttpPut("{id}")]
		public void Put(int id, [FromBody]string value)
		{
		}

		// DELETE api/values/5
		[HttpDelete("{id}")]
		public void Delete(int id)
		{
		}
	}
}

public class CaseForController
{
	public string site { get; set; }
	public string description { get; set; }
}
