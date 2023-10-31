#!/bin/bash
git add -A && git commit -m "auto" && git push origin build
ssh banuna@daribalimice.com "cd /home/banuna/projects/daribalimice && ./server.sh pull"