---
sidebar_label: "Request OTP"
title: "Request OTP Endpoint"
description: "Request OTP API endpoint description"
---

# Request OTP

**Endpoint:**

```
POST {{Url}}/api/v1/general/get-otp
```

**Authorization:** Bearer Token

```
{{Token}}
```

**Request Body**:

```json
none
```

**Response Body**:

```json
{
  "success": true
}
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
