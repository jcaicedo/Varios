class Player
  def play_turn(warrior)
    # cool code goes here
    warrior.walk!
  end
end

class Player
  def play_turn(warrior)
    # cool code goes here
    vacio=warrior.feel
    
    if(vacio.empty?)
      warrior.walk!
    else
      warrior.attack!
    end
  end
end




se hace un cambio
#importa media