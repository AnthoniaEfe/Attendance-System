
#include <MFRC522.h>  // MFRC522 RFID module library.
#include <SPI.h>      // SPI device communication library.
#include <EEPROM.h>   // EEPROM (memory) library.
#include <LiquidCrystal_I2C.h>

#define pinRST 6    // Defines pins for RST, SS conncetions respectively.
#define pinSS 10

LiquidCrystal_I2C lcd(0x27,20,4);  // set the LCD address to 0x3F for a 16 chars and 2 line display

byte readCard[4];     // Array that will hold UID of the RFID card.
int successRead;
String userid;

MFRC522 mfrc522(pinSS, pinRST);   // Creates MFRC522 instance.
MFRC522::MIFARE_Key key;          // Creates MIFARE key instance.

void setup()
{
  lcd.init();
  lcd.clear();         
  lcd.backlight(); 
  
  Serial.begin(9600); // Starts the serial connection at 9600 baud rate.
  lcd.print("SCAN YOUR CARD");
  SPI.begin();        // Initiates SPI connection between RFID module and Arduino.
  mfrc522.PCD_Init(); // Initiates MFRC522 RFID module.

  do {
    successRead = getID();     // Loops getID library function until reading process is done.
  }

  while (!successRead);
  for ( int i = 0; i < mfrc522.uid.size; i++ )  // You can add multiple cards to read in the for loop.
  {
    EEPROM.write(i, readCard[i] );     // Saves RFID cards UID to EEPROM.
  }

}

void loop()
{
getID(); // performs the get ID function 
     lcd.setCursor(0, 1);
     lcd.print("NO CARD DETECTED");
}

int getID() // Function that will read and print the RFID cards UID.
{
  if ( ! mfrc522.PICC_IsNewCardPresent())  // If statement that looks for new cards.
  {
    return;
  }

  if ( ! mfrc522.PICC_ReadCardSerial())    // If statement that selects one of the cards.
  {
    return;
  }
           lcd.setCursor(0, 1);
          lcd.print("                ");// clears the no card detected print 
  
  for (int i = 0; i < mfrc522.uid.size; i++) {  
    readCard[i] = mfrc522.uid.uidByte[i];   // Reads RFID cards UID per byte out of 4
    userid += String(readCard[i], HEX); // assigns the byte as a hexadecimal to uid 
    // the loop continues to add the next 3 bytes to the variable userid till it contaibs the whole UID
  } 
      userid.toUpperCase();
  mfrc522.PICC_HaltA();     // Stops the reading process.

  
String RfidCard1 = "3032F74E";//sets Valid card id's 
String RfidCard2 = "931BCB";//sets Valid card id's 
String RfidCard3 = "838892C";//sets Valid card id's 
String RfidCard4 = "C37AF8A";//sets Valid card id's 
String RfidCard5 = "A3CD36B";//sets Valid card id's 
String RfidCard6 = "E3F796C";//sets Valid card id's 
String RfidCard7 = "43C51B";//sets Valid card id's 
String RfidCard8 = "83A836B";//sets Valid card id's 
String RfidCard9 = "439D92C";//sets Valid card id's 

if( userid == RfidCard1 || userid == RfidCard2 || userid == RfidCard3 || userid == RfidCard4 ||userid == RfidCard5 ||userid == RfidCard6  || userid == RfidCard7 || userid == RfidCard8 || userid == RfidCard9 )
{
   lcd.setCursor(11, 1);
       lcd.print("SUCCESS");

       
    // removed any buffered previous serial data.
       Serial.flush();
       delay(100);
       // sent sensors data to serial (sent sensors data to ESP8266)
  Serial.print(userid);
       delay(100);


}
else{
     lcd.setCursor(11, 1);
       lcd.print("FAILURE");
}
delay(1500);
   userid ="";// clears the userid so it can read 4 times from scratch
    lcd.setCursor(11, 1);
       lcd.print("       ");
}
