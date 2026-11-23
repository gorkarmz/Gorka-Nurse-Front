import { Component } from '@angular/core';

interface Enfermero {
  id: number;
  nombre: string;
  especialidad: string;
  turno: 'Mañana' | 'Tarde' | 'Noche';
  deGuardia: boolean;
  pacientesAsignados: number;
}

@Component({
  selector: 'app-enfermeros',
  template: `
    <div class="page-container">
      <div class="header-section">
        <div>
          <h1 class="page-title">Personal de Enfermería</h1>
          <p class="page-desc">Distribución de enfermeros de guardia, turnos y asignaciones activas.</p>
        </div>
      </div>

      <div class="nurses-grid">
        @for (enfermero of personal; track enfermero.id) {
          <div class="nurse-card" [class.on-duty]="enfermero.deGuardia">
            <div class="nurse-avatar">{{ enfermero.nombre.charAt(0) }}</div>
            <div class="nurse-info">
              <div class="nurse-header">
                <h3>{{ enfermero.nombre }}</h3>
                <span class="badge" [class.badge-duty]="enfermero.deGuardia" [class.badge-off]="!enfermero.deGuardia">
                  {{ enfermero.deGuardia ? 'Activo en Guardia' : 'Descanso / Libre' }}
                </span>
              </div>
              <p class="specialty">{{ enfermero.especialidad }}</p>
              
              <div class="nurse-meta">
                <span>Horario Turno: <strong>{{ enfermero.turno }}</strong></span>
                <span>Pacientes a cargo: <strong>{{ enfermero.pacientesAsignados }}</strong></span>
              </div>

              <div class="card-action">
                <button 
                  class="toggle-btn"
                  (click)="alternarGuardia(enfermero)">
                  {{ enfermero.deGuardia ? 'Pausar Turno' : 'Asignar a Guardia Activa' }}
                </button>
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  `,
  styles: [`
    .page-container {
      max-width: 1280px;
      margin: 0 auto;
      padding: 2rem 1.5rem;
    }
    .header-section {
      margin-bottom: 2rem;
    }
    .page-title {
      font-size: 1.8rem;
      font-weight: 700;
    }
    .page-desc {
      color: var(--text-muted);
      margin-top: 0.25rem;
    }
    .nurses-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
      gap: 1.5rem;
    }
    .nurse-card {
      background: white;
      border: 1px solid var(--border);
      border-radius: var(--radius);
      padding: 1.5rem;
      display: flex;
      gap: 1.25rem;
      box-shadow: var(--shadow);
      transition: all 0.2s;
    }
    .nurse-card.on-duty {
      border-left: 5px solid var(--secondary);
    }
    .nurse-avatar {
      width: 52px;
      height: 52px;
      border-radius: 50%;
      background: #e0f2fe;
      color: var(--primary);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.3rem;
      font-weight: 700;
      flex-shrink: 0;
    }
    .nurse-info {
      flex: 1;
    }
    .nurse-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0.25rem;
    }
    .nurse-header h3 {
      font-size: 1.1rem;
      font-weight: 600;
    }
    .specialty {
      font-size: 0.88rem;
      color: var(--text-muted);
      margin-bottom: 0.75rem;
    }
    .nurse-meta {
      display: flex;
      flex-direction: column;
      gap: 0.35rem;
      font-size: 0.85rem;
      color: #475569;
      background: #f8fafc;
      padding: 0.6rem 0.8rem;
      border-radius: 8px;
      margin-bottom: 1rem;
    }
    .badge {
      padding: 0.2rem 0.6rem;
      border-radius: 20px;
      font-size: 0.75rem;
      font-weight: 600;
    }
    .badge-duty { background: #dcfce7; color: #166534; }
    .badge-off { background: #f1f5f9; color: #64748b; }
    .toggle-btn {
      width: 100%;
      padding: 0.55rem;
      border-radius: 6px;
      border: 1px solid var(--border);
      background: white;
      font-size: 0.85rem;
      font-weight: 600;
      color: var(--text-main);
      transition: all 0.2s;
    }
    .toggle-btn:hover {
      background: #f1f5f9;
      border-color: #cbd5e1;
    }
  `]
})
export class EnfermerosComponent {
  personal: Enfermero[] = [
    { id: 1, nombre: 'Gorka Ramírez', especialidad: 'Cuidados Intensivos (UCI)', turno: 'Mañana', deGuardia: true, pacientesAsignados: 4 },
    { id: 2, nombre: 'Marta Valls', especialidad: 'Urgencias y Traumatología', turno: 'Mañana', deGuardia: true, pacientesAsignados: 6 },
    { id: 3, nombre: 'Carlos Ortiz', especialidad: 'Medicina Interna', turno: 'Tarde', deGuardia: false, pacientesAsignados: 0 },
    { id: 4, nombre: 'Elena Bosch', especialidad: 'Pediatría y Neonatos', turno: 'Tarde', deGuardia: true, pacientesAsignados: 5 },
    { id: 5, nombre: 'David Serrano', especialidad: 'Quirófano y Reanimación', turno: 'Noche', deGuardia: false, pacientesAsignados: 0 }
  ];

  alternarGuardia(enfermero: Enfermero) {
    enfermero.deGuardia = !enfermero.deGuardia;
  }
}
