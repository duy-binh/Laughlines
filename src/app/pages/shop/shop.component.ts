import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Products } from '../../common/product';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {  
  product = inject(HttpClient)
  data: Products[] = []
  ngOnInit(): void {
    this.fetchData();

  }
  fetchData() {
    this.product
      .get<Products[]>('http://localhost:3000')
      .subscribe((data: Products[]) => {
        this.data = data.splice(0, 8);
        // console.log(data);
      })
  }
}