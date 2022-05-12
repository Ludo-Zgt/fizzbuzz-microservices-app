# Starts containers in detached mode
up:
	docker-compose --env-file .env.development up -d

# Stop containers
stop:
	docker-compose stop


start-fizz:
	docker exec -it node-dev sh -c "cd fizzbuzz; npm run start:dev"

start-st:
	docker exec -it node-dev sh -c "cd statistics; npm run start:dev"

start-gtw:
	docker exec -it node-dev sh -c "cd api-gateway; npm run start:dev"