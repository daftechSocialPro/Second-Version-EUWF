using DAFwebAPI.Data;
using DAFwebAPI.Entities;
using DAFwebAPI.Helpers;
using DAFwebAPI.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;

namespace DAFwebAPI.Controllers
{
    [Route("api/news")]
    public class NewsController : ControllerBase
    {

        private readonly ApplicationDbContext context;

        private readonly IUnitOfWork _unitofwork;
        private readonly JwtService _jwtService;

     

        public NewsController(ApplicationDbContext context, IUnitOfWork unitofwork, JwtService jwtService)
        {
            this.context = context;
            _unitofwork = unitofwork;
            _jwtService = jwtService;
           
        }
        [HttpGet]
        public async Task<ActionResult<List<News>>> Get(string jwt)
        {
            Guid userId = Guid.NewGuid();
          
            if (jwt != null)
            {
                var token = _jwtService.verify(jwt);
                userId = Guid.Parse(token.Issuer);
            }
            else
            {
                userId = Guid.Empty;
            }

            return await _unitofwork.newsRepository.getAll(userId);

        }


        [HttpPost]
        public async Task<ActionResult> Post([FromForm] News news, string jwt)
        {

            try
            {

        
                var token = _jwtService.verify(jwt);
                Guid userId = Guid.Parse(token.Issuer);
                var user = _unitofwork.userRepository.GetById(userId);

                news.ID = Guid.NewGuid();
                news.isApproved = false;
              
                news.createdAt = DateTime.UtcNow;
      


                news.createdBy = userId;
                news.WaterFederationId = userId;




                await _unitofwork.newsRepository.Create(news);
                await _unitofwork.SaveChanges();

               


            }
            catch
            {


                return Unauthorized();
            }

            return NoContent();



        }

        [HttpPut]

        public async Task<ActionResult> Update([FromForm] News news, string jwt)
        {


            try
            {

             
                var token = _jwtService.verify(jwt);
                Guid userId = Guid.Parse(token.Issuer);

                await _unitofwork.newsRepository.Update(news);
             


            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);

                return Unauthorized();
            }

            return NoContent();



        }





    }

}
