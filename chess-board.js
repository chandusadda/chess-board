	var chessBoardDiv = document.getElementById("chessboard-table");
		function loadChessBoard() {
			var tbdy = document.createElement('tbody');
			tbdy.id = "chessboard-table-body";
			for(var tr=0; tr<8; tr++) {
				var createTrDiv = document.createElement('tr');
				for(var td=0; td<8; td++){
					var createTdDiv = document.createElement('td');
					createTdDiv.classList.add("chessboard");
					createTdDiv.id = "0"+tr + "0" + td;
					createTrDiv.appendChild(createTdDiv);
				}
				createTrDiv.classList.add("chessboard");
				tbdy.appendChild(createTrDiv);
			}
			chessBoardDiv.appendChild(tbdy);
		}
		
		function highlightBoxes(event) {
			var chessBoardTblBdy = document.getElementById("chessboard-table-body");
			chessBoardDiv.removeChild(chessBoardTblBdy);
			loadChessBoard();
			var highlightBoxesAry = [];
			var clickedBoxId = event.target.id;
			var fstStr = parseInt(clickedBoxId.slice(0, 2));
			var sndStr = parseInt(clickedBoxId.slice(2));
			var fstStrNew = fstStr;
			var sndStrNew = sndStr;
			var fstStrNew1 = fstStr;
			var sndStrNew1 = sndStr;
			var nxtBoxId;
			if( (fstStr && sndStr)|| (fstStr === 0 || sndStr === 0) ) {
				highlightBoxesAry.push(('0'+(fstStrNew).toString())+('0'+(sndStrNew).toString()));
					for(var box=fstStr; box<7; box++) {
						if(sndStrNew < 7) {
							fstStrNew = fstStrNew +1;
							sndStrNew = sndStrNew +1;
							nxtBoxId = ('0'+(fstStrNew).toString())+('0'+(sndStrNew).toString());
							highlightBoxesAry.push(nxtBoxId);
						} else {
							break;
						}
					}
					for(var box=fstStr; box>0; box--) {
						if(sndStrNew1 > 0 ) {
							fstStrNew1 = fstStrNew1 -1;
							sndStrNew1 = sndStrNew1 -1;
							nxtBoxId = ('0'+(fstStrNew1).toString())+ ('0'+(sndStrNew1).toString());
							highlightBoxesAry.push(nxtBoxId);
						} else {
							break;
						}
					}
					highlightBoxesAry = new Set(highlightBoxesAry);
				highlightBoxesAry.forEach(function(value){
					document.getElementById(value).style.background = "red";
				});
				crossDiagonal(fstStr,sndStr,highlightBoxesAry);
			}
		}
		
		function crossDiagonal(fstStr,sndStr,highlightBoxesAry) {
			var crsHighlightAry = [];
			var nxtBoxId;
			var crsFstStr = fstStr;
			var crsSntStr = sndStr;
			var crsFstStr1 = fstStr;
			var crsSntStr1 = sndStr;
			crsHighlightAry.push(('0'+(crsFstStr).toString())+('0'+(crsSntStr).toString()));
			for(var box=fstStr; box<=7; box++) {
				if(crsSntStr > 0 &&  crsFstStr >= 0 &&  crsFstStr < 7 && crsSntStr <= 7 ) {
					crsFstStr = crsFstStr +1;
					crsSntStr = crsSntStr -1;
					nxtBoxId = ('0'+(crsFstStr).toString())+('0'+(crsSntStr).toString());
					crsHighlightAry.push(nxtBoxId);
				} else if(crsSntStr === 7 && crsFstStr ===0) {
					crsFstStr = crsFstStr +1;
					crsSntStr = crsSntStr -1;
					nxtBoxId = ('0'+(crsFstStr).toString())+('0'+(crsSntStr).toString());
					crsHighlightAry.push(nxtBoxId); 
				} else {
					break;
				}
			}
			for(var box=fstStr; box>0; box--) {
				if(crsSntStr1 >= 0 &&  crsFstStr1 > 0 &&  crsFstStr1 <= 7 && crsSntStr1 < 7 ) {
					crsFstStr1 = crsFstStr1 -1;
					crsSntStr1 = crsSntStr1 +1;
					nxtBoxId = ('0'+(crsFstStr1).toString())+('0'+(crsSntStr1).toString());
					crsHighlightAry.push(nxtBoxId);
				}else if(crsFstStr1 === 7 && crsSntStr1===0) {
					crsFstStr1 = crsFstStr1 -1;
					crsSntStr1 = crsSntStr1 +1;
					nxtBoxId = ('0'+(crsFstStr1).toString())+('0'+(crsSntStr1).toString());
					crsHighlightAry.push(nxtBoxId);
				} else {
					break;
				}
			}
			crsHighlightAry = new Set(crsHighlightAry);
			crsHighlightAry.forEach(function(value){
				document.getElementById(value).style.background = "red";
			});
		}