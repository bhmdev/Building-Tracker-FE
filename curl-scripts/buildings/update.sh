#!/bin/bash

curl "http://localhost:4741/buildings/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "building": {
      "address": "'"${ADDRESS}"'",
      "price": "'"${PRICE}"'",
      "built_date": "'"${BUILT_DATE}"'",
      "sq_feet": "'"${SQ_FEET}"'"
    }
  }'
