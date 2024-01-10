using System.ComponentModel.DataAnnotations;
using UniversitiesApi.Enums;

namespace UniversitiesApi.Models;

public class UniversityDto
{
    public int Id { get; set; }

    [Required]
    [MaxLength(50)]
    public string Name { get; set; }
    public string Description { get; set; }
    public double Latitude { get; set; }
    public double Longitude { get; set; }
    public string WebsiteUrl { get; set; }
    public CategoryEnum Category { get; set; }

    [EmailAddress]
    public string Email { get; set; }
    public string PhoneNumber { get; set; }

    public AddressDto Address { get; set; }
}
