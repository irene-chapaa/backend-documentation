---
sidebar_label: "Get All User Requests"
title: "Get All User Requests Endpoint"
description: "Get All User Requests API endpoint description"
---

# Get All User Requests

**Endpoint:**

```
GET {{Url}}/api/v1/notification/all
```

**Authorization:** Bearer Token

```
{{Token}}
```

**Request Body**:
```
none
```

**Response Body:**

```json
[
  {
    "id": "7e24b7a6-dcd6-47e6-a988-341d640d8ae5",
    "message": "Your KYC documents have been uploaded successfully. We will notify you when the verification process is complete. Thank you!",
    "isRead": true,
    "type": "information",
    "userId": "bf0d1221-f07f-447b-914f-04a895743d5d",
    "createdAt": "2024-05-09T08:10:39.151Z",
    "updatedAt": "2024-05-20T07:20:08.820Z",
    "deletedAt": null
  },
  {
    "id": "09ebe381-8cce-4a6f-86f5-507085177b27",
    "message": "Your KYC documents have been uploaded successfully. We will notify you when the verification process is complete. Thank you!",
    "isRead": true,
    "type": "information",
    "userId": "bf0d1221-f07f-447b-914f-04a895743d5d",
    "createdAt": "2024-05-09T08:12:24.712Z",
    "updatedAt": "2024-05-20T07:20:38.523Z",
    "deletedAt": null
  }
]
```

**Status Codes**:

```json
{
  "200": "Success",
  "401": "Unauthorized",
  "400": "Bad Request",
  "404": "Not Found",
  "500": "Internal Server Error"
}
```
