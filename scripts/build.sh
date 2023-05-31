#!/bin/bash

sudo npm install -g @microsoft/rush
sudo rush update
sudo rush install
sudo rush build
