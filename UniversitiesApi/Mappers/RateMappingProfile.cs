using AutoMapper;
using UniversitiesApi.Db;
using UniversitiesApi.Entities;
using UniversitiesApi.Models;

namespace UniversitiesApi.Mappers;

public class RateMappingProfile : Profile
{
    public RateMappingProfile()
    {
        CreateMap<Rate, RateDto>();
        CreateMap<RateDto, Rate>();
    }
}
