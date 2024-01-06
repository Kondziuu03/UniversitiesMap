using Microsoft.EntityFrameworkCore;
using UniversitiesApi.Entities;

namespace UniversitiesApi.Db.Extensions;

public static class ModelBuilderExtensionsAddresses
{
    public static void SeedAddresses(this ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Address>().HasData(
                new Address
                {
                    Id = 1,
                    City = "Gdańsk",
                    Street = "Gabriela Narutowicza 11/12",
                    PostalCode = "80-233"
                },
                new Address
                {
                    Id = 2,
                    City = "Gdańsk",
                    Street = "Jana Bażyńskiego 8",
                    PostalCode = "80-309"
                },
                new Address
                {
                    Id = 3,
                    City = "Kraków",
                    Street = "Mickiewicza 30",
                    PostalCode = "30-059"
                }
            );
    }
}
