using UniversitiesApi.Models;

namespace UniversitiesApi.Services.Interfaces;

public interface IAccountService
{
    void RegisterUser(RegisterUserDto dto);
    UserDto GenerateJwt(LoginDto dto);
}
