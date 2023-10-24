namespace DAFwebAPI.Entities
{
    public class Trainings : Common
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public string? MediaPath { get; set; }
        public string? FilePath { get; set; }
    }
}
