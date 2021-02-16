import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';

@Injectable({
  providedIn: 'root'
})
export class NoLoginGuard implements CanActivate {

  constructor(private router: Router,
    private AFauth: AngularFireAuth){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      

    return this.AFauth.authState.pipe(map( auth =>{
      console.log("estado", localStorage.getItem('Estado'))
      if(isNullOrUndefined(auth)){
        return true;
        //redirigir al login
      }
      else{
        if(localStorage.getItem('Estado') == "A"){
        this.router.navigateByUrl('/publicaciones');}
        if(localStorage.getItem('Estado') == "P"){
          this.router.navigateByUrl('/pendiente');}
        return false;
      //redirigir al home profesor
      }
      }
    ))

  }
  
}