import {Injectable} from "@angular/core";
import {FirebaseListObservable, AngularFire} from "angularfire2";

@Injectable()
export class FirebaseService{
  businesses: FirebaseListObservable<Business[]>;
  categories: FirebaseListObservable<Category[]>;

  constructor(
    private af: AngularFire
  ) {
  }

  getBusinesses(){
    this.businesses = this.af.database.list('/businesses') as FirebaseListObservable<Business[]>;
    return this.businesses;
  }

  getCategories(){
    this.categories = this.af.database.list('/categories') as FirebaseListObservable<Category[]>;
    return this.categories;
  }

}

export interface Business{
  $key?: string;
  company?: string;
  description?: string;
  category: string;
  years_in_business?: number;
  street_address?: string;
  city: string;
  state?: string;
  zipcode?: string;
  phone?: string;
  email?: string;
  created_at?: string;
}

export interface Category{
  $key?: string;
  name?: string;
}
