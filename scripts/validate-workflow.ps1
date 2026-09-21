$ErrorActionPreference = 'Stop'

$required = @(
  'README.md',
  'docs/01-system-specification.md',
  'docs/workflow.md',
  'discovery/questionnaire.md',
  'discovery/diagnosis-template.md',
  'discovery/proposal-template.md',
  'discovery/feedback-template.md',
  'orchestration/director-agent.md',
  'mvp-generator/index.html',
  'mvp-generator/app.js',
  'mvp-generator/styles.css',
  'mvp-generator/scope-approved.example.yaml',
  'schemas/discovery-response.schema.json',
  'schemas/agent-team.schema.json',
  'schemas/solution-proposal.schema.json',
  'schemas/feedback.schema.json',
  'schemas/approved-scope.schema.json'
)

foreach ($path in $required) {
  if (-not (Test-Path -LiteralPath $path -PathType Leaf)) { throw "Falta el archivo requerido: $path" }
}

foreach ($path in @('schemas/discovery-response.schema.json', 'schemas/agent-team.schema.json', 'schemas/solution-proposal.schema.json', 'schemas/feedback.schema.json', 'schemas/approved-scope.schema.json', 'examples/plumbing-discovery-response.json')) {
  Get-Content -LiteralPath $path -Raw | ConvertFrom-Json | Out-Null
}

$html = Get-Content -LiteralPath 'mvp-generator/index.html' -Raw
foreach ($needle in @('id="approve"', 'id="demo"', 'scope-approved', 'datos sintéticos')) {
  if ($html -notmatch [regex]::Escape($needle)) { throw "La demo no contiene la comprobación esperada: $needle" }
}

$js = Get-Content -LiteralPath 'mvp-generator/app.js' -Raw
foreach ($needle in @('classList.remove', 'Alcance aprobado', 'approval')) {
  if ($js -notmatch [regex]::Escape($needle)) { throw "La lógica de aprobación no contiene: $needle" }
}

Write-Output "Workflow válido: $($required.Count) archivos requeridos, JSON válido y gate de aprobación presente."
