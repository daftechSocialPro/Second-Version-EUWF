using DAFwebAPI.Dtos;

namespace DAFwebAPI.Services.Climate
{
    public interface IClimateRepository
    {
        Task Create(ClimatePostDto climate);
        Task<List<Entities.Climate>> GetAll();
        Task Update(ClimatePostDto climate);
    }
}
