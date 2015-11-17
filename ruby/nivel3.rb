
class Player
  def play_turn(warrior)
    # cool code goes here
    vacio=warrior.feel
    vida=warrior.health
    
    if(vacio.empty?)
      if(vida<20)
        warrior.rest!
      else
        warrior.walk!
      end
  else
    warrior.attack!
    end
  end
end