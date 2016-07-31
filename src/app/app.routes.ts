import { provideRouter, RouterConfig } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { HvacServiceComponent } from './hvacService/hvacService.component';
import { BuildingAutomationComponent } from './buildingAutomation/buildingAutomation.component';
import { DesignBuildComponent } from './designBuild/designBuild.component';
import { FacilitiesManagementComponent } from './facilitiesManagement/facilitiesManagement.component';
import { EnergyEfficiencyComponent } from './energyEfficiency/energyEfficiency.component';
import { AboutComponent } from './about/about.component';
import { ServiceCareersComponent } from './serviceCareers/serviceCareers.component';
import { BlogComponent } from './blog/blog.component';
import { EventsComponent } from './events/events.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { CareersComponent } from './careers/careers.component';
import { OfficeCareersComponent } from './officeCareers/officeCareers.component';


export const routes: RouterConfig = [
  { path: '', component: HomeComponent },
  { path: 'hvac-service', component: HvacServiceComponent },
  { path: 'building-automation', component: BuildingAutomationComponent },
  { path: 'design-build', component: DesignBuildComponent },
  { path: 'facilities-management', component: FacilitiesManagementComponent },
  { path: 'energy-efficiency', component: EnergyEfficiencyComponent },
  { path: 'about', component: AboutComponent },
  { path: 'service-careers', component: ServiceCareersComponent },
  { path: 'office-careers', component: OfficeCareersComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'events', component: EventsComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact-us', component: ContactComponent },
  { path: 'careers', component: CareersComponent },
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
