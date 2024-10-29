---
sidebar_label: "Get All Withdrawal Requests"
title: "Get All Withdrawal Requests Endpoint"
description: "Get All Withdrawal Requests API endpoint description"
---

# Get All Withdrawal Requests

**Endpoint:**

```
GET {{Url}}/api/v1/withdrawal-request/all
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
    "id": "2153ce0f-510c-4ced-8ce0-2360cc18f0e7",
    "userId": "05c41294-e0cd-4062-a3cd-df0b4a3205aa",
    "transactionKind": "mpesa",
    "coinId": "KES",
    "status": "approved",
    "amount": 10,
    "destinationAddress": "254720637771",
    "notes": null,
    "approvedBy": "05c41294-e0cd-4062-a3cd-df0b4a3205aa",
    "approvalRemarks": "",
    "rejectionRemarks": null,
    "createdAt": "2024-06-06T07:31:34.457Z",
    "updatedAt": "2024-06-06T07:31:50.131Z",
    "deletedAt": null
  },
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
    "id": "268d0221-4d48-475a-b96c-0cebcd953de8",
    "userId": "bf0d1221-f07f-447b-914f-04a895743d5d",
    "transactionKind": "mpesa",
    "coinId": "KES",
    "status": "approved",
    "amount": 20,
    "destinationAddress": "254791798403",
    "notes": null,
    "approvedBy": "55dbd3c2-72fa-4b9b-baee-bf3f215cb432",
    "approvalRemarks": "",
    "rejectionRemarks": "",
    "createdAt": "2024-06-06T07:34:29.391Z",
    "updatedAt": "2024-06-06T07:40:05.524Z",
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
