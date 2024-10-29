---
sidebar_label: "Get User Wallet by Email Address"
title: "Get User Wallet by Email Address Endpoint"
description: "Get User Wallet by Email Address API endpoint description"
---

# Get User Wallet by Email Address

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
  "email": "johnDoe@gmail.com",
  "symbol": "eth"
}
```

**Response:**

```json
{
  "id": "6b8d6540-264d-44ce-a678-e091ed91ef56",
  "coinId": "ETH",
  "address": "0xA4d5Cd721Ca864B42777053470c14004Bb6243aD",
  "balance": 0.040000008174309994,
  "octetBalance": 0,
  "amountWithdrawnToday": 0.0005100000000000001,
  "userId": "63dc24fa-f556-4564-b449-b392db187f92",
  "createdAt": "2024-05-17T08:00:21.595Z",
  "updatedAt": "2024-09-19T05:31:27.573Z",
  "deletedAt": null
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
