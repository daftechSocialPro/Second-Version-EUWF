using DAFwebAPI.Data;
using DAFwebAPI.Dtos;
using DAFwebAPI.Entities;
using DAFwebAPI.Helpers;
using Microsoft.EntityFrameworkCore;
using Org.BouncyCastle.Utilities.IO;


namespace DAFwebAPI.Services.Climate
{
    public class ClimateRepository : IClimateRepository
    {
        private readonly ApplicationDbContext _context;
        public ClimateRepository(ApplicationDbContext context)
        {
            _context = context;
        }


        public async Task Create(ClimatePostDto climate)
        {
            try
            {

                var mediaPath = "";



                if (climate.ImagePath != null)
                {
                    var image = climate.ImagePath;
                    var photoinfo = new FileInfo(Path.GetFileName(image.FileName));
                    var fileExtension = photoinfo.Extension;
                    var savingPath = Path.Combine(Path.GetDirectoryName("./Assets/Climate_upload_photo/"), climate.ID.ToString() + fileExtension);



                    await image.SaveAsAsync(savingPath);
                    mediaPath = "Assets/Climate_upload_photo/" + climate.ID + fileExtension;
                }


                Entities.Climate climates = new Entities.Climate()
                {

                    Title = climate.Title,
                    Description = climate.Description,
                    ImagePath = mediaPath,
                    createdAt= DateTime.UtcNow,


                };

                await _context.Climates.AddAsync(climates);
                await _context.SaveChangesAsync();


            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }

        }


        public async Task<List<DAFwebAPI.Entities.Climate>> GetAll()
        {



            return await _context.Climates.ToListAsync();
        }

        public async Task Update(ClimatePostDto climate)
        {
            try
            {

                var climates = _context.Climates.Find(climate.ID);


                climates.Title = climate.Title;
                climates.Description = climate.Description;
                climates.updatedAt = DateTime.UtcNow;


                if (climate.ImagePath != null)
                {
                    var image = climate.ImagePath;
                    var photoinfo = new FileInfo(Path.GetFileName(image.FileName));
                    var fileExtension = photoinfo.Extension;
                    var savingPath = Path.Combine(Path.GetDirectoryName("./Assets/Climate_upload_photo/"), climate.ID.ToString() + fileExtension);

                    if (File.Exists(savingPath))
                    {
                        File.Delete(savingPath);
                    }

                    await image.SaveAsAsync(savingPath);
                    climates.ImagePath = "Assets/Climate_upload_photo/" + climate.ID + fileExtension;
                }



                _context.Climates.Update(climates);
                _context.SaveChanges();


            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }




        }
    }
}
