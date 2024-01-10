using AutoMapper;
using UniversitiesApi.Entities;
using UniversitiesApi.Models;

namespace UniversitiesApi.Mappers;

public class UniversityMappingProfile : Profile
{
    public UniversityMappingProfile()
    {
        CreateMap<University, UniversityDto>()
            .ForMember(m => m.Address, c => c.MapFrom(s => new AddressDto()
            { City = s.Address.City, Street = s.Address.Street, PostalCode = s.Address.PostalCode }));

        CreateMap<UniversityDto, University>()
                .ForMember(r => r.Address,
                    c => c.MapFrom(dto => new Address()
                    { City = dto.Address.City, PostalCode = dto.Address.PostalCode, Street = dto.Address.Street }));
    }
}
