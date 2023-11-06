using DAFwebAPI.Data;
using DAFwebAPI.Dtos;
using DAFwebAPI.Entities;
using DAFwebAPI.Helpers;
using Microsoft.EntityFrameworkCore;

namespace DAFwebAPI.Services.Gallery
{
    public class GalleryService : IGalleryService
    {
       
        private readonly ApplicationDbContext _context;
        public GalleryService(ApplicationDbContext context)
        {
            _context = context;
        }


        public async Task Create(GalleryPostDto post)
        {
            try
            {
                
                var imagePath = "";



                if (post.ImagePath != null)
                {
                    var image = post.ImagePath;
                    var photoinfo = new FileInfo(Path.GetFileName(image.FileName));
                    var fileExtension = photoinfo.Extension;
                    var savingPath = Path.Combine(Path.GetDirectoryName("./Assets/Gallery_upload_photo/"), post.ID.ToString() + fileExtension);



                    await image.SaveAsAsync(savingPath);
                    imagePath = "Assets/Gallery_upload_photo/" + post.ID + fileExtension;
                }


                DAFwebAPI.Entities.Gallery gallery = new DAFwebAPI.Entities.Gallery()
                {
                    
                    Title = post.Title,
                    ImagePath = imagePath,
                    createdAt = DateTime.UtcNow,


                };

                await _context.Galleries.AddAsync(gallery);
                await _context.SaveChangesAsync();


            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }

        }


        public async Task<List<DAFwebAPI.Entities.Gallery>> GetAll()
        {



            return await _context.Galleries.ToListAsync();
        }

        public async Task Update(GalleryPostDto post)
        {
            try
            {

                var gallery = _context.Galleries.Find(post.ID);


                gallery.Title = post.Title;
                gallery.updatedAt = DateTime.UtcNow;



                if (post.ImagePath != null)
                {
                    var image = post.ImagePath;
                    var photoinfo = new FileInfo(Path.GetFileName(image.FileName));
                    var fileExtension = photoinfo.Extension;
                    var savingPath = Path.Combine(Path.GetDirectoryName("./Assets/Gallery_upload_photo/"), post.ID.ToString() + fileExtension);



                    await image.SaveAsAsync(savingPath);
                    gallery.ImagePath = "Assets/Gallery_upload_photo/" + post.ID + fileExtension;
                }



                _context.Galleries.Update(gallery);
                _context.SaveChanges();


            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }




        }
    }
    
}
