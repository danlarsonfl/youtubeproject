function handleAPILoaded() {
                  var search = document.querySelector('#search-button');
                 
                  
                }
                
                // Search for a specified string.
                function search() {
                  var q = document.querySelector('.input-button').value;
                  var request = gapi.client.youtube.search.list({
                    q: q,
                    part: 'snippet',
                    type: "video"
                  });
                
                  request.execute(function(response) {
                   var str = response.result;//JSON.stringify(response.result);
                   //var youtubeList = document.querySelector('#search-container').innerHTML = '<pre>' + str + '</pre>';
                    
                    
                  
                    
                    for(var i=0;i<str.items.length;i++){
                        var node = document.createElement("LI");
                        
                            //for(j=0;j<str.items.length;i++){
                                var thumbnail = str.items[i].snippet.thumbnails.default.url;
                                var thumbnailString = "<img src="+thumbnail+">" ;
                               // var thumbnailNode = document.createElement("DIV");
                                //thumbnailNode.innerHTML = thumbnailString;
                                //thumbnailNode.appendChild(thumbnailNode);
                                //node.appendChild(thumbnailNode);
                                
                                
                                var title = str.items[i].snippet.title;
                                var titleString = "<h1>"+title+"</h1>";
                                var titleNode = document.createElement("SPAN");
                                titleNode.innerHTML = thumbnailString + titleString;
                                node.appendChild(titleNode);
                                
                                //var description = str.items[i].snippet.description;
                                //var descriptionString = "<p>"+description+"</p>";
                                //var descriptionNode = document.createElement("DIV");
                                //descriptionNode.innerHTML = descriptionString;
                                //node.appendChild(descriptionNode);
                                
                                var videoIdImport = str.items[i].id.videoId;
                                node.id = videoIdImport;
                                //var videoIdString = "< a href='https://www.youtube.com/watch?v="+videoId+">";
                                //var videoIdNode = document.createElement("DIV");
                                //videoIdNode.innerHTML = videoIdString;
                                
                               // node.appendChild(videoIdNode);
                            
                            
                        
                       document.getElementById("videos").appendChild(node);
                    }
                        
                        var liChild = document.querySelector("#videos").children;

                        for ( var k=0;k<liChild.length;k++){
                        liChild[k].addEventListener("click",function (event){
                            //var videoIds = document.querySelector("").parentNode.id;
                            
                            
                            var videoYtId = event.currentTarget.id;
                            player.loadVideoById(videoYtId);
                        //PUT IN FUNCTION THAT CONNECTS TO THE IFRAME
                            document.querySelector('#iframeholder').style.visibility ="visible"; //To fade the iframe in and out
                        });
                        };
                });
                };