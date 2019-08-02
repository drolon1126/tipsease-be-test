# Tipper endpoints

## `GET /api/tippers`

### returns

```json
[
  {
    "id": integer,
    "name": string,
    "photo_url": string,
    "email": string
  },
  {
    "id": integer,
    "name": string,
    "photo_url": string,
    "email": string
  }
]
```

## `GET /api/tippers/:id`

### returns

```json
[
  {
    "name": string,
    "photo_url": string,
    "email": string
  }
]
```

## `DELETE /api/tippers/:id`

### returns

```json
[
  {
    "name": string,
    "email": string
  }
]
```

## `PUT /api/tippers/:id`

### ingest

```json
    {
        "name": string:required,
    }
```

### returns

```json
[
  {
    "id": integer,
    "name": string,
    "photo_url": string,
    "email": string
  }
]
```

# Tippee endpoints

## `GET /api/tippees/`

### returns

```json
[
  {
    "id": integer,
    "name": string,
    "company": string,
    "photo_url": string,
    "start-date": integer,
    "email": string,
    "tagline": text,
    "qr_url": text
  },
  {
    "id": integer,
    "name": string,
    "company": string,
    "photo_url": string,
    "email": string,
    "tagline": text,
    "qr_url": text
  }
]
```

# `GET /api/tippees/:id`

### returns

```json
[
  {
    "name": string,
    "email": string,
    "company": string
  }
]
```

# `PUT /api/tippeess/:id`

### ingest

```json
[
    {
    "name": string:required,
    "company": string,
    "company-address": string,
    "photo_url": string,
    "start-date": integer,
    "email": string,
    "tagline": text,
    "qr_url": text
    }
]
```

### returns

```json
[
    {
    "name": string:required,
    "company": string,
    "photo_url": string,
    "start-date": integer,
    "email": string,
    "tagline": text,
    "qr_url": text
    }
]
```

## `DELETE /api/tippers/:id`

### returns

```json
[
  {
    "name": string,
    "email": string,
    "company": string
  }
]
```

# Register endpoints

## `POST /api/register`

### ingest

```json
[
  {
    "tipperBoolean": boolean,
    "first_name": string,
    "last_name": string,
    "email": string,
    "password": string,
    "tagline": string
  }
]
```

# Tipping endpoints

## `POST /api/tippees/:id/tips`

### ingest

```json
[
  {
    "tipper_id": integer,
    "amount": float
  }
]
```
