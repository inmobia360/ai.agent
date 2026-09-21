# Business Agent Factory

Marco reutilizable para diagnosticar un negocio, diseñar un equipo de agentes de IA, obtener aprobación y generar un MVP demostrable.

## Flujo

`Entrevista → Diagnóstico → Propuesta → Aprobación → MVP → Feedback`

El repositorio separa lo confirmado por el cliente, las inferencias del sistema y las decisiones pendientes. Ningún MVP debe generarse como si estuviera aprobado hasta que exista un `scope-approved.yaml`.

## Estado actual

Esta primera versión contiene la especificación del sistema, contratos de datos, plantillas de entrevista/propuesta y un caso piloto de fontanería. Todavía no conecta modelos, CRM, mensajería ni datos reales.

## Verificación local

Desde PowerShell:

```powershell
.\scripts\validate-workflow.ps1
```

Para revisar la demo, abre `mvp-generator/index.html` en un navegador. Es una demo estática y usa únicamente datos sintéticos.

## Estructura

```text
docs/                 especificación y reglas del sistema
discovery/            entrevista y diagnóstico
orchestration/        director, routing y validación
agent-library/        catálogo de subagentes reutilizables
industries/plumbing/  caso piloto
industries/_template/ plantilla para nuevos sectores
mvp-generator/        contrato y plantilla de MVP
schemas/              formatos JSON/YAML intercambiables
examples/             ejemplos sintéticos
```

## Principios

- Preguntar antes que inventar.
- Separar diagnóstico, propuesta y alcance aprobado.
- Mantener revisión humana en decisiones económicas, legales y operativas.
- Usar datos sintéticos en demos.
- Tratar la memoria como conocimiento gobernado, no como autoridad automática.
