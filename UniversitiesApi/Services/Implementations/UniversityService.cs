using AutoMapper;
using Microsoft.EntityFrameworkCore;
using UniversitiesApi.Db;
using UniversitiesApi.Entities;
using UniversitiesApi.Enums;
using UniversitiesApi.Exceptions;
using UniversitiesApi.Models;
using UniversitiesApi.Services.Interfaces;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory;

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

        public List<UniversityDto> GetAll(UniversitySearchQuery query)
        {
            var universities = _dbContext
                .Universities
                .Include(u => u.Address)
                .AsEnumerable();

            if (!string.IsNullOrEmpty(query.SearchPhrase))
                universities = universities
                    .Where(u => u.Name.ToLower().Contains(query.SearchPhrase.ToLower())
                               || u.Description.ToLower().Contains(query.SearchPhrase.ToLower()));

            if (query.Category != null)
                universities = universities
                    .Where(u => u.Category == query.Category);

            return universities.Select(university => _mapper.Map<UniversityDto>(university)).ToList();
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
