# Agent Documentation - Muara Tech Indonesia Ecosystem

Dokumentasi lengkap seluruh project yang terkait dengan ekosistem Muara Tech Indonesia.

---

## Identitas Perusahaan

| Aspek | Detail |
|-------|--------|
| Nama Perusahaan | Muara Tech Indonesia |
| Brand | MuaraTech |
| Domain Project | iq-muaratech |
| Bidang | Software Development (Web, Mobile, Graphics Design) |
| Primary Color | #109594 (Teal) |
| Secondary Color | #ff6a00 (Orange) |
| Accent Color | #1a6ccc (Blue) |
| Font | Inter / Plus Jakarta Sans |
| Domain | muaratech.com |

---

## Daftar Project

| # | Project | Path | Tipe |
|---|---------|------|------|
| 1 | iq-muaratech | `/Documents/Projects/Web/iq-muaratech` | Company Landing Page |
| 2 | apps-web-muara-absence | `/Documents/Projects/Web/apps-web-muara-absence` | Web Admin Panel |
| 3 | be-muara-absence | `/Documents/Projects/Api/be-muara-absence` | REST API Backend |
| 4 | muara_absence_mobile | `/Documents/Projects/MobileApps/muara_absence_mobile` | Flutter Mobile App |

---

## 1. IQ Muara Technology (Company Landing Page)

### Overview
Website profil perusahaan PT Muara Inovasi Teknologi. Berfungsi sebagai landing page untuk menampilkan layanan, portfolio, dan informasi kontak perusahaan.

### Tech Stack
| Kategori | Teknologi | Versi |
|----------|-----------|-------|
| Framework | Vue 3 | ^3.5.22 |
| Build Tool | Vite | ^7.1.7 |
| Routing | Vue Router | ^4.6.3 |
| State Management | Pinia | ^3.0.3 (installed, belum digunakan) |
| CSS Framework | Tailwind CSS | ^4.14 |
| UI Library | Flowbite + Flowbite Vue | ^3.1.2 / ^0.2 |
| Animation | GSAP | ^3.13.0 (installed, belum digunakan) |
| Font | Montserrat (Google Fonts) | - |

### Struktur Project
```
iq-muaratech/
├── index.html                   # SPA entry point
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
├── public/
│   ├── favicon.svg
│   └── vite.svg
└── src/
    ├── App.vue                  # Root component (<RouterView />)
    ├── main.js                  # Entry: router, directive registration
    ├── style.css                # Global styles + Tailwind + Flowbite
    ├── assets/
    │   ├── images/              # Logo, background, service icons
    │   └── index.css            # Tailwind utilities import
    ├── components/
    │   └── layout/
    │       ├── Footer.vue
    │       └── Header.vue
    ├── directives/
    │   └── scrollAnimate.js     # Custom directive: IntersectionObserver animations
    ├── layouts/
    │   └── DefaultLayout.vue    # Layout wrapper with slot + Footer
    └── views/
        ├── Home.vue             # Main landing page (semua section)
        ├── About.vue            # Halaman about
        └── Backup.vue           # Prototype (tidak di-route)
```

### Routing
| Path | Component | Deskripsi |
|------|-----------|-----------|
| `/` | `views/Home.vue` | Landing page utama (lazy-loaded) |
| `/about` | `views/About.vue` | Halaman about (lazy-loaded) |

### In-Page Navigation (Anchor Links)
- `#home` - Hero section
- `#services` - Services section
- `#about` - About section
- `#portofolio` - Portfolio section
- `#contact` - Contact section

### Fitur/Section
| Section | Deskripsi |
|---------|-----------|
| Header/Navbar | Fixed-on-scroll, hamburger menu mobile, anchor links |
| Hero | Welcome banner + CTA button + scroll animations |
| Services | 3 kartu: Web Development, Mobile Development, Graphics Design |
| About Us | Deskripsi perusahaan + 3 pilar: Innovation, Reliability, Collaboration |
| Portfolio | Grid 10 kartu portfolio (placeholder data) |
| FAQs | Accordion 3 pertanyaan |
| Contact | Info kontak, Google Maps embed, mailto form |
| Footer | Copyright + social media links |

### Arsitektur
- **SPA** dengan Vue Router (HTML5 History mode)
- **Component-Based** dengan Composition API (`<script setup>`)
- **Layout Pattern**: `DefaultLayout.vue` membungkus halaman
- **Custom Directive**: `v-scroll-animate` menggunakan IntersectionObserver
- **Tidak ada API calls** - website statis/presentasional
- **Tidak ada authentication**

### Konfigurasi
- **Primary Color**: `#315BA6`
- **Secondary Color**: `#5dc3e4`
- **Dark Mode**: Disabled
- **Build Output**: `dist/`

---

## 2. Apps Web Muara Absence (Lokaku - Web Admin Panel)

### Overview
Panel admin berbasis web untuk sistem absensi "Lokaku". Digunakan oleh admin/HR untuk mengelola karyawan, konfigurasi absensi, approval cuti, reimbursement, dan task management. Menggunakan arsitektur multi-tenant (database-per-tenant).

### Tech Stack

#### Backend
| Teknologi | Versi | Fungsi |
|-----------|-------|--------|
| PHP | ^8.2 | Runtime |
| Laravel | ^12.0 | Core framework |
| MySQL | - | Database (multi-tenant) |
| Intervention/Image | ^2 | Resize gambar sebelum upload S3 |
| League/Flysystem S3 | ^3.0 | Object storage |
| Ramsey/UUID | ^4.9 | UUID untuk primary key transaksi |
| Yajra DataTables | ^12.0 | Server-side DataTables |
| PestPHP | ^3.8 | Testing |

