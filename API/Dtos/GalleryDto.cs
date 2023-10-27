namespace DAFwebAPI.Dtos
{
    public class GalleryGetDto
    {
        public Guid ID { get; set; }                
        public string Title { get; set; }
        public string ImagePath { get; set; }
    }

    public class GalleryPostDto
    {
        public Guid? ID { get; set; }
        public string Title { get; set; }
        public IFormFile ImagePath { get; set; }
    }
}
