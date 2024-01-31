#!/bin/bash
project_path="/home/pranjal.mukharjee/Desktop/zemoso-training"
webhook_url="https://chat.googleapis.com/v1/spaces/AAAAZH5euTI/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=UxNWaLQd_KTMrytl4Bhx6ZlId-IupPcu9vyYwdYoR7o"
cd $project_path
pwd
git pull


if [[ $? -eq 0 ]]
then curl -X POST -H "Content-Type: application/json" -d '{"text": "Compile Successfull"}' "$webhook_url"
else
curl -X POST -H "Content-Type: application/json" -d '{"text": "Compile failed!"}' "$webhook_url"
fi 
