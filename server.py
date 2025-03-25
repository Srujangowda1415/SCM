from flask import Flask, render_template
from flask_socketio import SocketIO, send

app = Flask(__name__)
socketio = SocketIO(app, cors_allowed_origins="*")  # Allow CORS

@app.route('/')
def home():
    return "Chat Server is Running!"

@socketio.on('message')
def handle_message(msg):
    print(f"Message received: {msg}")
    send(msg, broadcast=True)  # Broadcast the message to all clients

if __name__ == '__main__':
    socketio.run(app, host="0.0.0.0", port=5001, debug=True)
