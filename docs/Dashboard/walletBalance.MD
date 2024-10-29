---
sidebar_label: "Wallet Balance"
title: "Wallet Balance Endpoint"
description: "Wallet Balance API endpoint description"
---

# Wallet Balance

**Endpoint:**

```
GET {{Url}}/api/v1/dashboard/wallet-balance/:coinId
```

**Authorization:** Bearer Token

```
{{Token}}
```

**Path Variables:**

```
coinId
```

**Request Body**:

```json
none
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
