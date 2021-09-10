#! /bin/bash
## start command for server
echo 'Welcome to Express server side'

## this bash end exec and go back to exec in docker-compose.yml file
exec "$@"