# Arquitectura de agentes

## Patrón de coordinación

```text
Director
  ├── Intake: estructura la solicitud
  ├── Triage: clasifica y pregunta
  ├── Quote: prepara un borrador
  ├── Scheduling: propone opciones
  ├── Follow-up: redacta seguimientos
  └── Quality: revisa antes de entregar
```

El director es responsable de la coordinación, no de inventar el conocimiento del negocio. Cada subagente debe declarar entradas, salidas y límites. El conocimiento sectorial se incorpora mediante `context/`, `skills/` y fuentes aprobadas dentro del negocio concreto.

## Aislamiento por negocio

Cada cliente debe tener su propio perfil, memoria, reglas, tarifas, documentos y proyectos. Los ejemplos sintéticos del repositorio no deben mezclarse con datos reales.

## Escalado a otros sectores

Los agentes transversales (`intake`, `quality`, `follow-up`) se pueden reutilizar. Los agentes de dominio y las skills deben vivir dentro de `industries/<sector>/` o ser seleccionados explícitamente por el director.
