using UniversitiesApi.Models;

namespace UniversitiesApi.Services.Interfaces;

public interface IUniversityService
{
    UniversityDto Get(int id);
    List<UniversityDto> GetAll(string category);
    int Create(UniversityDto universityDto);
    void Update(UpdateUniversityDto dto);
    void Delete(int id);
}
