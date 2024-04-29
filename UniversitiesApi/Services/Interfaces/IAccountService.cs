using UniversitiesApi.Models;

namespace UniversitiesApi.Services.Interfaces;

public interface IAccountService
{
    void RegisterUser(RegisterUserDto dto);
    string GenerateJwt(LoginDto dto);
}
