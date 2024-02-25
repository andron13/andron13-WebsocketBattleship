```
  Player1               Server                  Player2             
    reg         -->                    
                <--        reg     
                <--    update_room    
                <--   update_winners  
 create_room    -->
                <--    update_room    
                                      <--         reg
                           reg        -->
                <--    update_room    -->
                <--   update_winners  -->                       
                                      <--    add_user_to_room
                <--    update_room    -->
                <--    create_game    -->
   add_ships    -->
                                      <--       add_ships
                <--     start_game    -->  
                <--        turn       -->  
 attack (miss)  -->
                <--       attack      -->  
                <--        turn       -->
                                      <--     randomAttack (shoot)
                <--       attack      -->  
                <--        turn       -->
                                      <--     randomAttack (kill) - send state for all cells around killed ship
                <--       attack      -->  
                <--        turn       -->
                <--       attack      -->  
                <--        turn       -->                
                <--       attack      -->  
                <--        turn       -->
                <--       attack      -->  
                <--        turn       -->
                           ...          
                                      <--     randomAttack (miss)
                <--       attack      -->  
                <--        turn       -->    
 attack (miss)  -->
                <--       attack      -->  
                <--        turn       -->
                           ...                            
                <--      finish       -->
                <--   update_winners  -->
```
