using DAFwebAPI.Data;
using DAFwebAPI.Dtos;
using DAFwebAPI.Entities;
using DAFwebAPI.Helpers;
using Microsoft.EntityFrameworkCore;

namespace DAFwebAPI.Services.Training
{
    public class TrainingService : ITrainingService
    {
        private readonly ApplicationDbContext _context;
        public TrainingService(ApplicationDbContext context)
        {
            _context = context;


        }


        public async Task Create(TrainingPostDto training)
        {
            try
            {
                
                var mediaPath = "";
                var filePath = "";


                if (training.MediaPath != null)
                {
                    var image = training.MediaPath;
                    var photoinfo = new FileInfo(Path.GetFileName(image.FileName));
                    var fileExtension = photoinfo.Extension;
                    var savingPath = Path.Combine(Path.GetDirectoryName("./Assets/Training_upload_media/"), training.ID.ToString() + fileExtension);



                    await image.SaveAsAsync(savingPath);
                    mediaPath = "Assets/Training_upload_media/" + training.ID + fileExtension;
                }

                if (training.FilePath != null)
                {
                    var image = training.FilePath;
                    var photoinfo = new FileInfo(Path.GetFileName(image.FileName));
                    var fileExtension = photoinfo.Extension;
                    var savingPath = Path.Combine(Path.GetDirectoryName("./Assets/Training_upload_file/"), training.ID.ToString() + fileExtension);



                    await image.SaveAsAsync(savingPath);
                    filePath = "Assets/Training_upload_file/" + training.ID + fileExtension;
                }

                Trainings train = new Trainings()
                {
                    
                    Title = training.Title,
                    Description = training.Description,
                    MediaPath = mediaPath,
                    FilePath = filePath


                };

                await _context.Trainings.AddAsync(train);
                await _context.SaveChangesAsync();


            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }

        }


        public async Task<List<DAFwebAPI.Entities.Trainings>> GetAll()
        {



            return await _context.Trainings.ToListAsync();
        }

        public async Task Update(TrainingPostDto training)
        {
            try
            {

                var train = _context.Trainings.Find(training.ID);

                
                train.Title = training.Title;
                train.Description = training.Description;
                              
                               
                if (training.MediaPath != null)
                {
                    var image = training.MediaPath;
                    var photoinfo = new FileInfo(Path.GetFileName(image.FileName));
                    var fileExtension = photoinfo.Extension;
                    var savingPath = Path.Combine(Path.GetDirectoryName("./Assets/Training_upload_media/"), training.ID.ToString() + fileExtension);



                    await image.SaveAsAsync(savingPath);
                    train.MediaPath = "Assets/Research_upload_photo/" + training.ID + fileExtension;
                }

                if (training.FilePath != null)
                {
                    var image = training.FilePath;
                    var photoinfo = new FileInfo(Path.GetFileName(image.FileName));
                    var fileExtension = photoinfo.Extension;
                    var savingPath = Path.Combine(Path.GetDirectoryName("./Assets/Training_upload_file/"), training.ID.ToString() + fileExtension);



                    await image.SaveAsAsync(savingPath);
                    train.FilePath = "Assets/Research_upload_photo/" + training.ID + fileExtension;
                }

                _context.Trainings.Update(train);
                _context.SaveChanges();


            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }




        }
    }
}
