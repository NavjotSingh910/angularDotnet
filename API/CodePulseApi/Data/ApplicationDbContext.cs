using CodePulseApi.Models.Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.Identity.Client;

namespace CodePulseApi.Data
{
    public class ApplicationDbContext:DbContext
    {
        public ApplicationDbContext(DbContextOptions options) : base(options) 
        { 
                    
        }

        public DbSet<BlogPost> BlogPosts  { get; set; }
        public DbSet<Category> Categories { get; set; }

    }
}
