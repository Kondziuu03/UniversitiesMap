using AutoMapper;
using Microsoft.EntityFrameworkCore;
using UniversitiesApi.Db;
using UniversitiesApi.Entities;
using UniversitiesApi.Enums;
using UniversitiesApi.Models;
using UniversitiesApi.Services.Interfaces;

namespace UniversitiesApi.Services.Implementations;

public class RateService : IRateService
{
    private readonly UniversitiesDbContext _dbContext;
    private readonly IMapper _mapper;

    public RateService(UniversitiesDbContext context, IMapper mapper)
    {
        _dbContext = context;
        _mapper = mapper;
    }

    public int Add(RateDto rateDto)
    {
        var rate = _mapper.Map<Rate>(rateDto);

        _dbContext.Rates.Add(rate);
        _dbContext.SaveChanges();

        return rate.Id;
    }

    public List<RateDto> GetByUniversity(int universityId)
    {
        var rates = _dbContext
            .Rates
            .Where(r => r.UniversityId == universityId)
            .Select(r => _mapper.Map<RateDto>(r))
            .ToList();

        return rates;
    }
}
