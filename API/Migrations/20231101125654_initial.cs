using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DAFwebAPI.Migrations
{
    public partial class initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Contacts",
                columns: table => new
                {
                    ID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Subject = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Message = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    createdBy = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    createdAt = table.Column<DateTime>(type: "datetime2", nullable: false),
                    updatedAt = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Contacts", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Galleries",
                columns: table => new
                {
                    ID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Title = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ImagePath = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    createdBy = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    createdAt = table.Column<DateTime>(type: "datetime2", nullable: false),
                    updatedAt = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Galleries", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Questioners",
                columns: table => new
                {
                    ID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    title = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ForWhom = table.Column<int>(type: "int", nullable: true),
                    SubmittedDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Status = table.Column<int>(type: "int", nullable: true),
                    createdBy = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    createdAt = table.Column<DateTime>(type: "datetime2", nullable: false),
                    updatedAt = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Questioners", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Regions",
                columns: table => new
                {
                    ID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    RegionName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    createdBy = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    createdAt = table.Column<DateTime>(type: "datetime2", nullable: false),
                    updatedAt = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Regions", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Researchs",
                columns: table => new
                {
                    ID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Author = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    AuthorImagePath = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Title = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    AmharicAuthor = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    AmharicTitle = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    AmharicDescription = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ResearchFilePath = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PublishedAt = table.Column<DateTime>(type: "datetime2", nullable: false),
                    createdBy = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    createdAt = table.Column<DateTime>(type: "datetime2", nullable: false),
                    updatedAt = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Researchs", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Sponsors",
                columns: table => new
                {
                    ID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    CompanyName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    AmharicCompanyName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Logo = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SponcerLevel = table.Column<int>(type: "int", nullable: true),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SupportType = table.Column<int>(type: "int", nullable: false),
                    WebLink = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    BrocherPath = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    createdBy = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    createdAt = table.Column<DateTime>(type: "datetime2", nullable: false),
                    updatedAt = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Sponsors", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Subscribers",
                columns: table => new
                {
                    ID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    createdBy = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    createdAt = table.Column<DateTime>(type: "datetime2", nullable: false),
                    updatedAt = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Subscribers", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Teams",
                columns: table => new
                {
                    ID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Position = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ImagePath = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    createdBy = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    createdAt = table.Column<DateTime>(type: "datetime2", nullable: false),
                    updatedAt = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Teams", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Trainings",
                columns: table => new
                {
                    ID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Title = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    MediaPath = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    FilePath = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    createdBy = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    createdAt = table.Column<DateTime>(type: "datetime2", nullable: false),
                    updatedAt = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Trainings", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    ID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    FullName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    IsActive = table.Column<bool>(type: "bit", nullable: false),
                    UserType = table.Column<int>(type: "int", nullable: false),
                    Password = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    createdBy = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    createdAt = table.Column<DateTime>(type: "datetime2", nullable: false),
                    updatedAt = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Questions",
                columns: table => new
                {
                    ID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Question = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    AnswerType = table.Column<int>(type: "int", nullable: false),
                    IncludeReport = table.Column<bool>(type: "bit", nullable: false),
                    IncludeDashboard = table.Column<bool>(type: "bit", nullable: false),
                    NumberOfRows = table.Column<int>(type: "int", nullable: false),
                    NumberOfChoise = table.Column<int>(type: "int", nullable: false),
                    QuestionerId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    createdBy = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    createdAt = table.Column<DateTime>(type: "datetime2", nullable: false),
                    updatedAt = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Questions", x => x.ID);
                    table.ForeignKey(
                        name: "FK_Questions_Questioners_QuestionerId",
                        column: x => x.QuestionerId,
                        principalTable: "Questioners",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "BoardMembers",
                columns: table => new
                {
                    ID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    WaterFederationId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Position = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    UserPhoto = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    BirthDate = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    IsActive = table.Column<bool>(type: "bit", nullable: false),
                    InActiveDescription = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    createdBy = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    createdAt = table.Column<DateTime>(type: "datetime2", nullable: false),
                    updatedAt = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BoardMembers", x => x.ID);
                    table.ForeignKey(
                        name: "FK_BoardMembers_Users_WaterFederationId",
                        column: x => x.WaterFederationId,
                        principalTable: "Users",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Forums",
                columns: table => new
                {
                    ID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Title = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Img = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    IsForumEvent = table.Column<int>(type: "int", nullable: false),
                    AmharicDescription = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    WaterFederationId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    createdBy = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    createdAt = table.Column<DateTime>(type: "datetime2", nullable: false),
                    updatedAt = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Forums", x => x.ID);
                    table.ForeignKey(
                        name: "FK_Forums_Users_WaterFederationId",
                        column: x => x.WaterFederationId,
                        principalTable: "Users",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "News",
                columns: table => new
                {
                    ID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Title = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SubTitle = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Img = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    isApproved = table.Column<bool>(type: "bit", nullable: false),
                    WaterFederationId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    createdBy = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    createdAt = table.Column<DateTime>(type: "datetime2", nullable: false),
                    updatedAt = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_News", x => x.ID);
                    table.ForeignKey(
                        name: "FK_News_Users_WaterFederationId",
                        column: x => x.WaterFederationId,
                        principalTable: "Users",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "RegionalWaterFederations",
                columns: table => new
                {
                    ID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Logo = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Phone = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    RegionId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    WebLink = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    UserId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    createdBy = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    createdAt = table.Column<DateTime>(type: "datetime2", nullable: false),
                    updatedAt = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RegionalWaterFederations", x => x.ID);
                    table.ForeignKey(
                        name: "FK_RegionalWaterFederations_Regions_RegionId",
                        column: x => x.RegionId,
                        principalTable: "Regions",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_RegionalWaterFederations_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "ID");
                });

            migrationBuilder.CreateTable(
                name: "Vaccancies",
                columns: table => new
                {
                    ID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Title = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    AmharicTitle = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    FromDateTime = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ToDateTime = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    AmharicDescription = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    FilePath = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Company = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    UserId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    createdBy = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    createdAt = table.Column<DateTime>(type: "datetime2", nullable: false),
                    updatedAt = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Vaccancies", x => x.ID);
                    table.ForeignKey(
                        name: "FK_Vaccancies_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "ID");
                });

            migrationBuilder.CreateTable(
                name: "Choices",
                columns: table => new
                {
                    ID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Choice = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    QuestionId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    createdBy = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    createdAt = table.Column<DateTime>(type: "datetime2", nullable: false),
                    updatedAt = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Choices", x => x.ID);
                    table.ForeignKey(
                        name: "FK_Choices_Questions_QuestionId",
                        column: x => x.QuestionId,
                        principalTable: "Questions",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "waterUtilities",
                columns: table => new
                {
                    ID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Logo = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Phone = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Prodcapa = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Purification = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Reservwire = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Mainpresure = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Distributionkm = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Noemployees = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Source = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Establisheddate = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Kmfromaa = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    WebLink = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    RegionalWaterFederationId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    UserId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    createdBy = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    createdAt = table.Column<DateTime>(type: "datetime2", nullable: false),
                    updatedAt = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_waterUtilities", x => x.ID);
                    table.ForeignKey(
                        name: "FK_waterUtilities_RegionalWaterFederations_RegionalWaterFederationId",
                        column: x => x.RegionalWaterFederationId,
                        principalTable: "RegionalWaterFederations",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_waterUtilities_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "ID");
                });

            migrationBuilder.CreateTable(
                name: "Answers",
                columns: table => new
                {
                    ID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    QuestionsId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    Answers = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    QuestionerId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    WaterUtilityId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    RegionalWaterFederationId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    createdBy = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    createdAt = table.Column<DateTime>(type: "datetime2", nullable: false),
                    updatedAt = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Answers", x => x.ID);
                    table.ForeignKey(
                        name: "FK_Answers_Questioners_QuestionerId",
                        column: x => x.QuestionerId,
                        principalTable: "Questioners",
                        principalColumn: "ID");
                    table.ForeignKey(
                        name: "FK_Answers_Questions_QuestionsId",
                        column: x => x.QuestionsId,
                        principalTable: "Questions",
                        principalColumn: "ID");
                    table.ForeignKey(
                        name: "FK_Answers_RegionalWaterFederations_RegionalWaterFederationId",
                        column: x => x.RegionalWaterFederationId,
                        principalTable: "RegionalWaterFederations",
                        principalColumn: "ID");
                    table.ForeignKey(
                        name: "FK_Answers_waterUtilities_WaterUtilityId",
                        column: x => x.WaterUtilityId,
                        principalTable: "waterUtilities",
                        principalColumn: "ID");
                });

            migrationBuilder.CreateIndex(
                name: "IX_Answers_QuestionerId",
                table: "Answers",
                column: "QuestionerId");

            migrationBuilder.CreateIndex(
                name: "IX_Answers_QuestionsId",
                table: "Answers",
                column: "QuestionsId");

            migrationBuilder.CreateIndex(
                name: "IX_Answers_RegionalWaterFederationId",
                table: "Answers",
                column: "RegionalWaterFederationId");

            migrationBuilder.CreateIndex(
                name: "IX_Answers_WaterUtilityId",
                table: "Answers",
                column: "WaterUtilityId");

            migrationBuilder.CreateIndex(
                name: "IX_BoardMembers_WaterFederationId",
                table: "BoardMembers",
                column: "WaterFederationId");

            migrationBuilder.CreateIndex(
                name: "IX_Choices_QuestionId",
                table: "Choices",
                column: "QuestionId");

            migrationBuilder.CreateIndex(
                name: "IX_Forums_WaterFederationId",
                table: "Forums",
                column: "WaterFederationId");

            migrationBuilder.CreateIndex(
                name: "IX_News_WaterFederationId",
                table: "News",
                column: "WaterFederationId");

            migrationBuilder.CreateIndex(
                name: "IX_Questions_QuestionerId",
                table: "Questions",
                column: "QuestionerId");

            migrationBuilder.CreateIndex(
                name: "IX_RegionalWaterFederations_RegionId",
                table: "RegionalWaterFederations",
                column: "RegionId");

            migrationBuilder.CreateIndex(
                name: "IX_RegionalWaterFederations_UserId",
                table: "RegionalWaterFederations",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_Subscribers_Email",
                table: "Subscribers",
                column: "Email",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Users_Email",
                table: "Users",
                column: "Email",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Vaccancies_UserId",
                table: "Vaccancies",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_waterUtilities_RegionalWaterFederationId",
                table: "waterUtilities",
                column: "RegionalWaterFederationId");

            migrationBuilder.CreateIndex(
                name: "IX_waterUtilities_UserId",
                table: "waterUtilities",
                column: "UserId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Answers");

            migrationBuilder.DropTable(
                name: "BoardMembers");

            migrationBuilder.DropTable(
                name: "Choices");

            migrationBuilder.DropTable(
                name: "Contacts");

            migrationBuilder.DropTable(
                name: "Forums");

            migrationBuilder.DropTable(
                name: "Galleries");

            migrationBuilder.DropTable(
                name: "News");

            migrationBuilder.DropTable(
                name: "Researchs");

            migrationBuilder.DropTable(
                name: "Sponsors");

            migrationBuilder.DropTable(
                name: "Subscribers");

            migrationBuilder.DropTable(
                name: "Teams");

            migrationBuilder.DropTable(
                name: "Trainings");

            migrationBuilder.DropTable(
                name: "Vaccancies");

            migrationBuilder.DropTable(
                name: "waterUtilities");

            migrationBuilder.DropTable(
                name: "Questions");

            migrationBuilder.DropTable(
                name: "RegionalWaterFederations");

            migrationBuilder.DropTable(
                name: "Questioners");

            migrationBuilder.DropTable(
                name: "Regions");

            migrationBuilder.DropTable(
                name: "Users");
        }
    }
}
