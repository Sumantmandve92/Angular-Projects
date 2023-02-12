import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/item';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-show-uploaded-items',
  templateUrl: './show-uploaded-items.component.html',
  styleUrls: ['./show-uploaded-items.component.css']
})
export class ShowUploadedItemsComponent implements OnInit {

  constructor(public serve:ServicesService) { }
   
  ngOnInit(): void {
   
    this.serve.http.get(this.serve.url+"g2etAlluploadedItems/"+this.serve.tokan).subscribe(
      (data:Item[])=>
      {
        this.serve.uploadedItems=data;
      }
    );
  }
  
// =====================================================================================================================
// file upload
selectedFile:File;
onFileChanged(event)
{
this.selectedFile = event.target.files[0];
console.warn(this.selectedFile);
}
onUpload(itemid:number)
{
  console.warn(this.selectedFile);

  const uploadImageData= new FormData();
  uploadImageData.append('imageFile',this.selectedFile,this.selectedFile.name);

  this.serve.http.post(this.serve.url+"u2ploadfile/"+itemid+"/"+this.serve.tokan,uploadImageData,{observe:'response'}).subscribe(
    (response)=>
    {
      window.alert("done");
      console.warn(response);
    }
  );

}
  //Gets called when the user clicks on retieve image button to get the image from back end
  //   getImage() {
  //   //Make a call to Sprinf Boot to get the Image Bytes.
  //   this.httpClient.get('http://localhost:8080/image/get/' + this.imageName)
  //     .subscribe(
  //       res => {
  //         this.retrieveResonse = res;
  //         this.base64Data = this.retrieveResonse.picByte;
  //         this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
  //       }
  //     );
  // }
// =====================================================================================================================

}
