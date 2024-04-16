export interface Invitado {
  id?: number;
  nombre?: string;
  apellidos?: string;
  correo?: string;
  telefono?: string;
  direccion: [
    {
      calle: string;
      codpostal: string;
      ciudad: string;
      provincia: string;
      pais: string;
    }
  ]
  acompanante?: boolean;
  acomp_nombre?: string;
  hijos?: boolean;
  hijos_num?: number;
  mensaje?: string;
}
