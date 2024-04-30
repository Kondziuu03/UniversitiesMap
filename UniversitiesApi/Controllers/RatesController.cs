using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using UniversitiesApi.Models;
using UniversitiesApi.Services.Interfaces;

namespace UniversitiesApi.Controllers;

[ApiController]
[Route("api/university/rates")]
[Authorize]
public class RatesController : ControllerBase
{
    private readonly IRateService _rateService;

    public RatesController(IRateService rateService)
    {
        _rateService = rateService;
    }

    [HttpGet("{universityId}")]
    public ActionResult<List<RateDto>> GetByUniversity(int universityId)
    {
        var rates = _rateService.GetByUniversity(universityId);

        return Ok(rates);
    }

    [HttpPost]
    public ActionResult Create([FromBody] RateDto rateDto)
    {
        var id = _rateService.Add(rateDto);

        return Created($"/api/rates/{id}", null);
    }
}
