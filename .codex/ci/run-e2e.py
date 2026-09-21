from pathlib import Path
import subprocess
import sys

root = Path(__file__).resolve().parents[2]
test = root / 'tests' / 'test_demo.py'
server = subprocess.Popen([sys.executable, '-m', 'http.server', '8765'], cwd=root)
try:
    subprocess.run([sys.executable, str(test)], check=True)
finally:
    server.terminate()
    server.wait(timeout=10)
