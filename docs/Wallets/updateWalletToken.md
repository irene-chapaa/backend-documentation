---
sidebar_label: "Update Wallet Token"
title: "Update Wallet Token Endpoint"
description: "Update Wallet Token API endpoint description"
---

# Update Wallet Token

**Endpoint:**

```
PUT {{Url}}/api/v1/wallets/update-token
```

**Authorization:** Bearer Token

```
{{Token}}
```

**Request Body**:

```json
{
  "oldToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbklkeCI6MjAzMTc4LCJ0b2tlblR5cGUiOiJDT01QQU5ZIiwidG9rZW5FeHBpcmVkRGF0ZSI6IjIwMjQtMDgtMjVUMTM6MTU6MjAuNjM4WiJ9.j5SoV7o2MBFZTNnnfI23mI_Ka3qOpdq0dcR4IKtPeYM"
}
```

**Resposne**:

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
