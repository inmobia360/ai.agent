const approve = document.querySelector('#approve');
const demo = document.querySelector('#demo');
const approval = document.querySelector('#approval');
const interviewForm = document.querySelector('#interview-form');
const diagnosisResult = document.querySelector('#diagnosis-result');
const heroTitle = document.querySelector('.hero h2');
const heroText = document.querySelector('.hero p:not(.eyebrow)');
const proposalOutput = document.querySelector('#proposal-output');
const downloadProposal = document.querySelector('#download-proposal');
const feedbackText = document.querySelector('#feedback-text');
const feedbackStatus = document.querySelector('#feedback-status');
const savedState = JSON.parse(localStorage.getItem('business-agent-demo') || '{}');
if (savedState.interview) {
  for (const [id, value] of Object.entries(savedState.interview)) {
    const field = document.querySelector(`#${id}`);
    if (field) field.value = value;
  }
}
if (savedState.feedback) feedbackText.value = savedState.feedback;
interviewForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.querySelector('#business-name').value.trim();
  const sector = document.querySelector('#business-sector').value.trim();
  const channels = document.querySelector('#channels').value.trim();
  const pain = document.querySelector('#pain').value.trim();
  localStorage.setItem('business-agent-demo', JSON.stringify({ ...savedState, interview: { 'business-name': name, 'business-sector': sector, channels, pain } }));
  diagnosisResult.hidden = false;
  diagnosisResult.innerHTML = `<strong>Diagnóstico generado para ${name}</strong><p>Actividad: ${sector}. Las solicitudes entran por ${channels}. El dolor prioritario declarado es: ${pain}.</p><p><b>Recomendación preliminar:</b> crear un flujo de entrada, clasificación, preparación y revisión humana. Esta recomendación aún no constituye una aprobación.</p>`;
  heroTitle.textContent = `Oportunidad detectada en ${name}`;
  heroText.textContent = `El diagnóstico preliminar identifica como foco principal: ${pain}. La propuesta debe concretar el alcance antes de construir el MVP.`;
  proposalOutput.hidden = false;
  const proposal = { version: '0.1', status: 'pending_approval', business: name, sector, diagnosis: { channels, primary_pain: pain }, recommended_team: ['director-agent', 'intake-agent', 'triage-agent', 'quote-agent', 'scheduling-agent', 'follow-up-agent', 'quality-agent'], mvp_scope: ['registrar incidencia', 'clasificar urgencia preliminar', 'generar borrador de presupuesto', 'proponer siguiente acción'], exclusions: ['confirmar precio', 'confirmar disponibilidad', 'reservar una cita real', 'enviar mensajes externos'], human_approval_required: ['diagnóstico técnico', 'precio final', 'fecha de visita'] };
  downloadProposal.onclick = () => { const blob = new Blob([JSON.stringify(proposal, null, 2)], { type: 'application/json' }); const url = URL.createObjectURL(blob); const link = document.createElement('a'); link.href = url; link.download = `${name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-proposal.json`; link.click(); URL.revokeObjectURL(url); };
});
approve.addEventListener('click', () => {
  demo.classList.remove('locked');
  demo.classList.add('unlocked');
  demo.querySelector('.status').textContent = 'Alcance aprobado';
  demo.querySelector('.status').className = 'status';
  approval.textContent = 'Aprobación registrada en esta demo. Ya se puede presentar el MVP.';
  approval.style.color = '#087443';
  approve.textContent = 'Alcance aprobado';
  approve.disabled = true;
  approve.style.opacity = '.65';
  localStorage.setItem('business-agent-demo', JSON.stringify({ ...JSON.parse(localStorage.getItem('business-agent-demo') || '{}'), approved: true }));
});
if (savedState.approved) approve.click();
document.querySelector('#save-feedback').addEventListener('click', () => {
  const current = JSON.parse(localStorage.getItem('business-agent-demo') || '{}');
  localStorage.setItem('business-agent-demo', JSON.stringify({ ...current, feedback: feedbackText.value.trim() }));
  feedbackStatus.textContent = 'Feedback guardado localmente para la siguiente iteración.';
});
document.querySelector('#reset-demo').addEventListener('click', () => {
  localStorage.removeItem('business-agent-demo');
  window.location.reload();
});
