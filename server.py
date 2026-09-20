from http.server import HTTPServer, SimpleHTTPRequestHandler
import socketserver
import os

class ThreadingSimpleServer(socketserver.ThreadingMixIn, HTTPServer):
    daemon_threads = True

if __name__ == '__main__':
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    port = 8000
    server = ThreadingSimpleServer(('0.0.0.0', port), SimpleHTTPRequestHandler)
    print(f"SkillDad Server listening on http://localhost:{port}")
    server.serve_forever()
