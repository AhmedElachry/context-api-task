import { Panel } from "./Panel";
import { Button } from "./Button";
export function Form({ children }) {
  return (
    <Panel title="Welcome to our app">
      <Button>Sign up</Button>
      <Button>Log in</Button>
    </Panel>
  );
}
