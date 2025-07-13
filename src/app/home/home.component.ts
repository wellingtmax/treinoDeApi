import { Component, OnInit } from '@angular/core';
import { DballService } from '../service/dball.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  heroi: any[] = []

  constructor(private dballService: DballService) { }

  ngOnInit() {
      this.dballService.listaHero().subscribe({
        next: (dbHero) => {
          this.heroi = dbHero
          console.log(dbHero)
        }
      })
    }

}
