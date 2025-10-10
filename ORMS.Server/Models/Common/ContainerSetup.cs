using ORMS.Server.Contracts.Common;
using ORMS.Server.Services.Common;

namespace ORMS.Server.Models.Common
{
    public class ContainerSetup
    {
        public static void Setup(IServiceCollection services)
        {
            AddDapperOperations(services);
            AddBusinessModels(services);
        }
        private static void AddDapperOperations(IServiceCollection services)
        {
            //CodeServiceRegistration.AddDbServices(services);
        }
        private static void AddBusinessModels(IServiceCollection services)
        {
            //services.AddTransient<ICommonService, CommonService>();
        }
    }
}
