<div align="center">

# 🚀 Crowdfunding Platform — Backend

### Plataforma de financiamiento colectivo con metas fijas y flexibles

[![Spring Boot](https://img.shields.io/badge/Spring%20Boot-4.0.6-brightgreen?style=for-the-badge&logo=springboot)](https://spring.io/projects/spring-boot)
[![Java](https://img.shields.io/badge/Java-21-orange?style=for-the-badge&logo=openjdk)](https://openjdk.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-blue?style=for-the-badge&logo=postgresql)](https://www.postgresql.org/)
[![JWT](https://img.shields.io/badge/JWT-Auth-purple?style=for-the-badge&logo=jsonwebtokens)](https://jwt.io/)
[![Stripe](https://img.shields.io/badge/Stripe-Payments-blueviolet?style=for-the-badge&logo=stripe)](https://stripe.com/)

</div>

---

## 📋 Tabla de Contenidos

- [Descripción](#-descripción)
- [Características](#-características)
- [Stack Tecnológico](#-stack-tecnológico)
- [Arquitectura](#-arquitectura)
- [Instalación](#-instalación)
- [Variables de Entorno](#-variables-de-entorno)
- [Endpoints](#-endpoints)
- [Roles y Permisos](#-roles-y-permisos)
- [Equipo](#-equipo)

---

## 📖 Descripción

**Crowdfunding Platform** es una API REST robusta desarrollada con **Spring Boot** que permite gestionar campañas de financiamiento colectivo. Los creadores pueden publicar proyectos con metas fijas o flexibles, los patrocinadores pueden apoyar causas a cambio de recompensas exclusivas, y los administradores mantienen la integridad de la plataforma.

---

## ✨ Características

### 🎯 Lógica de Negocio
- ✅ **Campañas** con meta fija (todo o nada) o flexible
- ✅ **Validación manual** de campañas por administradores (anti-fraude)
- ✅ **Promesas de donación** con recompensas por nivel de aporte
- ✅ **Sistema Todo o Nada** — solo se cobra si se alcanza la meta
- ✅ **Comisión del 5%** retenida automáticamente al creador
- ✅ **Reembolso automático** en campañas fallidas
- ✅ **Campañas destacadas** por algoritmo
- ✅ **Búsqueda avanzada** por categoría y ubicación
- ✅ **Reportes de fraude** con resolución por administrador

### 🔐 Seguridad
- ✅ Autenticación **stateless con JWT**
- ✅ Contraseñas encriptadas con **BCrypt**
- ✅ Control de acceso por **roles** (ADMIN, CREATOR, SPONSOR)
- ✅ Manejo global de excepciones con respuestas estandarizadas

### 📤 Exportación (Patrón Strategy)
- ✅ Exportación en formato **CSV**
- ✅ Exportación en formato **XML/Web**
- ✅ Exportación en formato **RSS Feed**

### 💳 Pagos (Punto Extra)
- ✅ Integración con **Stripe** para pagos en línea
- ✅ Creación de **PaymentIntents**
- ✅ Confirmación de pagos y actualización de pledges

---

## 🛠 Stack Tecnológico

| Tecnología | Versión | Uso |
|---|---|---|
| Java | 21 | Lenguaje principal |
| Spring Boot | 4.0.6 | Framework principal |
| Spring Security | 6.x | Seguridad y autorización |
| Spring Data JPA | 3.x | Persistencia de datos |
| PostgreSQL | 16 | Base de datos |
| JWT (jjwt) | 0.12.5 | Autenticación |
| Stripe Java SDK | 25.3.0 | Pagos en línea |
| OpenCSV | 5.9 | Exportación CSV |
| Lombok | Latest | Reducción de boilerplate |
| Maven | 3.x | Gestión de dependencias |

---

## 🏗 Arquitectura

El proyecto implementa una **Arquitectura N-Capas**:

```
com.example.crowdfundingplatform/
│
├── 🔧 config/           → Configuración global (SecurityConfig)
├── 🎮 controller/       → Capa de Presentación (API REST)
│
├── 📦 domain/
│   ├── dto/
│   │   ├── request/     → DTOs de entrada (CreateCampaignRequest, etc.)
│   │   └── response/    → DTOs de salida (CampaignDetailResponse, etc.)
│   ├── entity/          → Entidades JPA (Campaign, User, Pledge, etc.)
│   └── enums/           → Enumeraciones (Role, CampaignStatus, GoalType)
│
├── ⚠️  exception/        → Manejo global de excepciones
├── 📤 export/           → Patrón Strategy (CSV, Web, RSS)
├── 🔄 mapper/           → Conversión Entity ↔ DTO
├── 🗄️  repository/       → Capa de Acceso a Datos (Spring Data JPA)
├── 🔒 security/         → JWT Filter, JwtUtil, JwtAuth
│
└── ⚙️  service/          → Lógica de Negocio
    └── implService/     → Implementaciones de servicios
```

---

## 🚀 Instalación

### Prerrequisitos
- Java 21+
- Maven 3.x
- PostgreSQL 16+
- IntelliJ IDEA (recomendado)

### Pasos

**1. Clonar el repositorio:**
```bash
git clone https://github.com/AstridVides-cyber/Backend-CrowdfundingPlatform.git
cd Backend-CrowdfundingPlatform/CrowdfundingPlatform
```

**2. Crear la base de datos:**
```sql
CREATE DATABASE crowdfunding_db;
```

**3. Configurar variables de entorno en IntelliJ:**
```
Run → Edit Configurations → Environment Variables
```

**4. Agregar las variables:**
```
DB_URL=jdbc:postgresql://localhost:5432/crowdfunding_db
DB_USER=tu_usuario
DB_PASSWORD=tu_contraseña
SK_TEST=sk_test_tu_clave_stripe
PK_TEST=pk_test_tu_clave_stripe
```

**5. Correr el proyecto:**
```bash
./mvnw spring-boot:run
```

La API estará disponible en: `http://localhost:8080`

---

## 🔑 Variables de Entorno

| Variable | Descripción |
|---|---|
| `DB_URL` | URL de conexión a PostgreSQL |
| `DB_USER` | Usuario de la base de datos |
| `DB_PASSWORD` | Contraseña de la base de datos |
| `SK_TEST` | Clave secreta de Stripe (modo test) |
| `PK_TEST` | Clave pública de Stripe (modo test) |

---

## 📡 Endpoints

### 🔓 Auth (Público)
| Método | Ruta | Descripción |
|---|---|---|
| POST | `/api/auth/register` | Registro de usuario |
| POST | `/api/auth/login` | Inicio de sesión |

### 🏕️ Campaigns
| Método | Ruta | Rol | Descripción |
|---|---|---|---|
| POST | `/api/campaigns` | CREATOR | Crear campaña |
| GET | `/api/campaigns` | Autenticado | Listar campañas |
| GET | `/api/campaigns/{id}` | Autenticado | Detalle de campaña |
| PUT | `/api/campaigns/{id}` | CREATOR | Actualizar campaña |
| DELETE | `/api/campaigns/{id}` | CREATOR/ADMIN | Eliminar campaña |
| GET | `/api/campaigns/featured` | Autenticado | Campañas destacadas |
| GET | `/api/campaigns/category/{cat}` | Autenticado | Filtrar por categoría |
| GET | `/api/campaigns/location/{loc}` | Autenticado | Filtrar por ubicación |
| GET | `/api/campaigns/status/{status}` | Autenticado | Filtrar por estado |
| PATCH | `/api/campaigns/{id}/approve` | ADMIN | Aprobar campaña |
| PATCH | `/api/campaigns/{id}/reject` | ADMIN | Rechazar campaña |

### 💰 Pledges
| Método | Ruta | Rol | Descripción |
|---|---|---|---|
| POST | `/api/pledges` | SPONSOR | Crear pledge |
| GET | `/api/pledges/my` | SPONSOR | Mis pledges |
| GET | `/api/pledges/campaign/{id}` | CREATOR/ADMIN | Pledges de campaña |
| POST | `/api/pledges/{id}/refund` | ADMIN | Reembolsar pledge |

### 🎁 Rewards
| Método | Ruta | Rol | Descripción |
|---|---|---|---|
| POST | `/api/rewards` | CREATOR | Crear recompensa |
| GET | `/api/rewards/{id}` | Autenticado | Detalle de recompensa |
| GET | `/api/rewards/campaign/{id}` | Autenticado | Recompensas de campaña |
| PUT | `/api/rewards/{id}` | CREATOR | Actualizar recompensa |
| DELETE | `/api/rewards/{id}` | CREATOR | Eliminar recompensa |

### 🚨 Fraud Reports
| Método | Ruta | Rol | Descripción |
|---|---|---|---|
| POST | `/api/fraud-reports` | Autenticado | Reportar campaña |
| GET | `/api/fraud-reports/campaign/{id}` | ADMIN | Reportes de campaña |

### 👮 Admin
| Método | Ruta | Descripción |
|---|---|---|
| GET | `/api/admin/campaigns/pending` | Campañas pendientes |
| PATCH | `/api/admin/campaigns/{id}/approve` | Aprobar campaña |
| PATCH | `/api/admin/campaigns/{id}/reject` | Rechazar campaña |
| GET | `/api/admin/fraud-reports` | Reportes sin resolver |
| PATCH | `/api/admin/fraud-reports/{id}/resolve` | Resolver reporte |

### 📤 Export
| Método | Ruta | Rol | Descripción |
|---|---|---|---|
| GET | `/api/export/CSV` | ADMIN/CREATOR | Exportar en CSV |
| GET | `/api/export/WEB` | ADMIN/CREATOR | Exportar en XML |
| GET | `/api/export/RSS` | ADMIN/CREATOR | Exportar en RSS |

### 💳 Payments (Stripe)
| Método | Ruta | Rol | Descripción |
|---|---|---|---|
| POST | `/api/payments/create-intent` | SPONSOR | Crear PaymentIntent |
| POST | `/api/payments/confirm/{pledgeId}` | SPONSOR | Confirmar pago |

---

## 👥 Roles y Permisos

| Acción | ADMIN | CREATOR | SPONSOR |
|---|:---:|:---:|:---:|
| Aprobar/Rechazar campañas | ✅ | ❌ | ❌ |
| Crear campañas | ❌ | ✅ | ❌ |
| Gestionar recompensas | ❌ | ✅ | ❌ |
| Retirar fondos | ❌ | ✅ | ❌ |
| Hacer pledges | ❌ | ❌ | ✅ |
| Elegir recompensas | ❌ | ❌ | ✅ |
| Realizar pagos | ❌ | ❌ | ✅ |
| Resolver reportes de fraude | ✅ | ❌ | ❌ |
| Ver campañas | ✅ | ✅ | ✅ |
| Reportar fraude | ✅ | ✅ | ✅ |
| Exportar datos | ✅ | ✅ | ❌ |

---

## 👨‍💻 Equipo

| Nombre | Rol en el proyecto |
|---|---|
| Astrid | Backend Lead — Security, Auth, Campaigns, Payment |
| Jaime | Database, Services |
| Michy | DTOs, Export |
| Jonny | Exceptions, Admin |

---

<div align="center">

**Desarrollado con ❤️ usando Spring Boot**

[![GitHub](https://img.shields.io/badge/GitHub-Repository-black?style=for-the-badge&logo=github)](https://github.com/AstridVides-cyber/Backend-CrowdfundingPlatform)

</div>
