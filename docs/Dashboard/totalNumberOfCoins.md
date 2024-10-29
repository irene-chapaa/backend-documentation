---
sidebar_label: "Total Number of Coins"
title: "Total Number of Coins Endpoint"
description: "Total Number of Coins API endpoint description"
---

# Total Number of Coins

**Endpoint:**

```
GET {{Url}}/api/v1/dashboard/total-coins
```

**Authorization:** Bearer Token

```
{{Token}}
```

**Request Body**:

```json
none
```

**Response Body**:

```json
{
    "totalCoins": 4
}
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