#### Frontend
| Teknologi | Versi | Fungsi |
|-----------|-------|--------|
| Vite | ^7.0.7 | Build tool |
| Tailwind CSS | ^4.0.0 | CSS framework |
| Axios | ^1.11.0 | HTTP client AJAX |
| jQuery | CDN | DOM manipulation + AJAX |
| Bootstrap 5 | CDN | UI components (via vendor.min.js) |
| SweetAlert2 | CDN | Toast notifications |
| Select2 | CDN | Enhanced select dropdowns |
| Quill.js | CDN | Rich text editor |
| Parsley.js | CDN | Form validation |
| Remixicon | CDN | Icon set |
| Google Maps API | CDN | Geolocation + geocoding |

### Struktur Project
```
apps-web-muara-absence/
├── app/
│   ├── Http/
│   │   ├── Controllers/
│   │   │   ├── AuthController.php          # Login, logout, switch tenant
│   │   │   ├── Controller.php              # Abstract base (shared helpers)
│   │   │   ├── DashboardController.php     # Dashboard analytics
│   │   │   ├── HomeController.php          # Home/beranda + announcements
│   │   │   ├── Config/
│   │   │   │   ├── CompanyController.php
│   │   │   │   ├── Absence/               # 5 controllers
│   │   │   │   ├── Announcement/          # Category controller
│   │   │   │   ├── Master/                # 7 controllers
│   │   │   │   ├── Reimbursement/         # 2 controllers
│   │   │   │   └── TimeOff/              # 4 controllers
│   │   │   └── Transaction/
│   │   │       ├── Absence/               # Attendance + Report
│   │   │       ├── Reimbursement/         # 3 controllers
│   │   │       ├── TimeOff/              # 2 controllers
│   │   │       └── Task/                 # Task + Project
│   │   └── Middleware/
│   │       └── CheckLogin.php             # Auth guard + dynamic DB switch
│   ├── Models/                            # 44 Eloquent models
│   └── Providers/
│       └── AppServiceProvider.php         # Global view composer
├── resources/views/
│   ├── layouts/
│   │   ├── app.blade.php                  # Main layout (topbar + sidenav)
│   │   └── partials/                      # topbar, sidenav, footer, etc.
│   ├── login.blade.php
│   ├── switch_tenant.blade.php
│   ├── home/
│   ├── dashboard/
│   ├── config/                            # absence, master, time-off, reimbursement, announcement
│   ├── transaction/                       # absence, time-off, reimbursement
│   └── task/                              # task-project, task
├── routes/
│   └── web.php                            # Semua web routes (177 lines)
├── public/assets/                         # Static assets + vendor libs
├── composer.json
├── package.json
└── vite.config.js
```

### Arsitektur Multi-Tenant

```
┌─────────────────────────────────────────────────┐
│                 PORTAL DATABASE                   │
│  ┌──────────────┐  ┌──────────────┐  ┌────────┐│
│  │ portal_user  │  │portal_database│  │portal_ ││
│  │              │  │              │  │tenant  ││
│  └──────────────┘  └──────────────┘  └────────┘│
└─────────────────────────────────────────────────┘
         │                    │
         ▼                    ▼
┌─────────────┐      ┌─────────────┐
│  Tenant DB 1 │      │  Tenant DB 2 │
│  (Company A) │      │  (Company B) │
└─────────────┘      └─────────────┘
```

- Portal DB menyimpan `portal_user`, `portal_database`, `portal_tenant`
- Login: query portal DB untuk cari tenant user
- Middleware `CheckLogin` re-establish koneksi tenant DB setiap request
- Dynamic DB switch: `Config::set('database.connections.custom_mysql', [...])`

### Base Controller Pattern
Abstract `Controller.php` menyediakan helper methods:
- `switchDatabase()` / `switchDatabaseById()` / `switchDatabaseToDefault()` - DB switching
- `getFileS3()` / `uploadFileS3()` / `deleteFileS3()` - S3 file operations
- `dateFormat()` / `dateDayNameFormat()` / `removeLastSymbolTime()` - Date formatting
- `getEmployeeSchedule()` / `getEmployeeLocation()` - Employee data helpers
- `timeCalculation()` / `totalWorkingCalculation()` - Attendance time math
- `getAddressFromLatLng()` - Google Maps reverse geocoding
- `formatRupiah()` - Currency formatting

### Routing (web.php)

#### Public Routes
| Method | URI | Fungsi |
|--------|-----|--------|
| GET | `/` | Redirect ke login/home |
| GET | `/login` | Halaman login |
| POST | `/auth/store` | Proses login |
| GET | `/switch-tenant` | Halaman pilih tenant |
| GET | `/action-switch-tenant` | Eksekusi switch tenant |

#### Protected Routes (middleware `role:admin`, prefix `/pages`)
**Home & Dashboard:**
- `pages/home`, `pages/dashboard`

**Master Data:**
- `pages/role`, `pages/company-branch`, `pages/department`, `pages/position`
- `pages/marriage-status`, `pages/employee`, `pages/user`

**Absence Config:**
- `pages/location-radius`, `pages/location-employee`
- `pages/day-off`, `pages/employee-schedule`, `pages/attendance-approval`

