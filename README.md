# marvin_gas
Poll Grove gas sensors with the Marvin LoRa IOT stick

Inexpensive LoRa radio hardware can cover a city with a low-power mesh radio network for a variety of purposes. One vital use is to deploy sensors that will detect natural gas and other volatile compounds in the air, and alert the utility company and emergency services before a minor leak can lead to disaster. 

An array of these sensors, placed block by block and in utility tunnels, would help pinpoint growing dangers without waiting for a civilian to notice and call 911, perhaps not knowing where the smell is coming from.

These sensors could also be placed along pipelines, in apartments and nursing homes, and in commercial buildings that dont have networked alarms or fire suppression systems.

# Hardware Requirements

 * Marvin IoT Device (Arduino Leonardo compatible)
 * Seeed Studios Grove MQ-2 Gas Sensor
 * Seeed Studios Grove MQ-5 Gas Sensor
 * Seeed Studios Grove MQ-9 Gas Sensor
 
# Hardware Setup
Plug the three gas sensors into the Marvin as shown:
* MQ2 in the first analog port, signal on pin 3
* MQ5 in the first analog port, signal on pin 5
* MQ9 in the first analog port, signal on pin 9



# Project Team
This was produced by Team Ten, "The Gas House Gang" at the Smart City Hackathon sponored by Comcast MachineQ in Philadelphia on June 10, 2017. Members:
* Kenneth Au
* Hai Dang
* Alan Neves
* Rachel Rawlings
