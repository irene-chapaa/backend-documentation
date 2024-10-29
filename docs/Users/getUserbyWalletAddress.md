---
sidebar_label: "Get User by Wallet Address"
title: "Get User by Wallet Address Endpoint"
description: "Get User by Wallet Address API endpoint description"
---

# Get User by Wallet Address

**Endpoint:**

```
GET {{Url}}/api/v1/users/get-user-by-wallet/:walletAddress
```

**Authorization:** Bearer Token

```
{{Token}}
```

**Request Body**:

```json
{
  "address": "tb1qvnjjhd4ulvfj9445n0xdus4qn5js7yayy72u9t"
}
```

**Response:**

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