**Time Off Config:**
- `pages/time-off-period`, `pages/time-off-category`
- `pages/time-off-config`, `pages/time-off-approval`

**Reimbursement Config:**
- `pages/reimbursement-category`, `pages/reimbursement-approval`

**Transactions:**
- `pages/attendance`, `pages/report-attendance`
- `pages/time-off`, `pages/time-off-approval`
- `pages/reimbursement`, `pages/reimbursement-approval`
- `pages/task-project`, `pages/task`

### Fitur Utama
| Modul | Deskripsi |
|-------|-----------|
| Authentication | Multi-tenant login, tenant switching, session-based |
| Dashboard | Analytics: attendance stats, task progress, leave balance, calendar heatmap |
| Home/Beranda | Daily schedule, shortcuts, announcements, leave summary |
| Attendance | GPS clock-in/out + geofencing + selfie + lateness calculation |
| Time Off | Leave request + balance tracking + delegation + multi-level approval |
| Reimbursement | Header-detail pattern, per-item approval, currency formatting |
| Task Management | Kanban board + drag-and-drop + project-based + priority/status |
| Announcements | Rich text (Quill.js) + categories + file attachments |
| Master Data | Employee, department, position, role, branch, marriage status |
| Config Absence | Location radius (geofence), employee location, schedules, day-offs |
| Config Time Off | Periods, categories/subcategories, balance config, approval chains |
| Config Reimbursement | Categories, approval chain |
| Report Attendance | Monthly attendance reports |

### Dynamic Menu System (RBAC)
```
m_menu_group -> m_menu_category -> m_menu -> m_menu_user
```
- Menu dirender berdasarkan role user
- Support "Coming Soon" badges dan approval count badges

---

## 3. BE Muara Absence (REST API Backend)

### Overview
Backend REST API untuk mobile app Lokaku. Menyediakan endpoint untuk authentication, attendance (GPS + geofencing), time off, reimbursement, task management, announcements, dan notifications. Menggunakan arsitektur multi-tenant yang sama dengan web admin.

### Tech Stack
| Teknologi | Versi | Fungsi |
|-----------|-------|--------|
| PHP | ^8.2 | Runtime |
| Laravel | ^12.0 | Core framework |
| Laravel Sanctum | ^4.0 | API token authentication |
| MySQL | - | Database (multi-tenant) |
| Intervention/Image | ^2 | Image manipulation |
| League/Flysystem S3 | ^3.0 | AWS S3 file storage |
| Ramsey/UUID | ^4.9 | UUID generation |
| PestPHP | ^3.8 | Testing |
| Laravel Sail | ^1.41 | Docker dev environment |

### Struktur Project
```
be-muara-absence/
├── app/
│   ├── Http/
│   │   ├── Controllers/
│   │   │   ├── Controller.php              # Abstract base
│   │   │   └── Api/
│   │   │       ├── BaseController.php      # Shared utilities
│   │   │       └── V1/
│   │   │           ├── AuthController.php
│   │   │           ├── AnouncementController.php
│   │   │           ├── EmployeeController.php
│   │   │           ├── InboxController.php
│   │   │           ├── ProfileController.php
│   │   │           ├── TaskManagement/
│   │   │           │   ├── TaskManagementController.php
│   │   │           │   ├── ProjectController.php
│   │   │           │   └── TaskController.php
│   │   │           └── Transaction/
│   │   │               ├── AbsenceController.php
│   │   │               ├── TimeOffController.php
│   │   │               └── ReimbursementController.php
│   │   └── Middleware/
│   │       └── SwitchDatabase.php          # Multi-tenant DB switch
│   ├── Models/                             # 47 Eloquent models
│   └── Providers/
│       └── AppServiceProvider.php
├── database/
│   ├── migrations/                         # 55 migration files
│   └── seeders/                            # 25 seeder files
├── routes/
│   ├── api.php                             # API entry point
│   └── api_v1.php                          # All V1 routes
├── composer.json
└── package.json
```

### Arsitektur

#### Multi-Tenant (Database-per-Tenant)
Sama dengan web admin:
- Portal database menyimpan `portal_database` dan `portal_user`
- Middleware `SwitchDatabase` mengkonfigurasi koneksi `custom_mysql` secara dinamis
- Setiap tenant memiliki database MySQL terpisah

#### API Versioning
- Semua routes di bawah prefix `/api/v1/`
- Controllers di namespace `App\Http\Controllers\Api\V1`

#### Controller Inheritance
```
Controller (abstract) -> BaseController (shared utilities) -> Feature Controllers
```

BaseController menyediakan:
- Response formatting
- S3 file operations (`getFileS3`, `uploadFileS3`, `deleteFileS3`)
- Date formatting
- Schedule/location helpers
- Late calculation
- Address geocoding

#### UUID Primary Keys
- Tabel transaksi: UUID (`$keyType = 'string'`, `$incrementing = false`)
- Tabel master/referensi: Auto-incrementing integer

#### Naming Conventions
- **Master tables**: prefix `m_` (contoh: `m_employees`, `m_companies`)
- **Transaction tables**: prefix `trans_` (contoh: `trans_attendances`, `trans_time_offs`)
- **Pivot/junction tables**: nama deskriptif (contoh: `task_project_employees`)

### Database Models (47 Models)

#### Core Entities
| Model | Table | Key Type |
|-------|-------|----------|
| User | users | Auto-increment |
| MEmployee | m_employees | Auto-increment |
| MCompany | m_companies | Auto-increment |
| MCompanyBranch | m_company_branches | Auto-increment |
| MRole | m_roles | Auto-increment |

