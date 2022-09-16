import { Component, OnInit } from '@angular/core';
import { DefaultValueAccessor, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';
import {busqueda,tipedoc} from 'src/app/models/document';
import {documentService} from 'src/app/services/document.service'
@Component({
  selector: 'app-adddcoment',
  templateUrl: './adddcoment.component.html',
  styleUrls: ['./adddcoment.component.css']
})
export class AdddcomentComponent implements OnInit {
  docForm :FormGroup
  titulo = 'Agregar documuento'
  Id : String | null

  constructor(

    private router : Router,
    private fb  : FormBuilder,
    private aRouter  : ActivatedRoute ,
    private docservice  : documentService
  ) {
    this.docForm = this.fb.group({
      id : [],
      nombre:['',Validators.required],
      codigo : ['',Validators.required]

    })

    this.Id = this.aRouter.snapshot.paramMap.get('id');
   }

  ngOnInit(): void {
    this.esEditar()
  }
addDoc(){
  if(this.docForm.invalid){
    swal.fire({
      icon: 'error',
      title: 'los campos son obligatorios',
    })

  }else{
    const document : tipedoc= {
      id : this.docForm.get('id')?.value,
      nombre : this.docForm.get('nombre')?.value,
      codigo : this.docForm.get('codigo')?.value
    }


    if(this.Id!==null){
      this.docservice.updatedocuement(this.Id,document).subscribe(
        data=>{
          swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Usuario agregado correctamente',
            showConfirmButton: false,
            timer: 1500
          })
          this.router.navigate(['/inicio']);

        },
        error=>{
          swal.fire({
            icon: 'error',
            title: 'algo salio mal intenta de nuevo porfavor ',
          
          })

        }
        
      )
    }else{
      this.docservice.inseertDocument(document).subscribe(
        data=>{
          swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Usuario agregado correctamente',
            showConfirmButton: false,
            timer: 1500
          })
          this.router.navigate(['/inicio']);

        }, error=>{
          swal.fire({
            icon: 'error',
            title: 'algo salio mal intenta de nuevo porfavor ',
          
          })
          this.docForm.reset(); //limpiar formulario
        }
      )


    }
  }
}


get nombre (){
  return this.docForm.get('nombre');
}


get codigo (){
  return this.docForm.get('codigo');
}

esEditar(){
  if(this.Id !==null){
    this.titulo = 'Editar documento';
    this.docservice.getContacByid(this.Id).subscribe(
      data=>{
        this.docForm.patchValue({
          id :data[0].id,
          nombre : data[0].nombre,
          codigo: data[0].codigo
        })
      },
      error=>{
        swal.fire({
          icon: 'error',
          title: 'algo salio mal intenta de nuevo porfavor ',
        
        })
      }
    )
  }
}
}