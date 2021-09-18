import React from 'react'
import { Wrapper, Card, CardWrapper, Form } from './styles'

const MainDiv = () => {
  return (
    <Wrapper>
      <CardWrapper>
        <Card>
          Mathematics
          {/* <Button>Add+</Button> */}
        </Card>
        <Card>
          Science
          {/* <Button>Add+</Button> */}
        </Card>
        <Card>
          English
          {/* <Button>Add+</Button> */}
        </Card>
        <Card>
          English
          {/* <Button>Add+</Button> */}
        </Card>
        <Card>
          English
          {/* <Button>Add+</Button> */}
        </Card>
        <Card>
          English
          {/* <Button>Add+</Button> */}
        </Card>
      </CardWrapper>
      <Form>
        <form>
          <label>Add+</label>
          <br />
          <input type="text" name="add" />
        </form>
      </Form>
    </Wrapper>
  )
}

export default MainDiv