#### Attendance Module
| Model | Table | Key Type |
|-------|-------|----------|
| TransAttendance | trans_attendances | UUID |
| TransAttendanceDetail | trans_attendance_details | UUID |
| EmployeeSchedule | attendance_employee_schedules | UUID |
| MLocationRadius | m_location_radius | Auto-increment |
| MLocationEmployee | m_employee_locations | Auto-increment |
| MAttendanceStatus | m_attendance_status | Auto-increment |
| MDayOff | m_day_offs | Auto-increment |
| MDay | m_days | Auto-increment |

#### Time Off Module
| Model | Table | Key Type |
|-------|-------|----------|
| TransTimeOff | trans_time_offs | UUID |
| TransTimeOffDelegation | trans_time_off_delegations | - |
| TransTimeOffImage | trans_time_off_images | - |
| TimeOffCEmployee | time_off_c_employees | UUID |
| MTimeOffCategory | m_time_off_categories | Auto-increment |
| MTimeOffSubcategory | m_time_off_subcategories | Auto-increment |
| MTimeOffStatus | m_time_off_status | Auto-increment |
| MTimeOffPeriod | m_time_off_period | Auto-increment |
| MTimeOffAproval | m_time_off_approvals | Auto-increment |

#### Reimbursement Module
| Model | Table | Key Type |
|-------|-------|----------|
| TransReimbursement | trans_reimbursements | UUID |
| TransReimbursementDetail | trans_reimbursement_details | UUID |
| MReimbursementCategory | m_reimbursement_categories | Auto-increment |
| MReimbursementStatus | m_reimbursement_status | Auto-increment |
| MReimbursementDetailStatus | m_reimbursement_detail_status | Auto-increment |
| MReimbursementAproval | m_reimbursement_approvals | Auto-increment |

#### Task Management Module
| Model | Table | Key Type |
|-------|-------|----------|
| TaskProject | task_projects | UUID |
| Task | trans_tasks | UUID |
| TaskProjectEmployee | task_project_employees | UUID |
| MTaskStatus | m_task_status | Auto-increment |
| MTaskPriority | m_task_priorities | Auto-increment |

#### Announcement & Inbox
| Model | Table | Key Type |
|-------|-------|----------|
| TransAnnouncement | trans_announcements | UUID |
| MAnnouncementCategory | m_announcement_categories | Auto-increment |
| Inbox | inboxes | UUID |

#### Menu System
| Model | Table |
|-------|-------|
| MMenuGroup | m_menu_groups |
| MMenuCategory | m_menu_categories |
| MMenu | m_menus |
| MMenuUser | m_menu_users |

### API Endpoints (routes/api_v1.php)

#### Authentication (Public)
| Method | Endpoint | Fungsi |
|--------|----------|--------|
| POST | `/api/v1/login` | Login + get token |
| POST | `/api/v1/select-tenant` | Pilih tenant setelah login |

#### Protected Routes (Sanctum + SwitchDatabase middleware)

**Profile:**
| Method | Endpoint | Fungsi |
|--------|----------|--------|
| GET | `/api/v1/profile` | Get profile data |
| POST | `/api/v1/profile/update` | Update profile |
| POST | `/api/v1/profile/update-photo` | Update avatar |
| POST | `/api/v1/profile/change-password` | Ganti password |

**Attendance:**
| Method | Endpoint | Fungsi |
|--------|----------|--------|
| GET | `/api/v1/absence` | Get attendance data hari ini |
| POST | `/api/v1/absence/clock` | Clock in/out |
| GET | `/api/v1/absence/history` | Riwayat attendance |
| GET | `/api/v1/absence/location` | Get lokasi absensi |
| GET | `/api/v1/absence/map` | Get map data |

**Time Off:**
| Method | Endpoint | Fungsi |
|--------|----------|--------|
| GET | `/api/v1/time-off` | List time off |
| POST | `/api/v1/time-off/store` | Ajukan cuti |
| GET | `/api/v1/time-off/{id}` | Detail cuti |
| GET | `/api/v1/time-off/history` | Riwayat cuti |
| GET | `/api/v1/time-off/balance` | Saldo cuti |
| GET | `/api/v1/time-off/approval` | List approval |
| POST | `/api/v1/time-off/approval/action` | Approve/reject |
| GET | `/api/v1/time-off/delegation` | List delegasi |

**Reimbursement:**
| Method | Endpoint | Fungsi |
|--------|----------|--------|
| GET | `/api/v1/reimbursement` | List reimbursement |
| POST | `/api/v1/reimbursement/store` | Buat reimbursement |
| GET | `/api/v1/reimbursement/{id}` | Detail |
| POST | `/api/v1/reimbursement/detail/store` | Tambah item detail |
| POST | `/api/v1/reimbursement/detail/update` | Update item |
| POST | `/api/v1/reimbursement/detail/delete` | Hapus item |
| POST | `/api/v1/reimbursement/submit` | Submit untuk approval |
| GET | `/api/v1/reimbursement/history` | Riwayat |
| GET | `/api/v1/reimbursement/statistics` | Statistik |

