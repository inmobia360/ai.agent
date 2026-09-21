# Interfaz de proveedor de modelos

El director no debe depender de un proveedor concreto. Cualquier adaptador debe aceptar un contexto y devolver un resultado con trazabilidad.

## Entrada mínima

```json
{
  "run_id": "run-001",
  "agent_id": "triage-agent",
  "task": "Clasifica la incidencia",
  "context_refs": ["business/profile.json", "project/incident.json"],
  "constraints": ["No diagnosticar definitivamente", "Marcar datos faltantes"]
}
```

## Salida mínima

```json
{
  "run_id": "run-001",
  "agent_id": "triage-agent",
  "status": "needs_review",
  "output": {},
  "assumptions": [],
  "missing_data": [],
  "human_approval_required": [],
  "provider": "example",
  "model": "example-model"
}
```

La interfaz debe permitir cambiar de proveedor sin mover la memoria, las skills, el estado del negocio ni el alcance aprobado.
