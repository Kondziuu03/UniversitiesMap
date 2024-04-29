using System.Reflection;
using Microsoft.EntityFrameworkCore;
using UniversitiesApi.Db.Extensions;
using UniversitiesApi.Entities;

namespace UniversitiesApi.Db;

public class UniversitiesDbContext : DbContext
{
    public UniversitiesDbContext(DbContextOptions<UniversitiesDbContext> options) : base(options) { }

    public DbSet<Address> Addresses { get; set; }
    public DbSet<University> Universities { get; set; }
    public DbSet<User> Users { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());

        modelBuilder.SeedAddresses();
        modelBuilder.SeedUniversities();

        base.OnModelCreating(modelBuilder);
    }
}
