import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';
import { useState } from 'react';

function ModalConnexion() {
  const [openModal, setOpenModal] = useState(false);
  const [pseudo, setPseudo] = useState('');

  function onCloseModal() {
    setOpenModal(false);
    setEmail('');
  }

  return (
    <>
      <Button onClick={() => setOpenModal(true)}>Connexion</Button>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Connecte toi</h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="Pseudo" value="Pseudo" />
              </div>
              <TextInput
                id="Pseudo"
                placeholder="Ton pseudo"
                value={pseudo}
                onChange={(event) => setPseudo(event.target.value)}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password" value="Mot de passe" />
              </div>
              <TextInput id="password" type="password" required />
            </div>
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember">Se souvenir de moi</Label>
              </div>
              <a href="#" className="text-sm text-cyan-700 hover:underline dark:text-cyan-500">
                Mot de passe oublié ?
              </a>
            </div>
            <div className="w-full">
              <Button>Log in to your account</Button>
            </div>
            <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
              Tu n'as pas de compte ?&nbsp;
              <a href="#" className="text-cyan-700 hover:underline dark:text-cyan-500">
                Inscription
              </a>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalConnexion