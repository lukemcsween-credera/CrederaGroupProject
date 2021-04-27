using System;

namespace GroupProjectApi.Modules.Cars.Models
{
    public class CarDto
    {
        public int CarId { get; set; }
        public int Year { get; set; }
        public string Make { get; set; }
        public string Model { get; set; }
    }
}
