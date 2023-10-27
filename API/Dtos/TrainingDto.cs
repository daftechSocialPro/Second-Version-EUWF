namespace DAFwebAPI.Dtos
{
    public class TrainingGetDto
    {
        public Guid ID { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string? MediaPath { get; set; }
        public string? FilePath { get; set; }

    }

    public class TrainingPostDto
    {
        public Guid? ID { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public IFormFile? MediaPath { get; set; }
        public IFormFile? FilePath { get; set; }


    }
}
