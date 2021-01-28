import { Component, OnInit } from '@angular/core';
import { VehicleService } from 'src/app/services/vehicle.service';
import {RepairService} from 'src/app/services/repair.service';;


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

 

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];


let vehiculos= [];
@Component({
  selector: 'app-tabla-vehiculos',
  templateUrl: './tabla-vehiculos.component.html',
  styleUrls: ['./tabla-vehiculos.component.css']
})

export class TablaVehiculosComponent implements OnInit {
  displayedColumns: string[] = ['marca', 'placa','color', 'modelo','fecha', 'status'];
  
  
  
  
  constructor(private vehicleService: VehicleService ) { }
  ownerId=localStorage.getItem('owner');
  text=""
  dataSource = [];
  
  
  ngOnInit(): void {
    this.searchbyOwner();
    
  }
  searchbyOwner() {
    
    this.vehicleService.searchByOwnerId(this.ownerId)
    // la respuesta que me da el servidor
      .subscribe(
        res =>{
          this.text = res.message; 
            // this.openDialog(0)
          vehiculos=res.cars;
          this.dataSource=res.cars;
          //console.log('la respuesta es',res.cars);
          //console.log('los carros',vehiculos);
          
        },
        err => {
          this.text = err.error.message; 
          //this.openDialog(1) }//err
        }
    )
    
    
    
    return [];
  }
  
  public myvehicles(){
    let vehi = vehiculos;
    

    return vehi;
  }

}
