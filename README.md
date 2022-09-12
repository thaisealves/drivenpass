<div align="center">
<h1>DrivenPass</h1>
</div>

# Description

Using Typescript to make a place to storage all of your passwords.

<div align="center">

  <h3>Built With</h3>
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" height="30px" alt="Typescript"/>
  <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" height="30px" alt="PostgreSQL"/>
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" height="30px" alt="Node.js"/>  
  <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express.js&logoColor=white" height="30px" alt="Express.js"/>  
  <img src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white" height="30px" alt="Prisma"/>
  
</div>

## Features:

- Create a credential/card/note/document/wifi file, where the user can put the passwords informations
- Get all of these files, in blocks of types or individualy
- Delete these files individualy

# References

### Sign Up

Creating an account

```http
POST /signup
```

#### Request:

| Body       | Type     | Description                                            |
| :--------- | :------- | :----------------------------------------------------- |
| `email`    | `email`  | **Required**. Email for the application                |
| `password` | `string` | **Required**. Password used on the current application |

####

### Sign In

Entering the application

```http
POST /signin
```

#### Request:

| Body       | Type     | Description                                            |
| :--------- | :------- | :----------------------------------------------------- |
| `email`    | `email`  | **Required**. Email for the application                |
| `password` | `string` | **Required**. Password used on the current application |

####

#### Response :

Token from the user

####

### Create a credential

Where the user can create a file putting an website url and the informations for the account on that website.

```http
POST /credential
```

#### Request:

| Body       | Type     | Description                                |
| :--------- | :------- | :----------------------------------------- |
| `title`    | `string` | **Required**. Name for the file            |
| `url`      | `uri`    | **Required**. URL from the website         |
| `username` | `string` | **Required**. Username used on the website |
| `password` | `string` | **Required**. Password used on the website |

####

| Headers         | Type     | Description                       |
| :-------------- | :------- | :-------------------------------- |
| `Authorization` | `string` | **Required**. Token from the user |

####

### Read a credential

Getting one credential from the user

```http
GET /credential/{id}
```

#### Request:

| Headers         | Type     | Description                       |
| :-------------- | :------- | :-------------------------------- |
| `Authorization` | `string` | **Required**. Token from the user |

####

| Params | Type      | Description                         |
| :----- | :-------- | :---------------------------------- |
| `id`   | `integer` | **Required**.ID from the credential |

#### Response :

All the information from one credential

####

### Read all credentials

Getting all credentials from the user

```http
GET /credentials
```

#### Request:

| Headers         | Type     | Description                       |
| :-------------- | :------- | :-------------------------------- |
| `Authorization` | `string` | **Required**. Token from the user |

#### Response :

All the credentials from one user

####

### Delete a credential

Deleting one credential from the user

```http
DELETE /credential/{id}
```

#### Request:

| Headers         | Type     | Description                       |
| :-------------- | :------- | :-------------------------------- |
| `Authorization` | `string` | **Required**. Token from the user |

####

| Params | Type      | Description                         |
| :----- | :-------- | :---------------------------------- |
| `id`   | `integer` | **Required**.ID from the credential |

####

</br>

### Create a card

Where the user can create a file putting all the informations from a card.

```http
POST /card
```

#### Request:

| Body             | Type       | Description                                                               |
| :--------------- | :--------- | :------------------------------------------------------------------------ |
| `title`          | `string`   | **Required**. Name for the file                                           |
| `cardNumber`     | `string`   | **Required**. String only with numbers, with max length of 16 characteres |
| `cardName`       | `string`   | **Required**. The name written on the card                                |
| `cvv`            | `string`   | **Required**.The Security Code from the card                              |
| `expirationDate` | `string`   | **Required**. String in the format MM/YY                                  |
| `password`       | `string`   | **Required**. Password from the card                                      |
| `isVirtual`      | `boolean`  | **Required**.Information if it's virtual or not                           |
| `type`           | `cardType` | **Required**. The type from the card                                      |

`Valid types: [credit, debt, both]`

####

| Headers         | Type     | Description                       |
| :-------------- | :------- | :-------------------------------- |
| `Authorization` | `string` | **Required**. Token from the user |

####

### Read a card

Getting one card from the user

```http
GET /card/{id}
```

#### Request:

| Headers         | Type     | Description                       |
| :-------------- | :------- | :-------------------------------- |
| `Authorization` | `string` | **Required**. Token from the user |

####

| Params | Type      | Description                   |
| :----- | :-------- | :---------------------------- |
| `id`   | `integer` | **Required**.ID from the card |

#### Response :

All the information from one card of the user

####

### Read all cards

Getting all cards from the user

```http
GET /cards
```

#### Request:

| Headers         | Type     | Description                       |
| :-------------- | :------- | :-------------------------------- |
| `Authorization` | `string` | **Required**. Token from the user |

#### Response :

All the information from all cards of the user

####

### Delete a card

Deleting one card from the user

```http
DELETE /card/{id}
```

#### Request:

| Headers         | Type     | Description                       |
| :-------------- | :------- | :-------------------------------- |
| `Authorization` | `string` | **Required**. Token from the user |

####

| Params | Type      | Description                   |
| :----- | :-------- | :---------------------------- |
| `id`   | `integer` | **Required**.ID from the card |

####

</br>

### Create a note

Where the user can create a file putting a note to keep it safe.

```http
POST /note
```

#### Request:

