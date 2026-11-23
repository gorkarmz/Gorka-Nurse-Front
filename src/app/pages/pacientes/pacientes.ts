import { Component } from '@angular/core';

interface Paciente {
  id: number;
  nombre: string;
  edad: number;
  habitacion: string;
  diagnostico: string;
  estado: 'Estable' | 'En Observación' | 'Crítico';
  medicacionPendiente: boolean;
  constantes: {
    presion: string;
    pulso: number;
    temperatura: number;
  };
}

@Component({
  selector: 'app-pacientes',
  template: `
    <div class="page-container">
      <div class="header-section">
        <div>
          <h1 class="page-title">Gestión de Pacientes</h1>
          <p class="page-desc">Listado activo de pacientes ingresados con monitorización de constantes vitales.</p>
        </div>
        <div class="filter-group">
          <button (click)="cambiarFiltro('Todos')" [class.active]="filtroActual === 'Todos'" class="filter-btn">
            Todos ({{ pacientes.length }})
          </button>
          <button (click)="cambiarFiltro('Crítico')" [class.active]="filtroActual === 'Crítico'" class="filter-btn critico">
            Críticos ({{ contarPorEstado('Crítico') }})
          </button>
          <button (click)="cambiarFiltro('En Observación')" [class.active]="filtroActual === 'En Observación'" class="filter-btn observacion">
            En Observación ({{ contarPorEstado('En Observación') }})
          </button>
          <button (click)="cambiarFiltro('Estable')" [class.active]="filtroActual === 'Estable'" class="filter-btn estable">
            Estables ({{ contarPorEstado('Estable') }})
          </button>
        </div>
      </div>

      <!-- Contenido Principal: Lista + Detalle condicional -->
      <div class="main-layout">
        <!-- Lista de pacientes usando @for -->
        <div class="patients-list">
          @for (paciente of pacientesFiltrados; track paciente.id) {
            <div 
              class="patient-card" 
              [class.selected]="pacienteSeleccionado?.id === paciente.id"
              (click)="seleccionarPaciente(paciente)">
              <div class="patient-card-header">
                <div>
                  <h3 class="patient-name">{{ paciente.nombre }}</h3>
                  <span class="patient-room">Habitación {{ paciente.habitacion }} • {{ paciente.edad }} años</span>
                </div>
                <span class="badge" [class]="obtenerClaseEstado(paciente.estado)">
                  {{ paciente.estado }}
                </span>
              </div>
              <p class="patient-diag"><strong>Diagnóstico:</strong> {{ paciente.diagnostico }}</p>
              
              <div class="patient-card-footer">
                <span class="vitals-summary">
                  Pulso: <strong>{{ paciente.constantes.pulso }} bpm</strong> • Temp: <strong>{{ paciente.constantes.temperatura }}°C</strong>
                </span>
                
                @if (paciente.medicacionPendiente) {
                  <span class="med-alert">Pendiente de medicación</span>
                } @else {
                  <span class="med-ok">Medicación administrada</span>
                }
              </div>
            </div>
          } @empty {
            <div class="empty-state">
              <p>No hay pacientes con el filtro seleccionado.</p>
            </div>
          }
        </div>

        <!-- Panel de Detalle usando @if -->
        <div class="details-panel">
          @if (pacienteSeleccionado) {
            <div class="detail-card">
              <div class="detail-header">
                <h2>Ficha Clínica</h2>
                <span class="badge" [class]="obtenerClaseEstado(pacienteSeleccionado.estado)">
                  {{ pacienteSeleccionado.estado }}
                </span>
              </div>

              <div class="detail-info-row">
                <span class="label">Nombre completo:</span>
                <span class="val">{{ pacienteSeleccionado.nombre }}</span>
              </div>
              <div class="detail-info-row">
                <span class="label">Edad:</span>
                <span class="val">{{ pacienteSeleccionado.edad }} años</span>
              </div>
              <div class="detail-info-row">
                <span class="label">Ubicación:</span>
                <span class="val">Planta 3 • Habitación {{ pacienteSeleccionado.habitacion }}</span>
              </div>
              <div class="detail-info-row">
                <span class="label">Diagnóstico actual:</span>
                <span class="val">{{ pacienteSeleccionado.diagnostico }}</span>
              </div>

              <h4 class="sub-heading">Constantes Vitales en Tiempo Real</h4>
              <div class="vitals-grid">
                <div class="vital-box">
                  <span class="vital-label">Tensión Arterial</span>
                  <span class="vital-val">{{ pacienteSeleccionado.constantes.presion }}</span>
                </div>
                <div class="vital-box">
                  <span class="vital-label">Frecuencia Cardíaca</span>
                  <span class="vital-val">{{ pacienteSeleccionado.constantes.pulso }} lpm</span>
                </div>
                <div class="vital-box">
                  <span class="vital-label">Temperatura</span>
                  <span class="vital-val">{{ pacienteSeleccionado.constantes.temperatura }} °C</span>
                </div>
              </div>

              <div class="action-box">
                <button 
                  class="action-btn" 
                  [disabled]="!pacienteSeleccionado.medicacionPendiente"
                  (click)="administrarMedicacion()">
                  {{ pacienteSeleccionado.medicacionPendiente ? 'Registrar Medicación Suministrada' : 'Medicación Ya Administrada' }}
                </button>
              </div>
            </div>
          } @else {
            <div class="no-selection-card">
              <h3>Selecciona un paciente</h3>
              <p>Haz clic en cualquier tarjeta para ver su historial clínico y constantes en detalle.</p>
            </div>
          }
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
    .header-section {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      margin-bottom: 2rem;
      flex-wrap: wrap;
      gap: 1rem;
    }
    .page-title {
      font-size: 1.8rem;
      font-weight: 700;
      color: var(--text-main);
    }
    .page-desc {
      color: var(--text-muted);
      margin-top: 0.25rem;
    }
    .filter-group {
      display: flex;
      gap: 0.5rem;
      background: white;
      padding: 0.35rem;
      border-radius: 10px;
      border: 1px solid var(--border);
    }
    .filter-btn {
      padding: 0.45rem 0.9rem;
      border-radius: 6px;
      border: none;
      background: transparent;
      font-size: 0.88rem;
      font-weight: 500;
      color: var(--text-muted);
      transition: all 0.2s;
    }
    .filter-btn.active {
      background: var(--primary);
      color: white;
      font-weight: 600;
    }
    .filter-btn.critico.active { background: var(--danger); }
    .filter-btn.observacion.active { background: var(--warning); }
    .filter-btn.estable.active { background: var(--success); }

    .main-layout {
      display: grid;
      grid-template-columns: 1fr 400px;
      gap: 1.5rem;
    }
    @media (max-width: 900px) {
      .main-layout { grid-template-columns: 1fr; }
    }
    .patients-list {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    .patient-card {
      background: white;
      border: 1px solid var(--border);
      border-radius: var(--radius);
      padding: 1.25rem;
      box-shadow: var(--shadow);
      cursor: pointer;
      transition: all 0.2s ease;
    }
    .patient-card:hover {
      transform: translateY(-2px);
      box-shadow: var(--shadow-lg);
      border-color: var(--primary);
    }
    .patient-card.selected {
      border: 2px solid var(--primary);
      background-color: #f0f9ff;
    }
    .patient-card-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 0.5rem;
    }
    .patient-name {
      font-size: 1.1rem;
      font-weight: 600;
      color: var(--text-main);
    }
    .patient-room {
      font-size: 0.85rem;
      color: var(--text-muted);
    }
    .badge {
      padding: 0.25rem 0.65rem;
      border-radius: 20px;
      font-size: 0.78rem;
      font-weight: 600;
    }
    .badge-critico { background: var(--danger-bg); color: var(--danger); }
    .badge-observacion { background: var(--warning-bg); color: #b45309; }
    .badge-estable { background: var(--success-bg); color: var(--success); }

    .patient-diag {
      font-size: 0.9rem;
      color: #334155;
      margin-bottom: 0.75rem;
    }
    .patient-card-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 0.85rem;
      padding-top: 0.75rem;
      border-top: 1px solid #f1f5f9;
    }
    .vitals-summary {
      color: var(--text-muted);
    }
    .med-alert {
      color: var(--danger);
      font-weight: 600;
      background: var(--danger-bg);
      padding: 0.2rem 0.5rem;
      border-radius: 4px;
    }
    .med-ok {
      color: var(--success);
      font-weight: 600;
      background: var(--success-bg);
      padding: 0.2rem 0.5rem;
      border-radius: 4px;
    }

    /* Detalle */
    .detail-card {
      background: white;
      border: 1px solid var(--border);
      border-radius: var(--radius);
      padding: 1.5rem;
      box-shadow: var(--shadow);
      position: sticky;
      top: 90px;
    }
    .detail-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1.25rem;
      padding-bottom: 0.75rem;
      border-bottom: 1px solid var(--border);
    }
    .detail-header h2 {
      font-size: 1.25rem;
      font-weight: 700;
    }
    .detail-info-row {
      display: flex;
      justify-content: space-between;
      margin-bottom: 0.6rem;
      font-size: 0.92rem;
    }
    .detail-info-row .label { color: var(--text-muted); }
    .detail-info-row .val { font-weight: 600; color: var(--text-main); }
    .sub-heading {
      font-size: 0.95rem;
      margin-top: 1.25rem;
      margin-bottom: 0.75rem;
      color: var(--text-main);
    }
    .vitals-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 0.6rem;
      margin-bottom: 1.5rem;
    }
    .vital-box {
      background: var(--bg-main);
      padding: 0.75rem 0.5rem;
      border-radius: 8px;
      text-align: center;
    }
    .vital-label {
      font-size: 0.72rem;
      color: var(--text-muted);
      display: block;
      margin-bottom: 0.25rem;
    }
    .vital-val {
      font-size: 0.95rem;
      font-weight: 700;
      color: var(--primary);
    }
    .action-btn {
      width: 100%;
      padding: 0.8rem;
      border-radius: 8px;
      border: none;
      background: var(--primary);
      color: white;
      font-weight: 600;
      font-size: 0.92rem;
      transition: background 0.2s;
    }
    .action-btn:disabled {
      background: #cbd5e1;
      cursor: not-allowed;
    }
    .action-btn:not(:disabled):hover {
      background: var(--primary-hover);
    }
    .no-selection-card {
      background: white;
      border: 1px dashed var(--border);
      border-radius: var(--radius);
      padding: 3rem 1.5rem;
      text-align: center;
      color: var(--text-muted);
    }
  `]
})
export class PacientesComponent {
  filtroActual: 'Todos' | 'Crítico' | 'En Observación' | 'Estable' = 'Todos';
  
