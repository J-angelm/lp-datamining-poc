# Gas Consumption Data Mining POC

## Planteamiento del problema

Se tienen instalados n sensores del flujo de gas LP en m locaciones. Cada sensor tiene la capacidad de informar en tiempo real los siguientes datos:

1. Volumen actual en el tanque
2. Velocidad del consumo de gas

Se desea obtener un modelo estadístico del consumo de gas, basado en datos obtenidos en tiempo real y datos del consumo histórico, que pueda predecir el Consumo Esperado por Región, con un nivel de confianza del 95%.

Variables Criticas:
- Volumen de Consumo Esperado = Promedio del Volumen del Consumo Historico
- Probabilidad de Consumo = P_C(x) = f(x;ms) Distribución normal
- Volumen Consumo Disponible = (Volumen Total - Volumen Actual) 
- Tiempo restante para vaciado = Volumen Actual / Velocidad de consumo


