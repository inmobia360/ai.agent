from pathlib import Path
from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parents[1]

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page()
    page.goto('http://127.0.0.1:8765/mvp-generator/index.html')
    page.wait_for_load_state('networkidle')
    assert page.get_by_role('heading', name='Cuéntanos cómo funciona tu negocio').is_visible()
    page.locator('#business-name').fill('Fontanería Norte')
    page.locator('#pain').fill('Se pierden avisos y se tarda en preparar presupuestos')
    page.get_by_role('button', name='Generar diagnóstico preliminar').click()
    assert page.locator('#diagnosis-result').is_visible()
    assert 'Fontanería Norte' in page.locator('#diagnosis-result').inner_text()
    assert page.get_by_role('button', name='Descargar propuesta JSON').is_visible()
    assert page.locator('#demo').get_attribute('class') == 'card locked'
    page.get_by_role('button', name='Aprobar alcance de demo').click()
    assert 'unlocked' in (page.locator('#demo').get_attribute('class') or '')
    page.locator('#feedback-text').fill('Añadir una foto a cada incidencia')
    page.get_by_role('button', name='Guardar feedback').click()
    assert 'guardado' in page.locator('#feedback-status').inner_text()
    browser.close()

print('E2E demo OK')
