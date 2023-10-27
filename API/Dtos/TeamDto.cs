namespace DAFwebAPI.Dtos
{
    public class TeamGetDto
    {
        public Guid ID { get; set; }
        public string Name { get; set; }
        public string Position { get; set; }
        public string ImagePath { get; set; }
    }

    public class TeamPostDto
    {
        public Guid? ID { get; set; }
        public string Name { get; set; }
        public string Position { get; set; }
        public IFormFile? ImagePath { get; set; }

    }
}
