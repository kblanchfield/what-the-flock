.PHONY: mongo_init app_init

dev: mongo_init app_init

mongo_init:
	docker-compose up -d

app_init:
	netlify dev

clean:
	docker-compose down