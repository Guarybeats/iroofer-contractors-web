import http.server, socketserver, os

os.chdir(os.path.join(os.path.dirname(os.path.abspath(__file__)), 'out'))
assert os.path.isfile('index.html'), 'no out/index.html'

class NoCache(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

    def translate_path(self, path):
        # Map URL path to file, serving index.html for directory routes
        path = path.split('?')[0].split('#')[0]
        if path == '/' or path == '':
            return os.path.join(os.getcwd(), 'index.html')
        stripped = path.lstrip('/')
        # directory route: /foo/ -> /foo/index.html
        if stripped.endswith('/'):
            candidate = os.path.join(os.getcwd(), stripped, 'index.html')
            if os.path.isfile(candidate):
                return candidate
        return os.path.join(os.getcwd(), stripped)

socketserver.TCPServer.allow_reuse_address = True
with socketserver.TCPServer(('', 3002), NoCache) as httpd:
    print('serving out/ on http://localhost:3002 (no-cache)')
    httpd.serve_forever()
