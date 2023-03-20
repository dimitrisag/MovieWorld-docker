- Create self-signed wildcard ssl => openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout ./ssl/wildcard.local.key -out ./ssl/wildcard.local.crt

- You have to add on hosts file the specific domains