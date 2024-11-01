---
sidebar_label: "Get All Users"
title: "Get All Users Endpoint"
description: "Get All Users API endpoint description"
---

# Get All Users

**Endpoint:**

```
GET {{Url}}/auth/allUsers
```

**Authorization:** Bearer Token

```
{{Token}}
```

**Request Body**:

none

**Response:**

```json
{
  "user": [
    {
      "id": "cf23156b-4edc-4278-80c8-56c40f21b974",
      "firstName": "John",
      "lastName": "Doe",
      "middleName": null,
      "email": "johndoe@gmail.com",
      "phone": "+254703417",
      "roles": ["ROLE_USER"],
      "dateOfBirth": null,
      "isPhoneVerified": false,
      "isEmailVerified": true,
      "verificationStatus": "unverified"
    }
  ]
}
```

**Status Codes:**

```json
{
  "200": "Success",
  "401": "Unauthorized"
}
```
