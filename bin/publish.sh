#!/bin/bash

ITCH_USER=fritzy
ITCH_APP=test_7drl
ITCH_TARGET=web

./bin/build.sh

if [[ "$OSTYPE" == "linux"* ]]; then
  ./bin/butler-linux-amd64/butler push build $ITCH_USER/$ITCH_APP:$ITCH_TARGET
elif [[ "$OSTYPE" == "darwin"* ]]; then
  ./bin/butler-darwin-amd64/butler push build $ITCH_USER/$ITCH_APP:$ITCH_TARGET
fi
