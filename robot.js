async function main(tank) {
  let range = 0
  let x = 0
  let posX = await tank.getX();
  let posY = await tank.getY();
  console.log(posX, posY)
  if (posX == 628 && posY == 833) x = 225;
  if (posX == 628 && posY == 167) x = 45;
  if (posX == 294 && posY == 500) x = 315;
  if (posX == 961 && posY == 500) x = 135;

	while (true) {
		if (await tank.scan(x, 10) !== 0 ) {
			x += 5 - Number(await tank.scan(x - 5, 5) !== 0) * 10;
			if ((range = await tank.scan(x, 10)) > 20) {
				await tank.shoot(x, range + 5)
				if (range > 200) await tank.drive(x, 50)
        else {
          if (await tank.getX() > 150 && await tank.getX() < 1150  && await tank.getY() > 150 && await tank.getY() < 850) 
            await tank.drive(180 - x, 0);
          else {
            if (await tank.getX()<=150){
              await tank.drive(0, 100); 
              while (await tank.getX()<=150);             
              await tank.drive(0, 0);
            }
            if (await tank.getX() >= 1150){
              await tank.drive(180, 100);
              while (await tank.getX() >= 1150);
              await tank.drive(0, 0);
            }
            if (await tank.getY() <= 150){
              await tank.drive(90, 100);
              while (await tank.getY() <=150);              
              await tank.drive(0, 0);
            }
            if (await tank.getY() >= 850){ 
              await tank.drive(270, 100);
              while (await tank.getY() >= 850);
              await tank.drive(0, 0);
            }
          }
        }
			}
      x -= 20
		} else {
      x += 20
      if (await tank.getX()<=150){
        await tank.drive(0, 100); 
        while (await tank.getX()<=150);             
        await tank.drive(0, 0);
      }
      if (await tank.getX() >= 1150){
        await tank.drive(180, 100);
        while (await tank.getX() >= 1150);
        await tank.drive(0, 0);
      }
      if (await tank.getY() <= 150){
        await tank.drive(90, 100);
        while (await tank.getY() <=150);              
        await tank.drive(0, 0);
      }
      if (await tank.getY() >= 850){ 
        await tank.drive(270, 100);
        while (await tank.getY() >= 850);
        await tank.drive(0, 0);
      }
		}
	}
}