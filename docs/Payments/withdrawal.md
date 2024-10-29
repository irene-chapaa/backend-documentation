---
sidebar_label: "Withdrawal"
title: "Withdrawal Endpoint"
description: "Withdrawal API endpoint description"
---

# Withdrawal

**Endpoint:**

```
POST {{Url}}/api/v1/payments/withdrawal
```

**Authorization:** Bearer Token

```
{{Token}}
```

**Request Body**:

```json
{
  "phone": "2547917950034",
  "amount": 10
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
