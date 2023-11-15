using DAFwebAPI.Data;
using DAFwebAPI.Dtos;
using DAFwebAPI.Entities;
using DAFwebAPI.Helpers;

using DAFwebAPI.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json.Linq;

namespace DAFwebAPI.Controllers
{
    [Route("api/question")]
    [ApiController]
    public class QuestionController : ControllerBase
    {


        private readonly IUnitOfWork _unitofwork;
        private readonly JwtService _jwtService;
        private readonly ApplicationDbContext _context;
        private readonly IConfiguration _config;
        public QuestionController(IUnitOfWork unitOfWork, JwtService jwtService,ApplicationDbContext context, IConfiguration config)
        {


            _unitofwork = unitOfWork;
            _jwtService = jwtService;
            _context = context;
            _config = config;


        }


        [HttpGet]
        public async Task<List<QuestionDto>> GetAll(Guid questionerId)
        {
            return await _unitofwork.questionRepository.GetAll(questionerId);
        }

        [AllowAnonymous]
        [HttpGet("generatelink")]
        public async Task<IActionResult> GenerateLink(Guid questionerId)
        {
            var frontendurl = _config.GetValue<string>("frontend_url");
            var formLink = $"{frontendurl}/questioner/{questionerId}";

            try
            {
                var questions = await _unitofwork.questionRepository.GetAll(questionerId);
                return Ok(new { FormLink = formLink, Questions = questions });
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error generating form link: {ex.Message}");
            }
        }


        [HttpPost("submitanswer")]
        public async Task<ActionResult> SubmitAnswer( string answers, string jwt)
        {

            try
            {
                

        
                var token = _jwtService.verify(jwt);
                Guid userId = Guid.Parse(token.Issuer);


                JArray jsonArray = JArray.Parse(answers);
                var Answers = jsonArray.ToObject<List<AnswerDto>>();


                foreach ( var item in Answers )
                {

                    var Answer = new Answer
                    {
                        ID=Guid.NewGuid(),
                        createdAt=DateTime.UtcNow,
                        createdBy =userId,
                        QuestionerId = item.QuestionerId,
                        QuestionsId= item.QuestionId,
                        Answers= item.Answers  
                        
                        

                    };


                    var user = _unitofwork.userRepository.GetById(userId);

                    if (user.UserType == UserType.RegionalFederation)
                    {
                        var RegionalFedId =  _context.RegionalWaterFederations.Where(x => x.UserId== userId).FirstOrDefault().ID;
                        Answer.RegionalWaterFederationId = RegionalFedId;
                    }

                    if (user.UserType == UserType.WaterUtility)
                    {
                        var WaterUtilityId =   _context.waterUtilities.Where(x => x.UserId == userId).FirstOrDefault().ID;
                        Answer.WaterUtilityId = WaterUtilityId;
                    }

                    await _unitofwork.questionRepository.SubmitAnswer(Answer);

                }



                //questions.ID = Guid.NewGuid();
                //questions.createdAt = DateTime.UtcNow;
                //questions.createdBy = userId;


                //await _unitofwork.questionRepository.SubmitAnswer(questions);
                //await _unitofwork.SaveChanges();
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);

                return Unauthorized();
            }

            return NoContent();



        }


        [HttpPost]


        public async Task<ActionResult> Post([FromForm] QuestionDto questions, string jwt)
        {

            try
            {

                
                var token = _jwtService.verify(jwt);
                Guid userId = Guid.Parse(token.Issuer);


                questions.ID = Guid.NewGuid();
                questions.createdAt = DateTime.UtcNow;
                questions.createdBy = userId;


                await _unitofwork.questionRepository.Create(questions);
                await _unitofwork.SaveChanges();
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);

                return Unauthorized();
            }

            return NoContent();



        }

        [HttpPut]
        public async Task<ActionResult> Update([FromForm] QuestionDto questions, string jwt)
        {

            try
            {

                var token = _jwtService.verify(jwt);
                Guid userId = Guid.Parse(token.Issuer);


                questions.createdBy = userId;


                await _unitofwork.questionRepository.Update(questions);
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
