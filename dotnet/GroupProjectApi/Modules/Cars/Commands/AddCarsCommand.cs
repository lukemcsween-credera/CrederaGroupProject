using GroupProjectApi.Modules.Cars.Models;
using MediatR;

public class CreateOrderCommand : IRequest<CarDto>  
{  
    public CarDto Car { get; set; }  
}  