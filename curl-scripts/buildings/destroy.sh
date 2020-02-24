#!/bin/bash

curl "http://localhost:4741/buildings/${ID}" \
  --include \
  --request DELETE \
  --header "Authorization: Token token=${TOKEN}" \
