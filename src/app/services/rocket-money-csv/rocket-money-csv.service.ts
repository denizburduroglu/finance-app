import { Injectable } from '@angular/core';
import { RocketMoneyCSVModel } from 'src/app/models/rocket-money-csv.model';

@Injectable({
  providedIn: 'root',
})
export class RocketMoneyCsvService {
  constructor() {}

  //var csv is the CSV file with headers
  csvJSON(csv: any): RocketMoneyCSVModel[] {
    var lines = csv.split('\n');

    var result = [];

    // NOTE: If your columns contain commas in their values, you'll need
    // to deal with those before doing the next step
    // (you might convert them to &&& or something, then covert them back later)
    // jsfiddle showing the issue https://jsfiddle.net/
    var headers = lines[0].split(',');

    for (var i = 1; i < lines.length; i++) {
      var obj: any = {};
      var currentline = lines[i].split(',');

      for (var j = 0; j < headers.length; j++) {
        obj[headers[j]] = currentline[j];
      }

      result.push(obj);
    }

    //return result; //JavaScript object
    return result as unknown as RocketMoneyCSVModel[]; //JSON
  }
}
