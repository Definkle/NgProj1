import { Component, OnInit } from "@angular/core";
import { DataStorageService } from "../services/data-storage.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  isMenuCollapsed = true;
  constructor(private dataStorageService: DataStorageService) {}

  ngOnInit(): void {}

  saveData() {
    this.dataStorageService.storeRecipes();
  }

  getData() {
    this.dataStorageService.getRecipes().subscribe();
  }
}
