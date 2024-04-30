using FluentValidation;

namespace UniversitiesApi.Models.Validators;

public class RateDtoValidator : AbstractValidator<RateDto>
{
    public RateDtoValidator()
    {
        RuleFor(x => x.RateValue)
            .GreaterThanOrEqualTo(1);

        RuleFor(x => x.RateValue)
            .LessThanOrEqualTo(5);
    }
}
