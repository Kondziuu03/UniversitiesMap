using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace UniversitiesApi.Migrations
{
    /// <inheritdoc />
    public partial class Init : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Addresses",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    City = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    Street = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    PostalCode = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Addresses", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Universities",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Latitude = table.Column<double>(type: "float", nullable: false),
                    Longitude = table.Column<double>(type: "float", nullable: false),
                    WebsiteUrl = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PhoneNumber = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    AddressId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Universities", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Universities_Addresses_AddressId",
                        column: x => x.AddressId,
                        principalTable: "Addresses",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.InsertData(
                table: "Addresses",
                columns: new[] { "Id", "City", "PostalCode", "Street" },
                values: new object[,]
                {
                    { 1, "Gdańsk", "80-233", "Gabriela Narutowicza 11/12" },
                    { 2, "Gdańsk", "80-309", "Jana Bażyńskiego 8" },
                    { 3, "Kraków", "30-059", "Mickiewicza 30" }
                });

            migrationBuilder.InsertData(
                table: "Universities",
                columns: new[] { "Id", "AddressId", "Description", "Email", "Latitude", "Longitude", "Name", "PhoneNumber", "WebsiteUrl" },
                values: new object[,]
                {
                    { 1, 1, "Politechnika Gdańska, commonly known as the Gdańsk University of Technology (PG), is a prestigious technical university located in Gdańsk, Poland. Established in 1904, PG has a rich history of providing high-quality education in engineering, technology, and science. The university is recognized for its commitment to innovation, research excellence, and fostering a collaborative learning environment.", "pg@pg.edu.pl", 54.219999999999999, 18.359999999999999, "Politechnika Gdańska", "+48 123456789", "https://pg.edu.pl" },
                    { 2, 2, "The University of Gdańsk, located in the picturesque city of Gdańsk on the Baltic coast of Poland, is a prominent academic institution known for its rich history and commitment to excellence in education and research.", "ug@ug.edu.pl", 54.229999999999997, 18.34, "Uniwersytet Gdański", "+48 94354599", "https://ug.edu.pl" },
                    { 3, 3, "AGH University of Science and Technology, located in the historic city of Kraków, Poland, is a prestigious academic institution celebrated for its strong focus on science, engineering, and technology. Established in 1919, AGH has a storied history of providing high-quality education and conducting cutting-edge research.", "agh@agh.edu.pl", 54.030000000000001, 19.550000000000001, "AGH", "+48 953443553", "https://www.agh.edu.pl" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_Universities_AddressId",
                table: "Universities",
                column: "AddressId",
                unique: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Universities");

            migrationBuilder.DropTable(
                name: "Addresses");
        }
    }
}
