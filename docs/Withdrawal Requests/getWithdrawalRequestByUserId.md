---
sidebar_label: "Get Withdrawal Requests By User Id"
title: "Get Withdrawal Requests By User Id Endpoint"
description: "Get Withdrawal Requests By User Id API endpoint description"
---

# Get Withdrawal Requests By User Id

**Endpoint:**

```
GET {{Url}}/api/v1/withdrawal-request/:userId
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
  },
  {
    "id": "fcebfdd6-fb42-4502-91b1-8a64477e860e",
    "userId": "bf0d1221-f07f-447b-914f-04a895743d5d",
    "transactionKind": "mpesa",
    "coinId": "KES",
    "status": "approved",
    "amount": 10,
    "destinationAddress": "254791798403",
    "notes": null,
    "approvedBy": "55dbd3c2-72fa-4b9b-baee-bf3f215cb432",
    "approvalRemarks": "",
    "rejectionRemarks": "",
    "createdAt": "2024-06-07T07:34:56.059Z",
    "updatedAt": "2024-06-07T07:36:16.855Z",
    "deletedAt": null
  },
  {
    "id": "c44d3566-0791-4a49-b351-c7b50d73cc3b",
    "userId": "bf0d1221-f07f-447b-914f-04a895743d5d",
    "transactionKind": "mpesa",
    "coinId": "KES",
    "status": "rejected",
    "amount": 5,
    "destinationAddress": "254791798403",
    "notes": null,
    "approvedBy": "55dbd3c2-72fa-4b9b-baee-bf3f215cb432",
    "approvalRemarks": "",
    "rejectionRemarks": "",
    "createdAt": "2024-06-07T07:31:24.107Z",
    "updatedAt": "2024-06-07T09:24:21.621Z",
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
