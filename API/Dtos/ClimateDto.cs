namespace DAFwebAPI.Dtos
{
    public class ClimateGetDto
    {
        public Guid ID { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string ImagePath { get; set; }
    }

    public class ClimatePostDto
    {
        public Guid? ID { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public IFormFile? ImagePath { get; set; }

    }
}
