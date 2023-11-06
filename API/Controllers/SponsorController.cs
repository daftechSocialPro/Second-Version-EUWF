﻿using DAFwebAPI.Entities;
using DAFwebAPI.Helpers;
using DAFwebAPI.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DAFwebAPI.Controllers
{
    [Route("api/sponsor")]
    [ApiController]
    public class SponsorController : ControllerBase
    {

        private readonly IUnitOfWork _unitofwork;
        private readonly JwtService _jwtService;
        public SponsorController(IUnitOfWork unitOfWork, JwtService jwtService)
        {


            _unitofwork = unitOfWork;
            _jwtService = jwtService;


        }
        [HttpGet]

        public async Task<List<Sponsor>> GetAll(SupportType supportType)
        {


            return await _unitofwork.sponsorRepository.GetAll();
        }

        [HttpGet("bySupportType")]

        public async Task<List<Sponsor>> GetAllBySupportType(SupportType supportType)
        {


            return await _unitofwork.sponsorRepository.GetAllBYSupportTYpe(supportType);
        }


        [HttpPost]


        public async Task<ActionResult> Post([FromForm] Sponsor sponsor, string jwt)
        {

            try
            {

          
                var token = _jwtService.verify(jwt);
                Guid userId = Guid.Parse(token.Issuer);


                sponsor.ID = Guid.NewGuid();
                sponsor.createdAt = DateTime.UtcNow;
                sponsor.createdBy = userId;


                await _unitofwork.sponsorRepository.Create(sponsor);
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
        public async Task<ActionResult> Update([FromForm] Sponsor sponsor, string jwt)
        {

            try
            {

                var token = _jwtService.verify(jwt);
                Guid userId = Guid.Parse(token.Issuer);


                sponsor.createdBy = userId;


                await _unitofwork.sponsorRepository.Update(sponsor);
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
