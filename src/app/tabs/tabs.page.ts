import { ToastController } from '@ionic/angular';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(
    public toastController: ToastController,
    private route: Router
  ) {}

  logout () {
    this.route.navigateByUrl('/login');
      this.presentToast('Até mais!', 'success');
  }

  async presentToast(texto: string, cor: string) {
    const toast = await this.toastController.create({
      message: texto,
      color: cor,
      duration: 2000
    });
    toast.present();
  }
}
