using CodePulseApi.Data;
using CodePulseApi.Models.Domain;
using CodePulseApi.Repositories.Interface;

namespace CodePulseApi.Repositories.Implementation
{
    public class CategoryRepository : ICategoryRepository
    {
        public readonly ApplicationDbContext dbContext;
        public CategoryRepository(ApplicationDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        public async Task<Category> CreateAsync(Category category)
        {
            await dbContext.Categories.AddAsync(category);
            await dbContext.SaveChangesAsync();
            return category;
        }
    }
}
