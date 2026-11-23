import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-inicio',
  imports: [RouterLink],
  template: `
    <div class="page-container">
      <div class="hero-card">
        <div class="hero-content">
          <span class="hero-badge">Práctica Front-End Angular • DAM/DAW</span>
          <h1 class="hero-title">Sistema de Gestión de Enfermería</h1>
          <p class="hero-subtitle">
            Portal desarrollado por <strong>Gorka Ramírez</strong> en <strong>Gorka Nurse Front</strong>. Implementa todos los conceptos clave de Angular: arquitectura orientada a componentes, enlace de propiedades, manejo reactivo de eventos, directivas de control de flujo (&#64;if, &#64;for) y navegación modular con RouterLink.
          </p>
          <div class="hero-actions">
            <a routerLink="/pacientes" class="btn btn-primary">
              Ver Pacientes Asignados &rarr;
            </a>
            <a routerLink="/citas" class="btn btn-secondary">
              Consultar Citas del Turno
            </a>
          </div>
        </div>
        <div class="hero-illustration">
          <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M3 21h18"/>
            <path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16"/>
            <path d="M9 21v-4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4"/>
            <path d="M10 9h4"/>
            <path d="M12 7v4"/>
          </svg>
        </div>
      </div>

      <!-- Métricas rápidas del turno -->
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-icon-wrapper blue">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
          </div>
          <div class="stat-details">
            <span class="stat-value">28</span>
            <span class="stat-label">Pacientes Ingresados</span>
          </div>
        </div>

        <div class="stat-card">
          <div class="stat-icon-wrapper green">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
            </svg>
          </div>
          <div class="stat-details">
            <span class="stat-value">6</span>
            <span class="stat-label">Enfermeros de Guardia</span>
          </div>
        </div>

        <div class="stat-card">
          <div class="stat-icon-wrapper amber">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/>
            </svg>
          </div>
          <div class="stat-details">
            <span class="stat-value">14</span>
            <span class="stat-label">Curas y Medicaciones Hoy</span>
          </div>
        </div>

        <div class="stat-card">
          <div class="stat-icon-wrapper purple">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
            </svg>
          </div>
          <div class="stat-details">
            <span class="stat-value">Turno Mañana</span>
            <span class="stat-label">08:00 - 15:00 • Hospital General</span>
          </div>
        </div>
      </div>

      <!-- Tarjetas de Navegación Rápida -->
      <h2 class="section-title">Módulos de la Aplicación</h2>
      <div class="modules-grid">
        <div class="module-card">
          <div class="module-header">
            <div class="module-icon blue">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
              </svg>
            </div>
            <h3>Gestión de Pacientes</h3>
          </div>
          <p>Supervisa el estado de salud, constantes vitales y nivel de prioridad de cada paciente ingresado.</p>
          <a routerLink="/pacientes" class="module-link">Abrir Pacientes &rarr;</a>
        </div>

        <div class="module-card">
          <div class="module-header">
            <div class="module-icon green">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
              </svg>
            </div>
            <h3>Equipo de Enfermería</h3>
          </div>
          <p>Consulta el cuadrante de turnos, áreas asignadas (UCI, Urgencias, Planta) y disponibilidad del equipo.</p>
          <a routerLink="/enfermeros" class="module-link">Abrir Enfermeros &rarr;</a>
        </div>

        <div class="module-card">
          <div class="module-header">
            <div class="module-icon amber">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/>
              </svg>
            </div>
            <h3>Citas, Curas y Medicación</h3>
          </div>
          <p>Organiza las curas programadas, administración de fármacos por horario y marca tareas completadas.</p>
          <a routerLink="/citas" class="module-link">Abrir Citas &rarr;</a>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .page-container {
      max-width: 1280px;
      margin: 0 auto;
      padding: 2rem 1.5rem;
    }
    .hero-card {
      background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%);
      color: white;
      border-radius: var(--radius);
      padding: 2.5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: var(--shadow-lg);
      margin-bottom: 2rem;
    }
    .hero-content {
      max-width: 720px;
    }
    .hero-badge {
      display: inline-block;
      background: rgba(255, 255, 255, 0.2);
      padding: 0.35rem 0.8rem;
      border-radius: 20px;
      font-size: 0.8rem;
      font-weight: 600;
      margin-bottom: 1rem;
      letter-spacing: 0.03em;
    }
    .hero-title {
      font-size: 2.2rem;
      font-weight: 800;
      margin-bottom: 1rem;
      line-height: 1.2;
    }
    .hero-subtitle {
      font-size: 1.05rem;
      opacity: 0.95;
      line-height: 1.6;
      margin-bottom: 1.8rem;
    }
    .hero-actions {
      display: flex;
      gap: 1rem;
    }
    .btn {
      padding: 0.75rem 1.5rem;
      border-radius: 8px;
      font-weight: 600;
      font-size: 0.95rem;
      transition: all 0.2s ease;
      display: inline-block;
    }
    .btn-primary {
      background-color: white;
      color: var(--primary);
    }
    .btn-primary:hover {
      background-color: #f8fafc;
      transform: translateY(-1px);
    }
    .btn-secondary {
      background-color: rgba(255, 255, 255, 0.15);
      color: white;
      border: 1px solid rgba(255, 255, 255, 0.3);
    }
    .btn-secondary:hover {
      background-color: rgba(255, 255, 255, 0.25);
    }
    .hero-illustration {
      opacity: 0.85;
      padding-right: 1.5rem;
    }
    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 1.25rem;
      margin-bottom: 2.5rem;
    }
    .stat-card {
      background: white;
      border: 1px solid var(--border);
      border-radius: var(--radius);
      padding: 1.25rem 1.5rem;
      display: flex;
      align-items: center;
      gap: 1rem;
      box-shadow: var(--shadow);
    }
    .stat-icon-wrapper {
      width: 48px;
      height: 48px;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .stat-icon-wrapper.blue { background: var(--primary-light); color: var(--primary); }
    .stat-icon-wrapper.green { background: var(--secondary-light); color: var(--secondary); }
    .stat-icon-wrapper.amber { background: var(--warning-bg); color: var(--warning); }
    .stat-icon-wrapper.purple { background: #ede9fe; color: var(--accent); }
    .stat-details {
      display: flex;
      flex-direction: column;
    }
    .stat-value {
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--text-main);
    }
    .stat-label {
      font-size: 0.85rem;
      color: var(--text-muted);
    }
    .section-title {
      font-size: 1.4rem;
      font-weight: 700;
      margin-bottom: 1.25rem;
      color: var(--text-main);
    }
    .modules-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 1.5rem;
    }
    .module-card {
      background: white;
      border: 1px solid var(--border);
      border-radius: var(--radius);
      padding: 1.5rem;
      box-shadow: var(--shadow);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .module-header {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      margin-bottom: 0.75rem;
    }
    .module-icon {
      width: 38px;
      height: 38px;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .module-icon.blue { background: var(--primary-light); color: var(--primary); }
    .module-icon.green { background: var(--secondary-light); color: var(--secondary); }
    .module-icon.amber { background: var(--warning-bg); color: var(--warning); }
    .module-header h3 {
      font-size: 1.15rem;
      font-weight: 600;
    }
    .module-card p {
      color: var(--text-muted);
      font-size: 0.92rem;
      line-height: 1.5;
      margin-bottom: 1.25rem;
    }
    .module-link {
      font-weight: 600;
      color: var(--primary);
      font-size: 0.95rem;
    }
    .module-link:hover {
      text-decoration: underline;
    }
  `]
})
export class InicioComponent {}
