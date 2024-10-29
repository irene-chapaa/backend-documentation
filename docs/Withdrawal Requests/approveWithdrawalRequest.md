---
sidebar_label: "Approve Withdrawal Request"
title: "Approve Withdrawal Request Endpoint"
description: "Approve Withdrawal Request API endpoint description"
---

# Approve Withdrawal Request

**Endpoint:**

```
PUT {{Url}}/api/v1/withdrawal-request/approve/:id
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
{}
```

**Resposne**:

```json
{
  "id": "268d0221-4d48-475a-b96c-0cebcd953de8",
  "userId": "bf0d1221-f07f-447b-914f-04a895743d5d",
  "transactionKind": "mpesa",
  "coinId": "KES",
  "status": "approved",
  "amount": 20,
  "destinationAddress": "25479979843",
  "notes": null,
  "approvedBy": "bf0d1221-f07f-447b-914f-04a895743d5d",
  "approvalRemarks": "",
  "rejectionRemarks": "",
  "createdAt": "2024-06-06T07:34:29.391Z",
  "updatedAt": "2024-10-29T11:29:41.433Z",
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
