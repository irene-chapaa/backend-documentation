---
sidebar_label: "Approve user KYC"
title: "Approve user KYC Endpoint"
description: "Approve user KYC API endpoint description"
---

# Approve user KYC

**Endpoint:**

```
POST {{Url}}api/v1/users/approve-kyc
```

**Authorization:** Bearer Token

```
{{Token}}
```

**Request Body**:

```json
{
  "userId": "bf0d1221-f07f-447b-04a895743d5d"
}
```

**Response Body**:

```json
{
  "success": true
}
```

**Status Codes:**

```json
{
  "200": "Success",
  "401": "Unauthorized"
}
```
