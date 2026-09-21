# Especificación del sistema v0.1

## Objetivo

Convertir una entrevista empresarial en una propuesta clara de automatización con IA y, solo después de su aprobación, en un MVP visual limitado al alcance aceptado.

## Actores

- **Consultor/operador:** revisa el diagnóstico, ajusta la propuesta y valida la entrega.
- **Cliente:** aporta información, aprueba el alcance y comenta el MVP.
- **Director:** coordina agentes y estados; no inventa datos ni aprueba por el cliente.
- **Subagentes:** analizan dominios concretos y producen artefactos verificables.

## Estados

1. `discovery_pending`
2. `diagnosis_draft`
3. `proposal_draft`
4. `awaiting_approval`
5. `approved`
6. `mvp_building`
7. `mvp_presented`
8. `feedback_pending`
9. `iteration_planned`

## Reglas de transición

- El diagnóstico necesita respuestas mínimas y marca los campos desconocidos.
- La propuesta debe distinguir hechos, inferencias y supuestos.
- Solo una aprobación explícita permite pasar a `approved`.
- El generador lee únicamente `scope-approved.yaml` para construir el MVP.
- Los comentarios posteriores no cambian silenciosamente el alcance; generan una nueva iteración.

## Criterios de calidad

- Cada recomendación enlaza con una respuesta o evidencia del diagnóstico.
- Cada agente tiene entradas, salidas, límites y revisión humana definidos.
- Las demos usan datos sintéticos y muestran claramente sus límites.
- Precios, citas, pagos, compromisos legales y mensajes externos requieren validación humana.
