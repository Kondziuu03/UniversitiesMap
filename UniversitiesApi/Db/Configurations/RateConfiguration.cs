using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using UniversitiesApi.Entities;

namespace UniversitiesApi.Db.Configurations;

public class RateConfiguration : IEntityTypeConfiguration<Rate>
{
    public void Configure(EntityTypeBuilder<Rate> builder)
    {
        builder.ToTable("Rates");

        builder.Property(u => u.Comment)
            .HasMaxLength(200)
            .IsRequired();

        builder
            .HasOne(x => x.University)
            .WithMany(x => x.Rates)
            .HasForeignKey(x => x.UniversityId)
            .OnDelete(DeleteBehavior.Cascade);

        builder
            .HasOne(x => x.User)
            .WithMany(x => x.Rates)
            .HasForeignKey(x => x.UserId)
            .OnDelete(DeleteBehavior.Cascade);
    }
}
