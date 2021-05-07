import { Injectable } from '@angular/core';
import { About } from './model/about';
import { contact } from './model/contact';
import { portfolio } from './model/portfolio';
import { skill } from './model/skill';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor() { }
  getabout(): About[] {
    return[{
      name:"วีรวัฒน์ ภัทรเคหะ",
      nickname : "หม่อง" ,
      age : "21" ,
      born : "9 มกราคม พ.ศ.2543" ,
      tel : "093-227-8337" ,
      school : "มหาวิทยาลัยเทคโนโลยี ราชมงคลล้านน่าน"

    }];
  }
  getaskil(): skill[] {
    return[{
      skills : "เล่นฟุตบอล"
    },
    {
      skills : "เล่นกีตาร์"
      
    }];
  }
  getcontact(): contact[] {
    return[{
      facebook : "Weerawat Pattarakrha" ,
      line : "mong......." ,
      tel : "093-227-8337" 
    }];
  }
  getportfolio(): portfolio[] {
    return[];
  }

  
}
