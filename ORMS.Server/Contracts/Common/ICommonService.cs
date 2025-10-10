using static ORMS.Server.Models.Common.CommonServiceModel;

namespace ORMS.Server.Contracts.Common
{
    public interface ICommonService
    {
        Task<string> GetUsers(int dealerId, string? centerId, int? userId, string? userRole);
    }
}