| Body    | Type     | Description                                                               |
| :------ | :------- | :------------------------------------------------------------------------ |
| `title` | `string` | **Required**. Name for the file. Max length: 50 char                      |
| `note`  | `uri`    | **Required**. The note the user wants to keep safe. Max length: 1000 char |

####

| Headers         | Type     | Description                       |
| :-------------- | :------- | :-------------------------------- |
| `Authorization` | `string` | **Required**. Token from the user |

####

### Read a note

Getting one note from the user

```http
GET /note/{id}
```

#### Request:

| Headers         | Type     | Description                       |
| :-------------- | :------- | :-------------------------------- |
| `Authorization` | `string` | **Required**. Token from the user |

####

| Params | Type      | Description                   |
| :----- | :-------- | :---------------------------- |
| `id`   | `integer` | **Required**.ID from the note |

#### Response :

All the information from one note of the user

####

### Read all notes

Getting all notes from the user

```http
GET /notes
```

#### Request:

| Headers         | Type     | Description                       |
| :-------------- | :------- | :-------------------------------- |
| `Authorization` | `string` | **Required**. Token from the user |

#### Response :

All the information from all notes of the user

####

### Delete a note

Deleting one note from the user

```http
DELETE /note/{id}
```

#### Request:

| Headers         | Type     | Description                       |
| :-------------- | :------- | :-------------------------------- |
| `Authorization` | `string` | **Required**. Token from the user |

####

| Params | Type      | Description                   |
| :----- | :-------- | :---------------------------- |
| `id`   | `integer` | **Required**.ID from the note |

####

</br>

### Create a wifi file

Where the user can create a file putting an network name and its password.

```http
POST /wifi
```

#### Request:

| Body       | Type     | Description                                |
| :--------- | :------- | :----------------------------------------- |
| `title`    | `string` | **Required**. Name for the file            |
| `network`  | `string` | **Required**. Name from the network        |
| `password` | `string` | **Required**. Password used on the network |

####

| Headers         | Type     | Description                       |
| :-------------- | :------- | :-------------------------------- |
| `Authorization` | `string` | **Required**. Token from the user |

####

### Read a wifi

Getting one wifi from the user

```http
GET /wifi/{id}
```

#### Request:

| Headers         | Type     | Description                       |
| :-------------- | :------- | :-------------------------------- |
| `Authorization` | `string` | **Required**. Token from the user |

####

| Params | Type      | Description                   |
| :----- | :-------- | :---------------------------- |
| `id`   | `integer` | **Required**.ID from the wifi |

#### Response :

All the information from one wifi of the user

####

### Read all wifis

Getting all wifis from the user

```http
GET /wifis
```

#### Request:

| Headers         | Type     | Description                       |
| :-------------- | :------- | :-------------------------------- |
| `Authorization` | `string` | **Required**. Token from the user |

#### Response :

All the information from all wifis of the user

####

### Delete a wifi

Deleting one wifi from the user

```http
DELETE /wifi/{id}
```

#### Request:

| Headers         | Type     | Description                       |
| :-------------- | :------- | :-------------------------------- |
| `Authorization` | `string` | **Required**. Token from the user |

####

| Params | Type      | Description                   |
| :----- | :-------- | :---------------------------- |
| `id`   | `integer` | **Required**.ID from the wifi |

####

</br>

### Create a document

Where the user can create a file putting all the information from a RG or CNH, that are national documents.

```http
POST /doc
```

#### Request:

| Body             | Type      | Description                                                     |
| :--------------- | :-------- | :-------------------------------------------------------------- |
| `type`           | `docType` | **Required**. The type of the doc being used                    |
| `fullName`       | `string`  | **Required**. Name written on the document                      |
| `emissionDate`   | `string`  | **Required**. Date that it was released, on format "DD/MM/YYYY" |
| `expiryDate`     | `string`  | **Required**. Date that it will expire, on format "DD/MM/YYYY"  |
| `registerNumber` | `string`  | **Required**. Number from the document                          |
| `issuingBody`    | `string`  | **Required**. Where the document was made                       |

`Valid types: [RG, CNH]`

####

| Headers         | Type     | Description                       |
| :-------------- | :------- | :-------------------------------- |
| `Authorization` | `string` | **Required**. Token from the user |

####

### Read a document

Getting one document from the user

```http
GET /doc/{id}
```

#### Request:

| Headers         | Type     | Description                       |
| :-------------- | :------- | :-------------------------------- |
| `Authorization` | `string` | **Required**. Token from the user |

####

| Params | Type      | Description                       |
| :----- | :-------- | :-------------------------------- |
| `id`   | `integer` | **Required**.ID from the document |

#### Response :

All the information from one document

####

### Read all documents

Getting all documents from the user

```http
GET /docs
```

#### Request:

| Headers         | Type     | Description                       |
| :-------------- | :------- | :-------------------------------- |
| `Authorization` | `string` | **Required**. Token from the user |

#### Response :

All the information from all the documents

####

### Delete a document

Deleting one document from the user

```http
DELETE /doc/{id}
```

#### Request:

| Headers         | Type     | Description                       |
| :-------------- | :------- | :-------------------------------- |
| `Authorization` | `string` | **Required**. Token from the user |

####

| Params | Type      | Description                       |
| :----- | :-------- | :-------------------------------- |
| `id`   | `integer` | **Required**.ID from the document |

####

</br>
