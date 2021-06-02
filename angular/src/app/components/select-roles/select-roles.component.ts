import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Role } from '@models/role.model';
import * as rolesActions from '@state/roles.actions';
import * as rolesReducer from '@state/roles.reducer';

@Component({
  selector: 'app-select-roles',
  templateUrl: './select-roles.component.html',
  styleUrls: ['./select-roles.component.scss']
})
export class SelectRolesComponent implements OnInit {
  @Input() roleId: any;
  @Output() selectedRoleId = new EventEmitter<string>();

  public roles$!: Observable<Role[]>;

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.roles$ = this.store.pipe(select(rolesReducer.selectRoles));

    this.store.dispatch(rolesActions.loadListRoles(0, 100));
  }

  changeRoleId(roleId: any): void {
    this.selectedRoleId.emit(roleId);
  }
}
