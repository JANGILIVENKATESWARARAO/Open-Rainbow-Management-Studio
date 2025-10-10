using Microsoft.AspNetCore.Mvc;
using ORMS.Server.Contracts.Common;
using static ORMS.Server.Models.Common.CommonServiceModel;

namespace ORMS.Server.Controllers.Common
{
    [Route("api/[controller]")]
    [ApiController]
    public class CommonController : ControllerBase
    {
        private readonly ICommonService _commonService;

        public CommonController(ICommonService commonService)
        {
            _commonService = commonService;
        }

        [HttpGet("GetUsers")]
        public async Task<IActionResult> GetUsers(int dealerId, string? centerId, int? userId, string? userRole)
        {
            string performance = await _commonService.GetUsers(dealerId, centerId, userId, userRole);

            return Ok(performance);
        }
    }
}
