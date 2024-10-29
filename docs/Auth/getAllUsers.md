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
      "firstName": "Fred",
      "lastName": "Omondi",
      "middleName": null,
      "email": "oukomondi@gmail.com",
      "phone": "+254703417782",
      "roles": ["ROLE_USER"],
      "dateOfBirth": null,
      "isPhoneVerified": false,
      "isEmailVerified": true,
      "verificationStatus": "unverified"
    },
    {
      "id": "ef140de3-98ec-4d57-94ae-1bf4b7e568ae",
      "firstName": "Ouda",
      "lastName": "Wycliffe",
      "middleName": null,
      "email": "wycliffe@gochapaa.com",
      "phone": "+254746764504",
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
