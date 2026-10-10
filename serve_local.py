import http.server
import socketserver
import os
import json
import urllib.parse
import webbrowser

PORT = 8080
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class SkillDadHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def do_GET(self):
        parsed = urllib.parse.urlparse(self.path)
        # Handle api/stats.php locally
        if parsed.path.endswith('/api/stats.php') or parsed.path == '/api/stats.php':
            self.handle_stats()
            return
        return super().do_GET()

    def do_POST(self):
        parsed = urllib.parse.urlparse(self.path)
        if parsed.path.endswith('/api/contact.php') or parsed.path == '/api/contact.php':
            self.handle_contact()
            return
        return super().do_GET()

    def handle_stats(self):
        cache_path = os.path.join(DIRECTORY, 'api', 'stats_cache.json')
        data = {
            "youtube": 196,
            "aparat": 75,
            "playlists": 15,
            "total_visits": 1254,
            "today_visits": 28,
            "today_date": "2026-10-10"
        }
        if os.path.exists(cache_path):
            try:
                with open(cache_path, 'r', encoding='utf-8') as f:
                    data = json.load(f)
                data["today_visits"] = data.get("today_visits", 0) + 1
                data["total_visits"] = data.get("total_visits", 1254) + 1
                with open(cache_path, 'w', encoding='utf-8') as f:
                    json.dump(data, f, ensure_ascii=False, indent=2)
            except Exception as e:
                print("Error updating stats:", e)

        body = json.dumps(data).encode('utf-8')
        self.send_response(200)
        self.send_header('Content-Type', 'application/json; charset=utf-8')
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Content-Length', str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def handle_contact(self):
        content_len = int(self.headers.get('Content-Length', 0))
        post_body = self.rfile.read(content_len)
        try:
            params = urllib.parse.parse_qs(post_body.decode('utf-8'))
            msg_path = os.path.join(DIRECTORY, 'api', 'messages.json')
            messages = []
            if os.path.exists(msg_path):
                try:
                    with open(msg_path, 'r', encoding='utf-8') as f:
                        messages = json.load(f)
                except Exception:
                    messages = []
            new_msg = {
                "name": params.get("name", [""])[0],
                "email": params.get("email", [""])[0],
                "message": params.get("message", [""])[0],
                "time": "2026-10-10"
            }
            messages.append(new_msg)
            with open(msg_path, 'w', encoding='utf-8') as f:
                json.dump(messages, f, ensure_ascii=False, indent=2)
            res = json.dumps({"status": "success", "message": "پیام شما ذخیره شد."}).encode('utf-8')
        except Exception as e:
            res = json.dumps({"status": "error", "message": str(e)}).encode('utf-8')

        self.send_response(200)
        self.send_header('Content-Type', 'application/json; charset=utf-8')
        self.send_header('Content-Length', str(len(res)))
        self.end_headers()
        self.wfile.write(res)

if __name__ == '__main__':
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("", PORT), SkillDadHandler) as httpd:
        print(f"[+] SkillDad Local Server is running at: http://localhost:{PORT}")
        print("[+] Press Ctrl+C to stop.")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nServer stopped.")
