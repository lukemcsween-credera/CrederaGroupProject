
using System;
using System.Collections.Generic;
using System.Linq;
using GroupProjectApi.Modules.Common.Attributes;
using Microsoft.Extensions.DependencyInjection;

namespace GroupProjectApi.Modules.Configuration {
    public static class ServiceCollectionExtensions {
        public static void AddAppServices(this IServiceCollection services) {
            services.AddServicesOfType<TransientServiceAttribute>(ServiceLifetime.Transient);
            services.AddServicesOfType<SingletonServiceAttribute>(ServiceLifetime.Singleton);
        }

        private static void AddServicesOfType<T>(this IServiceCollection services, ServiceLifetime serviceLifetime) where T : class {
            // Retrieve list of types that implement specified class/interface
            var serviceImplementations = GetAllImplementationsOfType<T>();

            // Add each service class to DI container according to specified lifetime attribute type
            foreach (var serviceType in serviceImplementations) {
                switch (serviceLifetime) {
                    case ServiceLifetime.Singleton: 
                        services.AddSingleton(serviceType);
                        break;
                    case ServiceLifetime.Scoped:
                        services.AddScoped(serviceType);
                        break;
                    case ServiceLifetime.Transient:
                        services.AddTransient(serviceType);
                        break;
                    default:
                        services.AddTransient(serviceType);
                        break;
                }
            }
        }

        private static IEnumerable<Type> GetAllImplementationsOfType<T>() where T : class {
            return AppDomain.CurrentDomain.GetAssemblies().SelectMany(assembly => assembly.GetTypes().Where(type =>
                type.GetCustomAttributes(typeof(T), true).Length > 0
            ));
        }
    } 
 }
