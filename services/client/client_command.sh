#! /bin/bash
## start command for server
echo 'client side'

## this bash end exec and go back to exec in docker-compose.yml file
exec "$@"