import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { DetailPopupComponent } from '../Shared/detail-popup/detail-popup.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent {


  details: any;
  name: any;

  constructor(private _snackBar: MatSnackBar, private dialog: MatDialog) {}

  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth'});
}

openSnackBar(){
  this._snackBar.open('Submit Sucessfull!', 'Done', {
    horizontalPosition: this.horizontalPosition,
    verticalPosition: this.verticalPosition,
  });
}

openDetails(item: any): void{
  this.dialog.open(DetailPopupComponent, {
    width: '400px',
    height: '600px',
    hasBackdrop : true,
    autoFocus : false,
    enterAnimationDuration: '500ms',
    exitAnimationDuration: '1500ms',
    data: item
  })
}

jsonData = [
  {detail: 'The Taj Mahal is an ivory-white marble mausoleum on south bank of the Yamuna river in the Indian city of Agra.It was commissioned in 1632 by the Mughal emperor,Shah Jahan (reigned from 1628 to 1658), to house the tomb of his favourite wife,Mumtaz Mahal.', name: 'Taj Mahal', imageUrl: 'https://thumbs.dreamstime.com/b/taj-mahal-agra-india-morning-light-reflection-water-uttar-pradesh-108954918.jpg' },
  {detail: 'Kashmir is the northernmost geographical region of the Indian subcontinent. Until the mid-19th century, the term "Kashmir" denoted only the Kashmir Valley between the Great Himalayas and the Pir Panjal Range.', name: 'Kashmir', imageUrl: 'https://media.istockphoto.com/id/1323846766/photo/a-beautiful-view-of-dal-lake-in-winter-srinagar-kashmir-india.jpg?s=612x612&w=0&k=20&c=Dp3peie2t-jdLEmqe4W-DD09GACu2Cr-JjHHeB6rpBc='},
  {detail: ' Goa is the smallest state in western India with coastlines of the Arabian Sea. On 30th May 1987, Goa was declared as a state of India. Goa’s capital is Panaji City; its world-class beaches, food, friendly people are the attraction of Goa.', name: 'Manali', imageUrl: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFuYWxpfGVufDB8fDB8fHww&w=1000&q=80'},
  {detail: ' Goa is the smallest state in western India with coastlines of the Arabian Sea. On 30th May 1987, Goa was declared as a state of India. Goa’s capital is Panaji City; its world-class beaches, food, friendly people are the attraction of Goa.', name: 'Goa', imageUrl: 'https://c4.wallpaperflare.com/wallpaper/404/633/114/5bd34ad9b11a2-wallpaper-preview.jpg'},
  {detail: 'Kerala was named by TIME magazine in 2022 among the 50 extraordinary destinations to explore in its list of the Worlds Greatest Places. In 2023, Kerala was listed at the 13th spot in The New York Times annual list of places to visit and was the only tourist destination listed from India.', name: 'Kerala', imageUrl: 'https://wallpaperset.com/w/full/7/d/3/92422.jpg'},
];

jsonData2 = [
  {intDetail: 'Singapore is the 5th most visited city in the world, and 2nd in Asia-Pacific. The Travel and Tourism Competitiveness Report 2017 ranks Singapore 13th out of 136 countries overall, which was the third best in Asia only behind Japan (ranked 4th) and Hong Kong (ranked 11th).', name1: 'Singapore', imageUrl1: 'https://cdn.dpauls.com/public/images/packages/singapore/singapore%20city/merlion-night-view-singapore.jpg'},
  {intDetail: 'From stunning beaches to breathtaking landscapes, explore the best of the USA. Discover the top tourist places in USA and make your trip unforgettable. Visiting USA. Travel Information. US Road Trip. Official USA Travel Site. Services: Experiences, Trips.', name1: 'USA', imageUrl1: 'https://www.aitkenspenceholidays.lk/wp-content/uploads/2016/07/usa-and-canada-header-mobile.jpg'},
  {intDetail: 'Dubai has grown to be one of the most recognisable destinations worldwide with its lavish architecture, incredible skylines and giant shopping malls. Among the most progressive destinations in the Middle East, Dubai is also the home to Burj Khalifa, the tallest human-made building globally.', name1: 'Dubai', imageUrl1: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/0a/00/1a/52.jpg'},
  {intDetail: 'Bali is the only Hindu-majority province in Indonesia, with 86.9% of the population adhering to Balinese Hinduism.[3] It is renowned for its highly developed arts, including traditional and modern dance, sculpture, painting, leather, metalworking, and music.', name1: 'Bali', imageUrl1: 'https://www.industraveller.com/wp-content/uploads/2019/05/Bali-Indonesia-Packages-From-Bangalore.jpg'},
  {intDetail: 'Interested in Thailand? Check out these 10 fun facts and find out more about its culture! Did you know Thailand is the only country in Southeast Asia to maintain its independence? Helping Children In Need. Distribute Food Globally. Gospel-Centered Ministry.', name1: 'Thailand', imageUrl1: 'https://imgcld.yatra.com/ytimages/image/upload/t_holidays_srplist_desktop_hc/v1500287351/Grand_palace_and_Wat_phra_keaw_at_sunset_bangkok.jpg'},
  // Add more image URLs as needed
]
}
