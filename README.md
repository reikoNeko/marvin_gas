# marvin_gas
Poll gas sensors with the Marvin LoRa IOT stick

Inexpensive LoRa radio hardware can cover a city with a low-power mesh radio network for a variety of purposes. One vital use is to deploy sensors that will detect natural gas and other volatile compounds in the air, and alert the utility company and emergency services before a minor leak can lead to disaster. 

An array of these sensors, placed block by block and in utility tunnels, would help pinpoint growing dangers without waiting for a civilian to notice and call 911, perhaps not knowing where the smell is coming from.

These sensors could also be placed along pipelines, in apartments and nursing homes, and in commercial buildings that dont have networked alarms or fire suppression systems.

# Hardware Requirements

 * [Marvin IoT Device](https://github.com/iotacademy/marvin) (Arduino Leonardo compatible)
 * [Seeed Studios Grove MQ-2 Gas Sensor](https://www.seeedstudio.com/Grove-Gas-Sensor%28MQ2%29-p-937.html)
   <br>Detects volatile compounds and particulates
 * [Seeed Studios Grove MQ-5 Gas Sensor](https://www.seeedstudio.com/Grove-Gas-Sensor(MQ5)-p-938.html)
   <br>Detects city utility gas
 * [Seeed Studios Grove MQ-9 Gas Sensor](https://www.seeedstudio.com/Grove-Gas-Sensor%28MQ9%29-p-1419.html)
   <br>Detects Carbon Monoxide, methane, propane
 
# Hardware Setup
Plug the three gas sensors into the Marvin as shown:
* MQ2 in the first analog port, signal on pin 3
* MQ5 in the first analog port, signal on pin 5
* MQ9 in the first analog port, signal on pin 9

![Gas House Marvin array](https://github.com/reikoNeko/marvin_gas/blob/master/IMG_20170610_165440.jpg)

# Project Team
This was produced by Team Ten, "The Gas House Gang" at the Smart City Hackathon sponored by Comcast MachineQ in Philadelphia on June 10, 2017. Members:
* Kenneth Au
* Hai Dang
* Alan Neves
* Rachel Rawlings


# Alpha notes
There was an 11-byte limit on LoRa transmissions in the test environment. Thus we only send one measurement from each sensor, the calculated gas ratio calibrated to clean indoor air at the Comcast building.

In a deployment environment, we would continue to sample every ten seconds but send aggregate data every five to ten minutes; with high, low, and average measurements not only for the gas ratio but the voltages for each device; in order to show drift or failures on components. 
