#include <ESP8266WiFi.h>
#include <FirebaseArduino.h>


#define FIREBASE_HOST "automated-attendance-sys-96fbd-default-rtdb.firebaseio.com"
#define FIREBASE_AUTH "Mf3LG0FT0730bG9OS4Fll2daBeSVQeeyzEe2B4Rr"
#define WIFI_SSID "Attendance-Wi-Fi"
#define WIFI_PASSWORD "1234567890"

String sensor_rfid;

void setup() {
  //Initializes the serial connection at 9600 get sensor data from arduino.
  Serial.begin(9600);  
  
  delay(1000);
  
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
  }
Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH); 
}
void loop() {

 bool Sr =false;
 
  while(Serial.available()){
    
        //get sensor data from serial put in sensor_data
        sensor_rfid=Serial.readString(); 
        Sr=true;    
        
    }
  
delay(1000);

  if(Sr==true){  

  //store ultrasonic sensor data as string in firebase 
  Firebase.setString("RFID_TAG_UID",sensor_rfid);
   delay(10);
   
  //store previous sensors data as string in firebase 
  Firebase.pushString("PREVIOUS_RFID_TAG_UID",sensor_rfid);
   delay(10);

  delay(1000);
  
  if (Firebase.failed()) {  
      return;
  }
  
}   
}
