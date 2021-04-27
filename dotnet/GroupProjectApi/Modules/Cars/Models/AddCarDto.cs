using System;

namespace GroupProjectApi.Modules.Cars.Models
{
    public class AddCarDto
    {
        public int Year { get; set; }
        public string Make { get; set; }
        public string Model { get; set; }
    }
}
