import { Button } from 'flowbite-react';
import ModalConnexion from './ModalConnexion'

function Header () {
return <div className="bg-gray-700 flex justify-end">
     <Button color="dark">Inscription</Button>
     <ModalConnexion/>
     
</div>
}

export default Header