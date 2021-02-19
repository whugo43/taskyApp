import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Citas } from 'src/app/models/citas';
import { CitasService} from 'src/app/services/citas.service';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-mi-perfil-cita',
  templateUrl: './mi-perfil-cita.page.html',
  styleUrls: ['./mi-perfil-cita.page.scss'],
})
export class MiPerfilCitaPage implements OnInit {

  public user: Citas=new Citas();
  public image;
  file: File;
  loading: HTMLIonLoadingElement;

  constructor(private usuarioService: CitasService,
              private alertCtrt: AlertController,
              ) { }

  ngOnInit() {


    this.usuarioService.getCita(localStorage.getItem('userId')).subscribe(res => {this.user =res;});

  }

  async presentLoading(mensaje: string) {
    this.loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: mensaje,
      //duration: 2000
    });
    return this.loading.present();
  }


  readURL(event): void {
    if (event.target.files && event.target.files[0]) {
        this.file = event.target.files[0];

        const reader = new FileReader();
        reader.onload = e => this.image = reader.result;

        reader.readAsDataURL(this.file);
    }
  }


  async UpdateUser(form):Promise<void>{
   // this.presentLoading("Espere por favor...");
   this.presentLoading("Espere por favor...");
    var telefono = form.value.telefono;
    if(telefono.length==10){
      telefono = '+593' + telefono.slice(1,telefono.length);
    }

    
    // if(this.file!='null'){
    //   this.guardarArchivo(telefono);
    // }
    // else{
      this.UpdateUserCompleto(telefono,this.image)
    // }
    
  }

  guardarArchivo(telefono: string){
    //this.presentLoading("Espere por favor...");
    
    var storageRef = this.angularFireStorage.storage.ref()

    
    storageRef.child(this.file.name).put(this.file)
    .then(
            data=>{
                    data.ref.getDownloadURL().then(
                        downloadURL => {
                          this.UpdateUserCompleto(telefono, downloadURL)

                      
                        }
                    ).catch(err=>{this.loading.dismiss(), this.failedAlert("Error al cargar la foto de perfil, intentelo de nuevo")});
                    

            }
    )     


  }

  async failedAlert(text: string) {
    const alert = await this.alertCtrt.create({
     cssClass: 'my-custom-class',
     header: text,
    buttons: [{
    text: 'OK',
      handler: () => {
        
      }
    }]   
    });
    await alert.present();
  }

 

  
  async UpdateUserCompleto(telefono: string, downloadURL:string){
    this.user.Telefono = telefono;
    this.user.FotoPerfil = downloadURL;
    var userId = localStorage.getItem('userId')
    this.usuarioService.updateUsuario(userId, this.user).
    then(
      auth=>{
        this.loading.dismiss();
        
        this.router.navigateByUrl("/perfil")
       
       
      }  
    ).catch(async error => {
      this.loading.dismiss();
      var mensaje=error.code.split('/')[1];
      const presentarMensaje = this.mensajeErrorService.AuthErrorCodeSpanish(mensaje);
      this.failedAlert(presentarMensaje)
    })
  }



}
