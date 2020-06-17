'use strict';

goog.provide('Blockly.Blocks.NKP_ONE');

goog.require('Blockly.Blocks');

//////////////////颜色/////////////////////
Blockly.Blocks.NKP_ONE.HUE = 120;

/////////////////模拟输出//////////////////////
Blockly.Blocks.ks_a_Write = {
  init: function() {
    this.setColour(Blockly.Blocks.NKP_ONE.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_KS_analog);
    //.appendField(new Blockly.FieldImage("../../media/KS0077/ks77_led3.png", 43, 32));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setAlign(Blockly.ALIGN_RIGHT)
    .setCheck(Number);
    this.appendValueInput("num", Number)
    .appendField("val:")
    .setAlign(Blockly.ALIGN_RIGHT)
    .setCheck(Number);
    
    //.appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_ON, "HIGH"], [Blockly.MIXLY_OFF, "LOW"]]), "STAT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

////////////////////LED//////////////////////////
Blockly.Blocks.ks_SW1 = {
  init: function() {
    this.setColour(Blockly.Blocks.NKP_ONE.HUE);
    this.appendDummyInput()
    .appendField("SW1 status")
    .appendField(new Blockly.FieldImage("../../media/KS_EasyPulg/ks_ledw.png", 43, 32));
    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip('');
  }
};
Blockly.Blocks.ks_Knob = {
  init: function() {
    this.setColour(Blockly.Blocks.NKP_ONE.HUE);
    this.appendDummyInput()
    .appendField("KNOB status")
    .appendField(new Blockly.FieldImage("../../media/KS_EasyPulg/ks_ledw.png", 43, 32));
    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip('');
  }
};
Blockly.Blocks.ks_analogRead = {
  init: function() {
    this.setColour(Blockly.Blocks.NKP_ONE.HUE);
    this.appendDummyInput("")
    .appendField("AnalogRead pin:")
    .appendField(new Blockly.FieldImage("../../media/KS_EasyPulg/ks_lm35.png", 50, 40));
    this.appendDummyInput()
    .appendField(new Blockly.FieldDropdown([["A0","39"],["A1","34"], ["A2","32"], ["A3","35"], ["A4","25"], ["A5","33"], ["A6","27"], ["A7","26"], ["A8","13"], ["A9","14"]]), "PIN");
    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip('');
  }
};
Blockly.Blocks.ks_y_buzzer = {
  init: function() {
    this.setColour(Blockly.Blocks.NKP_ONE.HUE);
    this.appendDummyInput()
    .appendField("Buzzer status")
    .appendField(new Blockly.FieldDropdown([["ON","1"],["OFF","0"]]), "STAT");    
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};
Blockly.Blocks.NKP_motor_forward = {
  init: function() {
    this.setColour(Blockly.Blocks.NKP_ONE.HUE);
    this.appendDummyInput("")
    .appendField("Move Forward speed") 
    this.appendValueInput("speed", Number)
    this.appendDummyInput("")
    .appendField("%");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};
Blockly.Blocks.NKP_motor_backward = {
  init: function() {
    this.setColour(Blockly.Blocks.NKP_ONE.HUE);
    this.appendDummyInput("")
    .appendField("Move Backward speed") 
    this.appendValueInput("speed", Number)
    this.appendDummyInput("")
    .appendField("%");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};
Blockly.Blocks.NKP_motor_TurnLeft = {
  init: function() {
    this.setColour(Blockly.Blocks.NKP_ONE.HUE);
    this.appendDummyInput("")
    .appendField("TurnLeft speed") 
    this.appendValueInput("speed", Number)
    this.appendDummyInput("")
    .appendField("%");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};
Blockly.Blocks.NKP_motor_TurnRight = {
  init: function() {
    this.setColour(Blockly.Blocks.NKP_ONE.HUE);
    this.appendDummyInput("")
    .appendField("TurnRight speed") 
    this.appendValueInput("speed", Number)
    this.appendDummyInput("")
    .appendField("%");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};
Blockly.Blocks.NKP_motor_SpinLeft = {
  init: function() {
    this.setColour(Blockly.Blocks.NKP_ONE.HUE);
    this.appendDummyInput("")
    .appendField("SpinLeft speed") 
    this.appendValueInput("speed", Number)
    this.appendDummyInput("")
    .appendField("%");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};
Blockly.Blocks.NKP_motor_SpinRight = {
  init: function() {
    this.setColour(Blockly.Blocks.NKP_ONE.HUE);
    this.appendDummyInput("")
    .appendField("SpinRight speed") 
    this.appendValueInput("speed", Number)
    this.appendDummyInput("")
    .appendField("%");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};
Blockly.Blocks.NKP_motor_stop = {
  init: function() {
    this.setColour(Blockly.Blocks.NKP_ONE.HUE);
    this.appendDummyInput()
    .appendField("Motor Stop")
    this.setInputsInline(true); 
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};
////////////////////OLED////////////////////////
Blockly.Blocks.ke_oled = {
  init: function() {
    this.setColour(Blockly.Blocks.NKP_ONE.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_KS_OLED)
    .appendField(new Blockly.FieldImage("../../media/Keyes/ke_oled.png", 70, 32));

    this.appendValueInput("size", Number)
    .setCheck(Number)
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField("SIZE");
 
    this.appendValueInput("setCursorX", Number)
    .setCheck([String,Number])
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField("X");
    this.appendValueInput("setCursorY", Number)
    .setCheck([String,Number])
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField("Y");
    this.appendValueInput("TEXT1", String)
    .setCheck([String,Number])
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField("Text");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};
Blockly.Blocks.ke_oled_show = {
  init: function() {
    this.setColour(Blockly.Blocks.NKP_ONE.HUE);
    this.appendDummyInput()
    .appendField("OLED Show")
    this.setInputsInline(true); 
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};
Blockly.Blocks.ke_oled_clear = {
  init: function() {
    this.setColour(Blockly.Blocks.NKP_ONE.HUE);
    this.appendDummyInput()
    .appendField("OLED Clear")
    this.setInputsInline(true); 
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};
Blockly.Blocks.ke_servo = {
  init: function() {
    this.setColour(Blockly.Blocks.NKP_ONE.HUE);
    this.appendDummyInput()
    .appendField("Servo Pin:")
    .appendField(new Blockly.FieldDropdown([["1","1"],["2","2"], ["3","3"],["4","4"]]), "PIN");
    this.appendValueInput("angle", Number)
    .setCheck(Number)
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.MIXLY_DEGREE_0_180);
    this.appendValueInput("time", Number)
    .setCheck(Number)
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.MIXLY_DELAY+'('+Blockly.MIXLY_DELAY_MS+')');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_BLOCKGROUP_SERVO_MOVE);
  }
};
Blockly.Blocks.NKP_Robot_begin = {
  init: function() {
    this.setColour(Blockly.Blocks.NKP_ONE.HUE);
    this.appendDummyInput()
    .appendField("Robot_begin:")
    this.setInputsInline(true); 
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};