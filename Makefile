.PHONY: db init clean

dev: db init

db:
	docker compose up -d

init:
	netlify dev

clean:
	docker compose down