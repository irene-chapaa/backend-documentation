---
sidebar_label: "Get Withdrawal Request by Status"
title: "Get Withdrawal Request by Status Endpoint"
description: "Get Withdrawal Request by Status API endpoint description"
---

# Get Withdrawal Request by Status

**Endpoint:**

```
GET {{Url}}/api/v1/withdrawal-request/by_status/:status
```

**Authorization:** Bearer Token

```
{{Token}}
```

**Request Body**:

```json
none
```

**Response:**

```json
[
  {
    "id": "299fccee-8ae9-43a7-91ce-2165c3bd870f",
    "userId": "05c41294-e0cd-4062-a3cd-df0b4a3205aa",
    "transactionKind": "mpesa",
    "coinId": "KES",
    "status": "rejected",
    "amount": 10,
    "destinationAddress": "254720637771",
    "notes": null,
    "approvedBy": null,
    "approvalRemarks": null,
    "rejectionRemarks": "",
    "createdAt": "2024-06-06T07:35:00.133Z",
    "updatedAt": "2024-06-06T07:35:24.573Z",
    "deletedAt": null
  },
  {
    "id": "308adc1b-2caf-4882-8a2e-4539fa53a072",
    "userId": "05c41294-e0cd-4062-a3cd-df0b4a3205aa",
    "transactionKind": "mpesa",
    "coinId": "KES",
    "status": "rejected",
    "amount": 2,
    "destinationAddress": "254720637771",
    "notes": null,
    "approvedBy": "55dbd3c2-72fa-4b9b-baee-bf3f215cb432",
    "approvalRemarks": "",
    "rejectionRemarks": "",
    "createdAt": "2024-06-06T07:05:53.687Z",
    "updatedAt": "2024-06-06T10:27:52.423Z",
    "deletedAt": null
  }
]
```

**Status Codes:**

```json
{
  "200": "Success",
  "401": "Unauthorized",
  "404": "Not Found"
}
```
