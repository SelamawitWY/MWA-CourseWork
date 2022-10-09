import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UserService } from '../core/user.service';
@NgModule({
  declarations: [],
  imports: [CommonModule],

  exports: [],
  providers: [UserService]
})
export class CoreModule {}
