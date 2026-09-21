const approve = document.querySelector('#approve');
const demo = document.querySelector('#demo');
const approval = document.querySelector('#approval');
const interviewForm = document.querySelector('#interview-form');
const diagnosisResult = document.querySelector('#diagnosis-result');
const heroTitle = document.querySelector('.hero h2');
const heroText = document.querySelector('.hero p:not(.eyebrow)');
interviewForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.querySelector('#business-name').value.trim();
  const sector = document.querySelector('#business-sector').value.trim();
  const channels = document.querySelector('#channels').value.trim();
  const pain = document.querySelector('#pain').value.trim();
  diagnosisResult.hidden = false;
  diagnosisResult.innerHTML = `<strong>Diagnóstico generado para ${name}</strong><p>Actividad: ${sector}. Las solicitudes entran por ${channels}. El dolor prioritario declarado es: ${pain}.</p><p><b>Recomendación preliminar:</b> crear un flujo de entrada, clasificación, preparación y revisión humana. Esta recomendación aún no constituye una aprobación.</p>`;
  heroTitle.textContent = `Oportunidad detectada en ${name}`;
  heroText.textContent = `El diagnóstico preliminar identifica como foco principal: ${pain}. La propuesta debe concretar el alcance antes de construir el MVP.`;
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
});
