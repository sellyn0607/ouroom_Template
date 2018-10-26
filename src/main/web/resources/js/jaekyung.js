"use strict";
var jaekyung = jaekyung || {};
jaekyung =(()=>{
       var init=()=>{
              jaekyung.router.init();
       };
       return {init:init};
})();

jaekyung.main={// 메인페이지//변경
              mp:()=>{
                     $('#content').empty();     
                     let ctner__st=$('<div />').attr({id:"ctner__st"});
                     let ctnerh__st=$('<div />').attr({id:"ctnerh__st"});
                     let ctnerb__st=$('<div />').attr({id:"ctnerb__st"});
                     let ctnerf__st=$('<div />').attr({id:"ctnerf__st"});
                     ctner__st.appendTo('#content').append(
                    		ctnerh__st,
                            ctnerb__st,
                            ctnerf__st
                     );
                     (jaekyung.main.nav()).appendTo(ctnerh__st);
                     (jaekyung.main.ctner()).appendTo(ctnerb__st);
                     (jaekyung.main.ftr()).appendTo(ctnerf__st);
                     jaekyung.chart.smm(); 
                     jaekyung.chart.vst(); 
                     jaekyung.chart.sba(); 
                     jaekyung.chart.ctgr1();
                     jaekyung.chart.mbr();
                     jaekyung.chart.abba();
              },
              nav:()=>{
            	  	 let d=$('<div />');
                     let navc =$('<nav />');
                     let dd=$('<div />');
                     let u = $('<ul />');
                     let ip = [{lst:'요약',id:'smmryu'},{lst:'방문자',id:'vstryu'},{lst:'연령별',id:'sbaryu'},{lst:'카테고리별',id:'ctgr1ryu'},{lst:'가입자',id:'mbrryu'},{lst:'구매액',id:'abbaryu'},{lst:'시간별방문자',id:'vbtryu'},{lst:'성별',id:'cbgryu'}];
                     d.addClass("container");
                     navc.attr({id:"navc__st",style:"position: fixed; max-width:1140px"})
                           .addClass("navbar navbar-default").appendTo(d);
                     dd.appendTo(navc);
                     // active 추가할거
                     $('<div />').addClass('navbar-header').append(
                            $('<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" />')
                           // ,
							// $('<a/>').addClass('navbar-brand').attr({href:"#"}).html($('<img
							// src="'+$.img()+'/jaekyung/logo.png"/>'))
                     ).appendTo(dd);
                     u.attr({id:"ididid"}).addClass("nav nav-pills nav-justified ").appendTo(dd);
                   
                     $(ip).each(function(i){
                           $('<li role="presentation" data-scroll="'+this.id+'"/>').attr({style:"padding-top:7px"}).addClass("scrollS__ryu").append($('<a href="#'+this.id+'"/>').attr({style:"color:#262626"}).html(this.lst)).appendTo(u);
                     });
                     
                     $(()=>{
                	    var link = $('li.scrollS__ryu a');
                	    link.on('click',function(e){ // .click(e=>{}) 의
														// 비jquery 방식
                	        var target = $($(this).attr('href')); 
                	        $('html, body').animate({
                	            scrollTop: target.offset().top
                	        },800);
                	        $(this).addClass('active');
                	        e.preventDefault();
                	    });
                	    $(window).scroll(()=>{
                            findPosition();
                        });
                        function findPosition(){
                            $('div .woruddlrkshfogksekghdghdghd').each(function(){
                                if( ($(this).offset().top - $(window).scrollTop() ) <600){
                                    $('li.scrollS__ryu').removeClass('active');
                                    $('#ididid').find('[data-scroll="'+ $(this).attr('id') +'"]').addClass('active');
                                }
                            });
                        }
                        findPosition();
                     });
                     
                     let didScroll,lastScrollTop = 0,delta = 5;
                     let navbarHeight = $('body').outerHeight();
                     $(window).scroll(e=>{
                    	 didScroll = true;
                     });
                     setInterval(()=>{
                    	 if (didScroll) { 
                    		 hasScrolled(); 
                    		 didScroll = false; 
                    		 } 
                     }, 100);
                     function hasScrolled(){
		            	 var st = $(document).scrollTop(); 
		                 if(Math.abs(lastScrollTop - st) <= delta) return;
		                 (st > lastScrollTop && st > navbarHeight)?
		                		 $('#navc__st').addClass('nav-up').removeClass('nav-down') :
		                			 (st + $(window).height() < $(document).height())?
		                					 $('#navc__st').removeClass('nav-up').addClass(' nav-down'):"";
		                 lastScrollTop = st; 
                     }

                     return d;
              },
              ctner:()=>{
                     let d = $('<div>');
                     (jaekyung.main.smm()).appendTo(d);
                     (jaekyung.main.vst()).appendTo(d);
                     (jaekyung.main.sba()).appendTo(d);
                     (jaekyung.main.ctgr1()).appendTo(d);
                     (jaekyung.main.mbr()).appendTo(d);
                     (jaekyung.main.abba()).appendTo(d);
                     (jaekyung.main.vbt()).appendTo(d);
                     (jaekyung.main.cbg()).appendTo(d);
                     return d;
              },
              ftr:()=>{
                     let d = $('<div>').attr("id","ftr__st");
                     d.html('푸우우우터');
                     return d;
              },
              smm:()=>{
                let smm = $('<div />');
                let smma = $('<div />');
                let smmh = $('<div />');
                let smmc = $('<div />');
                let smmco = $('<div />');
                let smmct = $('<div />');
                smm.attr({style:"background-color: rgba(204, 82, 0, 0.25);"});
                $('<div />').attr({id:"smmryu",style:" position:relative; top:-50px"}).addClass("woruddlrkshfogksekghdghdghd").appendTo(smm);
                smma.addClass("container compogap__ryu").appendTo(smm);
                smmh.attr({id:"smmryu"}).addClass("txtcw_ryu text-center txtcw__ryu").append(
                             $('<h1 />').append($('<strong>').addClass("ganjitxt__ryu").html("요약")),
                             $('<hr />').addClass('txthr10__ryu'),
                             $('<span aria-hidden="true" />').attr({style:"height:40px; width:40px"}).addClass('glyphicon glyphicon-certificate glyalone__ryu')
                ).appendTo(smma);
                smmc.attr({style:"margin-top:40px;"}).appendTo(smma);
                smmco.appendTo(smmc);
                smmco.attr({style:"display:flex"}).addClass("row-fluid").append(
                     $('<div />').attr({style:"border:1px solid;" ,id:"smm_v_l"}).addClass("col-lg-7 col-md-12 bgcw__ryu borderG__ryu"),
                     $('<div />').addClass("col-lg-5 col-sm-12 pr0__ryu ml15__ryu ").append(
                                  $('<div />').addClass("col-md-12 pr0__ryu ").append(
                                		  $('<div />').attr({style:"border:1px solid;border-bottom:0px; display:flex"}).addClass("col-md-12 bgcw__ryu pa0__ryu borderG__ryu")
                                		  .append(
		                                      $('<div />').addClass("col-md-offset-2").html("<h4>오늘  신규 게시글 수</h4>")
                                  ),
                                  $('<div />').attr({style:"border:1px solid; border-top:0px;" , id:"smm_np"}).addClass("col-md-12 bgcw__ryu pa0__ryu borderG__ryu"),
                                  $('<div />').attr({style:"border:1px solid;margin-bottom:15px ;border-top:0px; display:flex"}).addClass("col-md-12 bgcw__ryu pa0__ryu borderG__ryu").append(
                                                $('<div />').addClass("col-md-2")
                                                	.append($('<span />').attr({style:"color:red"}).html("<h4><strong>TODAY</strong></h4>")),
                                                $('<div />').addClass("col-md-3 ").html("<h5>신규 게시글 수</h5>")
                                  )
                                  ),
                                  
                                  $('<div />').addClass("col-md-12 pr0__ryu ").append(
                            		  $('<div />').attr({style:"border:1px solid;border-bottom:0px; display:flex"}).addClass("col-md-12 bgcw__ryu pa0__ryu borderG__ryu")
	                            		  .append(
		                                      $('<div />').addClass("col-md-offset-2 ").html("<h4>오늘  신규 가입자</h4>")
		                              ),
		                              $('<div />').attr({style:"border:1px solid", id:"smm_nj"}).addClass("col-md-12 bgcw__ryu borderG__ryu")
		                            	,
		                              $('<div />').attr({style:"border:1px solid ;border-top:0px ;display:flex"}).addClass("col-md-12 bgcw__ryu pa0__ryu mb0__ryu borderG__ryu").append(
		                                            $('<div />').addClass("col-md-2").append($('<span />').attr({style:"color:red"}).html("<h4><strong>TODAY</strong></h4>")),
		                                            $('<div />').addClass("col-md-3  ").html("<h5>신규 가입자</h5>")
                                  ))
                     )
                );
                
              
                
                smmct.appendTo(smmc);
                smmct.attr({style:"display:flex"}).addClass("row-fluid margint20__ryu").append(
                     $('<div />').attr({style:"border:1px solid; margin-right:15px",id:"smm_v_c"}).addClass("col-md-6 bgcw__ryu borderG__ryu")
                     ,
                     $('<div />').addClass("col-md-3").append(
                    		 $('<div />').attr({style:"border:1px solid;",id:"smmtable"}).addClass("col-md-12 bgcw__ryu text-center borderG__ryu").html("<h4><strong>오늘 상위 매출 카테고리</strong></h4>")
                     ),
                     $('<div />').addClass("col-md-3 pr0__ryu borderG__ryu").append(
                                  $('<div />').attr({style:"border:1px solid; height:338px ", id:"smm_v_d"}).addClass("col-md-12 bgcw__ryu borderG__ryu")
                                  
                     )
                );
                return smm;
              },
              vst:()=>{
                let vst = $('<div />');
                let vsta = $('<div />');
                let vsth = $('<div />');
                let vstc = $('<div />');
                let vstco = $('<div />');
                let vstct = $('<div />');
                vst.attr({style:"background-color: #FFFFFF"});
                $('<div />').attr({id:"vstryu",style:" position:relative; top:-50px"}).addClass("woruddlrkshfogksekghdghdghd").appendTo(vst);
                vsta.addClass("container compogap__ryu").appendTo(vst);
                $('<div />').append(
                             vsth.addClass("txtcw_ryu text-center").append(
                                    $('<h1 />').append($('<strong>').addClass("ganjitxt_4d4d4d__ryu").html("방문자통계")),
                                    $('<hr />').addClass('txthr20__ryu'),
                                    $('<span aria-hidden="true" />').attr({style:"color:#4d4d4d;"}).addClass('glyphicon glyphicon-certificate glyalone__ryu')
                       )
                ).appendTo(vsta);
                vstc.attr({style:"margin-top:40px"}).appendTo(vsta);
                vstco.appendTo(vstc);
                vstco.addClass("row-fluid").append(
                             $('<div />').addClass("col-md-12 btb1__ryu borderG__ryu").attr({id:'vst_c_a', style:'height:450px'})                     
                );
                vstct.addClass("margint20__ryu").appendTo(vstc);
              
                vstct.addClass("row-fluid").append(
                             $('<div />').attr({style:" padding: 20px 40px 20px 40px ;border-top:0px" , id:"vst_t"}).addClass("col-md-12  btb1__ryu borderG__ryu")
                );
                
                
                return vst;
              },
              sba:()=>{
                let sba = $('<div />');
                let sbaa = $('<div />');
                let sbah = $('<div />');
                let sbac = $('<div />');
                let sbaco = $('<div />');
                let sbact = $('<div />');
                sba.attr({style:"background-color: rgba(204, 82, 0, 0.25);"});
                $('<div />').attr({id:"sbaryu",style:" position:relative; top:-50px"}).addClass("woruddlrkshfogksekghdghdghd").appendTo(sba);
                sbaa.addClass("container compogap__ryu").appendTo(sba);
                $('<div />').append(
                              sbah.attr({id:"sbaryu"}).addClass(" text-center txtcw__ryu").append(
                                    $('<h1 />').append($('<strong>').addClass("ganjitxt__ryu").html("연령 별 매출 통계")),
                                    $('<hr />').addClass('txthr30__ryu'),
                                    $('<span aria-hidden="true" />').addClass('glyphicon glyphicon-certificate glyalone__ryu')
                       )
                ).appendTo(sbaa);
                sbac.attr({style:"margin-top:40px"}).appendTo(sbaa);
                sbaco.appendTo(sbac);
                sbaco.addClass("row-fluid").append(
                             $('<div />').addClass("col-md-12 btb1__ryu borderG__ryu").append(
                                           $('<div />').attr({style:'height:450px',id:"sba__cc"}).addClass("col-md-12")
                                                 
                             )                         
                );
                sbact.addClass("margint20__ryu").appendTo(sbac);
    
                sbact.addClass("row-fluid").append(
                             $('<div />').attr({style:" padding: 20px 40px 20px 40px ;border-top:0px ",id:"sba_t"}).addClass("col-md-12  btb1__ryu borderG__ryu")
                );
                return sba;
              },
              ctgr1:()=>{
                let ctgr1 = $('<div />');
                let ctgr1a = $('<div />');
                let ctgr1h = $('<div />');
                let ctgr1c = $('<div />');
                let ctgr1co = $('<div />');
                ctgr1.attr({style:"background-color: #FFFFFF"});
                $('<div />').attr({id:"ctgr1ryu",style:" position:relative; top:-50px"}).addClass("woruddlrkshfogksekghdghdghd").appendTo(ctgr1);
                ctgr1a.addClass("container compogap__ryu").appendTo(ctgr1);
                $('<div />').append(
                             ctgr1h.attr({id:"ctgr1ryu"}).addClass("text-center").append(
                                    $('<h1 />').append($('<strong>').addClass("ganjitxt_4d4d4d__ryu").html("카테고리  통계")),
                                    $('<hr />').addClass('txthr45__ryu'),
                                    $('<span aria-hidden="true" />').attr({style:"color:#4d4d4d;"}).addClass('glyphicon glyphicon-certificate glyalone__ryu')
                       ).appendTo(ctgr1a)
                            
                ).appendTo(ctgr1a);
                ctgr1c.attr({style:"margin-top:40px"}).appendTo(ctgr1a);
                ctgr1co.appendTo(ctgr1c);
                ctgr1co.addClass("row-fluid").append(
                             $('<div />').attr({id:"ctgr1__tc",style:"width:1100px ; height:500px"}).addClass("col-md-12 btb1__ryu borderG__ryu")
                );
                return ctgr1;
              },
              mbr:()=>{
                let mbr = $('<div />');
                let mbra = $('<div />');
                let mbrh = $('<div />');
                let mbrc = $('<div />');
                let mbrco = $('<div />');
                let mbrct = $('<div />');
                mbr.attr({style:"background-color:rgba(204, 82, 0, 0.25)"});
                $('<div />').attr({id:"mbrryu",style:" position:relative; top:-50px"}).addClass("woruddlrkshfogksekghdghdghd").appendTo(mbr);
                mbra.addClass('container compogap__ryu').appendTo(mbr);
                $('<div />').append(     
                             mbrh.attr({id:"mbrryu"}).addClass("txtcw__ryu text-center").append(
                                           $('<h1 />').append($('<strong>').addClass("ganjitxt__ryu").html("가입자 통계")),
                                           $('<hr />').addClass('txthr20__ryu'),
                                           $('<span aria-hidden="true" />').addClass('glyphicon glyphicon-certificate glyalone__ryu')
                             )
                ).appendTo(mbra)
                mbrc.appendTo(mbra);
                mbrco.attr({style:"display:flex"}).addClass("row-fluid ").appendTo(mbrc);
                $('<div />').addClass('col-md-6').append(
                             $('<div />').attr({style:"border:1px solid; height:480px",id:"mbr__pc"}).addClass('col-md-12 bgcw__ryu')
                ).appendTo(mbrco);
                $('<div />').addClass('col-md-6').append(
                             $('<div />').attr({style:"border:1px solid; height:480px",id:"mbr__bc"}).addClass('col-md-12 bgcw__ryu')
                ).appendTo(mbrco);
                mbrct.appendTo(mbrc);
                mbrct.addClass('row-fluid');
                mbrct.addClass("margint20__ryu").appendTo(mbrc);
               
                return mbr;
              },
              abba:()=>{
                let abba = $('<div />');
                let abbaa = $('<div />');
                let abbah = $('<div />');
                let abbac = $('<div />');
                let abbaco = $('<div />');
                abba.attr({style:"background-color: #FFFFFF"});
                $('<div />').attr({id:"abbaryu",style:" position:relative; top:-50px"}).addClass("woruddlrkshfogksekghdghdghd").appendTo(abba);
                abbaa.addClass("container compogap__ryu").appendTo(abba);
                $('<div />').append(
                             abbah.attr({id:"abbaryu"}).addClass("text-center").append(
                                    $('<h1 />').append($('<strong>').addClass("ganjitxt_4d4d4d__ryu").html("연령 대비 평균 구매액 통계")),
                                    $('<hr />').addClass('txthr45__ryu'),
                                    $('<span aria-hidden="true" />').attr({style:"color:#4d4d4d;"}).addClass('glyphicon glyphicon-certificate glyalone__ryu')
                       )
                ).appendTo(abbaa);
                abbac.attr({style:"margin-top:40px"}).appendTo(abbaa);
                abbaco.appendTo(abbac);
                abbaco.addClass("row-fluid").append(
                             $('<div />').attr({id:"abba__sc",style:"height:500px"}).addClass("col-md-12 btb1__ryu borderG__ryu")                   
                );
                return abba;
              },
              vbt:()=>{
                let vbt = $('<div />');
                let vbta = $('<div />');
                let vbth = $('<div />');
                let vbtc = $('<div />');
                let vbtco = $('<div />');
                let vbtct = $('<div />');
                vbt.attr({style:"background-color:rgba(204, 82, 0, 0.25)"});
                $('<div />').attr({id:"vbtryu",style:" position:relative; top:-50px"}).addClass("woruddlrkshfogksekghdghdghd").appendTo(vbt);
                vbta.addClass('container compogap__ryu').appendTo(vbt);
                $('<div />').append(     
                             vbth.addClass("txtcw__ryu text-center").append(
                                           $('<h1 />').append($('<strong>').addClass("ganjitxt__ryu").html("시간 별 방문자 통계")),
                                           $('<hr />').addClass('txthr35__ryu'),
                                           $('<span aria-hidden="true" />').addClass('glyphicon glyphicon-certificate glyalone__ryu glyalone__ryu')
                             )
                ).appendTo(vbta)
                vbtc.appendTo(vbta);
                vbtco.addClass("row-fluid btb1__ryu").appendTo(vbtc);
                       $('<div />').attr({style:"border:1px solid"}).addClass('col-md-12 bgcw__ryu').append(
                                    $('<img src="'+$.img()+'/jaekyung/14.PNG" />').addClass("img-responsive center-block ")
                ).appendTo(vbtco);
                vbtct.appendTo(vbtc);
                vbtct.addClass("margint20__ryu").appendTo(vbtc);
                let r ={list:['시간','총 방문자',' 남성 방문자 ',' 여성 방문자 ','성비']};
                let rr =[{x1:'0시',x2:'10029 명',x3:'3742 명',x4:'6387 명', x5:'37% : 63%'},{x1:'1시',x2:'651234명',x3:'6548명',x4:'321명', x5:'16.3%'},{x1:'2시',x2:'651234명',x3:'6548명',x4:'321명', x5:'16.3%'},{x1:'3시',x2:'651234명',x3:'6548명',x4:'321명', x5:'16.3%'},{x1:'4시',x2:'651234명',x3:'6548명',x4:'321명', x5:'16.3%'}];
                let t = $('<table />');
                let th = $('<thead />');
                let tb = $('<tbody />');
                let tr = $('<tr />');
                let tp = $('<p />');
                vbtct.addClass("row-fluid").append(
                             $('<div />').attr({style:" padding: 20px 40px 20px 40px"})
                                  .addClass("col-md-12  btb1__ryu borderG__ryu margint20__ryu").append(
                                           tp,
                                           t.attr({style:"border-top:1px solid; border-bottom:1px solid"})
                                                .addClass("table table-striped table-hover borderG__ryu")
                             )
                );
                let l =$('<label />');
                tp.append(
                		l
                         .html('<strong>상세데이터 열기 &nbsp;&nbsp;</strong>'
                 			+' <div class="material-switch pull-right">'
                 			+'<input id="vbtDtSwitch" name="vbtDtSwitch" value="1" type="checkbox" checked="checked"/>'
                 			+'<label for="vbtDtSwitch" class="label-warning"></label></div>'
                                )
                );
                tb.appendTo(t);
            	th.appendTo(t);
                $(l).change (e=>{
                	if($('#vbtDtSwitch').val()==="1"){
                		t.empty();
                		$('#vbtDtSwitch').prop('value',"2");
                	}else{
                    	tb.appendTo(t);
                    	th.appendTo(t);
                    	$('#vbtDtSwitch').prop('value',"1");
                	}
                });
                $.each(r.list,(i,v)=>{
                            $('<th />').addClass("text-center").html(v).appendTo(tr)
                });
                $(rr).each(function(i){
                       $('<tr />').addClass("text-center").append(
                                    $('<td />').attr('width','10%').html(this.x1),
                                    $('<td />').attr('width','30%').html(this.x2),
                                    $('<td />').attr('width','20%').html(this.x3),
                                    $('<td />').attr('width','20%').html(this.x4),
                                    $('<td />').attr('width','20%').html(this.x5)
                       ).appendTo(tb);
                });
                return vbt;
              },
              cbg:()=>{
                let cbg = $('<div />');
                let cbga = $('<div />');
                let cbgh = $('<div />');
                let cbgc = $('<div />');
                let cbgco = $('<div />');
                cbg.attr({style:"background-color: #FFFFFF"});
                $('<div />').attr({id:"cbgryu",style:" position:relative; top:-50px"}).addClass("woruddlrkshfogksekghdghdghd").appendTo(cbg);
                cbga.addClass("container compogap__ryu").appendTo(cbg);
                $('<div />').append(
                             cbgh.attr({id:"cbgryu"}).addClass("text-center").append(
                                    $('<h1 />').append($('<strong>').addClass("ganjitxt_4d4d4d__ryu").html("성별 카테고리 통계")),
                                    $('<hr />').addClass('txthr35__ryu'),
                                    $('<span aria-hidden="true" />').addClass('glyphicon glyphicon-certificate glyalone__ryu')
                       )
                ).appendTo(cbga);
                cbgc.attr({style:"margin-top:40px"}).appendTo(cbga);
                cbgco.appendTo(cbgc);
                cbgco.addClass("row-fluid");
                       $('<div />').addClass("col-md-7 btb1__ryu borderG__ryu").append(
                                  $('<img src="'+$.img()+'/jaekyung/13.PNG" />').addClass("img-responsive center-block margintb15__ryu")   
                       ).appendTo(cbgco);
                       $('<div />').addClass("col-md-4 col-md-offset-1 btb1__ryu borderG__ryu").append(
                                    $('<img src="'+$.img()+'/jaekyung/13.PNG" />').addClass("img-responsive center-block margintb15__ryu")   
                       ).appendTo(cbgco);
                return cbg;
              }
}
jaekyung.chart={
		smm : () =>{
			$.getJSON($.context()+'/stats/smmChart',r=>{
				// smm line
				google.charts.load('current', {packages: ['corechart', 'line']});
				google.charts.setOnLoadCallback(()=>{
						let data = new google.visualization.DataTable();
						data.addColumn('string', '날짜');
						data.addColumn('number', '방문자수');
						$.each(r.smmvstlc,(i,j)=>{
				    	  data.addRow(
				    		  [j.visitDate.split('-')[1]+'월 '+j.visitDate.split('-')[2]+'일', j.count]
				    	  );
				      });
				      var options = {
				    	title: '일일 방문자 통계',
				    	legend:{position:'none'},	  
				        hAxis: {title: ''},
				        vAxis: {title: '방문자 수',viewWindow: {min:500}},
				        
				        backgroundColor: '#FFFFFF'
				      };
				      var chart = new google.visualization.LineChart(document.getElementById('smm_v_l'));
				      chart.draw(data, options);
				});
				// smm column
				google.charts.load('current', {packages: ['corechart', 'bar']});
				google.charts.setOnLoadCallback(()=>{
				      let data = new google.visualization.DataTable();
				      data.addColumn('string', '날짜');
				      data.addColumn('number', '매출액');
				      $.each(r.smmvstcc,(i,j)=>{
				    	  data.addRow([j.smmDate.split('-')[1]+'월 '+j.smmDate.split('-')[2]+'일', j.smmSale]);
				      });
				      var options = {
				        title: '일일 매출 통계',
				        legend:{position:'none'},
				        hAxis: {
				          title: '',
				          format: 'h:mm a'
				        	 /*
								 * , viewWindow: { min: [7, 30, 0], max: [17,
								 * 30, 0] }
								 */
				        },
				        vAxis: {
				          title: '매출액(단위: 원)',
				          viewWindow: {min:50000000, max: 110000000}
				        	  
				        }
				      };

				      var chart = new google.visualization.ColumnChart(
				        document.getElementById('smm_v_c'));

				      chart.draw(data, options);
				    });
				// smm donut
				google.charts.load("current", {packages:["corechart"]});
			    google.charts.setOnLoadCallback(()=>{
			        var data = google.visualization.arrayToDataTable([
				          ['gender', '가입자수'],
				          ['남자',     11],
				          ['여자',      22]
				        ]);

			        var options = {
			          title: '가입자 성비 현황',
			          titleTextStyle:{fontSize: 15, bold:true},
			          legend:{position:'bottom'},
			          chartArea:{width:'70%',height:'70%'},
			          pieHole: 0.4,
			        };

			        var chart = new google.visualization.PieChart(document.getElementById('smm_v_d'));
			        chart.draw(data, options);
			    });
			    
			    
			    let smmtd = $('<div />');
				let t = $('<table />');
				let th = $('<thaed />');
				let tb = $('<tbody />');
				let tr = $('<tr />');
				t.attr({style:"border-top:1px solid; border-bottom:1px solid", id:"smmt"}).addClass("table table-striped table-hover borderG__ryu").appendTo(smmtd);
		// 아이디 왜 안먹지? appendTo(('#smmt'))
				th.appendTo(t);
				tb.appendTo(t);
		        tr.appendTo(th);
		        /*
				 * 
				 * $('<th />').html('<b>순위</b>').appendTo(tr); $('<th />').html("<b>카테고리</b>").appendTo(tr);
				 * $('<th />').html("<b>판매수</b>").appendTo(tr); $('<th />').html("<b>전체대비비율</b>").appendTo(tr);
				 */
		        
		        
		        $(r.bestSellerPerDay).each(function(i){
		               $('<tr />').attr({style:'font-size:12px'}).addClass("text-center").append(
		                            $('<td />').attr({style:'width:10%'}).html(i+1),
		                            $('<td />').attr('width','20%').html("<b>"+this.categorysOfBestSeller+"</b>"),
		                            $('<td />').attr('width','15%').html(this.sumOfBestSeller+" 개"),
		                            $('<td />').attr('width','15%').html((this.sumOfBestSeller/r.totalSalePerDay[0].totalSalePerDay*100).toFixed(1)+"%")
		               ).appendTo(tb);
		        });
		        smmtd.appendTo($('#smmtable'));
		        let smmtnpd = $('<div />');
				let tnp = $('<table />');
				let tbnp = $('<tbody />');
				let trnp = $('<tr />');
				tnp.attr({style:"border-top:1px solid;  margin-bottom:0px!important;"}).addClass("table table-striped table-hover borderG__ryu").appendTo(smmtnpd);
				tbnp.appendTo(tnp);
				trnp.append(
						 $('<td />').attr({style:'font-size:35px ; width:60%; text-align:right'}).html("<b>"+r.smmvsttvc[0].postCount+"</b>"),
						 $('<td />').attr({style:'font-size:25px; width:40%'}).html("개")
				).appendTo(tbnp);
				smmtnpd.appendTo($('#smm_np'));
				
				let smmtnjd = $('<div />');
				let tnj = $('<table />');
				let tbnj = $('<tbody />');
				let trnj = $('<tr />');
				tnj.attr({style:"border-top:1px solid; margin-bottom:0px!important;"}).addClass("table table-striped table-hover borderG__ryu").appendTo(smmtnjd);
				tbnj.appendTo(tnj);
				trnj.append(
						 $('<td />').attr({style:'font-size:35px ; width:60%; text-align:right'}).html("<b>"+r.smmvsttjc[0].joinCount+"</b>"),
						 $('<td />').attr({style:'font-size:25px; width:40%'}).html("명")
				).appendTo(tbnj);
				smmtnjd.appendTo($('#smm_nj'));
			    
			    
			});
		},
		vst:()=>{
			$.getJSON($.context()+'/stats/vstChart',r=>{
				google.charts.load('current', {'packages':['corechart']});
			    google.charts.setOnLoadCallback(()=>{
			        let data = new google.visualization.DataTable();
			        data.addColumn('string','날짜');
			        data.addColumn('number','회원');
			        data.addColumn('number','총 방문자');
			        $.each(r.vstac,(i,v)=>{
			        	data.addRow([
			        		v.visitDate.split('-')[1]+'/ '+v.visitDate.split('-')[2],
			        		v.memberVisitor,
			        		v.totalVisitor
			        		]);
			        });
			        var options = {
			          title: '방문자 통계',
			          titleTextStyle:{fontSize: 20, bold:true},
			          hAxis: {title: '',  titleTextStyle: {color: '#333'}},
			          vAxis: {minValue: 0}
			          // ,colors: ['#e0440e','#ec8f6e']
			        };
			        var chart = new google.visualization.AreaChart(document.getElementById('vst_c_a'));
			        chart.draw(data, options);
		      });
                $('<p />').attr({id:'vst_tp'}).appendTo($('#vst_t')); 
                $('<label />').appendTo($('#vst_tp'));
                $('#vst_tp label').html('<strong>상세데이터 열기 &nbsp;&nbsp;</strong>'
         			+' <div class="material-switch pull-right">'
         			+'<input id="vstDtSwitch" name="vstDtSwitch" value="1" type="checkbox" checked="checked"/>'
         			+'<label for="vstDtSwitch" class="label-warning"></label></div>'
                 );
                $('<table />')
                	.attr({style:"border-top:1px solid; border-bottom:1px solid",id:"vst_table"})
			    		.addClass("table table-striped table-hover borderG__ryu")
			    			.appendTo($('#vst_t'));
	            let thead = $('<thead />').attr('id','vst_thead').appendTo($('#vst_table'));
	            let tbody =$('<tbody />').attr('id','vst_tbody').appendTo($('#vst_table'));
                $('#vst_tp label').change (e=>{
                	if($('#vstDtSwitch').val()==="1"){
                		$('#vst_table').empty();
                		$('#vstDtSwitch').prop('value',"2");
                	}else{
                		thead.appendTo($('#vst_table'));
                		tbody.appendTo($('#vst_table'));
                    	$('#vstDtSwitch').prop('value',"1");
                	}
                });
                $('<tr />').attr({id:"vst__tr"}).appendTo($('#vst_thead'));
                let tablehead ={list:['날짜','총 방문자','회원','비회원','남','여']};
                $.each(tablehead.list,(i,v)=>{
                      $('<th />').addClass("text-center").html(v).appendTo($('#vst__tr'))
                });
                $.each(r.vstac,function(i,j){ // 여기 쿼리짜고 값 넣는 거 부터 해야함..
                    $('<tr />').attr({style:"text-align:center", id:"trr_"+i}).append(
	                     $('<td />').attr('width','10%').html(j.visitDate),
	                     $('<td />').attr('width','20%').html(j.totalVisitor+" 명"),
	                     $('<td />').attr('width','15%').html(j.memberVisitor+" 명"),
	                     $('<td />').attr('width','15%').html(j.totalVisitor-j.memberVisitor+" 명")
                    ).appendTo($('#vst_tbody'));
                });
                $.each(r.vstt,function(i,j){ 
                        $('<td />').attr('width','15%').html((j.maleC*100/(j.maleC+j.femaleC)).toFixed(1)+"%").appendTo($('#trr_'+i));
                        $('<td />').attr('width','15%').html((j.femaleC*100/(j.maleC+j.femaleC)).toFixed(1)+"%").appendTo($('#trr_'+i));
                });
			});
		},
		sba:()=>{
			$.getJSON($.context()+"/stats/sbaChart",r=>{
				google.charts.load('current', {'packages':['corechart']});
			    google.charts.setOnLoadCallback(()=>{
			            var data = new google.visualization.DataTable();
			            data.addColumn('number','판매가');
			            data.addColumn('number','20~29세 판매량');
			            data.addColumn('number','30~39세 판매량');
			            data.addColumn('number','40~49세 판매량');
			            $.each(r.sbalc,(i,v)=>{
			            	data.addRow([
			            		v.sum,
			            		v.twen,
			            		v.fort,
			            		v.fift
			            	]);
			            });
			            var options = {
			              title: 'Company Performance',
			              curveType: 'function',
			              legend: { position: 'right' },
			            vAxis: {title: '판매량',viewWindow: {min:0,max:130}},
			            hAxis:{viewWindow: {min:0}},
			            interpolateNulls: true
			            };
			            var chart = new google.visualization.LineChart(document.getElementById('sba__cc'));
			            chart.draw(data, options);
			    });
			    $('<p />').attr({id:'sba_tp'}).appendTo($('#sba_t')); 
                $('<label />').appendTo($('#sba_tp'));
                $('#sba_tp label').html('<strong>상세데이터 열기 &nbsp;&nbsp;</strong>'
         			+' <div class="material-switch pull-right">'
         			+'<input id="sbaDtSwitch" name="sbaDtSwitch" value="1" type="checkbox" checked="checked"/>'
         			+'<label for="sbaDtSwitch" class="label-warning"></label></div>'
                 );
                $('<table />')
                	.attr({style:"border-top:1px solid; border-bottom:1px solid",id:"sba_table"})
			    		.addClass("table table-striped table-hover borderG__ryu header-fixed")
			    			.appendTo($('#sba_t'));
	            let thead = $('<thead />').attr('id','sba_thead').appendTo($('#sba_table'));
	            let tbody =$('<tbody />').attr('id','sba_tbody').appendTo($('#sba_table'));
                $('#sba_tp label').change (e=>{
                	if($('#sbaDtSwitch').val()==="1"){
                		$('#sba_table').empty();
                		$('#sbaDtSwitch').prop('value',"2");
                	}else{
                		thead.appendTo($('#sba_table'));
                		tbody.appendTo($('#sba_table'));
                    	$('#sbaDtSwitch').prop('value',"1");
                	}
                });
                $('<tr />').attr({id:"sba__tr"}).appendTo($('#sba_thead'));
                let tablehead ={list:['제품 가격','20세 미만','20대','30대','40대','50대 이상']};
                $.each(tablehead.list,(i,v)=>{
                      $('<th scope="col"/>').addClass("text-center").html(v).appendTo($('#sba__tr'))
                });
                $.each(r.sbalc,function(i,j){ 
                    $('<tr />').attr({style:"text-align:center", id:"trr_"+i}).append(
	                     $('<td scope="row"/>').attr('width','10%').html(j.sum+" 원"),
	                     $('<td />').attr('width','20%').html(j.teen+" 개"),
	                     $('<td />').attr('width','15%').html(j.twen+" 개"),
	                     $('<td />').attr('width','15%').html(j.thir+" 개"),
	                     $('<td />').attr('width','15%').html(j.fort+" 개"),
	                     $('<td />').attr('width','15%').html(j.fift+" 개")
                    ).appendTo($('#sba_tbody'));
                });
			});
		},
		ctgr1:()=>{
			$.getJSON($.context()+"/stats/ctgrChart",r=>{
				 google.charts.load('current', {'packages':['treemap']});
			     google.charts.setOnLoadCallback(()=>{  
			    	var data = new google.visualization.DataTable();
			    	data.addColumn('string','카테고리명');
			    	data.addColumn('string','부모');
			    	data.addColumn('number','볼륨');
			    	data.addColumn('number','컬러');
			    	data.addRow(['1차 카테고리',null,0,0]);
			        let tmp = ['침실','거실','주방','학생방','서재'];
			        $.each(tmp,(i,v)=>{
			        	data.addRow([
			        		v,'1차 카테고리',0,0
			        	]);
			        });
			        $.each(r.ctgrtct,(i,v)=>{
			        	data.addRow([
			        		v.ctgr2, v.ctgr1 ,0,0
			        	]);
			        });
			        $.each(r.ctgrtco,(i,v)=>{
			        	data.addRow([
			        		v.title, v.ctgr2Kor ,v.sales,v.sales
			        	]);
			        });
			        var tree = new google.visualization.TreeMap(document.getElementById('ctgr1__tc'));
			        tree.draw(data, {
			          minColor: '#f00',
			          midColor: '#ddd',
			          maxColor: '#0d0',
			          headerHeight: 15,
			          fontColor: 'black',
			          highlightOnMouseOver: true,
			          useWeightedAverageForAggregation: true
			        });
			      });
			});
  
		},
		mbr:()=>{
			$.getJSON($.context()+"/stats/mbrChart",r=>{
			      google.charts.load("current", {packages:["corechart"]});
			      google.charts.setOnLoadCallback(()=>{
			    	  var data =new google.visualization.DataTable();
			    	  data.addColumn('string','연령대');
			    	  data.addColumn('number','비율');
			    	  let tmp=0;
			    	  $.each(r.mbrpc,(i,v)=>{
			    		       	data.addRow([
				        		v.ages+" 대"
				        		,v.gendercount
				        	]);
				      });
			          var options = {
			              title: 'My Daily Activities',
			              pieSliceText: 'label',
			              is3D: true,
			              legend:'bottom',
			              chartArea:{left:60,top:50,width:"80%",height:"80%"}
		              };
		              var chart = new google.visualization.PieChart(document.getElementById('mbr__pc'));
		              chart.draw(data, options);
			      });
			      google.charts.load('current', {packages: ['corechart', 'bar']});
			      google.charts.setOnLoadCallback(()=>{
			    	  var data = new google.visualization.DataTable();
			    	  data.addColumn('string','연령');
			    	  data.addColumn('number','남자');
			    	  data.addColumn('number','여자');
			    	  $.each(r.mbrbc,(i,v)=>{
			    		  data.addRow([
				        		v.ages +' 대', v.mancount, v.womancount
				        	]);
			    	  });
		    	      var options = {
		    	          title: 'Population of Largest U.S. Cities',
		    	          chartArea: {width: '65%'},
		    	          isStacked: true,
		    	          hAxis: {
		    	            title: '가입자 수',
		    	            viewWindow: {
			    	        	  min:0, max: 2000
			    	        	  }
		    	          },
		    	          
		    	          vAxis: {
		    	            title: '연령'
		    	          }
		    	      };
		    	      var chart = new google.visualization.BarChart(document.getElementById('mbr__bc'));
		    	      chart.draw(data, options);
			      });
			});
		},
		abba:()=>{
			$.getJSON($.context()+"/stats/abbaChart",r=>{
				google.charts.load('current', {'packages':['corechart']});
			    google.charts.setOnLoadCallback(()=>{
			        var data = new google.visualization.DataTable();
			        data.addColumn('number', '개당 평균 구매액');
			        data.addColumn('number', '연령');
			        $.each(r.abbasc,(i,v)=>{
			        	data.addRow([
			        		v.av_salesabba 
			        		,v.ageabba
			        	]);
			        });
			          var options = {
			            title: 'Age vs. Weight comparison',
			            hAxis: {title: '', minValue: 0, maxValue: 15, viewWindow: {
		    	        	  min:0, max: 350000
	    	        	  }},
			            vAxis: {title: 'Weight', minValue: 0, maxValue: 15},
			            legend: 'none',
			            pointSize:2
			            
			          };

			          var chart = new google.visualization.ScatterChart(document.getElementById('abba__sc'));

			          chart.draw(data, options);
			        });
			});
		}
		
		
}
jaekyung.router={
              init:()=>{
                     jaekyung.router.main();
              },
              main:()=>{
                     jaekyung.main.mp();
              }
}