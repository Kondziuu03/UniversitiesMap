using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using UniversitiesApi.Entities;

namespace UniversitiesApi.Db.Configurations;

public class UserConfiguration : IEntityTypeConfiguration<User>
{
    public void Configure(EntityTypeBuilder<User> builder)
    {
        builder.ToTable("Users");

        builder.Property(a => a.Email)
               .IsRequired()
               .HasMaxLength(50);

        builder.Property(a => a.FirstName)
            .IsRequired()
            .HasMaxLength(50);

        builder.Property(a => a.LastName)
            .IsRequired()
            .HasMaxLength(50);
    }
}