**Task Management:**
| Method | Endpoint | Fungsi |
|--------|----------|--------|
| GET | `/api/v1/task-management` | Dashboard task |
| GET | `/api/v1/task-management/project` | List projects |
| POST | `/api/v1/task-management/project/store` | Buat project |
| POST | `/api/v1/task-management/project/update` | Update project |
| POST | `/api/v1/task-management/project/delete` | Hapus project |
| GET | `/api/v1/task-management/task` | List tasks |
| POST | `/api/v1/task-management/task/store` | Buat task |
| POST | `/api/v1/task-management/task/update` | Update task |
| POST | `/api/v1/task-management/task/delete` | Hapus task |
| POST | `/api/v1/task-management/task/update-status` | Update status task |

**Announcements:**
| Method | Endpoint | Fungsi |
|--------|----------|--------|
| GET | `/api/v1/announcement` | List announcements |
| GET | `/api/v1/announcement/{id}` | Detail announcement |

**Employee:**
| Method | Endpoint | Fungsi |
|--------|----------|--------|
| GET | `/api/v1/employee` | List employees |
| GET | `/api/v1/employee/{id}` | Detail employee |

**Inbox:**
| Method | Endpoint | Fungsi |
|--------|----------|--------|
| GET | `/api/v1/inbox` | List notifications |
| POST | `/api/v1/inbox/read` | Mark as read |

**Home:**
| Method | Endpoint | Fungsi |
|--------|----------|--------|
| GET | `/api/v1/home` | Home data (schedule, stats) |

### Seeders (25 files)
Menyediakan data awal untuk:
- Master attendance status, days, task status, task priority
- Time off status, reimbursement status
- Menu groups, categories, menus
- Roles, positions, departments
- Sample company, branch, employee data

---

## 4. Muara Absence Mobile (Flutter App)

### Overview
Aplikasi mobile untuk karyawan menggunakan Flutter. Fitur utama: absensi GPS + selfie, pengajuan cuti, reimbursement, task management, dan notifikasi. Menggunakan arsitektur GetX MVC + Repository Pattern.

### Tech Stack
| Kategori | Package | Versi | Fungsi |
|----------|---------|-------|--------|
| Framework | Flutter | SDK ^3.10.4 | Mobile framework |
| State Management | get (GetX) | ^4.7.3 | Routing, DI, state |
| Storage | get_storage | ^2.1 | Local key-value storage |
| Storage | shared_preferences | ^2.5.4 | Credential persistence |
| HTTP | http | ^1.2 | REST API calls |
| HTTP | dio | ^5.4.0 | Advanced HTTP |
| Maps | google_maps_flutter | ^2.16.0 | Map display |
| Location | geolocator | ^14.0.2 | GPS location |
| Firebase | cloud_firestore | ^6.1 | Firestore |
| Push Notif | onesignal_flutter | ^5.5.1 | Push notifications |
| UI | google_fonts | ^8.1.0 | Typography |
| UI | flutter_svg | ^2.2.3 | SVG rendering |
| UI | flutter_animate | ^4.5.2 | Animations |
| UI | getwidget | ^7.0 | UI components |
| UI | hexcolor | ^3.0.2 | Hex color support |
| UI | loading_animation_widget | ^1.3.0 | Loading animations |
| UI | smooth_page_indicator | ^2.0.1 | Page indicators |
| UI | flutter_html | ^3.0.0-beta.2 | HTML rendering |
| Date | syncfusion_flutter_datepicker | ^32.1.22 | Date picker |
| Date | intl | ^0.20.2 | Date/number formatting |
| File | file_picker | ^8.0 | File selection |
| File | image_picker | ^1.2.1 | Camera/gallery |
| PDF | flutter_pdfview | ^1.3.2 | PDF viewing |
| Permissions | permission_handler | ^12.0.1 | Runtime permissions |
| Refresh | pull_to_refresh | ^2.0.0 | Pull-to-refresh |
| Upgrade | upgrader | ^12.5.0 | App update prompts |
| Splash | flutter_native_splash | ^2.4.7 | Native splash |
| Env | flutter_dotenv | ^6.0 | Environment variables |

