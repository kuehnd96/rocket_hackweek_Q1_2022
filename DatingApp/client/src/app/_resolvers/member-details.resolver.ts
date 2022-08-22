import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Member } from "../_models/members";
import { MembersService } from "../_services/members.service";

// Gets our data before we construct our template
@Injectable({
    providedIn: 'root'
})
export class MemberDetailedResolver implements Resolve<Member> {
  
  constructor(private memberService: MembersService) {}
  
  resolve(route: ActivatedRouteSnapshot): Observable<Member> {
    // no need to subscribe since the router will take care of it
    return this.memberService.getMember(route.paramMap.get('username'));
  }
}