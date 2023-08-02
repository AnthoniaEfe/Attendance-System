#include <LiquidCrystal.h>


#include <MFRC522.h>  // MFRC522 RFID module library.
#include <SPI.h>      // SPI device communication library.
#include <EEPROM.h>   // EEPROM (memory) library.

#define pinRST 5     // Defines pins for RST, SS conncetions respectively.
#define pinSS 10

byte readCard[4];     // Array that will hold UID of the RFID card.
int successRead;

MFRC522 mfrc522(pinSS, pinRST);   // Creates MFRC522 instance.
MFRC522::MIFARE_Key key;          // Creates MIFARE key instance.

void setup()
{
  Serial.begin(9600); // Starts the serial connection at 9600 baud rate.
  SPI.begin();        // Initiates SPI connection between RFID module and Arduino.
  mfrc522.PCD_Init(); // Initiates MFRC522 RFID module.

  Serial.println("RFID reading process initiated.");    // Prints user commands.
  Serial.println("Please scan your RFID card to the reader.");

  do {
    successRead = getID();     // Loops getID library function until reading process is done.
  }

  while (!successRead);
  for ( int i = 0; i < mfrc522.uid.size; i++ )  // You can add multiple cards to read in the for loop.
  {
    EEPROM.write(i, readCard[i] );     // Saves RFID cards UID to EEPROM.
  }

  Serial.println("RFID card information is saved to memory.");

}

void loop()
{
getID(); 
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
   Serial.print(" ");
  Serial.print("UID: ");    
  for (int i = 0; i < mfrc522.uid.size; i++) {  
    readCard[i] = mfrc522.uid.uidByte[i];   // Reads RFID cards UID.
    Serial.print(readCard[i], HEX);         // Prints RFID cards UID to the serial monitor.
   
  }

  mfrc522.PICC_HaltA();     // Stops the reading process.
}
