using Microsoft.Data.SqlClient;
using System.Data;
using static ORMS.Server.Models.Common.CommonServiceModel;

namespace ORMS.Server.Services.Common
{
    public class CommonService
    {
        public async Task<string> GetUsers(int dealerId, string? centerId, int? userId, string? userRole)
        {
            object parameters = new
            {
                p_dlr_id = dealerId,
                p_cnt_id = centerId,
                p_usr_id = userId,
                p_rol = userRole,
            };

            //return await _dbRepository.ExecuteProcedureV2Async<IEnumerable<UsersModel>>("S_USR_LST", parameters);
            return "";
        }
    }
}
