export interface Languages {
    readonly value: string;
    readonly label: string;
    readonly isFixed?: boolean;
    readonly isSelected?: boolean;
  }
  
  export const languageOptions: readonly Languages[] = [
    { value: 'ENG', label: 'Inglês', isFixed: true },
    { value: 'CHI', label: 'Chinês', isSelected: true },
    { value: 'ESP', label: 'Espanhol' },
    { value: 'ITA', label: 'Italiano' },
    { value: 'FRA', label: 'Francês' },
    { value: 'DEU', label: 'Alemão' },
    { value: 'JAP', label: 'Japonês' },
    { value: 'COR', label: 'Coreano' },
    { value: 'ARA', label: 'Árabe' },
    { value: 'RUS', label: 'Russo' },
  ];

  
