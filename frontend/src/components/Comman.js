import React from 'react';

import { Nav ,Button} from 'react-bootstrap';



function Comman() {
    return (
        <>
            <div className='container'>
                {/* new code here */}
                <Nav variant="outline-light" defaultActiveKey="/">
                    <Nav.Item>
                        <Nav.Link href="/table"><Button variant="outline-secondary lm-0 rm-0">Table</Button></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/card"><Button variant="outline-secondary lm-0 rm-0">Card</Button></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/es6-basics"><Button variant="outline-secondary lm-0 rm-0">ES6 Basics</Button></Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
            
        </>
    );
}

export default Comman;


