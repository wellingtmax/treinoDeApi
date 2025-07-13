import { Component, OnInit } from '@angular/core';
import { PotterService } from '../../service/potter.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-potter',
  imports: [CommonModule],
  templateUrl: './potter.component.html',
  styleUrl: './potter.component.css'
})
export class PotterComponent implements OnInit{

  feiticos: any[] = []


  constructor(private potterService: PotterService){}

  ngOnInit(): void {
    this.potterService.getPotter().subscribe((dados) =>{
      this.feiticos =dados
      console.log(dados)
    })
  }

}
