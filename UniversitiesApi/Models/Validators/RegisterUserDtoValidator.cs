using FluentValidation;
using UniversitiesApi.Db;

namespace UniversitiesApi.Models.Validators;

public class RegisterUserDtoValidator : AbstractValidator<RegisterUserDto>
{
    public RegisterUserDtoValidator(UniversitiesDbContext dbContext)
    {
        RuleFor(x => x.Email)
            .NotEmpty()
            .EmailAddress();

        RuleFor(x => x.Password)
            .MinimumLength(6);

        RuleFor(x => x.ConfirmPassword)
            .Equal(y => y.Password);

        RuleFor(x => x.Email)
            .Custom((value, context) =>
            {
                if (dbContext.Users.Any(y => y.Email == value)) 
                    context.AddFailure("Email", "That email is taken");
            });
    }
}
