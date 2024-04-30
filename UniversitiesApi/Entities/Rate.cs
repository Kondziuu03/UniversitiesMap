namespace UniversitiesApi.Entities;

public class Rate
{
    public int Id { get; set; }
    public int RateValue { get; set; }
    public string Comment { get; set; }
    public int UniversityId { get; set; }
    public University University { get; set; }
    public int UserId { get; set; }
    public User User { get; set; }
}
