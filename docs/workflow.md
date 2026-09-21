# Flujo operativo

## 1. Entrevista

Se recopilan respuestas mediante `discovery/questionnaire.md` y se guardan siguiendo `schemas/discovery-response.schema.json`.

## 2. Diagnóstico

El agente analista identifica procesos, dolores, frecuencia, impacto, herramientas y datos faltantes. Produce un mapa de procesos y una matriz de oportunidades.

## 3. Propuesta

El director compone la solución: equipo de agentes, flujo futuro, integraciones, alcance del MVP, exclusiones, riesgos, esfuerzo y criterios de aceptación.

## 4. Aprobación

El cliente o consultor valida la propuesta. La decisión se registra en `scope-approved.yaml`. Sin ese archivo el MVP permanece bloqueado.

## 5. MVP

El generador crea una demo visual con datos sintéticos y funcionalidades del alcance aprobado. No debe simular conexiones o acciones que no existan sin etiquetarlas como simuladas.

## 6. Feedback

Los comentarios se clasifican como corrección, cambio aprobado, nueva necesidad, mejora futura o fuera de alcance. Se genera un nuevo alcance para cada iteración.
