using AutoMapper;
using Microsoft.EntityFrameworkCore;
using UniversitiesApi.Db;
using UniversitiesApi.Entities;
using UniversitiesApi.Enums;
using UniversitiesApi.Exceptions;
using UniversitiesApi.Models;
using UniversitiesApi.Services.Interfaces;

namespace UniversitiesApi.Services.Implementations
{
    public class UniversityService : IUniversityService
    {
        private readonly UniversitiesDbContext _dbContext;
        private readonly IMapper _mapper;

        public UniversityService(UniversitiesDbContext dbContext,
            IMapper mapper)
        {
            _dbContext = dbContext;
            _mapper = mapper;
        }

        public UniversityDto Get(int id)
        {
            return _mapper.Map<UniversityDto>(GetById(id));
        }

        public List<UniversityDto> GetAll()
        {
            var universities = GetAllUniversities();

            if (!universities.Any())
                throw new NotFoundException("Could not found any university");

            return universities.Select(university => _mapper.Map<UniversityDto>(university)).ToList();
        }

        public PagedResult<UniversityDto> Filter(UniversitySearchQuery query)
        {
            var baseQuery = _dbContext
                .Universities
                .Include(u => u.Address)
                .Where(u => query.SearchPhrase == null
                    || u.Name.ToLower().Contains(query.SearchPhrase.ToLower())
                    || u.Description.ToLower().Contains(query.SearchPhrase.ToLower()));

            baseQuery = query.SortDirection == SortDirection.ASC
                ? baseQuery.OrderBy(u => u.Name)
                : baseQuery.OrderByDescending(u => u.Name);

            var universities = baseQuery
                .Skip(query.PageSize * (query.PageNumber - 1))
                .Take(query.PageSize)
                .ToList();

            var totalItemsCount = baseQuery.Count();

            var universitiesDtos = _mapper.Map<List<UniversityDto>>(universities);

            return new PagedResult<UniversityDto>(universitiesDtos, totalItemsCount, query.PageSize, query.PageNumber);
        }

        public int Create(UniversityDto universityDto)
        {
            var university = _mapper.Map<University>(universityDto);

            _dbContext.Universities.Add(university);
            _dbContext.SaveChanges();

            return university.Id;
        }

        public void Update(UpdateUniversityDto dto)
        {
            var universityToUpdate = GetById(dto.Id);

            universityToUpdate.Name = dto.Name ?? universityToUpdate.Name;
            universityToUpdate.Description = dto.Description ?? universityToUpdate.Description;
            universityToUpdate.WebsiteUrl = dto.WebsiteUrl ?? universityToUpdate.WebsiteUrl;
            universityToUpdate.PhoneNumber = dto.PhoneNumber ?? universityToUpdate.PhoneNumber;
            universityToUpdate.Email = dto.Email ?? universityToUpdate.Email;

            _dbContext.SaveChanges();
        }

        public void Delete(int id)
        {
            var universityToDelete = GetById(id);

            _dbContext.Universities.Remove(universityToDelete);
            _dbContext.SaveChanges();
        }

        private University GetById(int id)
        {
            var university = GetAllUniversities().FirstOrDefault(u => u.Id == id);

            if (university == null)
                throw new NotFoundException($"Could not find university with id: {id}");

            return university;
        }
        
        private IEnumerable<University> GetAllUniversities()
        {
            return _dbContext
                .Universities
                .Include(u => u.Address);
        }
    }
}
