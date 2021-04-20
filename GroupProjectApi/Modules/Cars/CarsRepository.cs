using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using GroupProjectApi.Modules.Common.Attributes;
using GroupProjectApi.Modules.Cars.Models;

namespace GroupProjectApi.Modules.Cars
{
    [TransientService]
    public class CarsRepository
    {
        private List<CarDto> _cars = new List<CarDto> {
            new CarDto { CarId = 1, Make = "Toyota", Model = "Camry", Year = 2014 },
            new CarDto { CarId = 2, Make = "Toyota", Model = "Corolla", Year = 2016 },
            new CarDto { CarId = 3, Make= "BMW", Model = "M3", Year = 1988 }
        };
        private readonly ILogger<CarsRepository> _logger;

        public CarsRepository(ILogger<CarsRepository> logger)
        {
            _logger = logger;
        }

        public void SaveNewCar(AddCarDto car) {
          _logger.LogInformation("Yo yo yo, what up party people");
        }

        public IEnumerable<CarDto> SearchCars(Func<CarDto, bool> predicate = null) {
          
          if (predicate != null) {
            return _cars.Where(predicate);
          }
          return _cars;
        }

        public CarDto GetCarById(int carId) {
          return _cars.Find(car => car.CarId == carId);
        }

    }
}
