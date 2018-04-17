#!bin/bash
killall emulationstation && /opt/retropie/supplementary/runcommand/runcommand.sh 0 _SYS_ gbc '/home/pi/RetroPie/roms/gbc/tetris.gbc' && emulationstation
