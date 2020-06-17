'use strict';

goog.provide('Blockly.Arduino.NKP_ONE');

goog.require('Blockly.Arduino');

Blockly.Arduino.ks_a_Write = function() {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN',Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_val = Blockly.Arduino.valueToCode(this, 'num',Blockly.Arduino.ORDER_ATOMIC);
  //Blockly.Arduino.setups_['setup_output_'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);';
  var code = 'analogWrite('+dropdown_pin+','+dropdown_val+');\n'
  return code;
};
Blockly.Arduino.ks_SW1 = function() {
  Blockly.Arduino.setups_['setup_SW1'] = 'pinMode(15, INPUT);';
  var code = 'digitalRead(15)'
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
Blockly.Arduino.ks_Knob = function() {
  Blockly.Arduino.setups_['setup_Knob'] = 'pinMode(36, INPUT);';
  var code = 'analogRead(36)'
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
Blockly.Arduino.ks_analogRead = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  Blockly.Arduino.setups_['setup_input_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'analogRead(' + dropdown_pin + ')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
Blockly.Arduino.ks_y_buzzer = function() {
  var dropdown_stat = this.getFieldValue('STAT');
  Blockly.Arduino.setups_['setup_Buzzer'] = 'pinMode(12, OUTPUT);';
  var code = 'digitalWrite(12,'+dropdown_stat+');\n'
  return code;
};
Blockly.Arduino.NKP_motor_forward = function() {
  var dropdown_speed = Blockly.Arduino.valueToCode(this, 'speed',Blockly.Arduino.ORDER_ATOMIC);
  var code = 'motor(1,'+dropdown_speed+');\t';
  code += 'motor(2,'+dropdown_speed+');\n';
  return code;
};
Blockly.Arduino.NKP_motor_backward = function() {
  var dropdown_speed = Blockly.Arduino.valueToCode(this, 'speed',Blockly.Arduino.ORDER_ATOMIC);
  var code = 'motor(1,-'+dropdown_speed+');\t';
  code += 'motor(2,-'+dropdown_speed+');\n';
  return code;
};
Blockly.Arduino.NKP_motor_TurnLeft = function() {
  var dropdown_speed = Blockly.Arduino.valueToCode(this, 'speed',Blockly.Arduino.ORDER_ATOMIC);
  var code = 'motor(1,0);\t';
  code += 'motor(2,'+dropdown_speed+');\n';
  return code;
};
Blockly.Arduino.NKP_motor_TurnRight = function() {
  var dropdown_speed = Blockly.Arduino.valueToCode(this, 'speed',Blockly.Arduino.ORDER_ATOMIC);
  var code = 'motor(1,'+dropdown_speed+');\t';
  code += 'motor(2,0);\n';
  return code;
};
Blockly.Arduino.NKP_motor_SpinLeft = function() {
  var dropdown_speed = Blockly.Arduino.valueToCode(this, 'speed',Blockly.Arduino.ORDER_ATOMIC);
  var code = 'motor(1,-'+dropdown_speed+');\t';
  code += 'motor(2,'+dropdown_speed+');\n';
  return code;
};
Blockly.Arduino.NKP_motor_SpinRight = function() {
  var dropdown_speed = Blockly.Arduino.valueToCode(this, 'speed',Blockly.Arduino.ORDER_ATOMIC);
  var code = 'motor(1,'+dropdown_speed+');\t';
  code += 'motor(2,-'+dropdown_speed+');\n';
  return code;
};
Blockly.Arduino.NKP_motor_stop = function() {
  var code = 'motor(1,0);\t';
  code += 'motor(2,0);\n';
  return code;
};

//////////////////////////OLED//////////////////////////////////////
Blockly.Arduino.ke_oled = function() {

  var s = Blockly.Arduino.valueToCode(this, 'size', Blockly.Arduino.ORDER_ATOMIC);

  var CursorX = Blockly.Arduino.valueToCode(this, 'setCursorX', Blockly.Arduino.ORDER_ATOMIC);
  var Cursory = Blockly.Arduino.valueToCode(this, 'setCursorY', Blockly.Arduino.ORDER_ATOMIC);
  var str1 = Blockly.Arduino.valueToCode(this, 'TEXT1', Blockly.Arduino.ORDER_ATOMIC);
  var number1 = Blockly.Arduino.valueToCode(this, 'Number', Blockly.Arduino.ORDER_ATOMIC);

  /*Blockly.Arduino.definitions_['define_Wire'] = '#include <Wire.h>';
  Blockly.Arduino.definitions_['define_GFX'] = '#include <Adafruit_GFX.h>';
  Blockly.Arduino.definitions_['define_SSD1306'] = '#include <Adafruit_SSD1306.h>';

  Blockly.Arduino.definitions_['OLED_RESET'] = '#define OLED_RESET 5';
  Blockly.Arduino.definitions_['display'] = 'Adafruit_SSD1306 display(128, 64, &Wire, OLED_RESET);';
  
  Blockly.Arduino.setups_['setup_oled1'] = 'display.begin(SSD1306_SWITCHCAPVCC, 0x3C);';
  Blockly.Arduino.setups_['setup_oled2'] = 'display.clearDisplay();';*/


  var code = 'display.setTextSize('+s+');\ndisplay.setTextColor(WHITE);\ndisplay.setCursor('+CursorX+','+Cursory+');\ndisplay.println(String('+str1+'));\n';
  return code;
};
Blockly.Arduino.ke_oled_show = function() {

  var code = 'display.display();\n';
  return code;
};
Blockly.Arduino.ke_oled_clear = function() {

  var code = 'display.clearDisplay();\n';
  return code;
};
Blockly.Arduino.ke_servo = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  var value_degree = Blockly.Arduino.valueToCode(this, 'angle', Blockly.Arduino.ORDER_ATOMIC);
  //value_degree = value_degree.replace('(','').replace(')','')
  var delay_time = Blockly.Arduino.valueToCode(this, 'time', Blockly.Arduino.ORDER_ATOMIC) || '0'
  //delay_time = delay_time.replace('(','').replace(')','');
  var code = 'servo('+dropdown_pin+','+value_degree+');\n'+'delay(' + delay_time + ');\n';
  return code;
};
Blockly.Arduino.NKP_Robot_begin = function() {

  Blockly.Arduino.definitions_['include_Begin'] = '#include <NKP_ONE.h>';
  
  var code =  'NKP_ONE();\n';
  return code;
};

