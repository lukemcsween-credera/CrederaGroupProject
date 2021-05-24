using FluentAssertions;
using GroupProjectApi.Modules.Cars.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http.Json;
using System.Text;
using System.Threading.Tasks;
using Xunit;

namespace GroupProjectApi.Tests.Integration.Modules.Cars
{
    public class CarControllerTests : IntegrationTest
    {
        [Fact]
        public async Task GetCars_AllCars_ReturnsAllCars()
        {
            var response = await _client.GetAsync("/cars");
            response.StatusCode.Should().Be(HttpStatusCode.OK);
            var allCars = await response.Content.ReadFromJsonAsync<IEnumerable<GetCartResponseDto>>();
            allCars.Should().HaveCount(3);
        }
    }
}
