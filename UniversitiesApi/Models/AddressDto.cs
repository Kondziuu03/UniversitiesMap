using System.ComponentModel.DataAnnotations;

namespace UniversitiesApi.Models;

public class AddressDto
{
    [Required]
    [MaxLength(50)]
    public string City { get; set; }

    [Required]
    [MaxLength(50)]
    public string Street { get; set; }
    public string PostalCode { get; set; }
}
