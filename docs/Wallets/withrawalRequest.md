---
sidebar_label: "Withdrawal Request"
title: "Withdrawal Request Endpoint"
description: "Withdrawal Request API endpoint description"
---

# Withdrawal Request

**Endpoint:**

```
POST {{Url}}/api/v1/wallets/withdrawal
```

**Authorization:** Bearer Token

```
{{Token}}
```

**Request Body**:

```json
{
  "amount": 0.00001,
  "receiverAddress": "0xc0ffee254729296a45a3885639AC7E10F9d54979",
  "symbol": "eth"
}
```

**Response**:

```json
{
  "success": true
}
```

**Status Codes:**

```json
{
  "200": "Success",
  "401": "Unauthorized",
  "404": "Not Found"
}
```
