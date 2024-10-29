---
sidebar_label: "Register Wallet Token"
title: "Register Wallet Token Endpoint"
description: "Register Wallet Token API endpoint description"
---

# Register Wallet Token

**Endpoint:**

```
POST {{Url}}/api/v1/wallets/register-token
```

**Authorization:** Bearer Token

```
{{Token}}
```

**Request Body**:

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbklkeCI6MjAzMTc4LCJ0b2tlblR5cGUiOiJDT01QQU5ZIiwidG9rZW5FeHBpcmVkRGF0ZSI6IjIwMjQtMDgtMjVUMTM6MTU6MjAuNjM4WiJ9.j5SoV7o2MBFZTNnnfI23mI_Ka3qOpdq0dcR4IKtPeYM"
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
