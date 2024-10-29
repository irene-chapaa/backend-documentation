---
sidebar_label: "Total Revenue Amount"
title: "Total Revenue Amount Endpoint"
description: "Total Revenue Amount API endpoint description"
---

# Total Revenue Amount

**Endpoint:**

```
GET {{Url}}/api/v1/dashboard/total-revenue-amount
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
  "totalChargeSum": 973.6911860062116
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
