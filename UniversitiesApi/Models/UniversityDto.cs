using System.ComponentModel.DataAnnotations;

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

    [EmailAddress]
    public string Email { get; set; }
    public string PhoneNumber { get; set; }

    [Required]
    [MaxLength(50)]
    public string City { get; set; }

    [Required]
    [MaxLength(50)]
    public string Street { get; set; }
    public string PostalCode { get; set; }
}
