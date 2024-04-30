using UniversitiesApi.Models;

namespace UniversitiesApi.Services.Interfaces;

public interface IRateService
{
    List<RateDto> GetByUniversity(int universityId);
    public int Add(RateDto rateDto);
}
