import { Component } from '@angular/core';

interface Cita {
  id: number;
  paciente: string;
  habitacion: string;
  hora: string;
  tipo: 'Cura Quirúrgica' | 'Administración Fármacos' | 'Toma de Muestras' | 'Revisión Vía';
  completada: boolean;
}

@Component({
  selector: 'app-citas',
  template: `
    <div class="page-container">
      <div class="header-section">
        <div>
          <h1 class="page-title">Citas, Curas y Medicación</h1>
          <p class="page-desc">Planificación de intervenciones de enfermería para el turno en curso.</p>
        </div>
        <div class="progress-badge">
          <span>Progreso: <strong>{{ tareasCompletadas }} de {{ citas.length }}</strong> completadas</span>
        </div>
      </div>

      <div class="citas-table-card">
        <table class="table">
          <thead>
            <tr>
              <th>Hora</th>
              <th>Paciente</th>
              <th>Ubicación</th>
              <th>Procedimiento</th>
              <th>Estado</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            @for (cita of citas; track cita.id) {
              <tr [class.completed-row]="cita.completada">
                <td class="time-col">{{ cita.hora }}</td>
                <td class="patient-col"><strong>{{ cita.paciente }}</strong></td>
                <td>Habitación {{ cita.habitacion }}</td>
                <td>
                  <span class="procedure-tag">{{ cita.tipo }}</span>
                </td>
                <td>
                  @if (cita.completada) {
                    <span class="status-done">Realizada</span>
                  } @else {
                    <span class="status-pending">Pendiente</span>
                  }
                </td>
                <td>
                  <button 
                    class="btn-status" 
                    [class.btn-done]="cita.completada"
                    (click)="alternarEstado(cita)">
                    {{ cita.completada ? 'Deshacer' : 'Marcar Hecho' }}
                  </button>
                </td>
              </tr>
            }
          </tbody>
        </table>
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
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 2rem;
      flex-wrap: wrap;
      gap: 1rem;
    }
    .page-title {
      font-size: 1.8rem;
      font-weight: 700;
    }
    .page-desc {
      color: var(--text-muted);
      margin-top: 0.25rem;
    }
    .progress-badge {
      background: white;
      border: 1px solid var(--border);
      padding: 0.5rem 1rem;
      border-radius: 20px;
      font-size: 0.9rem;
      color: var(--text-main);
      box-shadow: var(--shadow);
    }
    .citas-table-card {
      background: white;
      border: 1px solid var(--border);
      border-radius: var(--radius);
      box-shadow: var(--shadow);
      overflow-x: auto;
    }
    .table {
      width: 100%;
      border-collapse: collapse;
      text-align: left;
      font-size: 0.92rem;
    }
    .table th {
      background: #f8fafc;
      padding: 1rem 1.25rem;
      font-weight: 600;
      color: var(--text-muted);
      border-bottom: 1px solid var(--border);
    }
    .table td {
      padding: 1.1rem 1.25rem;
      border-bottom: 1px solid var(--border);
      color: var(--text-main);
    }
    .completed-row {
      background-color: #f8fafc;
      opacity: 0.75;
    }
    .time-col {
      font-weight: 600;
      color: var(--primary);
    }
    .procedure-tag {
      background: var(--primary-light);
      color: var(--primary);
      padding: 0.25rem 0.65rem;
      border-radius: 6px;
      font-size: 0.82rem;
      font-weight: 500;
    }
    .status-done { 
      color: #166534; 
      font-weight: 600; 
      background: #dcfce7;
      padding: 0.2rem 0.6rem;
      border-radius: 12px;
      font-size: 0.82rem;
    }
    .status-pending { 
      color: #9a3412; 
      font-weight: 600; 
      background: #ffedd5;
      padding: 0.2rem 0.6rem;
      border-radius: 12px;
      font-size: 0.82rem;
    }
    .btn-status {
      padding: 0.4rem 0.9rem;
      border-radius: 6px;
      border: 1px solid var(--border);
      background: white;
      font-weight: 600;
      font-size: 0.85rem;
      transition: all 0.2s;
    }
    .btn-status:hover {
      background: var(--primary);
      color: white;
      border-color: var(--primary);
    }
    .btn-status.btn-done {
      background: #f1f5f9;
      color: var(--text-muted);
    }
  `]
})
export class CitasComponent {
  citas: Cita[] = [
    { id: 1, paciente: 'María José Carrillo', habitacion: '302-A', hora: '08:30', tipo: 'Administración Fármacos', completada: true },
    { id: 2, paciente: 'Jordi Soler Pujol', habitacion: '304-B', hora: '09:15', tipo: 'Cura Quirúrgica', completada: true },
    { id: 3, paciente: 'Laura Martí Domènech', habitacion: '308-A', hora: '10:00', tipo: 'Toma de Muestras', completada: false },
    { id: 4, paciente: 'Antonio Gómez Navarro', habitacion: '310-C', hora: '11:30', tipo: 'Revisión Vía', completada: false },
    { id: 5, paciente: 'María José Carrillo', habitacion: '302-A', hora: '13:00', tipo: 'Administración Fármacos', completada: false }
  ];

  get tareasCompletadas(): number {
    return this.citas.filter(c => c.completada).length;
  }

  alternarEstado(cita: Cita) {
    cita.completada = !cita.completada;
  }
}
