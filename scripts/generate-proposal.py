"""Generate a deterministic first proposal from a discovery response.

This is a safe local baseline. A model can replace the heuristics later, but the
input/output contract and human-approval boundary remain the same.
"""
import json
import re
import sys
from pathlib import Path


TEAM = ["director-agent", "intake-agent", "triage-agent", "quote-agent", "scheduling-agent", "follow-up-agent", "quality-agent"]
SCOPE = ["registrar incidencia", "clasificar urgencia preliminar", "generar borrador de presupuesto", "proponer siguiente acción"]
EXCLUSIONS = ["confirmar precio", "confirmar disponibilidad", "reservar una cita real", "enviar mensajes externos"]
APPROVALS = ["diagnóstico técnico", "precio final", "fecha de visita"]


def slug(value: str) -> str:
    return re.sub(r"[^a-z0-9]+", "-", value.lower()).strip("-") or "business"


def generate(payload: dict) -> dict:
    responses = payload.get("responses", {})
    name = payload.get("business", "Negocio sin nombre")
    return {
        "version": "0.1",
        "status": "pending_approval",
        "business": name,
        "sector": payload.get("sector", ""),
        "diagnosis": {
            "channels": ", ".join(map(str, responses.get("lead_channels", []))) or "Pendiente",
            "primary_pain": responses.get("main_pain", "Pendiente de concretar"),
        },
        "recommended_team": TEAM,
        "mvp_scope": SCOPE,
        "exclusions": EXCLUSIONS,
        "human_approval_required": APPROVALS,
        "source": "deterministic-discovery-generator",
        "proposal_id": f"{slug(name)}-proposal-v0.1",
    }


def main() -> int:
    if len(sys.argv) not in (2, 3):
        print("Uso: python scripts/generate-proposal.py INPUT.json [OUTPUT.json]", file=sys.stderr)
        return 2
    source = Path(sys.argv[1])
    proposal = generate(json.loads(source.read_text(encoding="utf-8")))
    rendered = json.dumps(proposal, ensure_ascii=False, indent=2) + "\n"
    if len(sys.argv) == 3:
        Path(sys.argv[2]).write_text(rendered, encoding="utf-8")
    else:
        print(rendered, end="")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
