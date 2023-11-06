using DAFwebAPI.Dtos;
using DAFwebAPI.Entities;
using DAFwebAPI.Helpers;
using DAFwebAPI.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DAFwebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TeamController : ControllerBase
    {
        private readonly IUnitOfWork _unitofwork;
        private readonly JwtService _jwtService;
        public TeamController(IUnitOfWork unitOfWork, JwtService jwtService)
        {


            _unitofwork = unitOfWork;
            _jwtService = jwtService;


        }
        [HttpGet]

        public async Task<List<Teams>> GetAll()
        {


            return await _unitofwork.teamService.GetAll();
        }


        [HttpPost]


        public async Task<ActionResult> Post([FromForm] TeamPostDto research, string jwt)
        {

            try
            {

                var token = _jwtService.verify(jwt);
                Guid userId = Guid.Parse(token.Issuer);


                research.ID = Guid.NewGuid();



                await _unitofwork.teamService.Create(research);

            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);

                return Unauthorized();
            }

            return NoContent();



        }

        [HttpPut]
        public async Task<ActionResult> Update([FromForm] TeamPostDto research, string jwt)
        {

            try
            {

                
                var token = _jwtService.verify(jwt);
                Guid userId = Guid.Parse(token.Issuer);




                await _unitofwork.teamService.Update(research);
                //await _unitofwork.SaveChanges();
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
