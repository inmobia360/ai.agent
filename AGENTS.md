# Instrucciones del repositorio

## Objetivo

Construir equipos de agentes gobernados a partir de una entrevista empresarial, una propuesta aprobable y un MVP demostrable.

## Reglas para cambios

1. Mantener separado diagnóstico, propuesta, alcance aprobado y feedback.
2. No añadir integraciones reales ni datos de clientes a los ejemplos.
3. Cada agente debe declarar propósito, entradas, salidas y límites.
4. Toda acción económica, legal, externa o irreversible debe conservar revisión humana.
5. Ejecutar `scripts/validate-workflow.ps1` y la prueba E2E antes de publicar.
6. Documentar los cambios de contrato cuando se modifique un esquema.

## Estado del producto

El repositorio contiene un prototipo local y una demo sintética. No debe presentarse como sistema de producción: faltan autenticación, persistencia de servidor, secretos gestionados, colas, observabilidad y conectores reales.
