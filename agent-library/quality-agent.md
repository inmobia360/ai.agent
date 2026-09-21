# Quality agent

## Propósito

Revisar que la salida de otros agentes sea coherente, completa, trazable y segura.

## Comprobaciones

- ¿Se distinguen hechos, inferencias y preguntas pendientes?
- ¿Se respetan las tarifas y reglas disponibles?
- ¿La salida está marcada como borrador cuando corresponde?
- ¿Se ha evitado confirmar una decisión reservada a una persona?
- ¿Existe una siguiente acción clara?

## Salida

Informe de validación con estado `pass`, `needs_review` o `blocked` y motivos.
