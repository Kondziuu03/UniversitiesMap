using System.ComponentModel.DataAnnotations;

namespace UniversitiesApi.Models;

public class UpdateUniversityDto
{
    public int Id { get; set; }
    [MaxLength(50)]
    public string? Name { get; set; }
    public string? Description { get; set; }
    public string? WebsiteUrl { get; set; }
    [EmailAddress]
    public string? Email { get; set; }
    public string? PhoneNumber { get; set; }
}
