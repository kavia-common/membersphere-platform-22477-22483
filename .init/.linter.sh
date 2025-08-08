#!/bin/bash
cd /home/kavia/workspace/code-generation/membersphere-platform-22477-22483/membership_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

