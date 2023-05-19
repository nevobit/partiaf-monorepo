#!/usr/bin/env bash

echo "Installing partiaf-monorepo..."

if ! [ -x "$(command -v pnpm)" ]; then
  npm install -g pnpm
fi

if ! [ -x "$(command -v rush)" ]; then
  npm install -g @microsoft/rush
fi

if ! [ -x "$(command -v vite)" ]; then
  npm install -g vite
fi

echo "Will now install dependencies and link monorepo packages..."
sleep 1

rush install
rush update
rush build
echo -e "\n\n🎉 Success initializing monorepo!"
echo -e "\n🎉 Happy hacking!\n\n"
# echo -e "To view available commands run:\n\n"
exit 0
