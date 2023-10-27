using DAFwebAPI.Dtos;

namespace DAFwebAPI.Services.Team
{
    public interface ITeamService
    {
        Task Create(TeamPostDto team);
        Task<List<DAFwebAPI.Entities.Teams>> GetAll();
        Task Update(TeamPostDto team);
    }
}
