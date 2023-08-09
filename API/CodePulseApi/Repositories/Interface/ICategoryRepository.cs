using CodePulseApi.Models.Domain;

namespace CodePulseApi.Repositories.Interface
{
    public interface ICategoryRepository
    {
        Task<Category> CreateAsync(Category category);

    }
}
