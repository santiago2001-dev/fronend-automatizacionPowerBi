import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {busqueda,tipedoc} from 'src/app/models/document';
import {documentService}from 'src/app/services/document.service'
import swal from 'sweetalert2';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
listdoc :tipedoc[]= []

  constructor(
    private router : Router,
    private servicedoc : documentService
  ) { }

  ngOnInit(): void {
    this.getDocument()
  }
  closesecion(){
    localStorage.removeItem('token')
    this.router.navigate(['login'])
  }
  

  getDocument(){
    this.servicedoc.getAllDoc().subscribe(
      (data)=>{
        this.listdoc =  data;

      },
      error=>{
        swal.fire({
          icon: 'error',
          title: 'Sin conexión a la base de datos ',
        
        })
      }
    )
  }



  deleteDocument(id : any){
    const swalWithBootstrapButtons = swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: '¿estás seguro?',
      text: "Una vez eiminado el contacto no podrá ser recuperado!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'si, deseo eliminarlo',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {

        this.servicedoc.deledocuement(id).subscribe(
          data=>{
          swalWithBootstrapButtons.fire(
          'contacto eliminado!',
          'el contacto ha sido eliminado correctamente',
          'success'
        )
        this.router.navigate(['/admin/contact']); //redirección
        this.getDocument()

      },error=>{
        swal.fire({
          icon: 'error',
          title: 'algo salio mal intenta de nuevo ',
        
        })


      }
      )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          'operación cancelada',
          'error'
        )
      }
    })

}

}
