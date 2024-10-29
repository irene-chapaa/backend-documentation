---
sidebar_label: "Get User Info"
title: "Get user info Endpoint"
description: "Get user info API endpoint description"
---

# Get User Info API

**Endpoint:**

```
GET {{Url}}/auth/me
```

**Authorization:** Bearer Token

```
{{Token}}
```

**Request Body**:

```json
{
  "firstName": "John",
  "lastName": "Doe",
  "middleName": "O",
  "phone": "+2547467645",
  "dateOfBirth": "12/12/2000",
  "nationalityName":"Kenyan",
  "subscribedToNewsletters": true,
  "email": "johndoe@gmail.com"
}
```
