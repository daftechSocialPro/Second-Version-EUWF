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
    public class ClimateController : ControllerBase
    {
        private readonly IUnitOfWork _unitofwork;
        private readonly JwtService _jwtService;
        public ClimateController(IUnitOfWork unitOfWork, JwtService jwtService)
        {


            _unitofwork = unitOfWork;
            _jwtService = jwtService;


        }
        [HttpGet]

        public async Task<List<Climate>> GetAll()
        {


            return await _unitofwork.climateRepository.GetAll();
        }


        [HttpPost]


        public async Task<ActionResult> Post([FromForm] ClimatePostDto research, string jwt)
        {

            try
            {

                var token = _jwtService.verify(jwt);
                Guid userId = Guid.Parse(token.Issuer);


                research.ID = Guid.NewGuid();



                await _unitofwork.climateRepository.Create(research);

            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);

                return Unauthorized();
            }

            return NoContent();



        }

        [HttpPut]
        public async Task<ActionResult> Update([FromForm] ClimatePostDto research, string jwt)
        {

            try
            {


                var token = _jwtService.verify(jwt);
                Guid userId = Guid.Parse(token.Issuer);




                await _unitofwork.climateRepository.Update(research);
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
