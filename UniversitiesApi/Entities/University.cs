namespace UniversitiesApi.Entities;

public class University
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }
    public double Latitude { get; set; }
    public double Longitude { get; set; }
    public string WebsiteUrl { get; set; }
    public string Email { get; set; }
    public string PhoneNumber { get; set; }
    public int AddressId { get; set; }
    public Address Address { get; set; }
}
