using AutoMapper;
using UniversitiesApi.Entities;
using UniversitiesApi.Models;

namespace UniversitiesApi.Mappers;

public class UniversityMappingProfile : Profile
{
    public UniversityMappingProfile()
    {
        CreateMap<University, UniversityDto>()
            .ForMember(m => m.City, c => c.MapFrom(s => s.Address.City))
            .ForMember(m => m.Street, c => c.MapFrom(s => s.Address.Street))
            .ForMember(m => m.PostalCode, c => c.MapFrom(s => s.Address.PostalCode));

        CreateMap<UniversityDto, University>()
                .ForMember(r => r.Address,
                    c => c.MapFrom(dto => new Address()
                    { City = dto.City, PostalCode = dto.PostalCode, Street = dto.Street }));
    }
}
