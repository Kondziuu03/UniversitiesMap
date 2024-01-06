using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using UniversitiesApi.Entities;

namespace UniversitiesApi.Db.Configurations;

public class UniversityConfiguration : IEntityTypeConfiguration<University>
{
    public void Configure(EntityTypeBuilder<University> builder)
    {
        builder.ToTable("Universities");

        builder.Property(u => u.Name)
            .HasMaxLength(50)
            .IsRequired();

        builder
            .HasOne(x => x.Address)
            .WithOne(x => x.University)
            .HasForeignKey<University>(x => x.AddressId)
            .OnDelete(DeleteBehavior.Restrict);
    }
}