### Struktur Project
```
muara_absence_mobile/
├── assets/
│   ├── icons/          # 62 SVG/PNG icons
│   ├── images/
│   └── logo/
├── lib/
│   ├── main.dart                    # App entry point
│   ├── core/
│   │   ├── config/
│   │   │   ├── app_config.dart      # Environment config
│   │   │   ├── caching.dart         # Session/auth caching
│   │   │   ├── url_api_v1.dart      # Semua API endpoints
│   │   │   └── cache/               # Domain-specific caches
│   │   │       ├── cache_absence.dart
│   │   │       ├── cache_announcements.dart
│   │   │       ├── cache_employee.dart
│   │   │       ├── cache_profile.dart
│   │   │       ├── cache_reimbursement.dart
│   │   │       ├── cache_reimbursement_statistics.dart
│   │   │       ├── cache_time_off.dart
│   │   │       └── cache_time_off_balance.dart
│   │   ├── controllers/
│   │   │   ├── auth_controller.dart
│   │   │   ├── general_controller.dart
│   │   │   └── theme_controller.dart
│   │   └── routes/
│   │       ├── app_pages.dart       # Route definitions
│   │       └── app_routes.dart      # Route constants
│   ├── data/
│   │   ├── models/
│   │   │   ├── absence/            # 3 models
│   │   │   ├── announcement/       # 1 model
│   │   │   ├── employee/           # 2 models
│   │   │   ├── profile/            # 1 model
│   │   │   ├── reimbursement/      # 4 models
│   │   │   └── time_off/           # 6 models
│   │   └── repositories/
│   │       ├── absence_repository.dart
│   │       ├── announcement_repository.dart
│   │       ├── employee_repository.dart
│   │       ├── home_repository.dart
│   │       ├── profile_repository.dart
│   │       ├── reimbursement_repository.dart
│   │       └── time_off_repository.dart
│   ├── modules/                     # 36 feature modules
│   │   ├── absence/
│   │   ├── absence_history/
│   │   ├── absence_location/
│   │   ├── absence_map/
│   │   ├── announcement/
│   │   ├── announcement_show/
│   │   ├── bottom_nav/
│   │   ├── change_password/
│   │   ├── employee/
│   │   ├── employee_dt/
│   │   ├── employee_info/
│   │   ├── home/
│   │   ├── inbox/
│   │   ├── login/
│   │   ├── onboarding/
│   │   ├── personal_info/
│   │   ├── profile/
│   │   ├── reimb/
│   │   ├── reimb_dt/
│   │   ├── reimb_dt_form/
│   │   ├── reimb_form/
│   │   ├── reimb_history/
│   │   ├── select_tenant/
│   │   ├── task/
│   │   ├── task_form/
│   │   ├── task_group/
│   │   ├── task_group_form/
│   │   ├── task_onboarding/
│   │   ├── task_show/
│   │   ├── time_off/
│   │   ├── time_off_approval/
│   │   ├── time_off_balance/
│   │   ├── time_off_delegation/
│   │   ├── time_off_form/
│   │   ├── time_off_history/
│   │   └── time_off_show/
│   └── shared/
│       ├── services/
│       │   ├── api_service.dart     # HTTP client wrapper
│       │   └── auth_service.dart    # Login API calls
│       ├── utils/
│       │   ├── bitmap_from_asset.dart
│       │   ├── date_picker_component.dart
│       │   ├── dialog_component.dart
│       │   ├── format_character.dart
│       │   ├── image_dimension.dart
│       │   ├── safe_money_masked_component.dart
│       │   └── time_convert_component.dart
│       └── widgets/
│           ├── alerts/
│           ├── animated_press_widget.dart
│           ├── buttons/
│           ├── cards/
│           ├── confirmation_widget.dart
│           ├── dashed_rect_widget.dart
│           ├── forms/
│           ├── images/
│           ├── loadings/
│           ├── pop_scope_widget.dart
│           ├── scaffold_widget.dart
│           ├── status_border_widget.dart
│           ├── status_widget.dart
│           ├── viewers/
│           └── wizards/
├── android/
├── ios/
├── pubspec.yaml
└── analysis_options.yaml
```

### Arsitektur: GetX MVC + Repository Pattern

Setiap module mengikuti struktur:
```
modules/[feature_name]/
├── bindings/[feature]_binding.dart        # Dependency injection
├── controllers/[feature]_controller.dart  # Business logic
└── views/[feature]_view.dart              # UI layer
```

#### Layer Architecture
```
┌─────────────────────────────────────┐
│           Views (UI)                 │
│   modules/*/views/*_view.dart       │
└──────────────┬──────────────────────┘
               │ GetX reactive (Obx, .obs)
┌──────────────▼──────────────────────┐
│        Controllers (Logic)           │
│   modules/*/controllers/*_ctrl.dart │
└──────────────┬──────────────────────┘
               │ calls
┌──────────────▼──────────────────────┐
│       Repositories (Data Access)     │
│   data/repositories/*_repository.dart│
└──────────────┬──────────────────────┘
               │ HTTP calls
┌──────────────▼──────────────────────┐
│        API Service (HTTP)            │
│   shared/services/api_service.dart  │
└──────────────┬──────────────────────┘
               │
┌──────────────▼──────────────────────┐
│        Backend API (Laravel)         │
│   be-muara-absence                  │
└─────────────────────────────────────┘
```

### Routing (GetX Named Routes)

| Route | Module | Deskripsi |
|-------|--------|-----------|
| `/onboarding` | onboarding | Onboarding screens |
| `/login` | login | Login page |
| `/select-tenant` | select_tenant | Tenant selection |
| `/bottom-nav` | bottom_nav | Main tab navigation |
| `/home` | home | Home dashboard |
| `/absence` | absence | Clock in/out |
| `/absence-history` | absence_history | Attendance history |
| `/absence-location` | absence_location | Location selection |
| `/absence-map` | absence_map | Map view |
| `/time-off` | time_off | Time off list |
| `/time-off-form` | time_off_form | Request leave |
| `/time-off-show` | time_off_show | Leave detail |
| `/time-off-history` | time_off_history | Leave history |
| `/time-off-balance` | time_off_balance | Leave balance |
| `/time-off-approval` | time_off_approval | Approval list |
| `/time-off-delegation` | time_off_delegation | Delegation |
| `/reimb` | reimb | Reimbursement list |
| `/reimb-form` | reimb_form | Create reimbursement |
| `/reimb-dt` | reimb_dt | Reimbursement detail |
| `/reimb-dt-form` | reimb_dt_form | Add detail item |
| `/reimb-history` | reimb_history | Reimbursement history |
| `/task` | task | Task list |
| `/task-form` | task_form | Create/edit task |
| `/task-show` | task_show | Task detail |
| `/task-group` | task_group | Project list |
| `/task-group-form` | task_group_form | Create/edit project |
| `/task-onboarding` | task_onboarding | Task onboarding |
| `/announcement` | announcement | Announcement list |
| `/announcement-show` | announcement_show | Announcement detail |
| `/employee` | employee | Employee directory |
| `/employee-dt` | employee_dt | Employee detail |
| `/employee-info` | employee_info | Employee info |
| `/inbox` | inbox | Notifications |
| `/profile` | profile | User profile |
| `/personal-info` | personal_info | Personal info |
| `/change-password` | change_password | Change password |

