---
sidebar_label: "Register User"
title: "Register Endpoint"
description: "Register API endpoint description"
---

# Register API

**Endpoint:**

```
POST {{Url}}/auth/register
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
  "email": "johndoe@gmail.com",
  "phone": "+2547467645",
  "password": "John@1234"
}
```
