---
sidebar_label: "Create Withdrawal Request"
title: "Create Withdrawal Request Endpoint"
description: "Create Withdrawal Request API endpoint description"
---

# Create Withdrawal Request

**Endpoint:**

```
POST {{Url}}/api/v1/withdrawal-request/create
```

**Authorization:** Bearer Token

```
{{Token}}
```

**Request Body**:

```json
{
  "symbol": "", /// can be btc, eth, kes
  "amount": "",
  "to": "" //where the withdrawal amount is to be sent, can be phone number or wallet address
}
```

**Response Body**:

```json
{}
```

**Status Codes**:

```json
{
  "200": "Success",
  "401": "Unauthorized",
  "400": "Bad Request",
  "404": "Not Found",
  "500": "Internal Server Error"
}
```
