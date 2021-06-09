import React from 'react'
import { Dropdown, Menu , Image} from 'semantic-ui-react'

export default function Signedin({signOut}) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="https://avatars.githubusercontent.com/u/53774762?v=4"></Image>
                <Dropdown pointing="top left" text="Gülistan">
                    <Dropdown.Menu>
                        <Dropdown.Item text="Bilgilerim" icon="info"/>

                        <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out"/>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}
