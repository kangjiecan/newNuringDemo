// Scaffold-DbContext "Data Source=Chinook_Sqlite.sqlite" Microsoft.EntityFrameworkCore.Sqlite -OutputDir Data -ContextDir Data -Context ChinookContext -Tables Artist,Album,Track,MediaType,Genre -Force
using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using System.IO;
using System.Configuration;

namespace WpfApp1.Data;

public partial class ChinookContext : DbContext
{
    public ChinookContext()
    {
    }

    public ChinookContext(DbContextOptions<ChinookContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Album> Albums { get; set; }

    public virtual DbSet<Artist> Artists { get; set; }

    public virtual DbSet<Genre> Genres { get; set; }

    public virtual DbSet<MediaType> MediaTypes { get; set; }

    public virtual DbSet<Track> Tracks { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        if (!optionsBuilder.IsConfigured)
        {
            // Get connection string from App.config
            string connectionString = ConfigurationManager.ConnectionStrings["ChinookConnection"].ConnectionString;

            // For debugging
            System.Diagnostics.Debug.WriteLine($"Connection string: {connectionString}");

            // Use the connection string from App.config
            optionsBuilder.UseSqlite(connectionString);
        }
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Album>(entity =>
        {
            entity.ToTable("Album");

            entity.HasIndex(e => e.ArtistId, "IFK_AlbumArtistId");

            entity.Property(e => e.AlbumId).ValueGeneratedNever();
            entity.Property(e => e.Title).HasColumnType("NVARCHAR(160)");

            entity.HasOne(d => d.Artist).WithMany(p => p.Albums)
                .HasForeignKey(d => d.ArtistId)
                .OnDelete(DeleteBehavior.ClientSetNull);
        });

        modelBuilder.Entity<Artist>(entity =>
        {
            entity.ToTable("Artist");

            entity.Property(e => e.ArtistId).ValueGeneratedNever();
            entity.Property(e => e.Name).HasColumnType("NVARCHAR(120)");
        });

        modelBuilder.Entity<Genre>(entity =>
        {
            entity.ToTable("Genre");

            entity.Property(e => e.GenreId).ValueGeneratedNever();
            entity.Property(e => e.Name).HasColumnType("NVARCHAR(120)");
        });

        modelBuilder.Entity<MediaType>(entity =>
        {
            entity.ToTable("MediaType");

            entity.Property(e => e.MediaTypeId).ValueGeneratedNever();
            entity.Property(e => e.Name).HasColumnType("NVARCHAR(120)");
        });

        modelBuilder.Entity<Track>(entity =>
        {
            entity.ToTable("Track");

            entity.HasIndex(e => e.AlbumId, "IFK_TrackAlbumId");

            entity.HasIndex(e => e.GenreId, "IFK_TrackGenreId");

            entity.HasIndex(e => e.MediaTypeId, "IFK_TrackMediaTypeId");

            entity.Property(e => e.TrackId).ValueGeneratedNever();
            entity.Property(e => e.Composer).HasColumnType("NVARCHAR(220)");
            entity.Property(e => e.Name).HasColumnType("NVARCHAR(200)");
            entity.Property(e => e.UnitPrice).HasColumnType("NUMERIC(10,2)");

            entity.HasOne(d => d.Album).WithMany(p => p.Tracks).HasForeignKey(d => d.AlbumId);

            entity.HasOne(d => d.Genre).WithMany(p => p.Tracks).HasForeignKey(d => d.GenreId);

            entity.HasOne(d => d.MediaType).WithMany(p => p.Tracks)
                .HasForeignKey(d => d.MediaTypeId)
                .OnDelete(DeleteBehavior.ClientSetNull);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}