### State Management (GetX)
- **Reactive variables**: `.obs` untuk observable state
- **Obx widget**: Auto-rebuild saat state berubah
- **GetxController**: Lifecycle management (onInit, onClose)
- **Bindings**: Dependency injection per route

### API Integration
- **ApiService** (`shared/services/api_service.dart`): HTTP client wrapper
  - Base URL dari `AppConfig`
  - Token dari `SharedPreferences`
  - Headers: `Authorization: Bearer {token}`, `Accept: application/json`
  - Methods: GET, POST (with multipart support for file uploads)
- **Repositories**: Abstraksi data access per domain
- **Caching**: Domain-specific cache classes menggunakan `GetStorage`

### Authentication Flow
```
1. User buka app -> cek token di SharedPreferences
2. Jika tidak ada token -> tampilkan Login
3. Login -> POST /api/v1/login -> dapat list tenants
4. Pilih tenant -> POST /api/v1/select-tenant -> dapat access token
5. Simpan token + tenant info di SharedPreferences
6. Navigate ke Home
7. Setiap API call -> attach Bearer token di header
```

### Fitur Utama

| Modul | Deskripsi |
|-------|-----------|
| Onboarding | Intro screens untuk user baru |
| Login | Email/password authentication |
| Select Tenant | Pilih perusahaan (multi-tenant) |
| Home | Dashboard: jadwal hari ini, statistik, shortcuts |
| Absence | Clock in/out dengan GPS + selfie + geofencing validation |
| Absence History | Riwayat kehadiran per bulan |
| Absence Location | Pilih lokasi absensi |
| Absence Map | Peta lokasi absensi |
| Time Off | Pengajuan cuti dengan form lengkap |
| Time Off Approval | Approve/reject cuti (untuk atasan) |
| Time Off Balance | Saldo cuti per kategori |
| Time Off Delegation | Delegasi tugas saat cuti |
| Reimbursement | Pengajuan reimbursement (header-detail) |
| Reimbursement Detail | Tambah item per reimbursement |
| Task Management | CRUD task + project + status tracking |
| Announcements | Baca pengumuman (HTML rendered) |
| Employee Directory | Daftar karyawan + detail |
| Inbox | Notifikasi in-app |
| Profile | Edit profil + foto + ganti password |

### Shared Widgets
| Widget | Fungsi |
|--------|--------|
| ScaffoldWidget | Custom scaffold dengan loading state |
| AlertWidget | Alert/snackbar notifications |
| ConfirmationWidget | Dialog konfirmasi |
| InputWidget | Custom text input |
| InputDropdown | Dropdown dengan search |
| InputImage | Image picker (camera/gallery) |
| InputTime | Time picker |
| CardListWidget | Reusable list card |
| StatusWidget | Badge status (colored) |
| StatusBorderWidget | Bordered status badge |
| LoadingPageWidget | Full-page loading |
| AnimatedPressWidget | Animated button press |
| WizardArrow/Number | Step wizard indicators |
| ImageViewer | Full-screen image viewer |
| PdfViewer | PDF document viewer |
| PopScopeWidget | Back button handler |

### Shared Utils
| Utility | Fungsi |
|---------|--------|
| DatePickerComponent | Date picker helper |
| DialogComponent | Dialog builder |
| FormatCharacter | String formatting (rupiah, etc.) |
| ImageDimension | Image size calculation |
| SafeMoneyMaskedComponent | Currency input masking |
| TimeConvertComponent | Time format conversion |
| BitmapFromAsset | Convert asset to bitmap (for map markers) |

---

## Hubungan Antar Project

```
┌─────────────────────────────────────────────────────────────┐
│                    USERS / CLIENTS                            │
└──────┬──────────────────────────────────┬───────────────────┘
       │                                  │
       ▼                                  ▼
┌──────────────────┐            ┌─────────────────────┐
│  iq-muaratech    │            │ muara_absence_mobile │
│  (Landing Page)  │            │ (Flutter App)        │
│  Vue 3 + Vite    │            │ GetX + Repository    │
│                  │            │                     │
│  Tidak terhubung │            │  Konsumsi REST API  │
│  ke backend      │            │         │           │
└──────────────────┘            └─────────┼───────────┘
                                          │
                                          ▼
                               ┌─────────────────────┐
                               │  be-muara-absence    │
                               │  (REST API)          │
                               │  Laravel + Sanctum   │
                               │         │           │
                               └─────────┼───────────┘
                                          │
                                          ▼
                               ┌─────────────────────┐
                               │  MySQL Databases     │
                               │  (Multi-Tenant)      │
                               │  Portal DB + N DBs   │
                               └─────────┬───────────┘
                                          │
                                          ▲
                               ┌─────────┼───────────┐
                               │ apps-web-muara-      │
                               │ absence              │
                               │ (Web Admin Panel)    │
                               │ Laravel + Blade      │
                               │ Direct DB access     │
                               └─────────────────────┘
```

### Catatan Penting:
1. **iq-muaratech** adalah website profil perusahaan yang berdiri sendiri, tidak terhubung ke sistem absensi
2. **be-muara-absence** adalah API backend yang dikonsumsi oleh **muara_absence_mobile**
3. **apps-web-muara-absence** mengakses database yang sama secara langsung (bukan via API)
4. Kedua project Laravel (web admin + API) berbagi arsitektur multi-tenant yang sama
5. Semua project menggunakan **S3-compatible storage** untuk file uploads
6. Authentication: Web admin menggunakan session-based, API menggunakan Sanctum token-based

