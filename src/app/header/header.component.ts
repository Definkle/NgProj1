import { Component, OnInit, OnDestroy } from "@angular/core";
import { DataStorageService } from "../services/data-storage.service";
import { AuthService } from "../services/auth.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit, OnDestroy {
  isMenuCollapsed = true;
  private paramsSubscription = new Subscription();
  isAuthenticated = false;
  constructor(
    private dataStorageService: DataStorageService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.paramsSubscription = this.authService.user.subscribe((user) => {
      this.isAuthenticated = !!user;
    });
  }

  saveData() {
    this.dataStorageService.storeRecipes();
  }

  getData() {
    this.dataStorageService.getRecipes().subscribe();
  }

  logout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }
}
