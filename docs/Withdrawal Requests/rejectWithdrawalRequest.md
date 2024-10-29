---
sidebar_label: "Reject Withdrawal Request"
title: "Reject Withdrawal Request Endpoint"
description: "Reject Withdrawal Request API endpoint description"
---

# Reject Withdrawal Request

**Endpoint:**

```
PUT {{Url}}/api/v1/withdrawal-request/reject/:id
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
  "id": "290205d4-97b7-4678-ba89-03e16b5fec9c",
  "userId": "05c41294-e0cd-4062-a3cd-df0b4a3205aa",
  "transactionKind": "mpesa",
  "coinId": "KES",
  "status": "rejected",
  "amount": 5,
  "destinationAddress": "254720637771",
  "notes": null,
  "approvedBy": null,
  "approvalRemarks": null,
  "rejectionRemarks": "",
  "createdAt": "2024-06-06T11:32:50.684Z",
  "updatedAt": "2024-10-29T11:33:04.504Z",
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
