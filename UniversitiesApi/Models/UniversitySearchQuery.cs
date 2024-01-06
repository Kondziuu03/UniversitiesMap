using UniversitiesApi.Enums;

namespace UniversitiesApi.Models;

public class UniversitySearchQuery
{
    public string? SearchPhrase { get; set; }
    public int PageNumber { get; set; }
    public int PageSize { get; set; }
    public SortDirection SortDirection { get; set; }
}
