using System.ComponentModel.DataAnnotations.Schema;

namespace ORMS.Server.Models.Common
{
    public class CommonServiceModel
    {
        public sealed class UsersModel
        {
            [Column("usr_id")]
            public long UserId { get; set; }
            [Column("usr_rol")]
            public string? UserRole { get; set; }
            [Column("usr_ful_nme")]
            public string? UserFullName { get; set; }
            [Column("usr_pic_url")]
            public string? UserPicURL { get; set; }
            [Column("eml")]
            public string? UserEmail { get; set; }
        }
    }
}
