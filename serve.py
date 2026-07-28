import http.server
import socketserver

class NoCacheHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

socketserver.TCPServer.allow_reuse_address = True
import os
os.chdir(os.path.join(os.path.dirname(os.path.abspath(__file__)), 'out'))
with socketserver.TCPServer(('', 3002), NoCacheHandler) as httpd:
    print('serving out/ on http://localhost:3002 (no-cache)')
    httpd.serve_forever()
