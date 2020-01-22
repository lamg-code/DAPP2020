import { Component } from '@angular/core';

import Tarefa from './tarefa.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}
  tarefas: Tarefa[] = [
    {
      id: 't1',
      title: 'Brandwatch',
      subtitle: 'Renovação de contrato',
      category: 'Contratos',
      dueDate: '10 de novembro',
      badge: 'primary',
    },
    {
      id: 't2',
      title: 'Câmara dos Deputados',
      subtitle: 'Renovação de contrato',
      category: 'Contratos',
      dueDate: '12 de novembro',
      badge: 'primary',
    },
    {
      id: 't3',
      title: 'Reunião com Presidência FGV',
      subtitle: 'Entrega de documentos',
      category: 'Escola de Comunicação Aplicada',
      dueDate: '10 de novembro',
      badge: 'secondary',
    },
    {
      id: 't4',
      title: 'Congresso de Comunicação Digital',
      subtitle: 'Participação do professor Marco Aurelio Ruediger no painel',
      category: 'Eventos',
      dueDate: '21 de novembro',
      badge: 'success',
    },
    {
      id: 't5',
      title: 'Congresso de Comunicação Digital',
      subtitle: 'Participação do professor Marco Aurelio Ruediger no painel',
      category: 'Eventos',
      dueDate: '21 de novembro',
      badge: 'success',
    },
    {
      id: 't6',
      title: 'Congresso de Comunicação Digital',
      subtitle: 'Participação do professor Marco Aurelio Ruediger no painel',
      category: 'Eventos',
      dueDate: '21 de novembro',
      badge: 'success',
    },
    {
      id: 't7',
      title: 'Congresso de Comunicação Digital',
      subtitle: 'Participação do professor Marco Aurelio Ruediger no painel',
      category: 'Eventos',
      dueDate: '21 de novembro',
      badge: 'success',
    },
    {
      id: 't8',
      title: 'Congresso de Comunicação Digital',
      subtitle: 'Participação do professor Marco Aurelio Ruediger no painel',
      category: 'Eventos',
      dueDate: '21 de novembro',
      badge: 'success',
    }
  ];

}
