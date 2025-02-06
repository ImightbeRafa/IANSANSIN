import requests
from requests.exceptions import RequestException

# Define the URL for the contact form submission
url = 'http://localhost:3000/api/save-contact'

# Define the data to be sent in the contact form
form_data = {
    'name': 'Test User04',
    'phone': '1234567890',
    'email': 'testuser@example.com',
    'comments': 'This is a test comment.'
}

# Function to test the contact form submission
def test_contact_form():
    try:
        # Send a POST request to the contact form API
        response = requests.post(url, json=form_data)

        # Check if the response is successful
        if response.status_code == 200:
            print('Form submitted successfully.')
            result = response.json()
            print('Response from server:', result)

            # Check if the redirect to Calendly is expected
            if 'status' in result and result['status'] == 'success':
                print('Redirecting to Calendly...')
                # Simulate the redirect (you can check the URL here if needed)
                calendly_url = 'https://calendly.com/rafa-iankupfer/asesoria-basica'
                print('You should be redirected to:', calendly_url)
            else:
                print('Unexpected response:', result)
        else:
            print(f'Error: Received status code {response.status_code}')
            print('Response text:', response.text)

    except RequestException as e:
        print('An error occurred while making the request:', str(e))

# Run the test
if __name__ == '__main__':
    test_contact_form()