  pacientes: Paciente[] = [
    {
      id: 1,
      nombre: 'María José Carrillo',
      edad: 68,
      habitacion: '302-A',
      diagnostico: 'Insuficiencia Cardíaca Congestiva',
      estado: 'Crítico',
      medicacionPendiente: true,
      constantes: { presion: '150/95', pulso: 105, temperatura: 37.8 }
    },
    {
      id: 2,
      nombre: 'Jordi Soler Pujol',
      edad: 45,
      habitacion: '304-B',
      diagnostico: 'Postoperatorio Apendicectomía',
      estado: 'Estable',
      medicacionPendiente: false,
      constantes: { presion: '120/80', pulso: 72, temperatura: 36.6 }
    },
    {
      id: 3,
      nombre: 'Laura Martí Domènech',
      edad: 52,
      habitacion: '308-A',
      diagnostico: 'Neumonía Bilateral',
      estado: 'En Observación',
      medicacionPendiente: true,
      constantes: { presion: '135/85', pulso: 88, temperatura: 38.2 }
    },
    {
      id: 4,
      nombre: 'Antonio Gómez Navarro',
      edad: 73,
      habitacion: '310-C',
      diagnostico: 'Fractura de Cadera en recuperación',
      estado: 'Estable',
      medicacionPendiente: false,
      constantes: { presion: '128/82', pulso: 68, temperatura: 36.7 }
    }
  ];

  pacienteSeleccionado: Paciente | null = this.pacientes[0];

  get pacientesFiltrados(): Paciente[] {
    if (this.filtroActual === 'Todos') {
      return this.pacientes;
    }
    return this.pacientes.filter(p => p.estado === this.filtroActual);
  }

  cambiarFiltro(filtro: 'Todos' | 'Crítico' | 'En Observación' | 'Estable') {
    this.filtroActual = filtro;
  }

  contarPorEstado(estado: 'Crítico' | 'En Observación' | 'Estable'): number {
    return this.pacientes.filter(p => p.estado === estado).length;
  }

  seleccionarPaciente(paciente: Paciente) {
    this.pacienteSeleccionado = paciente;
  }

  administrarMedicacion() {
    if (this.pacienteSeleccionado) {
      this.pacienteSeleccionado.medicacionPendiente = false;
    }
  }

  obtenerClaseEstado(estado: string): string {
    switch (estado) {
      case 'Crítico': return 'badge-critico';
      case 'En Observación': return 'badge-observacion';
      default: return 'badge-estable';
    }
  }
}
