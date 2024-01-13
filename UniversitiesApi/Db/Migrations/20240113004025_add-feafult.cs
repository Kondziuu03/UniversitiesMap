using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace UniversitiesApi.Migrations
{
    public partial class addfeafult : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Universities_Addresses_AddressId",
                table: "Universities");

            migrationBuilder.AlterColumn<string>(
                name: "Name",
                table: "Universities",
                type: "varchar(50)",
                maxLength: 50,
                nullable: false,
                oldClrType: typeof(string),
                oldType: "longtext")
                .Annotation("MySql:CharSet", "utf8mb4")
                .OldAnnotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AlterColumn<string>(
                name: "Street",
                table: "Addresses",
                type: "varchar(50)",
                maxLength: 50,
                nullable: false,
                oldClrType: typeof(string),
                oldType: "longtext")
                .Annotation("MySql:CharSet", "utf8mb4")
                .OldAnnotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AlterColumn<string>(
                name: "City",
                table: "Addresses",
                type: "varchar(50)",
                maxLength: 50,
                nullable: false,
                oldClrType: typeof(string),
                oldType: "longtext")
                .Annotation("MySql:CharSet", "utf8mb4")
                .OldAnnotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.InsertData(
                table: "Addresses",
                columns: new[] { "Id", "City", "PostalCode", "Street" },
                values: new object[] { 1, "Gdańsk", "80-233", "Gabriela Narutowicza 11/12" });

            migrationBuilder.InsertData(
                table: "Addresses",
                columns: new[] { "Id", "City", "PostalCode", "Street" },
                values: new object[] { 2, "Gdańsk", "80-309", "Jana Bażyńskiego 8" });

            migrationBuilder.InsertData(
                table: "Addresses",
                columns: new[] { "Id", "City", "PostalCode", "Street" },
                values: new object[] { 3, "Kraków", "30-059", "Mickiewicza 30" });

            migrationBuilder.InsertData(
                table: "Universities",
                columns: new[] { "Id", "AddressId", "Category", "Description", "Email", "Latitude", "Longitude", "Name", "PhoneNumber", "WebsiteUrl" },
                values: new object[] { 1, 1, 0, "Politechnika Gdańska, commonly known as the Gdańsk University of Technology (PG), is a prestigious technical university located in Gdańsk, Poland. Established in 1904, PG has a rich history of providing high-quality education in engineering, technology, and science. The university is recognized for its commitment to innovation, research excellence, and fostering a collaborative learning environment.", "pg@pg.edu.pl", 54.219999999999999, 18.359999999999999, "Politechnika Gdańska", "+48 123456789", "https://pg.edu.pl" });

            migrationBuilder.InsertData(
                table: "Universities",
                columns: new[] { "Id", "AddressId", "Category", "Description", "Email", "Latitude", "Longitude", "Name", "PhoneNumber", "WebsiteUrl" },
                values: new object[] { 2, 2, 1, "The University of Gdańsk, located in the picturesque city of Gdańsk on the Baltic coast of Poland, is a prominent academic institution known for its rich history and commitment to excellence in education and research.", "ug@ug.edu.pl", 54.229999999999997, 18.34, "Uniwersytet Gdański", "+48 94354599", "https://ug.edu.pl" });

            migrationBuilder.InsertData(
                table: "Universities",
                columns: new[] { "Id", "AddressId", "Category", "Description", "Email", "Latitude", "Longitude", "Name", "PhoneNumber", "WebsiteUrl" },
                values: new object[] { 3, 3, 0, "AGH University of Science and Technology, located in the historic city of Kraków, Poland, is a prestigious academic institution celebrated for its strong focus on science, engineering, and technology. Established in 1919, AGH has a storied history of providing high-quality education and conducting cutting-edge research.", "agh@agh.edu.pl", 54.030000000000001, 19.550000000000001, "AGH", "+48 953443553", "https://www.agh.edu.pl" });

            migrationBuilder.AddForeignKey(
                name: "FK_Universities_Addresses_AddressId",
                table: "Universities",
                column: "AddressId",
                principalTable: "Addresses",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Universities_Addresses_AddressId",
                table: "Universities");

            migrationBuilder.DeleteData(
                table: "Universities",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Universities",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Universities",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Addresses",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Addresses",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Addresses",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.AlterColumn<string>(
                name: "Name",
                table: "Universities",
                type: "longtext",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "varchar(50)",
                oldMaxLength: 50)
                .Annotation("MySql:CharSet", "utf8mb4")
                .OldAnnotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AlterColumn<string>(
                name: "Street",
                table: "Addresses",
                type: "longtext",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "varchar(50)",
                oldMaxLength: 50)
                .Annotation("MySql:CharSet", "utf8mb4")
                .OldAnnotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AlterColumn<string>(
                name: "City",
                table: "Addresses",
                type: "longtext",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "varchar(50)",
                oldMaxLength: 50)
                .Annotation("MySql:CharSet", "utf8mb4")
                .OldAnnotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AddForeignKey(
                name: "FK_Universities_Addresses_AddressId",
                table: "Universities",
                column: "AddressId",
                principalTable: "Addresses",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
