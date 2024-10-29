---
sidebar_label: "Create Owner Wallet"
title: "Create Owner Wallet Endpoint"
description: "Create Owner Wallet API endpoint description"
---

# Create Owner Wallet

**Endpoint:**

```
POST {{Url}}/api/v1/owner-wallets/create
```

**Authorization:** Bearer Token

```
{{Token}}
```

**Request Body**:

```json
{
  "coinId": "ETH",
  "address": "0xf5D8bdB7C15a38e17F4A7f06B601d3458C295162",
  "passphrase": "chapaaMainnet!32",
  "privateKey": "RRwHWFoy6gXeDrdkW/9OT9zBQYipvIYe8/bXVKCt3a+IJD/9uOTHPVepvUwqkLA5F5pDG57Npd1i6cAt7XGWIZFebkfiovigT7YqKfi4vV8qzUYcwEDR/OXsvzLXyPx7I7CPwtGXQPcW7xgMYHGYeuBZ/nFbIfOoCr9/vP1Co330BPENE+iVVqGbBJODFoNzV0oTEUhyHRPL+Lll7K3bxJM7UzYUjMjEZGeEhSOGltqr8cMUBaBX3KcsOMofCA6tsqind0z65izhPuW2YLgM9/9WMB1f89h4dh49IPTw0S3lPvTfrmULY6zYRiWzjucjOKQPABZwjnigy7KFa5wAv4/vWgLNBL1V0M9SBfMbZDxsXhgh1oiNsWq0o2w6rij4iSoo1xDFIz7dNk51alo9Yeco2kjF5bQ56ZHmgFPcCT+rPho19CZopI8rzD+EItG4HwQuVfsvRyL99WxQaAXE39C07MeWDo9KekTq22qBqj9NLgXjd59PslLUIxHuCXbq"
}
```

**Response Body**:

```json
{}
```

**Status Codes:**

```json
{
  "200": "Success",
  "401": "Unauthorized",
  "400": "Bad Request",
  "404": "Not Found"
}
```