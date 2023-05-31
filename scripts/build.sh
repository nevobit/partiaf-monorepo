#!/bin/bash

npm install -g @microsoft/rush
rush update
rush install
rush build
