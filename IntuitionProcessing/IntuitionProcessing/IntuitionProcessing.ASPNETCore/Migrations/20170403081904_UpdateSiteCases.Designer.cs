using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using IntuitionProcessing.ASPNETCore.Data;
using IntuitionProcessing.Models;

namespace IntuitionProcessing.ASPNETCore.Migrations
{
    [DbContext(typeof(ProcessingDbContext))]
    [Migration("20170403081904_UpdateSiteCases")]
    partial class UpdateSiteCases
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.1.1")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("IntuitionProcessing.Models.AccManager", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Mail");

                    b.Property<string>("Name");

                    b.Property<string>("Phone");

                    b.HasKey("Id");

                    b.ToTable("AccManagers");
                });

            modelBuilder.Entity("IntuitionProcessing.Models.Action", b =>
                {
                    b.Property<int>("ActionId")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("ActionDtTm");

                    b.Property<int?>("CaseId");

                    b.Property<string>("Message");

                    b.Property<string>("Receiver");

                    b.Property<string>("Sender");

                    b.Property<int>("Type");

                    b.HasKey("ActionId");

                    b.HasIndex("CaseId");

                    b.ToTable("Actions");
                });

            modelBuilder.Entity("IntuitionProcessing.Models.Case", b =>
                {
                    b.Property<int>("CaseId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("AssignedTo");

                    b.Property<DateTime>("CreationDtTm");

                    b.Property<string>("Description");

                    b.Property<string>("TicketID");

                    b.Property<string>("TicketURL");

                    b.HasKey("CaseId");

                    b.ToTable("Cases");
                });

            modelBuilder.Entity("IntuitionProcessing.Models.Client", b =>
                {
                    b.Property<int>("ClientId")
                        .ValueGeneratedOnAdd();

                    b.Property<int?>("AccManagerId");

                    b.Property<string>("ClientComment");

                    b.Property<string>("Code");

                    b.Property<string>("Name");

                    b.HasKey("ClientId");

                    b.HasIndex("AccManagerId");

                    b.ToTable("Clients");
                });

            modelBuilder.Entity("IntuitionProcessing.Models.DbFile", b =>
                {
                    b.Property<int>("DbFileId")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("CaseId");

                    b.Property<int>("DbFileContentId");

                    b.Property<string>("FileComment");

                    b.Property<DateTime>("FileDate");

                    b.Property<string>("FileName");

                    b.HasKey("DbFileId");

                    b.HasIndex("CaseId");

                    b.ToTable("DbFiles");
                });

            modelBuilder.Entity("IntuitionProcessing.Models.DbFileContent", b =>
                {
                    b.Property<int>("DbFileContentId")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("DbFileId");

                    b.Property<byte[]>("FileContent");

                    b.HasKey("DbFileContentId");

                    b.HasIndex("DbFileId")
                        .IsUnique();

                    b.ToTable("DbFileContents");
                });

            modelBuilder.Entity("IntuitionProcessing.Models.LMS", b =>
                {
                    b.Property<int>("LMSId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("LMSComment");

                    b.Property<string>("Name");

                    b.Property<string>("Version");

                    b.HasKey("LMSId");

                    b.ToTable("LMSes");
                });

            modelBuilder.Entity("IntuitionProcessing.Models.Product", b =>
                {
                    b.Property<int>("ProductId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Name");

                    b.Property<string>("ProductComment");

                    b.Property<string>("Version");

                    b.HasKey("ProductId");

                    b.ToTable("Products");
                });

            modelBuilder.Entity("IntuitionProcessing.Models.Site", b =>
                {
                    b.Property<int>("SiteId")
                        .ValueGeneratedOnAdd();

                    b.Property<int?>("ClientId");

                    b.Property<int>("IntegrationType");

                    b.Property<string>("SiteComment");

                    b.Property<string>("URL");

                    b.HasKey("SiteId");

                    b.HasIndex("ClientId");

                    b.ToTable("Sites");
                });

            modelBuilder.Entity("IntuitionProcessing.Models.SiteCase", b =>
                {
                    b.Property<int>("SiteId");

                    b.Property<int>("CaseId");

                    b.HasKey("SiteId", "CaseId");

                    b.HasIndex("CaseId");

                    b.ToTable("SiteCases");
                });

            modelBuilder.Entity("IntuitionProcessing.Models.SiteLMS", b =>
                {
                    b.Property<int>("SiteId");

                    b.Property<int>("LMSId");

                    b.HasKey("SiteId", "LMSId");

                    b.HasIndex("LMSId");

                    b.ToTable("SiteLMS");
                });

            modelBuilder.Entity("IntuitionProcessing.Models.SiteProduct", b =>
                {
                    b.Property<int>("SiteId");

                    b.Property<int>("ProductId");

                    b.HasKey("SiteId", "ProductId");

                    b.HasIndex("ProductId");

                    b.ToTable("SiteProducts");
                });

            modelBuilder.Entity("IntuitionProcessing.Models.Action", b =>
                {
                    b.HasOne("IntuitionProcessing.Models.Case", "Case")
                        .WithMany("Actions")
                        .HasForeignKey("CaseId");
                });

            modelBuilder.Entity("IntuitionProcessing.Models.Client", b =>
                {
                    b.HasOne("IntuitionProcessing.Models.AccManager", "AccManager")
                        .WithMany("Clients")
                        .HasForeignKey("AccManagerId");
                });

            modelBuilder.Entity("IntuitionProcessing.Models.DbFile", b =>
                {
                    b.HasOne("IntuitionProcessing.Models.Case", "Case")
                        .WithMany("DbFiles")
                        .HasForeignKey("CaseId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("IntuitionProcessing.Models.DbFileContent", b =>
                {
                    b.HasOne("IntuitionProcessing.Models.DbFile", "DbFile")
                        .WithOne("DbFileContent")
                        .HasForeignKey("IntuitionProcessing.Models.DbFileContent", "DbFileId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("IntuitionProcessing.Models.Site", b =>
                {
                    b.HasOne("IntuitionProcessing.Models.Client", "Client")
                        .WithMany("Sites")
                        .HasForeignKey("ClientId");
                });

            modelBuilder.Entity("IntuitionProcessing.Models.SiteCase", b =>
                {
                    b.HasOne("IntuitionProcessing.Models.Case", "Case")
                        .WithMany("SiteCases")
                        .HasForeignKey("CaseId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("IntuitionProcessing.Models.Site", "Site")
                        .WithMany("SiteCases")
                        .HasForeignKey("SiteId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("IntuitionProcessing.Models.SiteLMS", b =>
                {
                    b.HasOne("IntuitionProcessing.Models.LMS", "LMS")
                        .WithMany("SiteLMS")
                        .HasForeignKey("LMSId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("IntuitionProcessing.Models.Site", "Site")
                        .WithMany("SiteLMS")
                        .HasForeignKey("SiteId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("IntuitionProcessing.Models.SiteProduct", b =>
                {
                    b.HasOne("IntuitionProcessing.Models.Product", "Product")
                        .WithMany("SiteProducts")
                        .HasForeignKey("ProductId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("IntuitionProcessing.Models.Site", "Site")
                        .WithMany("SiteProducts")
                        .HasForeignKey("SiteId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
        }
    }
}
