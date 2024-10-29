---
sidebar_label: "Register Webhook"
title: "Register Webhook Endpoint"
description: "Register Webhook API endpoint description"
---

# Register Webhook

**Endpoint:**

```
POST {{Url}}/api/v1/wallets/webhook/register
```

**Authorization:** Bearer Token

```
{{Token}}
```

**Request Body**:

```json
{
  "walletId": 1250,
  "name": "BTCDEPOSIT",
  "callbackUrl": "https://api.gochapaa.io/api/v1/wallets/webhook/callback",
  "type": "DEPOSIT"
}
```

**Response**:

```json
{}
```

**Status Codes:**

```json
{
  "200": "Success",
  "401": "Unauthorized",
  "404": "Not Found"
}
```
