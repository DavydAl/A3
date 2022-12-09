import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class DataService {
  public message: string = "";
  public completeMessage: string = "";

  constructor() {}
}
