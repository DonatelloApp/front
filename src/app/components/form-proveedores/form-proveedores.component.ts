import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Proveedor } from 'src/app/core/models/proveedor';
import { capitalizeWords } from 'src/app/utils/utils';

@Component({
  selector: 'app-form-proveedores',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-proveedores.component.html',
  styleUrls: ['./form-proveedores.component.scss'],
})
export class FormProveedoresComponent implements OnChanges {
  @Input() proveedor: Proveedor | null = null;
  @Output() save = new EventEmitter<Proveedor>();

  formulario: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      companyName: ['', [Validators.required]],
      lastContact: ['', [Validators.required]],
      phone: ['', [Validators.required]],
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['proveedor'] && this.proveedor) {
      this.formulario.patchValue(this.proveedor);
    }
  }

  onSubmit() {
    if (this.formulario.valid) {
      const proveedorReq: Proveedor = {
        name: capitalizeWords(this.formulario.value.name),
        phone: this.formulario.value.phone,
        companyName: '',
        lastContact: '',
      };

      if (this.proveedor) proveedorReq.id = this.proveedor.id;

      this.save.emit(proveedorReq);
    }
  }
}
