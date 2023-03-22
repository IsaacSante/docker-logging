import os 
import time
import json
import logging

with open('/app/config.json', 'r') as f:
    config_data = json.load(f)
    print(config_data, flush=True)

# Define a handler for a specific channel.
def handler(channel, data):
    print(f'printing from python: {data} on channel {channel}', flush=True)
                      

while True:
    # Code executed here
    handler("test-channel", "myCoolData")
    time.sleep(5)

    
if __name__ == '__main__':
    run()