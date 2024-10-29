---
sidebar_label: "Update User Info"
title: "Update User Info Endpoint"
description: "Update User Info API endpoint description"
---

# Get User Info API

**Endpoint:**

```
PUT {{Url}}/auth/me
```

**Authorization:** Bearer Token

```
{{Token}}
```

**Request Body**:

```json
{
  "firstName": "Wycliffe",
  "lastName": "Ouda",
  "middleName": "O",
  "phone": "+254746764503",
  "dateOfBirth": "12/12/2000",
  "nationalityName":"Kenyan",
  "subscribedToNewsletters": true,
  "email": "ouda.wycliffe@gmail.com"
}
```
