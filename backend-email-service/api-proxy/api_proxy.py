# api_proxy.py
from flask import Flask, request, jsonify
from flask_cors import CORS # For handling CORS if your frontend is on a different domain
import pika
import json
import os

app = Flask(__name__)
CORS(app) # Enable CORS for all routes

RABBITMQ_HOST = os.getenv('RABBITMQ_HOST', 'localhost')
RABBITMQ_QUEUE = os.getenv('RABBITMQ_QUEUE', 'email_queue')

@app.route('/send-contact-email', methods=['POST'])
def send_contact_email():
    try:
        data = request.get_json()
        name = data.get('name')
        email = data.get('email')
        message = data.get('message')

        if not all([name, email, message]):
            return jsonify({"error": "Missing required fields"}), 400

        # Publish message to RabbitMQ
        connection = pika.BlockingConnection(pika.ConnectionParameters(host=RABBITMQ_HOST))
        channel = connection.channel()
        channel.queue_declare(queue=RABBITMQ_QUEUE, durable=True)
        channel.basic_publish(
            exchange='',
            routing_key=RABBITMQ_QUEUE,
            body=json.dumps({'name': name, 'email': email, 'message': message}),
            properties=pika.BasicProperties(
                delivery_mode=2,  # make message persistent
            )
        )
        connection.close()

        return jsonify({"message": "Email request received and queued"}), 200
    except Exception as e:
        print(f"Error in API proxy: {e}")
        return jsonify({"error": "Internal server error"}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
