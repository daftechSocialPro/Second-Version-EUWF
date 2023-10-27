﻿using DAFwebAPI.Dtos;
using DAFwebAPI.Entities;
using DAFwebAPI.Helpers;
using DAFwebAPI.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DAFwebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TrainingController : ControllerBase
    {
        private readonly IUnitOfWork _unitofwork;
        private readonly JwtService _jwtService;
        public TrainingController(IUnitOfWork unitOfWork, JwtService jwtService)
        {


            _unitofwork = unitOfWork;
            _jwtService = jwtService;


        }
        [HttpGet]

        public async Task<List<Trainings>> GetAll()
        {


            return await _unitofwork.trainingService.GetAll();
        }


        [HttpPost]


        public async Task<ActionResult> Post([FromForm] TrainingPostDto research)
        {

            try
            {

                var jwt = Request.Cookies["jwt"];
                var token = _jwtService.verify(jwt);
                Guid userId = Guid.Parse(token.Issuer);


                research.ID = Guid.NewGuid();
               


                await _unitofwork.trainingService.Create(research);

            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);

                return Unauthorized();
            }

            return NoContent();



        }

        [HttpPut]
        public async Task<ActionResult> Update([FromForm] TrainingPostDto research)
        {

            try
            {

                var jwt = Request.Cookies["jwt"];
                var token = _jwtService.verify(jwt);
                Guid userId = Guid.Parse(token.Issuer);


                

                await _unitofwork.trainingService.Update(research);
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
