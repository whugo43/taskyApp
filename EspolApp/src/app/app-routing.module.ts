import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {NoLoginGuard} from './guards/no-login.guard';
import {AuthGuard} from './guards/auth.guard';
import {PendienteGuard} from './guards/pendiente.guard';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./folder/login/login.module').then( m => m.LoginPageModule),
    canActivate:[NoLoginGuard]
  },
 
  {
    path: 'perfil',
    loadChildren: () => import('./folder/perfil/perfil.module').then( m => m.PerfilPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'registro',
    loadChildren: () => import('./folder/registro/registro.module').then( m => m.RegistroPageModule),
    canActivate:[NoLoginGuard]
  },
  {
    path: 'home',
    loadChildren: () => import('./folder/home/home.module').then( m => m.HomePageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'cursos',
    loadChildren: () => import('./folder/cursos/cursos.module').then( m => m.CursosPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'curso-detalle/:id/:nombre',
    loadChildren: () => import('./folder/curso-detalle/curso-detalle.module').then( m => m.CursoDetallePageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'publicaciones',
    loadChildren: () => import('./folder/publicaciones/publicaciones.module').then( m => m.PublicacionesPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'usuario-detalle/:idMateria/:id',
    loadChildren: () => import('./folder/usuario-detalle/usuario-detalle.module').then( m => m.UsuarioDetallePageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'publicaciones-materia',
    loadChildren: () => import('./folder/publicaciones-materia/publicaciones-materia.module').then( m => m.PublicacionesMateriaPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'perfil-update',
    loadChildren: () => import('./folder/perfil-update/perfil-update.module').then( m => m.PerfilUpdatePageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'crear-publicacion/:id',
    loadChildren: () => import('./folder/crear-publicacion/crear-publicacion.module').then( m => m.CrearPublicacionPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'mis-publicaciones',
    loadChildren: () => import('./folder/mis-publicaciones/mis-publicaciones.module').then( m => m.MisPublicacionesPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'curso-ayudantes/:id/:nombre',
    loadChildren: () => import('./folder/curso-ayudantes/curso-ayudantes.module').then( m => m.CursoAyudantesPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'curso-detalle-anuncio/:id',
    loadChildren: () => import('./folder/curso-detalle-anuncio/curso-detalle-anuncio.module').then( m => m.CursoDetalleAnuncioPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'pendiente',
    loadChildren: () => import('./folder/pendiente/pendiente.module').then( m => m.PendientePageModule),
    canActivate:[PendienteGuard]
  },
  // {
  //   path: 'mis-ayudantias',
  //   loadChildren: () => import('./foler/mis-ayudantias/mis-ayudantias.module').then( m => m.MisAyudantiasPageModule)
  // },
  {
    path: 'mis-ayudantias',
    loadChildren: () => import('./folder/mis-ayudantias/mis-ayudantias.module').then( m => m.MisAyudantiasPageModule),
    canActivate:[AuthGuard]
  },
  // {
  //   path: 'mis-ayudantias-anuncios',
  //   loadChildren: () => import('./foler/mis-ayudantias-anuncios/mis-ayudantias-anuncios.module').then( m => m.MisAyudantiasAnunciosPageModule)
  // },
  // {
  //   path: 'crear-ayudantia',
  //   loadChildren: () => import('./foler/crear-ayudantia/crear-ayudantia.module').then( m => m.CrearAyudantiaPageModule)
  // },
  {
    path: 'crear-ayudantia',
    loadChildren: () => import('./folder/crear-ayudantia/crear-ayudantia.module').then( m => m.CrearAyudantiaPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'mis-ayudantias-anuncios',
    loadChildren: () => import('./folder/mis-ayudantias-anuncios/mis-ayudantias-anuncios.module').then( m => m.MisAyudantiasAnunciosPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'solicitud-ayudantia',
    loadChildren: () => import('./folder/solicitud-ayudantia/solicitud-ayudantia.module').then( m => m.SolicitudAyudantiaPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'solicitud-materia',
    loadChildren: () => import('./folder/solicitud-materia/solicitud-materia.module').then( m => m.SolicitudMateriaPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'sugerencias',
    loadChildren: () => import('./folder/sugerencias/sugerencias.module').then( m => m.SugerenciasPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'editar-publicacion/:id/:redireccion',
    loadChildren: () => import('./folder/editar-publicacion/editar-publicacion.module').then( m => m.EditarPublicacionPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'grupos/:id/:nombre',
    loadChildren: () => import('./folder/grupos/grupos.module').then( m => m.GruposPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'grupos-detalle/:id',
    loadChildren: () => import('./folder/grupos-detalle/grupos-detalle.module').then( m => m.GruposDetallePageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'crear-grupo/:id',
    loadChildren: () => import('./folder/crear-grupo/crear-grupo.module').then( m => m.CrearGrupoPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'crear-publicacion-todos',
    loadChildren: () => import('./folder/crear-publicacion-todos/crear-publicacion-todos.module').then( m => m.CrearPublicacionTodosPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'comentarios-usuario/:idMateria/:idAyudante',
    loadChildren: () => import('./folder/comentarios-usuario/comentarios-usuario.module').then( m => m.ComentariosUsuarioPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'mis-comentarios/:idMateria',
    loadChildren: () => import('./folder/mis-comentarios/mis-comentarios.module').then( m => m.MisComentariosPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'detalle-publicidad/:id',
    loadChildren: () => import('./folder/detalle-publicidad/detalle-publicidad.module').then( m => m.DetallePublicidadPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'editar-grupo/:id',
    loadChildren: () => import('./folder/editar-grupo/editar-grupo.module').then( m => m.EditarGrupoPageModule),
    canActivate:[AuthGuard]
  }



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}