---

## Konvensi & Standar

### Database Naming
- Master tables: `m_` prefix
- Transaction tables: `trans_` prefix
- UUID untuk primary key transaksi
- Auto-increment untuk master/referensi

### API Response Format
```json
{
  "success": true,
  "message": "Success message",
  "data": { ... }
}
```

### Color Palette
- Primary: `#315BA6` (Biru)
- Secondary: `#5dc3e4` (Biru muda)
- Font: Montserrat (web), Montserrat + Poppins (mobile)

### Multi-Tenant Flow
1. User login dengan email/password
2. Sistem cek portal DB untuk tenant yang dimiliki user
3. Jika punya >1 tenant, tampilkan halaman pilih tenant
4. Setelah pilih tenant, koneksi DB di-switch ke tenant DB
5. Semua operasi selanjutnya menggunakan tenant DB

---

## Development Commands

### iq-muaratech
```bash
npm run dev      # Development server (Vite, port 5173)
npm run build    # Production build ke dist/
npm run preview  # Preview production build
```

### apps-web-muara-absence
```bash
composer install          # Install PHP dependencies
npm install               # Install JS dependencies
php artisan serve         # Laravel dev server
npm run dev               # Vite dev server (assets)
php artisan migrate       # Run migrations
php artisan db:seed       # Run seeders
```

### be-muara-absence
```bash
composer install          # Install PHP dependencies
npm install               # Install JS dependencies
php artisan serve         # Laravel dev server
npm run dev               # Vite dev server
php artisan migrate       # Run migrations
php artisan db:seed       # Run seeders
./vendor/bin/pest         # Run tests
```

### muara_absence_mobile
```bash
flutter pub get           # Install dependencies
flutter run               # Run on connected device/emulator
flutter build apk         # Build Android APK
flutter build ios         # Build iOS
```

---

## Changelog

### [2026-05-08] Major Redesign - Modern Minimalist + Pricing Section
- **style.css**: Simplify total - hapus styles tidak dipakai (gradient-border, glass morphism, heavy patterns, floating cards assets, text-gradient-purple/accent, scroll-indicator). Pertahankan yang esensial saja.
- **Home.vue**:
  - **Hero**: Simplify - floating cards dihapus, scroll indicator dihapus, background lebih clean
  - **Features**: Tambah fitur PPDB Online sebagai fitur ke-5. Grid diubah dari 4 kolom jadi responsif (sm:2, lg:3, xl:5)
  - **Product mockup**: Diperbaiki responsifnya - phone sizes dikurangi, max-width dibatasi, scaling lebih baik di mobile
  - **Pricing (NEW)**: 2 kartu harga (Pro + Enterprise) dengan interactive checkbox:
    - **Pro**: HR wajib (disabled), modular checkbox untuk PPDB, CBT, SIAKAD dengan harga real-time via Vue computed
    - **Enterprise**: Semua fitur Pro + server terisolasi + custom domain, Rp 1.000.000/bln
  - **Roadmap**: PPDB dipindah ke features (sudah launch). Grid diubah ke 3 kolom
- **Semua "Muara Technology Indonesia"** -> **"Muara Tech Indonesia"** (4 tempat)

### Positioning Produk & Harga
- **Nama Produk**: Lokaku
- **Tipe**: SaaS (Software as a Service)
- **Target Market**: Sekolah & Institusi Pendidikan
- **Fitur Saat Ini**: Absensi GPS, Cuti, Reimbursement, Tugas, **PPDB Online** (5 fitur)
- **Fitur Roadmap**: Payment, Sistem Akademik, Ujian Online/CBT
- **Harga Pro**: HR (200rb) + PPDB (+100rb) + CBT (+150rb) + SIAKAD (+150rb) = maks 600rb/bln
- **Harga Enterprise**: 1.000.000/bln (semua fitur + server terisolasi + custom domain)

---

## Skills & Learnings Log

> Section ini akan diupdate setiap kali ada skill/pengetahuan baru yang dipelajari dari project ini.

### Learned Skills
- [2026-05-08] Multi-tenant architecture (database-per-tenant) dengan Laravel
- [2026-05-08] GetX MVC + Repository Pattern di Flutter
- [2026-05-08] Laravel Sanctum token-based API authentication
- [2026-05-08] GPS geofencing untuk attendance system
- [2026-05-08] Dynamic database connection switching di Laravel
- [2026-05-08] UUID primary keys untuk transaction tables
- [2026-05-08] S3-compatible file storage integration
- [2026-05-08] Vue 3 Composition API + Custom Directives
- [2026-05-08] Server-side DataTables dengan Yajra
- [2026-05-08] Multi-level approval workflow pattern
- [2026-05-08] SEO configuration (meta tags, Open Graph, Twitter Card, JSON-LD)
- [2026-05-08] Modern CSS techniques (glass morphism, gradient borders, CSS animations)
- [2026-05-08] Tailwind CSS v4 theming (@theme directive, custom keyframes)
- [2026-05-08] SaaS landing page design patterns
- [2026-05-08] Vue reactive pricing calculator (computed + ref dengan interactive UI)
- [2026-05-08] Modern minimalist design principles (white space, clean cards, reduce decorative noise)
