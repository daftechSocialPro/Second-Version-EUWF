﻿// <auto-generated />
using System;
using DAFwebAPI.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace DAFwebAPI.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    [Migration("20231106130753_climate")]
    partial class climate
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.10")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder, 1L, 1);

            modelBuilder.Entity("DAFwebAPI.Entities.Answer", b =>
                {
                    b.Property<Guid>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Answers")
                        .HasColumnType("nvarchar(max)");

                    b.Property<Guid?>("QuestionerId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid?>("QuestionsId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid?>("RegionalWaterFederationId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid?>("WaterUtilityId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<DateTime>("createdAt")
                        .HasColumnType("datetime2");

                    b.Property<Guid?>("createdBy")
                        .HasColumnType("uniqueidentifier");

                    b.Property<DateTime>("updatedAt")
                        .HasColumnType("datetime2");

                    b.HasKey("ID");

                    b.HasIndex("QuestionerId");

                    b.HasIndex("QuestionsId");

                    b.HasIndex("RegionalWaterFederationId");

                    b.HasIndex("WaterUtilityId");

                    b.ToTable("Answers");
                });

            modelBuilder.Entity("DAFwebAPI.Entities.BoardMember", b =>
                {
                    b.Property<Guid>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("BirthDate")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Description")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("InActiveDescription")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("IsActive")
                        .HasColumnType("bit");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Position")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("UserPhoto")
                        .HasColumnType("nvarchar(max)");

                    b.Property<Guid>("WaterFederationId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<DateTime>("createdAt")
                        .HasColumnType("datetime2");

                    b.Property<Guid?>("createdBy")
                        .HasColumnType("uniqueidentifier");

                    b.Property<DateTime>("updatedAt")
                        .HasColumnType("datetime2");

                    b.HasKey("ID");

                    b.HasIndex("WaterFederationId");

                    b.ToTable("BoardMembers");
                });

            modelBuilder.Entity("DAFwebAPI.Entities.Choices", b =>
                {
                    b.Property<Guid>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Choice")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<Guid>("QuestionId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<DateTime>("createdAt")
                        .HasColumnType("datetime2");

                    b.Property<Guid?>("createdBy")
                        .HasColumnType("uniqueidentifier");

                    b.Property<DateTime>("updatedAt")
                        .HasColumnType("datetime2");

                    b.HasKey("ID");

                    b.HasIndex("QuestionId");

                    b.ToTable("Choices");
                });

            modelBuilder.Entity("DAFwebAPI.Entities.Climate", b =>
                {
                    b.Property<Guid>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ImagePath")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Title")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("createdAt")
                        .HasColumnType("datetime2");

                    b.Property<Guid?>("createdBy")
                        .HasColumnType("uniqueidentifier");

                    b.Property<DateTime>("updatedAt")
                        .HasColumnType("datetime2");

                    b.HasKey("ID");

                    b.ToTable("Climates");
                });

            modelBuilder.Entity("DAFwebAPI.Entities.Contact", b =>
                {
                    b.Property<Guid>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Email")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Message")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Subject")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("createdAt")
                        .HasColumnType("datetime2");

                    b.Property<Guid?>("createdBy")
                        .HasColumnType("uniqueidentifier");

                    b.Property<DateTime>("updatedAt")
                        .HasColumnType("datetime2");

                    b.HasKey("ID");

                    b.ToTable("Contacts");
                });

            modelBuilder.Entity("DAFwebAPI.Entities.Forum", b =>
                {
                    b.Property<Guid>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("AmharicDescription")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Description")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Img")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("IsForumEvent")
                        .HasColumnType("int");

                    b.Property<string>("Title")
                        .HasColumnType("nvarchar(max)");

                    b.Property<Guid>("WaterFederationId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<DateTime>("createdAt")
                        .HasColumnType("datetime2");

                    b.Property<Guid?>("createdBy")
                        .HasColumnType("uniqueidentifier");

                    b.Property<DateTime>("updatedAt")
                        .HasColumnType("datetime2");

                    b.HasKey("ID");

                    b.HasIndex("WaterFederationId");

                    b.ToTable("Forums");
                });

            modelBuilder.Entity("DAFwebAPI.Entities.Gallery", b =>
                {
                    b.Property<Guid>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("ImagePath")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Title")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("createdAt")
                        .HasColumnType("datetime2");

                    b.Property<Guid?>("createdBy")
                        .HasColumnType("uniqueidentifier");

                    b.Property<DateTime>("updatedAt")
                        .HasColumnType("datetime2");

                    b.HasKey("ID");

                    b.ToTable("Galleries");
                });

            modelBuilder.Entity("DAFwebAPI.Entities.News", b =>
                {
                    b.Property<Guid>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Description")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Img")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("SubTitle")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Title")
                        .HasColumnType("nvarchar(max)");

                    b.Property<Guid>("WaterFederationId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<DateTime>("createdAt")
                        .HasColumnType("datetime2");

                    b.Property<Guid?>("createdBy")
                        .HasColumnType("uniqueidentifier");

                    b.Property<bool>("isApproved")
                        .HasColumnType("bit");

                    b.Property<DateTime>("updatedAt")
                        .HasColumnType("datetime2");

                    b.HasKey("ID");

                    b.HasIndex("WaterFederationId");

                    b.ToTable("News");
                });

            modelBuilder.Entity("DAFwebAPI.Entities.Questioner", b =>
                {
                    b.Property<Guid>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<int?>("ForWhom")
                        .HasColumnType("int");

                    b.Property<int?>("Status")
                        .HasColumnType("int");

                    b.Property<DateTime>("SubmittedDate")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("createdAt")
                        .HasColumnType("datetime2");

                    b.Property<Guid?>("createdBy")
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("title")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("updatedAt")
                        .HasColumnType("datetime2");

                    b.HasKey("ID");

                    b.ToTable("Questioners");
                });

            modelBuilder.Entity("DAFwebAPI.Entities.Questions", b =>
                {
                    b.Property<Guid>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<int>("AnswerType")
                        .HasColumnType("int");

                    b.Property<bool>("IncludeDashboard")
                        .HasColumnType("bit");

                    b.Property<bool>("IncludeReport")
                        .HasColumnType("bit");

                    b.Property<int>("NumberOfChoise")
                        .HasColumnType("int");

                    b.Property<int>("NumberOfRows")
                        .HasColumnType("int");

                    b.Property<string>("Question")
                        .HasColumnType("nvarchar(max)");

                    b.Property<Guid>("QuestionerId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<DateTime>("createdAt")
                        .HasColumnType("datetime2");

                    b.Property<Guid?>("createdBy")
                        .HasColumnType("uniqueidentifier");

                    b.Property<DateTime>("updatedAt")
                        .HasColumnType("datetime2");

                    b.HasKey("ID");

                    b.HasIndex("QuestionerId");

                    b.ToTable("Questions");
                });

            modelBuilder.Entity("DAFwebAPI.Entities.Region", b =>
                {
                    b.Property<Guid>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("RegionName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("createdAt")
                        .HasColumnType("datetime2");

                    b.Property<Guid?>("createdBy")
                        .HasColumnType("uniqueidentifier");

                    b.Property<DateTime>("updatedAt")
                        .HasColumnType("datetime2");

                    b.HasKey("ID");

                    b.ToTable("Regions");
                });

            modelBuilder.Entity("DAFwebAPI.Entities.RegionalWaterFederation", b =>
                {
                    b.Property<Guid>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Description")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Email")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Logo")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Phone")
                        .HasColumnType("nvarchar(max)");

                    b.Property<Guid>("RegionId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid?>("UserId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("WebLink")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("createdAt")
                        .HasColumnType("datetime2");

                    b.Property<Guid?>("createdBy")
                        .HasColumnType("uniqueidentifier");

                    b.Property<DateTime>("updatedAt")
                        .HasColumnType("datetime2");

                    b.HasKey("ID");

                    b.HasIndex("RegionId");

                    b.HasIndex("UserId");

                    b.ToTable("RegionalWaterFederations");
                });

            modelBuilder.Entity("DAFwebAPI.Entities.Research", b =>
                {
                    b.Property<Guid>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("AmharicAuthor")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("AmharicDescription")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("AmharicTitle")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Author")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("AuthorImagePath")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Description")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("PublishedAt")
                        .HasColumnType("datetime2");

                    b.Property<string>("ResearchFilePath")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Title")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("createdAt")
                        .HasColumnType("datetime2");

                    b.Property<Guid?>("createdBy")
                        .HasColumnType("uniqueidentifier");

                    b.Property<DateTime>("updatedAt")
                        .HasColumnType("datetime2");

                    b.HasKey("ID");

                    b.ToTable("Researchs");
                });

            modelBuilder.Entity("DAFwebAPI.Entities.Sponsor", b =>
                {
                    b.Property<Guid>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("AmharicCompanyName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("BrocherPath")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("CompanyName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Description")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Logo")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("SponcerLevel")
                        .HasColumnType("int");

                    b.Property<int>("SupportType")
                        .HasColumnType("int");

                    b.Property<string>("WebLink")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("createdAt")
                        .HasColumnType("datetime2");

                    b.Property<Guid?>("createdBy")
                        .HasColumnType("uniqueidentifier");

                    b.Property<DateTime>("updatedAt")
                        .HasColumnType("datetime2");

                    b.HasKey("ID");

                    b.ToTable("Sponsors");
                });

            modelBuilder.Entity("DAFwebAPI.Entities.Subscriber", b =>
                {
                    b.Property<Guid>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.Property<DateTime>("createdAt")
                        .HasColumnType("datetime2");

                    b.Property<Guid?>("createdBy")
                        .HasColumnType("uniqueidentifier");

                    b.Property<DateTime>("updatedAt")
                        .HasColumnType("datetime2");

                    b.HasKey("ID");

                    b.HasIndex("Email")
                        .IsUnique();

                    b.ToTable("Subscribers");
                });

            modelBuilder.Entity("DAFwebAPI.Entities.Teams", b =>
                {
                    b.Property<Guid>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("ImagePath")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Position")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("createdAt")
                        .HasColumnType("datetime2");

                    b.Property<Guid?>("createdBy")
                        .HasColumnType("uniqueidentifier");

                    b.Property<DateTime>("updatedAt")
                        .HasColumnType("datetime2");

                    b.HasKey("ID");

                    b.ToTable("Teams");
                });

            modelBuilder.Entity("DAFwebAPI.Entities.Trainings", b =>
                {
                    b.Property<Guid>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("FilePath")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("MediaPath")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Title")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("createdAt")
                        .HasColumnType("datetime2");

                    b.Property<Guid?>("createdBy")
                        .HasColumnType("uniqueidentifier");

                    b.Property<DateTime>("updatedAt")
                        .HasColumnType("datetime2");

                    b.HasKey("ID");

                    b.ToTable("Trainings");
                });

            modelBuilder.Entity("DAFwebAPI.Entities.User", b =>
                {
                    b.Property<Guid>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("FullName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("IsActive")
                        .HasColumnType("bit");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("UserType")
                        .HasColumnType("int");

                    b.Property<DateTime>("createdAt")
                        .HasColumnType("datetime2");

                    b.Property<Guid?>("createdBy")
                        .HasColumnType("uniqueidentifier");

                    b.Property<DateTime>("updatedAt")
                        .HasColumnType("datetime2");

                    b.HasKey("ID");

                    b.HasIndex("Email")
                        .IsUnique();

                    b.ToTable("Users");
                });

            modelBuilder.Entity("DAFwebAPI.Entities.Vaccancy", b =>
                {
                    b.Property<Guid>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("AmharicDescription")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("AmharicTitle")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Company")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Description")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Email")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("FilePath")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("FromDateTime")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Title")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ToDateTime")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<Guid?>("UserId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<DateTime>("createdAt")
                        .HasColumnType("datetime2");

                    b.Property<Guid?>("createdBy")
                        .HasColumnType("uniqueidentifier");

                    b.Property<DateTime>("updatedAt")
                        .HasColumnType("datetime2");

                    b.HasKey("ID");

                    b.HasIndex("UserId");

                    b.ToTable("Vaccancies");
                });

            modelBuilder.Entity("DAFwebAPI.Entities.WaterUtility", b =>
                {
                    b.Property<Guid>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Description")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Distributionkm")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Email")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Establisheddate")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Kmfromaa")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Logo")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Mainpresure")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Noemployees")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Phone")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Prodcapa")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Purification")
                        .HasColumnType("nvarchar(max)");

                    b.Property<Guid>("RegionalWaterFederationId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Reservwire")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Source")
                        .HasColumnType("nvarchar(max)");

                    b.Property<Guid?>("UserId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("WebLink")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("createdAt")
                        .HasColumnType("datetime2");

                    b.Property<Guid?>("createdBy")
                        .HasColumnType("uniqueidentifier");

                    b.Property<DateTime>("updatedAt")
                        .HasColumnType("datetime2");

                    b.HasKey("ID");

                    b.HasIndex("RegionalWaterFederationId");

                    b.HasIndex("UserId");

                    b.ToTable("waterUtilities");
                });

            modelBuilder.Entity("DAFwebAPI.Entities.Answer", b =>
                {
                    b.HasOne("DAFwebAPI.Entities.Questioner", "Questioner")
                        .WithMany()
                        .HasForeignKey("QuestionerId");

                    b.HasOne("DAFwebAPI.Entities.Questions", "Questions")
                        .WithMany()
                        .HasForeignKey("QuestionsId");

                    b.HasOne("DAFwebAPI.Entities.RegionalWaterFederation", "RegionalWaterFederation")
                        .WithMany()
                        .HasForeignKey("RegionalWaterFederationId");

                    b.HasOne("DAFwebAPI.Entities.WaterUtility", "WaterUtility")
                        .WithMany()
                        .HasForeignKey("WaterUtilityId");

                    b.Navigation("Questioner");

                    b.Navigation("Questions");

                    b.Navigation("RegionalWaterFederation");

                    b.Navigation("WaterUtility");
                });

            modelBuilder.Entity("DAFwebAPI.Entities.BoardMember", b =>
                {
                    b.HasOne("DAFwebAPI.Entities.User", "WaterFederation")
                        .WithMany()
                        .HasForeignKey("WaterFederationId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("WaterFederation");
                });

            modelBuilder.Entity("DAFwebAPI.Entities.Choices", b =>
                {
                    b.HasOne("DAFwebAPI.Entities.Questions", "Question")
                        .WithMany()
                        .HasForeignKey("QuestionId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Question");
                });

            modelBuilder.Entity("DAFwebAPI.Entities.Forum", b =>
                {
                    b.HasOne("DAFwebAPI.Entities.User", "WaterFederation")
                        .WithMany()
                        .HasForeignKey("WaterFederationId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("WaterFederation");
                });

            modelBuilder.Entity("DAFwebAPI.Entities.News", b =>
                {
                    b.HasOne("DAFwebAPI.Entities.User", "WaterFederation")
                        .WithMany()
                        .HasForeignKey("WaterFederationId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("WaterFederation");
                });

            modelBuilder.Entity("DAFwebAPI.Entities.Questions", b =>
                {
                    b.HasOne("DAFwebAPI.Entities.Questioner", "Questioner")
                        .WithMany()
                        .HasForeignKey("QuestionerId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Questioner");
                });

            modelBuilder.Entity("DAFwebAPI.Entities.RegionalWaterFederation", b =>
                {
                    b.HasOne("DAFwebAPI.Entities.Region", "Region")
                        .WithMany()
                        .HasForeignKey("RegionId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("DAFwebAPI.Entities.User", "User")
                        .WithMany()
                        .HasForeignKey("UserId");

                    b.Navigation("Region");

                    b.Navigation("User");
                });

            modelBuilder.Entity("DAFwebAPI.Entities.Vaccancy", b =>
                {
                    b.HasOne("DAFwebAPI.Entities.User", "User")
                        .WithMany()
                        .HasForeignKey("UserId");

                    b.Navigation("User");
                });

            modelBuilder.Entity("DAFwebAPI.Entities.WaterUtility", b =>
                {
                    b.HasOne("DAFwebAPI.Entities.RegionalWaterFederation", "RegionalWaterFederation")
                        .WithMany()
                        .HasForeignKey("RegionalWaterFederationId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("DAFwebAPI.Entities.User", "User")
                        .WithMany()
                        .HasForeignKey("UserId");

                    b.Navigation("RegionalWaterFederation");

                    b.Navigation("User");
                });
#pragma warning restore 612, 618
        }
    }
}