using DAFwebAPI.Dtos;

namespace DAFwebAPI.Services.Gallery
{
    public interface IGalleryService
    {
        Task Create(GalleryPostDto post);
        Task<List<DAFwebAPI.Entities.Gallery>> GetAll();
        Task Update(GalleryPostDto post);
    }
}
