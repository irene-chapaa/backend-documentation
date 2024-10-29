---
sidebar_label: "Login User"
title: "Login Endpoint"
description: "Login API endpoint description"
---

# Login API

**Description:** Authenticate a user and retrieve a token.

**Endpoint:**

```
POST {{Url}}/auth/login
```

**Authorization:** Bearer Token

```
{{Token}}
```

**Request Headers**:

- Content-Type: `application/json`

**Request Body**:

```json
{
  "email": "johndoe@gochapaa.com",
  "password": "Password"
}
```

**Response:**

```json
{
  "success": true,
  "user": {
    "id": "bf0d1221-f07f-447b-914f-04a895743d5d",
    "firstName": "John",
    "lastName": "Doe",
    "middleName": "O",
    "email": "johndoe@gochapaa.com",
    "date_of_birth": "2007-08-05T00:00:00.000Z",
    "phone": "+2547917983",
    "roles": ["ROLE_USER"],
    "profile_picture": [],
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImJmMGQxMjIxLWYwN2YtNDQ3Yi05MTRmLTA0YTg5NTc0M2Q1ZCIsImVtYWlsIjoiaXJlbmVAZ29jaGFwYWEuY29tIiwicm9sZXMiOlsiUk9MRV9VU0VSIl0sImlhdCI6MTczMDEwMDgxMywiZXhwIjoxNzMwMTA0NDEzfQ.fsMzrkkotJ6dIRcriT1PpcZLW9eyMf8zDf_P2qsrFfQ",
    "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImJmMGQxMjIxLWYwN2YtNDQ3Yi05MTRmLTA0YTg5NTc0M2Q1ZCIsImVtYWlsIjoiaXJlbmVAZ29jaGFwYWEuY29tIiwicm9sZXMiOlsiUk9MRV9VU0VSIl0sImlhdCI6MTczMDEwMDgxMywiZXhwIjoxNzMwMTA4MDEzfQ.Lm8xP-hkStS-Pu4wK1DfDTzy0adBRs2-YWhfISoMezI",
    "nationality_code": null,
    "nationality_name": "Antarctica",
    "nationality_dial_code": null,
    "subscribed_to_newsletters": true
  }
}
```

**Status Codes:**

```json
{
  "200": "Success",
  "401": "Unauthorized"
}
```
