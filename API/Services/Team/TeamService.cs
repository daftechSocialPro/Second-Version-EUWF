using DAFwebAPI.Data;
using DAFwebAPI.Dtos;
using DAFwebAPI.Entities;
using DAFwebAPI.Helpers;
using Microsoft.EntityFrameworkCore;
using Org.BouncyCastle.Utilities.IO;

namespace DAFwebAPI.Services.Team
{
    public class TeamService : ITeamService
    {
        private readonly ApplicationDbContext _context;
        public TeamService(ApplicationDbContext context)
        {
            _context = context;
        }


        public async Task Create(TeamPostDto team)
        {
            try
            {
                
                var mediaPath = "";
                


                if (team.ImagePath != null)
                {
                    var image = team.ImagePath;
                    var photoinfo = new FileInfo(Path.GetFileName(image.FileName));
                    var fileExtension = photoinfo.Extension;
                    var savingPath = Path.Combine(Path.GetDirectoryName("./Assets/Team_upload_photo/"), team.ID.ToString() + fileExtension);



                    await image.SaveAsAsync(savingPath);
                    mediaPath = "Assets/Team_upload_photo/" + team.ID + fileExtension;
                }


                Teams teams = new Teams()
                {
                  
                    Name = team.Name,
                    Position = team.Position,
                    ImagePath = mediaPath,


                };

                await _context.Teams.AddAsync(teams);
                await _context.SaveChangesAsync();


            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }

        }


        public async Task<List<DAFwebAPI.Entities.Teams>> GetAll()
        {



            return await _context.Teams.ToListAsync();
        }

        public async Task Update(TeamPostDto team)
        {
            try
            {

                var teams = _context.Teams.Find(team.ID);


                teams.Name = team.Name;
                teams.Position = team.Position;


                if (team.ImagePath != null)
                {
                    var image = team.ImagePath;
                    var photoinfo = new FileInfo(Path.GetFileName(image.FileName));
                    var fileExtension = photoinfo.Extension;
                    var savingPath = Path.Combine(Path.GetDirectoryName("./Assets/Team_upload_media/"), team.ID.ToString() + fileExtension);



                    await image.SaveAsAsync(savingPath);
                    teams.ImagePath = "Assets/Team_upload_photo/" + team.ID + fileExtension;
                }

                

                _context.Teams.Update(teams);
                _context.SaveChanges();


            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }




        }
    }
}
