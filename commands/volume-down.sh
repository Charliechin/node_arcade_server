#!bin/bash
amixer set PCM -- $[$(amixer get PCM|grep -o [0-9]*%|sed 's/%//')-20]%
