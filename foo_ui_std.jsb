JFW Script File                                                           T
      $sayremainingtime        gettimestring   '   %         
             1
 Msg_NOTRACK_LThere is no track playing. 1 Msg_NOTRACK_SNothing playing.     saymessage     	         %     /          stringsegment   '     %     /     ����  stringsegment   '     %    getnumberofseconds     %    getnumberofseconds  
  '     %    gettimestringfromseconds    '          1
 Msg_REMAININGTIME_LRemaining time: %1   1 Msg_REMAININGTIME_S%1   %    sayformattedmessage       �    $sayelapsedtime      gettimestring   '   %         
             1
 Msg_NOTRACK_LThere is no track playing. 1 Msg_NOTRACK_SNothing playing.     saymessage     	         %     /          stringsegment   '     %    getnumberofseconds  '     %    gettimestringfromseconds    '          1	 Msg_ELAPSEDTIME_LElapsed time: %1   1 Msg_ELAPSEDTIME_S%1 %    sayformattedmessage       �    $saytotaltime        gettimestring   '   %         
             1
 Msg_NOTRACK_LThere is no track playing. 1 Msg_NOTRACK_SNothing playing.     saymessage     	         %     /     ����  stringsegment   '     %    getnumberofseconds  '     %    gettimestringfromseconds    '          1 Msg_TOTALTIME_LTrack Length: %1 1 Msg_TOTALTIME_S%1   %    sayformattedmessage           gettimeparts                 ,  '     %     :     stringsegmentcount       
       0:  %   
  '    0         '  %       
           %     :   %    stringsegment     stringtoint %  %  +  %       
  '   �    %     	      �     getnumberofseconds        %     gettimeparts    '       %  *      
       %  *    <   
  
       %  *  
     	      X    gettimestringfromseconds       %       
  '  %        
     %   %      
  
  '   %     %    inttostring 
     hour   
  '  %       
     %    s   
  '        %     <   
  '  %        
     %        
     %    ,   
  '     %   %    <   
  
  '   %     %    inttostring 
     minute 
  '  %       
     %    s   
  '        %         
     %        
     %     and    
  '     %     %     inttostring 
     second 
  '  %        
     %    s   
  '        %     	      �     gettimestring        getbottomlineofwindow   '   %     Playback stopped.   
              	         %     stringstripallblanks    '      %     |     ����  stringsegment      	      