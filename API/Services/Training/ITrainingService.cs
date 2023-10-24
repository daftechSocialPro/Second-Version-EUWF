using DAFwebAPI.Dtos;

namespace DAFwebAPI.Services.Training
{
    public interface ITrainingService
    {
        Task Create(TrainingPostDto training);
        Task<List<DAFwebAPI.Entities.Trainings>> GetAll();
        Task Update(TrainingPostDto training);
    }
}
