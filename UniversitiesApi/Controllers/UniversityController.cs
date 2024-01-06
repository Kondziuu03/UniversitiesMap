using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using UniversitiesApi.Models;
using UniversitiesApi.Services.Interfaces;

namespace UniversitiesApi.Controllers;

[ApiController]
[Route("api/university")]
public class UniversityController : ControllerBase
{
    private readonly IUniversityService _universityService;

    public UniversityController(IUniversityService universityService)
    {
        _universityService = universityService;
    }

    [HttpGet("{id}")]
    public ActionResult<UniversityDto> Get([FromRoute] int id)
    {
        var university = _universityService.Get(id);

        return Ok(university);
    }

    [HttpGet]
    public ActionResult<IEnumerable<UniversityDto>> Filter([FromQuery]UniversitySearchQuery query)
    {
        var universities = _universityService.Filter(query);

        return Ok(universities);
    }

    [HttpPost]
    public ActionResult Create([FromBody] UniversityDto dto)
    {
        var id = _universityService.Create(dto);

        return Created($"/api/university/{id}", null);
    }

    [HttpPut("{id}")]
    public ActionResult Update([FromBody] UpdateUniversityDto dto, [FromRoute] int id)
    {
        dto.Id = id;
        _universityService.Update(dto);

        return Ok();
    }

    [HttpDelete("{id}")]
    public ActionResult Delete([FromRoute] int id)
    {
        _universityService.Delete(id);

        return NoContent();
    }
}
