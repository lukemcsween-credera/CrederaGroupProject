using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GroupProjectApi.Modules.Cars.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace GroupProjectApi.Modules.Cars
{
    [ApiController]
    [Route("[controller]")]
    public class CarsController : ControllerBase
    {
        private readonly ILogger<CarsController> _logger;
        private readonly CarsRepository _carsRepo;

        public CarsController(ILogger<CarsController> logger, CarsRepository carsRepo)
        {
            _logger = logger;
            _carsRepo = carsRepo;
        }

        [HttpGet]
        public ActionResult<IEnumerable<CarDto>> GetAllCars()
        {
          return this.Ok(_carsRepo.SearchCars());
        }

        [HttpGet("{carId}")]
        public ActionResult<CarDto> GetCarById(int carId)
        {
          var matchingCar = _carsRepo.GetCarById(carId);
          if (matchingCar != null)
            return this.Ok(matchingCar);
          else
            return this.NotFound($"Could not find car with CarId: {carId}");
        }

        [HttpPost]
        public ActionResult AddCar([FromBody] AddCarDto carDto)
        {
            _carsRepo.SaveNewCar(carDto);
            return this.NotFound();
        }
    }
}
