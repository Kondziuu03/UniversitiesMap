using Microsoft.EntityFrameworkCore;
using NLog.Web;
using UniversitiesApi.Db;
using UniversitiesApi.Middleware;
using UniversitiesApi.Services.Implementations;
using UniversitiesApi.Services.Interfaces;

var builder = WebApplication.CreateBuilder(args);

builder.Logging.ClearProviders();
builder.Logging.SetMinimumLevel(LogLevel.Information);
builder.Logging.AddNLogWeb();

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());
builder.Services.AddScoped<IUniversityService, UniversityService>();
builder.Services.AddScoped<ErrorHandlingMiddleware>();

var connectionString = builder.Configuration.GetConnectionString("UniversitiesDbConnection");
builder.Services.AddDbContext<UniversitiesDbContext>
                (options => options.UseSqlServer(connectionString));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseMiddleware<ErrorHandlingMiddleware>();
app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
