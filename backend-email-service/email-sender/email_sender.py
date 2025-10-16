# email_sender.py
import os
import pika
import json
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail

# Configuration from environment variables
RABBITMQ_HOST = os.getenv('RABBITMQ_HOST', 'localhost')
RABBITMQ_QUEUE = os.getenv('RABBITMQ_QUEUE', 'email_queue')
SENDGRID_API_KEY = os.getenv('SENDGRID_API_KEY')
SENDER_EMAIL = os.getenv('SENDER_EMAIL', 'your_verified_sender@example.com') # Must be a verified sender in SendGrid

def send_email(to_email, subject, body):
    if not SENDGRID_API_KEY:
        print("SENDGRID_API_KEY not set. Cannot send email.")
        return False

    message = Mail(
        from_email=SENDER_EMAIL,
        to_emails=to_email,
        subject=subject,
        html_content=body)
    try:
        sendgrid_client = SendGridAPIClient(SENDGRID_API_KEY)
        response = sendgrid_client.send(message)
        print(f"Email sent to {to_email}. Status Code: {response.status_code}")
        return True
    except Exception as e:
        print(f"Error sending email to {to_email}: {e}")
        return False

def callback(ch, method, properties, body):
    try:
        email_data = json.loads(body)
        name = email_data.get('name', 'Guest')
        from_email = email_data.get('email', 'no-reply@example.com')
        message_content = email_data.get('message', 'No message content.')

        subject = f"Contact from {name} ({from_email})"
        email_body = f"Name: {name}<br>Email: {from_email}<br><br>Message:<br>{message_content}"

        if send_email("vincentpham1993@gmail.com", subject, email_body): # Your recipient email
            ch.basic_ack(method.delivery_tag)
        else:
            # Requeue the message if sending failed, or move to a dead-letter queue
            ch.basic_nack(method.delivery_tag, requeue=True)
            print(f"Failed to send email, requeued message: {body}")

    except json.JSONDecodeError:
        print(f"Invalid JSON received: {body}")
        ch.basic_nack(method.delivery_tag, requeue=False) # Don't requeue malformed messages
    except Exception as e:
        print(f"An unexpected error occurred: {e}")
        ch.basic_nack(method.delivery_tag, requeue=True) # Requeue for other errors

def main():
    print(f"Connecting to RabbitMQ at {RABBITMQ_HOST}...")
    connection = pika.BlockingConnection(pika.ConnectionParameters(host=RABBITMQ_HOST))
    channel = connection.channel()
    channel.queue_declare(queue=RABBITMQ_QUEUE, durable=True) # durable=True makes the queue persistent

    print(' [*] Waiting for messages. To exit press CTRL+C')
    channel.basic_consume(queue=RABBITMQ_QUEUE, on_message_callback=callback)
    channel.start_consuming()

if __name__ == '__main__':
    main()
