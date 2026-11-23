import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header class="header">
      <div class="header-container">
        <div class="brand">
          <div class="logo-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
            </svg>
          </div>
          <div class="brand-text">
            <span class="brand-title">Gorka Nurse</span>
            <span class="brand-badge">Gestión Hospitalaria</span>
          </div>
        </div>

        <nav class="nav-links">
          <a routerLink="/inicio" routerLinkActive="active" class="nav-link">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
              <polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
            Inicio
          </a>
          <a routerLink="/pacientes" routerLinkActive="active" class="nav-link">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
            Pacientes
          </a>
          <a routerLink="/enfermeros" routerLinkActive="active" class="nav-link">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
            </svg>
            Personal Enfermería
          </a>
          <a routerLink="/citas" routerLinkActive="active" class="nav-link">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
              <line x1="16" x2="16" y1="2" y2="6"/>
              <line x1="8" x2="8" y1="2" y2="6"/>
              <line x1="3" x2="21" y1="10" y2="10"/>
            </svg>
            Citas y Curas
          </a>
        </nav>

        <div class="user-profile">
          <div class="avatar">G</div>
          <div class="user-info">
            <span class="user-name">Gorka Ramírez</span>
            <span class="user-role">Enfermero Supervisor</span>
          </div>
        </div>
      </div>
    </header>
  `,
  styles: [`
    .header {
      background-color: #ffffff;
      border-bottom: 1px solid var(--border);
      position: sticky;
      top: 0;
      z-index: 100;
      box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.05);
    }
    .header-container {
      max-width: 1280px;
      margin: 0 auto;
      padding: 0 1.5rem;
      height: 70px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .brand {
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }
    .logo-icon {
      background: var(--primary-light);
      color: var(--primary);
      padding: 0.5rem;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .brand-text {
      display: flex;
      flex-direction: column;
    }
    .brand-title {
      font-size: 1.2rem;
      font-weight: 700;
      color: var(--primary);
      letter-spacing: -0.02em;
    }
    .brand-badge {
      font-size: 0.75rem;
      color: var(--text-muted);
      font-weight: 500;
    }
    .nav-links {
      display: flex;
      gap: 0.5rem;
    }
    .nav-link {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.55rem 1rem;
      border-radius: 8px;
      font-weight: 500;
      font-size: 0.95rem;
      color: var(--text-muted);
      transition: all 0.2s ease;
    }
    .nav-link:hover {
      background-color: #f1f5f9;
      color: var(--primary);
    }
    .nav-link.active {
      background-color: var(--primary-light);
      color: var(--primary);
      font-weight: 600;
    }
    .user-profile {
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }
    .avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: linear-gradient(135deg, var(--primary), var(--secondary));
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      font-size: 1.1rem;
    }
    .user-info {
      display: flex;
      flex-direction: column;
    }
    .user-name {
      font-size: 0.88rem;
      font-weight: 600;
      color: var(--text-main);
    }
    .user-role {
      font-size: 0.75rem;
      color: var(--text-muted);
    }
  `]
})
export class NavbarComponent {}
