using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using UniversitiesApi.Entities;

namespace UniversitiesApi.Db.Configurations;

public class AddressConfiguration : IEntityTypeConfiguration<Address>
{
    public void Configure(EntityTypeBuilder<Address> builder)
    {
        builder.ToTable("Addresses");

        builder.Property(a => a.City)
               .IsRequired()
               .HasMaxLength(50);

        builder.Property(a => a.Street)
            .IsRequired()
            .HasMaxLength(50);
    }
}
