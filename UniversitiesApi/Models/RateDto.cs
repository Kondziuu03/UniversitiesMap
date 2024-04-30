namespace UniversitiesApi.Models;

public class RateDto
{
    public int RateValue { get; set; }
    public string Comment { get; set; }
    public int UserId { get; set; }
    public int UniversityId { get; set; }
}
