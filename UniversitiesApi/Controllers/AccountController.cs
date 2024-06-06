using Microsoft.AspNetCore.Mvc;
using UniversitiesApi.Models;
using UniversitiesApi.Services.Interfaces;

namespace UniversitiesApi.Controllers;

[Route("api/account")]
[ApiController]
public class AccountController : ControllerBase
{
    private readonly IAccountService _accountService;

    public AccountController(IAccountService accountService)
    {
        _accountService = accountService;
    }

    [HttpPost("register")]
    public ActionResult RegisterUser([FromBody] RegisterUserDto dto)
    {
        _accountService.RegisterUser(dto);
        return Ok();
    }

    [HttpPost("login")]
    public ActionResult<UserDto> Login([FromBody] LoginDto dto)
    {
        var userWithToken = _accountService.GenerateJwt(dto);
        return Ok(userWithToken);
    }
}
