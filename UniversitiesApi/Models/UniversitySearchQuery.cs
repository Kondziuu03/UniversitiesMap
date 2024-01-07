using UniversitiesApi.Enums;

namespace UniversitiesApi.Models;

public class UniversitySearchQuery
{
    public string? SearchPhrase { get; set; }
    public CategoryEnum? Category { get; set; }
}
