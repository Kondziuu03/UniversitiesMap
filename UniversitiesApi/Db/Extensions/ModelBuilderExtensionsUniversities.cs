using Microsoft.EntityFrameworkCore;
using UniversitiesApi.Entities;

namespace UniversitiesApi.Db.Extensions;

public static class ModelBuilderExtensionsUniversities
{
    public static void SeedUniversities(this ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<University>().HasData(
            new University
            {
                Id = 1,
                Name = "Politechnika Gdańska",
                Description = "Politechnika Gdańska, commonly known as the Gdańsk University of Technology (PG), is a prestigious technical university located in Gdańsk, Poland. Established in 1904, PG has a rich history of providing high-quality education in engineering, technology, and science. The university is recognized for its commitment to innovation, research excellence, and fostering a collaborative learning environment.",
                Email = "pg@pg.edu.pl",
                PhoneNumber = "+48 123456789",
                WebsiteUrl = "https://pg.edu.pl",
                Latitude = 54.22,
                Longitude = 18.36,
                AddressId = 1
            },
            new University
            {
                Id = 2,
                Name = "Uniwersytet Gdański",
                Description = "The University of Gdańsk, located in the picturesque city of Gdańsk on the Baltic coast of Poland, is a prominent academic institution known for its rich history and commitment to excellence in education and research.",
                Email = "ug@ug.edu.pl",
                PhoneNumber = "+48 94354599",
                WebsiteUrl = "https://ug.edu.pl",
                Latitude = 54.23,
                Longitude = 18.34,
                AddressId = 2
            },
            new University
            {
                Id = 3,
                Name = "AGH",
                Description = "AGH University of Science and Technology, located in the historic city of Kraków, Poland, is a prestigious academic institution celebrated for its strong focus on science, engineering, and technology. Established in 1919, AGH has a storied history of providing high-quality education and conducting cutting-edge research.",
                Email = "agh@agh.edu.pl",
                PhoneNumber = "+48 953443553",
                WebsiteUrl = "https://www.agh.edu.pl",
                Latitude = 54.03,
                Longitude = 19.55,
                AddressId = 3
            }
            );
    }
}
