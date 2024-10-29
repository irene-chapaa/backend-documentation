---
sidebar_label: "Complete Transactions"
title: "Complete Transactions Endpoint"
description: "Complete Transactions API endpoint description"
---

# Complete Transactions

**Endpoint:**

```
GET {{Url}}/api/v1/dashboard/total-complete-transactions
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
  "totalCompleteTransactions": 544
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
