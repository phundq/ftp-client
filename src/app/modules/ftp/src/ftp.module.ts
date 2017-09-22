import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { PipesModule } from '../../../packages/pipes'

import { ButtonActionsComponent } from './components/button-actions/button-actions.component'

import { ContentWindowComponent } from './components/content-window/content-window.component'

import { IndexComponent } from './components/index.component'

import { IntoDirDirective } from './directives/fileAction.directive'

const components = [
  ButtonActionsComponent,
  IndexComponent,
  ContentWindowComponent,
]

const directives = [
  IntoDirDirective,
]

@NgModule({
  declarations: [
    ...components,
    ...directives,
  ],
  exports: [
    ...components,
    ...directives,
  ],
  imports: [
    CommonModule,
    FormsModule,
    PipesModule,
  ]
})
export class FtpModule {

}