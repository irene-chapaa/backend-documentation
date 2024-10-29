---
sidebar_label: "Reject User KYC"
title: "Reject User KYC Endpoint"
description: "Reject User KYC API endpoint description"
---

# Reject User KYC

**Endpoint:**

```
PUT {{Url}}/api/v1/users/reject-kyc
```

**Authorization:** Bearer Token

```
{{Token}}
```

**Path Variables**:

```json
id
```

**Request Body**:

```json
{
  "userId": "63dc24fa-f556-4564-b449-b392db187f92"
}
```

**Resposne**:

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
